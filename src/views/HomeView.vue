<template>
<div class="container">
	<trip-header></trip-header>
	<trip-main></trip-main>
</div>

</template>

<script>
	import TripHeader from "@/components/layout/TripHeader.vue";
	import TripMain from '@/components/TripMain.vue';
	export default{
		components: {TripHeader, TripMain}
	}

</script>


<style>
.container > input{
	top: 100px;
}
.carousel-inner{
	width: 100% !important;
}


</style>