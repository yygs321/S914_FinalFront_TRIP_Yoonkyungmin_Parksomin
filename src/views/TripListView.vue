<template>
<div class="container">
	<trip-header></trip-header>
	<trip-list></trip-list>
</div>

</template>

<script>
	import TripHeader from "@/components/TripHeader.vue";
	import TripList from "@/components/TripList.vue";
	export default{
		components: {TripHeader, TripList}
	}

</script>


<style>
</style>