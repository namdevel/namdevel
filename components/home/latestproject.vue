<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { limit: 3, sort: { pid: -1 } }
</script>
<template>
    <div class="row mb-5 g-3">
        <p class="h4 mb-4 dark:text-green"><i class="fa-brands fa-github me-2"></i> Recent Project</p>
        <ContentList path="/project" :query="query" v-slot="{ list }">
            <div v-for="article in list" :key="article._path" class="d-flex align-items-center">
                <div class="flex-shrink-0">
                    <img class="mb-2" :src="`${article.img}`" style="width: 60px; height: 60px;">
                </div>
                <div class="flex-grow-1 ms-3">
                    <nuxt-link target="_blank" :to="'https://github.com/namdevel/' + article.title"
                        class="text-decoration-none">
                        <h6 class="m-0 dark:text-white artitle">{{article.title}}</h6>
                    </nuxt-link>
                    <p class="text-muted mb-0">{{article.description}}</p>
                    <div class="d-flex flex-wrap">
                        <div><small class="text-muted text-sm dark:text-green"><i
                                    class="fa fa-user fa-xs fa-fade me-2"></i>{{article.author}}</small></div>
                        <div><small class="text-muted text-sm dark:text-green"><i
                                    class="fa fa-clock fa-xs ms-2 me-2"></i>
                                {{article.readingTime.text}}
                            </small></div>
                    </div>
                </div>
            </div>
        </ContentList>
        <p class="mb-0"><span class="h4">
                <nuxt-link to="/projects"
                    class="badge bg-secondary btn-sm text-decoration-none mt-3 text-primary dark:bd-green dark:bg-hitam dark:text-green">
                    Show
                    more..</nuxt-link>
            </span></p>

    </div>
</template>