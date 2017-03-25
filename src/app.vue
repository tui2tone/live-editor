<template>
	<div class="app-container">
		test
		<router-view></router-view>
	</div>
</template>

<script>

export default {
	data () {
		return {
		}
	}
}
</script>

<style lang="sass">
@import './scss/config.scss';
@import './scss/variable.scss';
@import './scss/vendor.scss';
@import './scss/global.scss';

.app-content {
	padding-bottom: 30px;
}
</style>