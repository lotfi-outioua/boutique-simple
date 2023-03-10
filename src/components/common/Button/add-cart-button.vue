<script setup lang="ts">
const emits = defineEmits(["click"]);

const handleClick = () => {
  emits("click");
};
</script>

<template>
  <button class="add_button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
	.add_button {
		cursor: pointer;
	}
</style>