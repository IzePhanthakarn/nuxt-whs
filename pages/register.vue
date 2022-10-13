<template>
    <form class="w-auto flex flex-col bg-gray text-white px-10 pt-10 pb-10 rounded-xl drop-shadow-2xl">
        <h1 class="text-4xl font-semibold">Create Account</h1>
        <hr class="my-3">
        <div class="grid grid-cols-12 gap-2">
            <div class="flex flex-col col-span-6">
                <label for="" class="text-lg font-medium">Firstname</label>
                <input type="text" class="py-2 px-3 rounded-xl text-default font-semibold bg-zinc-200">
            </div>
            <div class="flex flex-col col-span-6">
                <label for="" class="text-lg font-medium">Lastname</label>
                <input type="text" class="py-2 px-3 rounded-xl text-default font-semibold bg-zinc-200">
            </div>
            <div class="flex flex-col col-span-4">
                <label for="" class="text-lg font-medium">Email</label>
                <input type="email" class="py-2 px-3 rounded-xl text-default font-semibold bg-zinc-200">
            </div>
            <div class="flex flex-col col-span-4">
                <label for="" class="text-lg font-medium">Phone</label>
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    class="py-2 px-3 rounded-xl text-default font-semibold bg-zinc-200">
            </div>
            <div class="flex flex-col col-span-4">
                <label for="" class="text-lg font-medium">Birthdate</label>
                <input type="date" class="py-2 px-3 rounded-xl text-default font-semibold bg-zinc-200">
            </div>
            <div class="flex flex-col col-span-6">
                <label for="" class="mt-2 text-lg font-medium">Password</label>
                <input type="password" class="py-2 px-3 rounded-xl text-default font-semibold bg-zinc-200">
            </div>
            <div class="flex flex-col col-span-6">
                <label for="" class="mt-2 text-lg font-medium">Confirm Password</label>
                <input type="password" class="py-2 px-3 rounded-xl text-default font-semibold bg-zinc-200">
            </div>
        </div>
        <button type="submit"
            class="login-button w-full mt-8 mb-3 py-2 bg-gray2 rounded-xl text-lg font-medium drop-shadow-xl">SIGN
            UP</button>
        <p class="mx-auto">Aleady have an account? <nuxt-link to="/login"
                class="text-primary underline underline-offset-2">
                Login!</nuxt-link>
        </p>
    </form>
</template>
<script>
export default {
    name: 'LoginPage',
    head() {
        return {
            title: "Register"
        }
    },
    layout: "auth"
}
</script>

<style scoped>
form {
    width: 900px;
}

.login-button:hover {
    background: var(--gray9);
}

input {
    color: #1d1d1f;
}

input[type=date]:invalid::-webkit-datetime-edit {
    color: #999;
}
</style>