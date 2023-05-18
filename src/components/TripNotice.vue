<template>
	<div>
		<div class="container position-relative my-4">
			<form class="form-control rounded-pill w-75 d-flex position-absolute top-50 start-50 translate-middle z-1" style="transform: translate(-50%, -50%); height:15%;">
				<a class="btn"><i class="fa-solid fa-magnifying-glass" style="font-size: 1.5rem;"></i></a>
				<input type="text" class="form-control w-75 border-white" placeholder="어디로 가시나요?">
			</form>

			<img class="w-100 z-0 position-relative" src="@/assets/search_back.jpg" height="400px" alt="">
		</div>

		<h1 class="text-start ms-2">인기 여행지 10</h1>

		<div class="container">
			<div id="carouselTrip" class="carousel slide my-3">
				<div class="carousel-inner">
					<div class="carousel-item ms-0 active">
						<div class="row row-cols-4">
							<custom-card-vue src="gyeongbokgung.jpg" title="서울 경복궁"></custom-card-vue>
							<custom-card-vue src="광안리.jpg" title="부산 광안리"></custom-card-vue>
							<custom-card-vue src="강릉경포대.jpg" title="강릉 경포대"></custom-card-vue>
							<custom-card-vue src="남산타워.jpg" title="서울 남산타워"></custom-card-vue>
						</div>
					</div>
					<div class="carousel-item ms-0">
						<div class="row row-cols-4">
							<custom-card-vue src="섭지코지.jpg" title="제주 섭지코지"></custom-card-vue>
							<custom-card-vue src="성산일출봉.jpg" title="제주 성산일출봉"></custom-card-vue>
							<custom-card-vue src="불국사.jpg" title="경주 불국사"></custom-card-vue>
							<custom-card-vue src="전주한옥마을.jpg" title="전주 한옥마을"></custom-card-vue>
						</div>
					</div>
				</div>

				<button class="carousel-control-prev" type="button" data-bs-target="#carouselTrip" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselTrip" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>

		<h1 class="text-start ms-2 my-2">둘러보기</h1>
		<div class="container">
		<div id="carouselArea" class="carousel slide">
			<div class="carousel-inner">
			<div class="carousel-item ms-0 active">
				<div class="row">
					<custom-card-area-vue src="Seoul.jpg" title="서울"></custom-card-area-vue>
					<custom-card-area-vue src="busan.jpg" title="부산"></custom-card-area-vue>
					<custom-card-area-vue src="jeju.jpg" title="제주"></custom-card-area-vue>
				</div>
			</div>
			<div class="carousel-item ms-0">
				<div class="row">
					<custom-card-area-vue src="daejeon.jpg" title="대전"></custom-card-area-vue>
					<custom-card-area-vue src="sokcho.jpg" title="속초"></custom-card-area-vue>
					<custom-card-area-vue src="gyungju.jpg" title="경주"></custom-card-area-vue>
				</div>
			</div>
			<div class="carousel-item ms-0">
				<div class="row">
					<custom-card-area-vue src="gangneung.jpg" title="강릉"></custom-card-area-vue>
					<custom-card-area-vue src="yeosu.jpg" title="여수"></custom-card-area-vue>
					<custom-card-area-vue src="jeonju.jpg" title="전주"></custom-card-area-vue>
				</div>
			</div>

			</div>

			<button class="carousel-control-prev" type="button" data-bs-target="#carouselArea" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselArea" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
			</button>
		</div>
		</div>


	</div>
</template>

<script>
import CustomCardVue from "./CustomCard.vue"
import CustomCardAreaVue from "./CustomCardArea.vue"
export default {
	name: 'TripNotice',
	components:{CustomCardVue, CustomCardAreaVue}
}
</script>

<style scoped>

	
</style>