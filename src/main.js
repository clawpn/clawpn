import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import './assets/main.css'

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'ru',
    messages: {
        ru: {
        hero: { title: "Спи спокойно", subtitle: "не беспокоясь о блокировках", cta: "Попробовать бесплатно", pricing_info: "7 дней бесплатно, затем всего 100₽ в месяц" },
        features: { 
            speed: { title: "Высокая скорость", desc: "Стабильное соединение до 1 Гбит/с для любых задач" },
            privacy: { title: "Анонимность", desc: "Мы не храним логи и шифруем трафик" },
            devices: { title: "Любая платформа", desc: "Работает на iOS, Android, Windows и macOS" }
        },
        agreement: { title: "Условия и Конфиденциальность", date: "Дата: 05.12.2025", back: "← На главную" }
        },
        en: {
        hero: { title: "Sleep soundly", subtitle: "without worrying about blocks", cta: "Try for Free", pricing_info: "7 days free trial, then only 1€ per month" },
        features: { 
            speed: { title: "High Speed", desc: "Stable connection up to 1 Gbps" },
            privacy: { title: "Privacy First", desc: "We don't keep logs" },
            devices: { title: "Any platform", desc: "Works everywhere" }
        },
        agreement: { title: "Terms & Privacy Policy", date: "Date: 2025-12-05", back: "← Back Home" }
        }
    }
})

const app = createApp(App)
app.use(router).use(i18n).mount('#app')