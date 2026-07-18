export interface JsonContent {
    title: string;
    content: string;
    type: 'string' | 'list';
}
export interface AboutJson {
    location: 'ita' | 'eng',
    data: JsonContent[],
}