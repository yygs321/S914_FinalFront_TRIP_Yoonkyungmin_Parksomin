<template>
<div class="container">
	<!-- insert Notice-->
	<trip-header></trip-header>
	<notice-modify></notice-modify>
</div>

</template>

<script>
	import TripHeader from "@/components/layout/TripHeader.vue";
	import NoticeModify from "@/components/notice/NoticeModify.vue";
export default {
		
		components: { TripHeader, NoticeModify}
	}

</script>


<style>

</style>