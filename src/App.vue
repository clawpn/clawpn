<template>
    <div class="bg-glow"></div>
    
    <nav class="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/5">
        <div class="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <router-link to="/" class="font-game text-m text-white hover:text-accent transition-colors">CLAWPN</router-link>
        <div class="text-xs font-bold flex items-center bg-white/5 rounded-lg p-1 border border-white/10">
            <button @click="setLang('ru')" :class="btnClass(currentLang === 'ru')">RU</button>
            <button @click="setLang('en')" :class="btnClass(currentLang === 'en')">EN</button>
        </div>
        </div>
    </nav>

    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
        <component :is="Component" />
        </transition>
    </router-view>

    <footer class="border-t border-white/5 bg-black/20 backdrop-blur-md mt-20">
        <div class="max-w-6xl mx-auto px-6 py-12 text-center md:text-left">
        <div class="font-game text-[10px] text-gray-600 uppercase tracking-widest">© 2026 CLAWPN NETWORK</div>
        </div>
    </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const currentLang = locale;

const setLang = (lang) => {
    locale.value = lang;
    localStorage.setItem('lang', lang);
};

const btnClass = (active) => 
    `px-3 py-1.5 rounded transition-all ${active ? 'bg-white/20 text-white' : 'text-white/50 hover:bg-white/10'}`;
</script>

<style>
.bg-glow {
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
    z-index: -1;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>