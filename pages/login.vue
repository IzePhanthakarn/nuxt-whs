<template>
    <form class="flex flex-col bg-gray text-white px-10 pt-10 pb-10 rounded-xl drop-shadow-2xl">
        <h1 class="text-4xl font-semibold">Login to My Warehouse</h1>
        <hr class="my-3">
        <label for="" class="text-lg font-medium">Email</label>
        <input type="email" class="py-2 px-3 rounded-xl text-black font-semibold bg-zinc-200">
        <label for="" class="mt-2 text-lg font-medium">Password</label>
        <input type="password" class="py-2 px-3 rounded-xl text-black font-semibold bg-zinc-200">
        <nuxt-link to="/forgot" class="mt-2 underline underline-offset-2">Forgor Password?</nuxt-link>
        <button type="submit"
            class="login-button w-full my-3 py-2 bg-gray2 rounded-xl text-lg font-medium drop-shadow-xl">LOGIN</button>
        <p class="mx-auto">Not Registred? <nuxt-link to="/register" class="text-primary underline underline-offset-2">
                Create an account!</nuxt-link>
        </p>
    </form>
</template>
<script>
export default {
    name: 'LoginPage',
    head() {
        return {
            title: "Login"
        }
    },
    layout: "auth"
}
</script>

<style scoped>
.login-button:hover {
    background: var(--gray9);
}
</style>