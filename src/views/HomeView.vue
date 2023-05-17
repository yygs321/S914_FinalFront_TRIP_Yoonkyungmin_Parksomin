<template>
<div>
	<trip-header></trip-header>
	<div class="container position-relative my-4">
		<form class="form-control rounded-pill w-75 d-flex position-absolute top-50 start-50 translate-middle z-1" style="transform: translate(-50%, -50%); height:15%;">
			<a class="btn"><i class="fa-solid fa-magnifying-glass" style="font-size: 1.5rem;"></i></a>
			<input type="text" class="form-control w-75 border-white" placeholder="어디로 가시나요?">
		</form>

		<img class="w-100 z-0 position-relative" src="@/assets/search_back.jpg" height="400px" alt="">
	</div>

	<div id="carouselExample" class="carousel slide">
		<div class="carousel-inner">
			<div class="carousel-item active row row-cols-4 ">
				<img class="col" src="@/assets/sunmarina-beach.jpg" alt="">
				<img class="col" src="@/assets/sunmarina-beach.jpg" alt="">
				<img class="col" src="@/assets/sunmarina-beach.jpg" alt="">
				<img class="col" src="@/assets/sunmarina-beach.jpg" alt="">
			</div>

			<div class="carousel-item row row-cols-4 g-4">
				<img class="col" src="@/assets/atlantisthepalm.jpg" alt="">
				<img class="col" src="@/assets/atlantisthepalm.jpg" alt="">
				<img class="col" src="@/assets/atlantisthepalm.jpg" alt="">
				<img class="col" src="@/assets/atlantisthepalm.jpg" alt="">
			</div>
		</div>
		
	<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Previous</span>
	</button>
	<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Next</span>
	</button>
	</div>
</div>

</template>

<script>
	import TripHeader from "@/components/TripHeader.vue";
	export default{
		components: {TripHeader}
	}
</script>


	<style>
	.container > input{
		top: 100px;
	}


	</style>