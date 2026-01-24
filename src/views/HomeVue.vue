<template>
    <main class="max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
        <div class="relative inline-block group reveal active">
        <div class="absolute inset-0 bg-accent/20 blur-[60px] rounded-full group-hover:bg-accent/30 transition-all duration-700"></div>
        <div class="relative w-64 hover-lift mx-auto rounded-3xl">
            <img src="/main.gif" alt="Sleeping Cat" class="mx-auto rounded-3xl shadow-2xl border border-white/10">
        </div>
        </div>

        <div class="pt-12"></div>
        
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
        <span class="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            {{ $t('hero.title') }}
        </span>
        <br>
        <span class="text-accent italic opacity-90">{{ $t('hero.subtitle') }}</span>
        </h1>

        <div class="mt-20">
        <a href="https://t.me/clawpnbot" class="inline-block">
            <button class="bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg hover-lift shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-accent/50 transition-all active:scale-95">
            {{ $t('hero.cta') }}
            </button>
        </a>
        <p class="mt-4 text-gray-400 text-sm font-medium">{{ $t('hero.pricing_info') }}</p>
        </div>
    </main>
</template>

<style scoped>
    .hover-lift {
        transition: transform 0.25s ease-out;
    }
    .hover-lift:hover {
        transform: translate3d(0, -8px, 0);
    }
</style>