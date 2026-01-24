import { createI18n } from 'vue-i18n';

const messages = {
    ru: {
        hero: {
            title: "Спи спокойно",
            subtitle: "не беспокоясь о блокировках",
            cta: "Попробовать бесплатно",
            pricing_info: "7 дней бесплатно, затем всего 100₽ в месяц"
        },
        agreement: {
            title: "Условия и Конфиденциальность",
            sec1_title: "1. ОБЩИЕ ПОЛОЖЕНИЯ",
            sec3_title: "3. ПОЛИТИКА NO-LOGS"
        },
        features: {
            speed: { title: "Высокая скорость", desc: "Стабильное соединение до 1 Гбит/с" },
            privacy: { title: "Анонимность", desc: "Мы не храним логи и шифруем трафик" }
        }
    },
    en: {
        hero: {
            title: "Sleep soundly",
            subtitle: "without worrying about blocks",
            cta: "Try for Free"
        },
        agreement: {
            title: "Terms & Privacy Policy"
        }
    }
};

export const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'ru',
    fallbackLocale: 'en',
    messages,
});