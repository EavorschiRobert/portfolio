export interface Experience {
    title: string;
    fromDate?: string;
    toDate?: string;
    imageUrl?: string;
    tech: string[];
    steps: {
        title: string;
        fromDate: string;
        toDate: string;
        description: string;
    }[]
}
export interface ExperienceLanguageView {
    location: 'ita' | 'eng';
    data: Experience[];
}