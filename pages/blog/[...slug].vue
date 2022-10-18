<script setup>

definePageMeta({
    layout: "blog",
});

const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {

    let article = queryContent().where({ _path: path }).findOne();
    let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);
    return {
        article: await article,
        surround: await surround,
    };
});

const [prev, next] = data.value.surround;

useHead({
    title: data.value.article.title,
    meta: [
        { name: "description", content: data.value.article.description },
        {
            hid: "og:image",
            property: "og:image",
            content: `https://site.com/${data.value.article.img}`,
        },
    ],
});
</script>
<template>
    <section>
        <header v-if="data.article" class="mt-3">
            <div class="img-cont h-72 mb-12">
                <img :src="`${data.article.img}`" :alt="data.article.title" class="img-fluid content-image" />
            </div>
            <p class="h2 dark:text-green mt-3">{{ data.article.title }}</p>
            <p class="dark:text-white">{{ data.article.description }}</p>
            <span class="badge bg-light me-2" v-for="(tag, n) in data.article.tags" :key="n">{{ tag }}</span>
            <div class="d-flex mt-3 mb-2">
                <div class="pe-3">
                    <span class="froboto dark:text-green"><i class="fa-solid fa-user me-2"></i>{{ data.article.author }}
                    </span>
                </div>
                <div>
                    <span class="froboto dark:text-green"><i class="fa-solid fa-eye me-2"></i>1200 views</span>
                </div>
                <div class="ms-auto">
                    <span class="froboto dark:text-green"><i class="fa-solid fa-calendar me-2"></i>{{
                    data.article.updated_at }}</span>
                </div>

            </div>
        </header>
        <hr style="color:whitesmoke" />
        <article class="article dark:text-white">
            <!-- render document coming from query -->
            <ContentRenderer :value="data.article">
                <!-- render rich text from document -->
                <ContentRendererMarkdown :value="data.article" />

                <!-- display if document content is empty -->
                <template #empty>
                    <p>No content found.</p>
                </template>
            </ContentRenderer>
        </article>
        <hr />
        <PrevNext :prev="prev" :next="next" />
        <div class="giscus"></div>
    </section>
</template>