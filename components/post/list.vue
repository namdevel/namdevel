<template>
    <div class="row mb-5 mt-3">
        <p class="h4 mb-3 me-0  dark:text-green"><i class="fa-solid fa-newspaper me-2"></i> Blog</p>
        <small class="text-muted dark:text-white">I write blog once in a while, talks about Web Development related
            topics and my personal experience, I like to share my thought this way.</small>
    </div>

    <div class="row mb-5 mt-5">
        <div class="form-outline  ">
            <input type="search" id="form1" class="form-control dark:bd-green dark:bg-hitam dark:text-green"
                placeholder="Search..." aria-label="Search" />
        </div>
    </div>

    <div class="row mb-5 g-4">
        <ContentList path="/blog" v-slot="{ list }">

            <div v-for="article in list" :key="article._path" class="d-flex align-items-center ">

                <div class="flex-shrink-0">
                    <img class="arthumb" :src="`${article.img}`" />
                </div>
                <div class="flex-grow-1 ms-3">
                    <nuxt-link :to="article._path" class="text-decoration-none">
                        <h6 class="m-0 dark:text-white artitle dark:text-green">{{article.title}}</h6>
                        <p class="text-muted mb-0">{{article.description}}</p>
                    </nuxt-link>

                    <div class="d-flex flex-wrap">
                        <div>
                            <small class="text-muted text-sm dark:text-green"><i
                                    class="fa fa-user fa-xs fa-fade me-2"></i>{{article.author}}</small>
                        </div>
                        <div>
                            <small class="text-muted text-sm dark:text-green">
                                <i class="fa fa-clock fa-xs ms-2 me-2"></i>
                                {{article.created_at.split(" at ")[0]}}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </ContentList>
    </div>
</template>