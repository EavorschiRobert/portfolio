export type SectionProps = {
    id: string;
    index: string;
    italianTitle: string;
    englishTitle: string;
    animation?: {
        directionX?: 'left' | 'right',
        directionY?: 'up' | 'down',
        type?: 'spring',
        ease?: 'linear' | 'easeInOut' | 'easeOut' | 'easeIn',
    }
}