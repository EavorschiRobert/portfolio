export interface Education {
    title: string;
    fromDate?: string;
    toDate?: string;
    subtitle: string;
    description: string;
}
export interface EducationLanguageView {
    location: 'ita' | 'eng';
    data: Education[];
}