<template>

    <!-- Navbar -->
    <nav class="nav w-full h-16 fixed top-0 flex justify-center items-center text-white">
        <div class="w-full flex items-center justify-between px-5">
            <div class="flex items-center space-x-6">
                <div class="list-ul cursor-pointer p-2 rounded-full">
                    <base-icon icon="list-ul" size="24"></base-icon>
                </div>
                <nuxt-link to="/" class="text-2xl font-semibold">My Warehouse</nuxt-link>
            </div>
            <div class="w-1/2">
                <input type="text" class="w-full rounded-xl p-2 text-default">
            </div>
            <div class="flex space-x-4">
                <div class="mode">
                    <div @click="$colorMode.preference = 'light'" v-show="$colorMode.value === 'dark'"
                        class="cursor-pointer">
                        <base-icon icon="moon"></base-icon>
                    </div>
                    <div @click="$colorMode.preference = 'dark'" v-show="$colorMode.value === 'light'"
                        class="cursor-pointer">
                        <base-icon icon="sun"></base-icon>
                    </div>
                </div>
                <base-icon icon="user"></base-icon>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>