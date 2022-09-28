<template>
    <form class="flex flex-col justify-between bg-form text-white px-10 pt-10 pb-10 rounded-xl drop-shadow-2xl">
        <div class="w-full">
            <h1 class="text-4xl font-semibold">Forgot Password</h1>
            <hr class="my-3">
        </div>
        <div class="w-full flex flex-col items-start">
            <label for="" class="text-lg font-medium">Email</label>
            <input type="email" class="w-96 py-2 px-3 rounded-xl text-default font-semibold bg-zinc-200">
            <label for="" class="text-lg font-medium">Phone</label>
            <input type="tell" class="w-96 py-2 px-3 rounded-xl text-default font-semibold bg-zinc-200">
            <label for="" class="text-lg font-medium">Birthdate</label>
            <input type="date" class="w-96 py-2 px-3 rounded-xl text-default font-semibold bg-zinc-200">
        </div>
        <div class="w-full">
            <nuxt-link to="forgot/next">
            <button class="login-button w-full my-3 py-2 bg-gray8 rounded-xl text-lg font-medium drop-shadow-xl cursor-pointer">NEXT</button>    
            </nuxt-link>
            <p class="mx-auto text-center">Back to <nuxt-link to="/login" class="text-highlight underline underline-offset-2">
                    Login!</nuxt-link> or <nuxt-link to="/register" class="text-highlight underline underline-offset-2">
                    Create an account!</nuxt-link>
            </p>
        </div>
    </form>

</template>
<script>
export default {
    name: 'LoginPage',
    head() {
        return {
            title: "Forgot Password"
        }
    },
    layout: "auth"
}
</script>

<style scoped>
form {
    width: 464px;
    height: 467px;
}

input {
    color: #1d1d1f;
}

.login-button:hover {
    background: var(--gray9);
}

</style>