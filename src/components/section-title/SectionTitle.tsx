export interface SectionTitleProps {
    title: string;
    subtitle: string;
}
const SectionTitle = ({title, subtitle}: SectionTitleProps) => {
    return (
        <div className="w-full">
            <p className="text-accent font-code text-sm">{title}</p>
            <p className="font-heading text-3xl md:text-6xl mb-6">{subtitle}</p>
        </div>
    )
}
export default SectionTitle;