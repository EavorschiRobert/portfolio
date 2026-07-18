import {createContext, useContext, useState} from "react";
import type { ReactNode } from "react";

type LanguageContextType = {
    language: 'ita' | 'eng'
    setLanguage: React.Dispatch<React.SetStateAction<'ita' | 'eng'>>;
};


const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export interface LanguageContextProps {
    children: ReactNode;
}
export function LanguageProvider({children}: LanguageContextProps) {
    const [language, setLanguage] = useState<'ita' | 'eng'>('ita');
    return (
        <LanguageContext.Provider
        value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage deve essere usato dentro LanguageProvider"
        );
    }

    return context;
}