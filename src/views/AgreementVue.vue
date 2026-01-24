<template>
    <main class="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <h1 class="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
        {{ $t('agreement.title') }}
        </h1>
        <div class="glass-card p-8 md:p-12 rounded-3xl space-y-12 text-gray-300">
        <section class="space-y-4">
            <h2 class="text-white font-bold text-xl border-l-4 border-accent pl-4">{{ $t('agreement.sec1_title') }}</h2>
            <p class="whitespace-pre-line">{{ $t('agreement.sec1_text') }}</p>
        </section>
        </div>
    </main>
</template>