<script setup>
definePageMeta({
    layout: "other",
});

useHead({
    title: "About Me",
});


</script>
<template>
    <section>
        <div class="row">
            <div class="card mb-3 ps-0 pe-0 border border-0 mt-4 dark:bg-hitam">
                <div class="row g-2">
                    <div class="col-md-3 avatar justify-content-center p-2">
                        <img src="/avatar.jfif" class="img-fluid rounded-circle fa-shake dark:bd-ava-green"
                            alt="NAMDEVEL">
                    </div>
                    <div class="col-md-9">
                        <div class="card-body detail">
                            <h3 class="card-title dark:text-green">NAMDEVEL (几句レし, HEUSC)</h3>
                            <p class="card-text mb-1 dark:text-green">Software Developer</p>
                            <p class="card-text">
                                <small class="text-muted dark:text-white fst-italic">I'm namdevel, a guy who loves to
                                    code, music and coffee.<br />Welcome to my personal website, where you can
                                    find<br />my
                                    portfolio,
                                    blog and more.</small>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-12 mt-3">
                        <p class="text-muted dark:text-white">A computer science student, frontend developer
                            and an adventurer of my own mind. I like to
                            express my feelings through code, and a quite place would be nice to have around me.

                            I choose Information Technology as my main prospect career path, therefore I'm facing many
                            obstacles and it was quite challenging.</p>
                        <blockquote>
                            <p class="text-muted dark:text-white">I change during the
                                course of a day. I wake and I'm one person, and when I go to sleep I know for certain
                                I'm somebody else.</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>