<template>
    <div class="w-screen h-screen overflow-hidden bg-gray-100 flex justify-center items-center bg-main relative">
        <div class="list-ul cursor-pointer h-10 w-10 flex items-center justify-center rounded-full absolute top-4 right-4">
            <div @click="$colorMode.preference = 'light'" v-show="$colorMode.value === 'dark'" class="cursor-pointer">
                <base-icon icon="moon"></base-icon>
            </div>
            <div @click="$colorMode.preference = 'dark'" v-show="$colorMode.value === 'light'" class="cursor-pointer">
                <base-icon icon="sun"></base-icon>
            </div>
        </div>
        <nuxt />
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.list-ul {
    background: transparent;
}

.list-ul:hover {
    background: var(--gray4);
}
</style>