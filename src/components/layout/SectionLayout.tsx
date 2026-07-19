import './SectionLayout.css';

export type SectionLayoutProps = {
    children: React.ReactNode;
    className?: string;
}
const SectionLayout = ({children, className = ""}: SectionLayoutProps) => {
    return (
        <section className={`
            flex
            w-full
            min-h-screen
            justify-center
            items-start
            py-24
            px-6
            md:px-12
            lg:px-24
            lg:items-center
            border-b
            border-line
        ${className}
        `}>
            {children}
        </section>
    )
}
export default SectionLayout;