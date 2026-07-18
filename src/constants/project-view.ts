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
                tech: [
                    'Java 8/21', 'Spring Boot 3/4',
                    'OracleDB', 'PostgreSql', 'MongoDB',
                    'Kubernetes', 'Docker', 'Angular',
                    'Module Federation'
                ]
            },
        ]
    },

]