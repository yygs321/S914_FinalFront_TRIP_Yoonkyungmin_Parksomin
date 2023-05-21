<template>
	<div>
		<div class="container position-relative my-4">
			<form class="form-control border-white shadow rounded-pill w-75 d-flex position-absolute top-50 start-50 translate-middle z-1" style="transform: translate(-50%, -50%); height:15%;">
				<a class="btn"><i class="fa-solid fa-magnifying-glass" style="font-size: 1.5rem;"></i></a>
				<input type="text" class="form-control w-75 border-white" placeholder="어디로 가시나요?">
			</form>

			<img class="w-100 z-0 position-relative" src="@/assets/search_back.jpg" height="400px" alt="">
		</div>

		<h1 class="text-start ms-2">인기 여행지</h1>
		<div class="container">
			<div id="carouselTrip2" class="carousel slide my-3">
				<div class="carousel-inner">
					<div v-for="(items, index) in carouselItems" :key="index" :class="['carousel-item', { 'active': index === 0 }]">
						<div class="row row-cols-4">
							<custom-card-vue v-for="(item, subIndex) in items" :key="subIndex" :src="item.firstImage" :title="item.title" :rating="item.rating" :id="item.contentId"></custom-card-vue>
						</div>
					</div>
				</div>


				<button class="carousel-control-prev" type="button" data-bs-target="#carouselTrip2" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselTrip2" data-bs-slide="next">
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
import http from "@/axios/axios-common.js"
export default {
	name: 'TripMain',
	components:{CustomCardVue, CustomCardAreaVue},
	data(){
		return{
			carouselItems: [],
			rawData: [],
		};
	},

	created() {
		this.selectTop();
	},
	methods:{
		selectTop(){
			http.get("/attractions/top")
				.then((response) => 
				{
					this.rawData = response.data
					
				})
				.then(()=>{
					const itemsPerRow = 4;
					for (let i = 0; i < this.rawData.length; i += itemsPerRow) {
						this.carouselItems.push(this.rawData.slice(i, i + itemsPerRow));
					}
				})
		},
	},
}
</script>

<style scoped>

	
</style>