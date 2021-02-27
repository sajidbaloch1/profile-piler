<style>
    .profile-item {
        display: flex;
    }

    .profile-item>.logo {
        flex-grow: 1;
    }

    .profile-item>.details {
        flex-grow: 10;
    }

    .profile-item>.action-section {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .profile-item>.details {
        display: flex;
        flex-direction: column;
    }

    .profile-item>.details>.stats {
        display: flex;
    }

    .profile-item>.details>.stats>.stats-item {
        font-weight: bolder;
        padding-right: 20px;
        border-right: 2px solid gainsboro;
        margin-left: 14px
    }

    .profile-item>.details>.stats>.stats-item:first-child {
        margin-left: 0;
    }

    .profile-item>.details>.stats>.stats-item:last-child {
        border-right: none;
    }

    .profile-item>.details>.stats>.stats-item span {
        color: gainsboro;
        font-weight: normal;
        display: inline-block;
        padding: 0 14px;
    }

    .profile-item .social-entity a {
        color: #6f42c1 !important;
    }

    .profile-item>.action-section {
        font-size: 28px;
    }

    .action-section>.mov-btns {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        color: gainsboro;
    }

    .action-section>.mov-btns i {
        cursor: pointer;
    }

    .action-section>.mov-btns i:hover {
        color: #6f42c1;
    }

</style>

<div class="card">
    <div class="card-body">
        <div class="profile-item">
            <div class="logo">
                <img src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg" alt="">
            </div>
            <div class="details">
                <h1>Instagram</h1>
                <div class="stats">
                    <div class="stats-item">
                        351.2M
                        <span>Followers </span>
                    </div>
                    <div class="stats-item">
                        351.2M
                        <span>Followers </span>
                    </div>
                    <div class="stats-item">
                        351.2M
                        <span>Followers </span>
                    </div>

                </div>
                <div class="social-entity">
                    <a href="#"><i class="fa-youtube fab"></i></a>
                    <a href="#"><i class="fa-facebook fab "></i></a>
                    <a href="#"><i class="fa-twitter fab"></i></a>
                </div>
                <h3>Description</h3>
                <div class="description">
                    Bringing you closer to the people and things you love. ❤️
                </div>
            </div>
            <div class="action-section">
                <div class="platform-logo">
                    <i class="fa-instagram fab float-right icon-circle"></i>
                </div>
                <div class="mov-btns">
                    <i class="fa fa-arrow-up" title="move up in the list"></i>
                    <i class="fa fa-arrow-down" title="move down in the list"></i>

                    <i class="fa fa-circle" title="Select Profile"></i>
                </div>
            </div>
        </div>
    </div>
</div>
