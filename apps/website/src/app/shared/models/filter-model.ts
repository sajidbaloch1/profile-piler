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
  pageNo?: number;
}

export function initFilters(): ListPageFilterModel {
  return {
    q: null,
    platforms: null,
    isVerified: null,
    isFamilySafe: null,
    location: null,
    category: null,
    profession: null,
    company: null,
    education: null,
    sort: 'followers',
    pageNo: null,
  };
}
