<script setup>
import { onMounted } from 'vue';
onBeforeMount(() => {
    fetch("https://api.github.com/repos/namdevel/namdevel/commits/main")
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("commitUrl").setAttribute('href', "https://github.com/namdevel/namdevel/commit/" + data.sha);
            document.getElementById("commitSha").innerHTML = '<i class="fa-solid fa-code-branch me-1"></i> ' + data.sha;

        });
});
</script>
<template>
    <hr />
    <ul class="nav justify-content-center border-none pb-3 mb-0 ">
        <li class="nav-item"><a href="https://www.github.com/namdevel"
                class="nav-link px-2 text-muted dark:text-green">Github</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted dark:text-green">LinkedIn</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted dark:text-green">Telegram</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted dark:text-green">Keybase</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted dark:text-green">About</a></li>
    </ul>


    <p class="text-center text-muted mb-2">Made with a cup of <i
            class="fa-duotone fa-mug-hot ms-2 me-2 text-green fa-shake"></i>
        by
        NAMDEVEL</p>
    <a style="font-size:14px" id="commitUrl" target="_blank" class="text-decoration-none">
        <p id="commitSha" class="text-center text-muted mt-0 mb-3"></p>
    </a>
</template>