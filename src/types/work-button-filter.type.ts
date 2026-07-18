export interface Filter {
    title: string;
    filter: 'all' | 'pro' | 'personal';
}
export type WorkButtonFilter = {
    location: 'ita' | 'eng',
    data: Filter[],
}