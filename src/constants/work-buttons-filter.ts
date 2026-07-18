import type {WorkButtonFilter} from "../types/work-button-filter.type.ts";

export const workButtonsFilter: WorkButtonFilter[] = [
    {
        location: 'ita',
        data: [
            {
                title: 'Tutti',
                filter: 'all'
            },
            {
                title: 'Professionali',
                filter: 'pro'
            },
            {
                title: 'Personali',
                filter: 'personal'
            }
        ]

    },
    {
        location: 'eng',
        data: [
            {
                title: 'All',
                filter: 'all'
            },
            {
                title: 'Professional',
                filter: 'pro'
            },
            {
                title: 'Personal',
                filter: 'personal'
            }
        ]

    }
]