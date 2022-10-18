<template>
    <div>
        <header>
            <client-only>
                <navbar></navbar>
            </client-only>
        </header>
        <main class="cointainer col-md-12 mx-auto p-4 mt-5 ">
            <NuxtPage />
        </main>
        <footer class="container col-md-12 mx-auto mt-5">
            <bottom></bottom>
        </footer>
    </div>
</template>