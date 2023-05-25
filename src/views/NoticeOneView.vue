<template>
<div class="container">
	<!-- insert Notice-->
	<trip-header></trip-header>
	<notice-one></notice-one>
</div>

</template>

<script>
	import TripHeader from "@/components/layout/TripHeader.vue";
import NoticeOne from '@/components/notice/NoticeOne.vue';
export default {
		
		components: { TripHeader, NoticeOne}
	}

</script>


<style>

</style>