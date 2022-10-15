<template>
    <button class="font-medium text-lg rounded-full">
        <base-icon v-if="icon!=''" :icon="icon" :class="classIcon" size="24"></base-icon>
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: ''
        },
        classIcon: {
            type: String,
            default: ''
        }
    }
}
</script>