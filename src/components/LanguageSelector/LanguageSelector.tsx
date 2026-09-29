import { useTranslation } from "react-i18next";
import styles from './LanguageSelector.module.css'

const languages = [
    {code: 'en', label: 'EN'},
    {code: 'ru', label: 'RU'},
    {code: 'lt', label: 'LT'}
]

export function LanguageSwitcher () {

    const { i18n } = useTranslation();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value)
    } 

    return(
        <select className={styles.selector} value={i18n.language} onChange={handleChange}>
            {languages.map((language) => (
                <option className={styles.selectorItem} key={language.code} value={language.code}>
                    {language.label}
                </option>
            ))}
        </select>
    );
}

export default LanguageSwitcher