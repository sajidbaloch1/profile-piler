import { PlateFormEnum } from "./models/plateform.enum";

export const topProfileSlug = "top-social-media-profiles-for";
export const topProfileByPlatformSlug = "top-{platform}-{profile-type}-for-";

export function getPlatformName(platform: PlateFormEnum): string {
    let name = (platform as string).toLowerCase();
    switch (platform) {
        case "TT":
            name = "Tiktok";
            break;
        case "YT":
            name = "Youtube";
            break;
        case "IG":
            name = "Instagram";
            break;
    }
    return name
}

export function generateExternalLink(plateform: PlateFormEnum, username: string): string {
    const platform = plateform.toLowerCase();
    let baseUrl = "";
    switch (platform) {
        case "TT":
            baseUrl = "https://www.tiktok.com/@";
            break;

        case "facebook":
            baseUrl = "https://www.facebook.com/";
            break
        case "YT":
        case "youtube":
            baseUrl = "https://www.youtube.com/";
            if (username.length === 24) {
                baseUrl = `${baseUrl}chanel/`;
            } else {
                baseUrl = `${baseUrl}user`;
            }
            break;
        case "twitter":
            baseUrl = "https://twitter.com/";
            break;
        case "ig":
        case "instagram":
            baseUrl = "https://www.instagram.com/";
            break;
        case "travelmassive":
            baseUrl = "https://travelmassive.com/";
            break;
        case "flickr":
            baseUrl = "https://www.flickr.com/photos/";
            break;
        case "pinterest":
            baseUrl = "https://www.pinterest.com/";
            break;
        case "quora":
            baseUrl = "https://www.quora.com/profile/";
            break;
        case "linkedin":
            baseUrl = "https://www.linkedin.com/";
            break;
        case "reddit":
            baseUrl = "https://www.reddit.com/user/";
            break;
        case "tumblr":
            baseUrl = "https://www.quora.com/profile/";
            break;
    }
    return `${baseUrl}${username}`;
}

export const socialPlatformNames = [
    "Facebook",
    "Youtube",
    "Twitter",
    "Instagram",
    "Tiktok",
    "Pinterest",
    "Quora",
    "Linkedin",
    "Flickr",
    "DailyMotion",
    "Tumblr",
    "Vimeo",
    "Reddit",
    "Medium",
    "TravelMassive",
];

export function buildProfilesPageUrl(keyword: string, platform?: string) {
    const urlFriendlyKeyword = keyword.replace(/\W+/g, "-").toLocaleLowerCase();
    if (platform) {
        const slug = topProfileByPlatformSlug
            .replace("{platform-name}", platform)
            .replace("{profile-type}", getProfileTypeByPlatform(platform));
        return `${slug}${urlFriendlyKeyword}`;
    }
    return `${topProfileSlug}${urlFriendlyKeyword}`;
}

export function getProfileTypeByPlatform(platformName: string) {
    switch (platformName) {
        case "facebook":
            return "pages";
        case "youtube":
            return "channels";
        default:
            return "profiles";
    }
}

export function scrollToEl(elementId: string): void {
    if (typeof document === "undefined") return;
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
}
