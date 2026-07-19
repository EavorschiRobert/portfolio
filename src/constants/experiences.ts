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
                        description: 'Guido tecnicamente un team variabile di sviluppatori su stream di sviluppo paralleli, presidiando scelte architetturali e standard di qualità dalla progettazione alla delivery'
                    },
                    {
                        title: 'Full Stack Developer',
                        fromDate: 'Dic 2023',
                        toDate: 'Giu 2024',
                        description: 'Realizzazione portale React con microservizio backend in Quarkus'
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
                        description: 'I provide technical leadership to a variable team of developers across' +
                            'parallel development streams, owning architectural choices and quality standards' +
                            'from design to delivery,'
                    },
                    {
                        title: 'Full Stack Developer',
                        fromDate: 'Dec 2023',
                        toDate: 'Jun 2024',
                        description: 'Building a React portal with a Quarkus backend microservice'
                    }
                ]
            }
        ]
    }
]