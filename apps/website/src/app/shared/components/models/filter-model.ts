export interface ListPageFilterModel {
    q?: string;
    platforms?: string;
    isVerified?: string;
    isFamilySafe?: string;
    location?: string;
    category?: string;
    profession?: string;
    company?: string;
    education?: string;
    sort?: string;
    pageNo?: number
}

export function initFilters(): ListPageFilterModel {
    return {
        q: '',
        platforms: '',
        isVerified: '',
        location: '',
        isFamilySafe: '',
        category: '',
        profession: '',
        company: '',
        education: '',
        sort: 'followers',
        pageNo: undefined,
    }
}