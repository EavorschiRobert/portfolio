import type {EducationLanguageView} from "../types/education.type.ts";

export const education: EducationLanguageView[] = [
    {
        location: 'ita',
        data: [
            {
                title: 'Laurea triennale in Economia e Management',
                fromDate: '2016',
                toDate: '2020',
                subtitle: 'Università di Tor Vergata',
                description: 'Percorso formativo incentrato sulla gestione aziendale'
            },
            {
                title: 'Corso Java Full-Stack',
                fromDate: 'Ott 2023',
                toDate: 'Dic 2023',
                subtitle: 'Openjob Mentis',
                description: 'Corso intensivo con taglio pratico sullo sviluppo' +
                    'full-stack: applicazioni Java/Spring lato backend e' +
                    'Angular lato frontend, con esercitazioni progettuali su Maven, Tomcat e MySQL.'
            }
        ]
    },
    {
        location: 'eng',
        data: [
            {
                title: 'Bachelor\'s degree in Economics and Management',
                fromDate: '2016',
                toDate: '2020',
                subtitle: 'Tor Vergata\'s University',
                description: 'Training program focused on business management'
            },
            {
                title: 'Java Full-Stack Course',
                fromDate: 'Oct 2023',
                toDate: 'Dec 2023',
                subtitle: 'Openjob Mentis',
                description: 'Intensive course with a practical focus on full-stack' +
                    'development: Java/Spring applications on the backend and' +
                    'Angular on the frontend, with project exercises on Maven, Tomcat and MySQL.'
            }
        ]
    }
]