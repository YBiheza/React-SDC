import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { 
                translation: {
                    footer: {
                        home: 'Home',
                        order: 'Order',
                        FAQ: 'FAQ',
                        contact: 'Contacts',
                        styleGuide: 'Style',
                        changelog: 'Changelog',
                        licence: 'Licence',
                        university: 'Webflow University',
                        moreCloneables: 'More Cloneables',
                        template: 'Takeaway & Delivery template',
                        forBusiness: 'for small - medium businesses.',
                        buildBy: 'Built by <flowbase>Flowbase</flowbase> · Powered by <webflow>Webflow</webflow>',
                    },
                    header: {
                        themeToggle: 'Switch theme',
                        home: "Home",
                        menu: 'Menu',
                        company: 'Company',
                        login: 'Login'
                    },
                    hero: {
                        leadText: 'Beautiful food & takeaway, <delivery>delivered</delivery> to your door.',
                        loremIpsum: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
                        orderButton: 'Place an Order',
                        ratingText: '<trustpilot>4.8 out of 5 </trustpilot> based on 2000+ reviews'

                    }
                }
            },
            ru: { 
                translation: {
                    footer: {
                        home: 'На главную',
                        order: 'Заказать',
                        FAQ: 'FAQ',
                        contact: 'Контакты',
                        styleGuide: 'Гид по стилю',
                        changelog: 'История изменений',
                        licence: 'Лицензия',
                        university: 'Университет Webflow',
                        moreCloneables: 'Другие шаблоны',
                        template: 'Шаблон для самовывоза и доставки',
                        forBusiness: 'Большому и среднему бизнесу',
                        buildBy: 'Основан на <flowbase>Flowbase</flowbase> · Работает на <webflow>Webflow</webflow>',
                    },
                    header: {
                        themeToggle: 'Сменить тему',
                        home: "На главную",
                        menu: 'Меню',
                        company: 'О компании',
                        login: 'Войти'
                    },
                    hero: {
                        leadText: 'Вкусная еда с собой и навынос <delivery>с доставкой</delivery> прямо к двери!',
                        loremIpsum: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
                        orderButton: 'Сделать заказ',
                        ratingText: '<trustpilot>4.8 из 5 </trustpilot> основано на 2000+ отзывов!'

                    }
                }
            },
            lt: { 
                translation: {
                    footer: {
                        home: 'Į pagrindinį',
                        order: 'Pateikti užsakymą',
                        FAQ: 'FAQ',
                        contact: 'Sąlytis',
                        styleGuide: 'Stiliaus Vadovas',
                        changelog: 'Pakeitimų žurnalas',
                        licence: 'Licencija',
                        university: 'Universitetas Webflow',
                        moreCloneables: 'Kiti šablonai',
                        template: 'Savikontrolės ir pristatymo šablonas',
                        forBusiness: 'Dideliam ir vidutiniam verslui',
                        buildBy: 'Remiantis <flowbase>Flowbase</flowbase> · Dirba su <webflow>Webflow</webflow>',
                    },
                    header: {
                        themeToggle: 'Keisti temą',
                        home: "Į pagrindinį",
                        menu: 'Valgiaraštis',
                        company: 'Apie įmonę',
                        login: 'Prisijungti'
                    },
                    hero: {
                        leadText: 'Skanus maistas su savimi ir įgūdžiai <delivery>pristatant</delivery> tiesiai į duris.',
                        loremIpsum: "Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. pradžios. Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo raides atspaudų prese ir tokiu būdu sukūrė raidžių egzempliorių.",
                        orderButton: 'Pateikti užsakymą',
                        ratingText: '<trustpilot>4.8 iš 5 </trustpilot> remiantis 2000 + atsiliepimai.'
                    },
                }
            }
        },
        fallbackLng: 'en',
    });

export default i18n;