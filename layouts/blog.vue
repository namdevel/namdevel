<script setup>
const colorMode = useColorMode()
const themes = colorMode.preference === 'light' ? 'light' : 'dark';
useHead({
    script: [
        {

            src: "https://giscus.app/client.js",
            'data-repo': "namdevel/namdevel",
            'data-repo-id': "R_kgDOIPUbFA",
            'data-category': "General",
            'data-category-id': "DIC_kwDOIPUbFM4CSB-A",
            'data-mapping': "og:image",
            'data-strict': "0",
            'data-reactions-enabled': "0",
            'data-emit-metadata': "0",
            'data-input-position': "top",
            'data-theme': themes,
            'data-lang': "en",
            'data-loading': "lazy",
            'crossorigin': "anonymous",
            async: true, body: true
        }
    ],
});
</script>
<template>
    <div>
        <header>
            <client-only>
                <navbar></navbar>
            </client-only>
        </header>
        <main class="cointainer col-md-12 mx-auto p-4 mt-5 ">
            <NuxtPage />
            <div class="giscus giscus-frame"></div>
        </main>
        <footer class="container col-md-12 mx-auto mt-5">
            <bottom></bottom>
        </footer>
    </div>
</template>