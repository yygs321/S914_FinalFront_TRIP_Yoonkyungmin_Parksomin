<template>
	<div>
		<div class="container">
			<h5 class="text-start"><i class="fa-solid fa-location-dot"></i> {{attraction.sido}}</h5>
			<h1 class="text-start">{{attraction.title}}</h1>
			<div class="star-ratings my-2" >
					<div 
					class="star-ratings-fill space-x-2 text-4xl"
					:style="{ width: ratingToPercent() + '%'}"
					>
							<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
					</div>
					<div class="star-ratings-base space-x-2 text-4xl">
							<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
					</div>
			</div>
			
			<img :src="attraction.firstImage" alt="" class="w-100">

			<weather-table-vue v-if="attractionLoaded" :sido="attraction.sidoCode" :gugun="attraction.gugunCode" ></weather-table-vue>
			
			<div class="row my-5">
				<div class="col-lg-8 pb-5">
					<h3 class="text-start" id="main-address">{{attraction.addr1}}</h3>
					<p class="fst-italic text-start">
						{{attraction.overview}}
					</p>
				</div>
				<kakao-map-vue v-if="attractionLoaded" :attraction="attraction" ></kakao-map-vue>
			</div>

			
		</div> 
	</div>
</template>   

<script>
	import KakaoMapVue from './KakaoMap.vue';
	import WeatherTableVue from './WeatherTable.vue'
	import http from "@/axios/axios-common.js"
	export default {
		name: 'TripDetail',
		components:{KakaoMapVue, WeatherTableVue},
		data(){
			return {
				attraction:{},
				attractionLoaded:false,
				weathers:[]
			}
		},
		created(){
			const contentId = this.$route.params.contentId;
			this.selectDetail(contentId);
			if (this.attractionLoaded)
				this.selectWeather();

		},
		methods:{
			ratingToPercent() {
				const score = this.attraction.rating * 20;
				return score + 1.5;
			}, 

			async selectDetail(contentId){
			await http.get("/attractions/" + contentId)
				.then((response) => 
				{
					this.attraction = response.data
					this.attractionLoaded = true
				})
			},
			


		}
	}

</script>

<style scoped>
	.carousel-control-prev, .carousel-control-next{
		width: 5%;
	}

	.star-ratings {
	color: #aaa9a9; 
	position: relative;
	unicode-bidi: bidi-override;
	width: max-content;
	/* -webkit-text-fill-color: transparent; Will override color (regardless of order) */
	/* -webkit-text-stroke-width: 1.3px; */
	/* -webkit-text-stroke-color: rgb(42, 235, 155); */
}
 
.star-ratings-fill {
	color: rgb(42, 235, 155);
	padding: 0;
	position: absolute;
	z-index: 1;
	display: flex;
	top: 0;
	left: 0;
	overflow: hidden;
	-webkit-text-fill-color: rgb(42, 235, 155);
	font-size: 30px;
}
 
.star-ratings-base {
	color: #aaa9a9; 
	z-index: 0;
	padding: 0;
	font-size: 30px;
}

img{
	max-height: 110vh;
}
	
</style>