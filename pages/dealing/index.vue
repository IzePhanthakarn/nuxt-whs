<template>
    <div class="w-full h-full flex flex-col text-default">
        <div class="w-full bg-gray4 rounded-xl text-white flex items-center p-3 space-x-2">
            <base-icon icon="handshake" size="40"></base-icon>
            <h1 class="text-3xl font-medium">Dealing</h1>
        </div>
        <div class="w-full h-full bg-gray3 rounded-xl mt-5 flex items-center justify-center">
            <h1 class="nodeal bg-gray px-60 py-32 text-6xl font-semibold text-white rounded-2xl">No dealing now.</h1>
        </div>
    </div>
</template>

<style scoped>
.nodeal{
    border-bottom: solid 2px var(--pink);
}
</style>