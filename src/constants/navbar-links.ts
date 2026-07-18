import type {NavbarLinks} from "../types/navbar-links.type.ts";

export const navbarLinks: NavbarLinks[] = [
    {
        location: 'ita',
        data: [
            {
                title: 'about',
                url: '#about',
            },
            {
                title: 'skills',
                url: '#skills',
            },
            {
                title: 'istruzione',
                url: '#education',
            },
            {
                title: 'progetti',
                url: '#progetti',
            },
            {
                title: 'esperienza',
                url: '#esperienza',
            }
        ]
    },
    {
        location: 'eng',
        data: [
            {
                title: 'about',
                url: '#about',
            },
            {
                title: 'skills',
                url: '#skills',
            },
            {
                title: 'education',
                url: '#education',
            },
            {
                title: 'projects',
                url: '#progetti',
            },
            {
                title: 'experience',
                url: '#esperienza',
            }
        ]
    }
]