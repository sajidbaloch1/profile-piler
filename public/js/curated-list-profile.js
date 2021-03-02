const searchProfiles = async function (params) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "/api/profiles",
            data: params,
            success: resolve,
            error: reject,
        });
    });
};

const listId = window.location.pathname.split("/")[2];

const updateProfiles = async function (profiles) {
    return new Promise((resolve, reject) => {
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            type: "post",
            url: `/curated-lists/${listId}/profiles`,
            data: { selectedProfiles: profiles },
            success: resolve,
            error: reject,
        });
    });
};

Vue.component("profile-item", {
    props: ["profile", "mode"],
    data: {},
    template: $("#profile-component-tpl").html(),
});

var app = new Vue({
    el: "#curated-list-profile",
    data: {
        filters: {
            q: "karachi",
        },
        loading: false,
        updating: false,
        searchedProfiles: [],
        selectedProfiles: [],
    },
    methods: {
        async updateProfile() {
            this.updating = true;
            await updateProfiles(this.selectedProfiles);
            this.updating = false;
        },
        async searchProfiles() {
            this.loading = true;
            try {
                const response = await searchProfiles(this.filters);
                if (response.profiles) {
                    this.searchedProfiles = response.profiles;
                }
            } catch {
                alert("Something went wrong, please try again!");
            }
            this.loading = false;
        },
        clearSearch() {
            this.searchedProfiles = [];
        },
        removeProfile(profile, list) {
            const profileId = list.findIndex((p) => {
                return profile.Id === p.Id;
            });
            list.splice(profileId, 1);
        },
        selectProfile(profile) {
            const profileId = this.searchedProfiles.findIndex((p) => {
                return profile.Id === p.Id;
            });

            this.searchedProfiles.splice(profileId, 1);

            // already selected
            if (
                this.selectedProfiles.findIndex((p) => p.Id === profile.Id) !==
                -1
            ) {
                return;
            }
            this.selectedProfiles.push(profile);
        },
    },
});

async function loadProfiles() {
    $.ajax({
        url: `/curated-lists/${listId}/get-profiles`,
        success: function (profiles) {
            app.selectedProfiles = profiles;
        },
        error: function () {},
    });
}

loadProfiles();
