<template>
  <svg
    :width="size || width"
    :height="size || height"
    :aria-labelledby="name"
    class="base-icon justify-center"
    role="presentation"
  >
    <title :id="name" lang="en">{{ name }}</title>
    <g v-if="icon" :fill="color == 'primary' ? '#446A46' : color">
      <component v-bind:is="dynamicIcon" />
    </g>
    <g v-else :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    width: {
      type: [Number, String],
      default: 32,
    },
    height: {
      type: [Number, String],
      default: 32,
    },
    size: {
      type: [Number, String],
      default: undefined,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    viewBox: {
      type: String,
      default: '', // 0 0 24 24
    },
    icon: {
      type: String,
      detault: '',
    },
  },
  computed: {
    dynamicIcon() {
      return () => import(`@/components/icon/${this.icon}.vue`)
    },
  },
}
</script>

<style>
.base-icon {
  @apply inline-block;
}
</style>
