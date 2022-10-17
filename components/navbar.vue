<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
    selector: 'body',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
})
const toggleDark = useToggle(isDark)


</script>

<template>
    <nav class="navbar fixed-top navbar-light bg-white dark:bg-hitam shadow-sm dark:text-green">
        <div class="container col-md-12 mx-auto" style="max-width:680px">
            <nuxt-link class="navbar-brand dark:text-green" to="/"><i class="fa-solid fa-user-secret fa-flip me-2"></i>
                NAMDEVEL</nuxt-link>
            <div class="col-md-4"></div>
            <NuxtLink class="nav-link" to="/blog">Blog</NuxtLink>
            <NuxtLink class="nav-link" to="/projects">Projects</NuxtLink>
            <NuxtLink class="nav-link" to="/about">About</NuxtLink>
            <button type="button" @click.prevent="toggleDark()"
                class="btn btn-link btn-sm text-decoration-none text-dark dark:text-green"><i
                    class="fa-solid fa-moon-stars fa-beat" style="--fa-beat-scale: 2.0;"></i></button>

        </div>
    </nav>
</template>