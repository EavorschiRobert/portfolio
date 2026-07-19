import {useLanguage} from "../../context/language-context.tsx";

export interface SectionTitleProps {
    itaTitle: string;
    engTitle: string;
    subtitle: string;
}
const SectionTitle = ({itaTitle, engTitle, subtitle}: SectionTitleProps) => {
    const {language} = useLanguage();
    return (
        <div className="w-full">
            {language === 'ita'
                ? (
                    <p className="text-accent font-code text-sm">{itaTitle}</p>
                )
                : (
                    <p className="text-accent font-code text-sm">{engTitle}</p>
                )}

            <p className="font-heading text-3xl md:text-6xl mb-6">{subtitle}</p>
        </div>
    )
}
export default SectionTitle;