export interface NavbarLink {
    title: string;
    url: string;
}
export type NavbarLinks = {
    location: 'ita' | 'eng',
    data: NavbarLink[],
}