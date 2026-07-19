import type {ExperienceLanguageView} from "../types/experience.type.ts";

export const experiences: ExperienceLanguageView[] = [
    {
        location: 'ita',
        data: [
            {
                title: 'Sistemi Informativi',
                fromDate: 'Dic 2023',
                toDate: 'Presente',
                imageUrl: 'sistemi.jpeg',
                tech: [
                    'Java 8/21', 'Spring Boot 3/4',
                    'OracleDB', 'PostgreSQL', 'MongoDB',
                    'Docker', 'Kubernetes',
                    'Angular', 'Module Federation',
                    'Leadership'
                ],
                steps: [
                    {
                        title: 'Tech Lead',
                        fromDate: 'Giu 2024',
                        toDate: 'Presente',
                        shortDescription: 'Guido tecnicamente un team variabile di sviluppatori su stream di sviluppo paralleli, presidiando scelte architetturali e standard di qualità dalla progettazione alla delivery',
                        description: [
                            'Ho ricoperto il ruolo di Tech Lead nella progettazione e realizzazione di una piattaforma di backoffice enterprise basata su un\'architettura a microservizi, integrata con numerosi sistemi esterni e composta internamente da oltre dieci servizi tra frontend e backend.',
                            'Sono stato responsabile della definizione del disegno tecnico dell\'intera soluzione, progettando l\'architettura applicativa, i microservizi backend in Spring Boot e i microfrontend Angular basati su Module Federation, con l\'obiettivo di realizzare una piattaforma modulare, scalabile e facilmente manutenibile.',
                            'Ho collaborato alla progettazione dello schema dati PostgreSQL e alla definizione dei flussi di integrazione tra i diversi servizi, garantendo la coerenza dell\'architettura e l\'affidabilità delle comunicazioni tra i sistemi coinvolti.',
                            'Oltre alle attività di progettazione e sviluppo, ho coordinato un team di 15 sviluppatori, occupandomi della pianificazione delle attività, della suddivisione del lavoro e del supporto tecnico quotidiano, assicurando il rispetto delle milestone progettuali e la consegna del prodotto entro le scadenze previste.',
                            'Mi sono inoltre occupato degli aspetti di DevOps, definendo i manifest di deployment per Kubernetes e configurando le pipeline di integrazione e rilascio continuo, contribuendo all\'automazione del processo di deploy e alla standardizzazione delle procedure di rilascio.'
                        ]
                    },
                    {
                        title: 'Full Stack Developer',
                        fromDate: 'Dic 2023',
                        toDate: 'Giu 2024',
                        shortDescription: 'Ho partecipato allo sviluppo di un portale di backoffice destinato agli operatori aziendali realizzato in React e Quarkus',
                        description: [
                            'Ho partecipato allo sviluppo di un portale di backoffice destinato agli operatori aziendali, progettato per centralizzare e semplificare le attività di gestione quotidiana attraverso un\'interfaccia moderna e intuitiva.',
                            'Mi sono occupato dello sviluppo full stack dell\'applicazione, realizzando il frontend in React.js e il backend in Quarkus, contribuendo alla progettazione delle API REST e all\'implementazione delle principali funzionalità della piattaforma.',
                            'Il progetto è stato sviluppato con particolare attenzione alla manutenibilità del codice, alla modularità dell\'architettura e all\'esperienza d\'uso degli operatori, garantendo prestazioni elevate e una navigazione fluida anche in presenza di flussi operativi complessi.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        location: 'eng',
        data: [
            {
                title: 'Sistemi Informativi',
                fromDate: 'Dec 2023',
                toDate: 'Present',
                imageUrl: 'src/assets/sistemi.jpeg',
                tech: [
                    'Java 8/21', 'Spring Boot 3/4',
                    'OracleDB', 'PostgreSQL', 'MongoDB',
                    'Docker', 'Kubernetes',
                    'Angular', 'Module Federation',
                    'Leadership'
                ],
                steps: [
                    {
                        title: 'Tech Lead',
                        fromDate: 'Jun 2024',
                        toDate: 'Present',
                        shortDescription: 'I provide technical leadership to a variable team of developers across' +
                            'parallel development streams, owning architectural choices and quality standards' +
                            'from design to delivery,',
                        description: [
                            'I took on the role of Tech Lead in designing and building an enterprise backoffice platform based on a microservices architecture, integrated with numerous external systems and internally made up of over ten services across frontend and backend.',
                            'I was responsible for defining the technical design of the entire solution, designing the application architecture, the backend microservices in Spring Boot, and the Angular microfrontends based on Module Federation, with the goal of creating a modular, scalable, and easily maintainable platform.',
                            'I worked on designing the PostgreSQL data schema and defining the integration flows between the different services, ensuring the consistency of the architecture and the reliability of communications between the systems involved.',
                            'Besides design and development activities, I coordinated a team of 15 developers, taking care of planning tasks, dividing the work, and providing daily technical support, making sure project milestones were met and the product was delivered on schedule.',
                            'I also took care of the DevOps aspects, defining deployment manifests for Kubernetes and setting up the continuous integration and release pipelines, helping automate the deployment process and standardize release procedures.'
                        ],
                    },
                    {
                        title: 'Full Stack Developer',
                        fromDate: 'Dec 2023',
                        toDate: 'Jun 2024',
                        shortDescription: 'Building a React portal with a Quarkus backend microservice',
                        description: [
                            'I took part in developing a backoffice portal for company operators, designed to centralize and simplify daily management tasks through a modern and intuitive interface.',
                            'I worked on the full-stack development of the application, building the frontend in React.js and the backend in Quarkus, contributing to the design of the REST APIs and the implementation of the main features of the platform.',
                            'The project was developed with particular attention to code maintainability, the modularity of the architecture, and the user experience for operators, ensuring high performance and smooth navigation even in the presence of complex operational flows.'
                        ],
                    }
                ]
            }
        ]
    }
]