<script setup lang="ts">
import flags from '../features.json';
import {ref} from "vue";

const props = defineProps({
  flag: String
});
const active = ref(true);

const env = flags[import.meta.env.VITE_VUE_APP_ENVIRONMENT];
const feature = env.find((item) => item.key === props.flag);
if (feature) {
  active.value = feature.active;
}
</script>

<template>
  <slot v-if="!active" />
</template>
