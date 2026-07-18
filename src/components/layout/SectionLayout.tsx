import './SectionLayout.css';

export type SectionLayoutProps = {
    children: React.ReactNode;
    className?: string;
}
const SectionLayout = ({children, className = ""}: SectionLayoutProps) => {
    return (
        <div className={`
        flex
        w-full
        h-full
        justify-center
        items-center
        px-24
        layout-section
        border-b
        border-line
        ${className}
        `}>
            {children}
        </div>
    )
}
export default SectionLayout;