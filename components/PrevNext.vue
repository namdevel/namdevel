<script setup>
// import icons
// define prev and next props
defineProps(["prev", "next"]);
</script>

<template>
    <div class="d-flex mb-3">
        <div class="me-auto p-2">
            <NuxtLink v-if="prev" :to="prev._path">

                <span><i class="fa-solid fa-arrow-left me-2"></i> {{ prev.title }} </span>
            </NuxtLink>
        </div>
        <div class="ms-auto p-2">
            <NuxtLink v-if="next" :to="next._path">
                <span> {{ next.title }} <i class="fa-solid fa-arrow-right ms-2"></i></span>
            </NuxtLink>
        </div>
    </div>

</template>