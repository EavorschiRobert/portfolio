import type {ProjectLanguageView} from "../types/project-view.type.ts";

export const projectView: ProjectLanguageView[] = [
    {
        location: 'ita',
        data: [
            {
                type: 'pro',
                title: 'Roma Capitale - Economic Resources Department',
                shortDescription: 'Modernizzazione di applicazioni monolitiche legacy Java per il DRE: upgrade a Spring Boot e migrazione verso Kubernetes in cloud.',
                description: 'Modernizzazione completa di applicazioni monolitiche legacy Java per il DRE di Roma Capitale: aggiornamento all\'ultima versione di Java, adozione di Spring Boot e migrazione verso un\'architettura a microservizi su Kubernetes in ambiente cloud, con focus su performance, scalabilità e manutenibilità.\n' +
                    '\n' +
                    'Presidio le scelte architetturali principali, bilanciando l\'evoluzione dei sistemi legacy con l\'adozione di tecnologie attuali, e coordinamento dela gestione delle criticità e degli interventi evolutivi sui sistemi esistenti.',
                activities: [
                    'Ruolo: Sviluppatore backend, Tech Lead e decision maker tecnico'
                ],
                client: 'Roma Capitale',
                fromDate: 'Jun 2024',
                toDate: 'Jul 2024',
                tech: [
                    'Java 8/21', 'Spring Boot 3/4',
                    'OracleDB', 'PostgreSql', 'MongoDB',
                    'Kubernetes', 'Docker', 'Angular',
                    'Module Federation'
                ]
            },
            {
                type: 'pro',
                title: "SOGEI - Ministero dell'Economia e delle Finanze",
                shortDescription: 'Realizzazione di un portale di back-office ad utilizzo interno in React',
                description: 'Realizzazione di un portale di back-office ad utilizzo interno in React',
                activities: [
                    'Ruolo: Sviluppatore frontend, sviluppo in React',
                    'Ruolo: Sviluppatore backend, sviluppo in Quarkus'
                ],
                client: 'SOGEI',
                fromDate: 'Dec 2023',
                toDate: 'Jul 2024',
                tech: [
                    'Java 21', 'Quarkus',
                    'OracleDB', 'React'
                ]
            },
        ]
    },
    {
        location: 'eng',
        data: [
            {
                type: 'pro',
                title: 'Roma Capitale - Economic Resources Department',
                shortDescription: 'Modernization of monolithic legacy Java applications for the ERD: upgrate to Spring Boot and migration to Kubernetes in the cloud',
                description: 'Complete modernization of monolithic legacy Java applications for the Economic Resources Department of Roma Capitale: upgrading to the latest Java version, adopting Spring Boot and migrating to a microservice architecture on Kubernetes in a cloud environment, with a focus on performance, scalability and maintainability.\n' +
                    '\n' +
                    'I own the main architectural choices, balancing the evolution of legacy systems with the adoption of current technologies, and I coordinate the management of critical issues and evolutionary changes on existing systems.',
                activities: [
                    'Role: backend developer, Tech Lead and technical decision maker'
                ],
                client: 'Roma Capitale',
                fromDate: 'Jun 2024',
                toDate: 'Jul 2024',
                tech: [
                    'Java 8/21', 'Spring Boot 3/4',
                    'OracleDB', 'PostgreSql', 'MongoDB',
                    'Kubernetes', 'Docker', 'Angular',
                    'Module Federation'
                ]
            },
            {
                type: 'pro',
                title: "SOGEI - Ministry of Economy and Finance",
                shortDescription: 'Development of an internal back-office portal in React',
                description: 'Development of an internal back-office portal in React',
                activities: [
                    'Role: Frontend developer, working with React',
                    'Role: Backend developer, working with Quarkus',
                ],
                client: 'SOGEI',
                fromDate: 'Dec 2023',
                toDate: 'Jul 2024',
                tech: [
                    'Java 21', 'Quarkus',
                    'OracleDB', 'React'
                ]
            },
        ]
    },
]