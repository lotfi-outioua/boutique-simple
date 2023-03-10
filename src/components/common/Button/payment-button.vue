<template>
	<button class="payment_button">
		<slot></slot>
	</button>
</template>

<style scoped lang="scss">
	.payment_button {
		padding: 10px;
		text-transform: uppercase;
		font-weight: 600;
		color: #fff;
		border: none;
		border-radius: 6px;
		background-color: #059669;
	}
</style>