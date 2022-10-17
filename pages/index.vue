<script setup>
definePageMeta({
    layout: "main",
});
useHead({
    title: "Home",
});

</script>
<template>
    <section>
        <HomeProfile></HomeProfile>
        <HomeLatestpost></HomeLatestpost>
        <HomeLatestproject></HomeLatestproject>
    </section>
</template>