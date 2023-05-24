<template>
<div class="container">
	<trip-header></trip-header>
	<trip-notice></trip-notice>
</div>

</template>

<script>
	import TripHeader from "@/components/layout/TripHeader.vue";
	import TripNotice from "@/components/notice/TripNotice.vue";
export default {
		
		components: {TripNotice, TripHeader}
	}

</script>


<style>

</style>