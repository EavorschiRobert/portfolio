export interface ProjectViewType {
    title: string;
    type: 'pro' | 'personal';
    shortDescription: string;
    description: string;
    activities: string[];
    tech: string[];
    fromDate?: string;
    toDate?: string;
    client?: string;
}
export interface ProjectLanguageView {
    location: 'ita' | 'eng';
    data: ProjectViewType[];
}