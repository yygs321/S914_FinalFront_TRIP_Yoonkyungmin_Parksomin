<template>
	<div>
		<div class="container">
      <h5 class="text-start"><i class="fa-solid fa-location-dot"></i> 서울</h5>
      <h1 class="text-start">국립 청태산 자연 휴양림</h1>
      <img src="@/assets/busan.jpg" alt="" class="w-100">
      <div class="row my-5">
        <div class="col-lg-8 pb-5">
          <h3 id="main-address">부산</h3>
          <p class="fst-italic">
            광안리
          </p>
        </div>
        <kakao-map-vue :attraction="attraction"></kakao-map-vue>
      </div>
    </div>
	</div>
</template>

<script>
  import KakaoMapVue from './KakaoMap.vue';
	export default {
		name: 'TripDetail',
		components:{KakaoMapVue},
    data(){
      return {
        attraction:{
          latitude:37.52251412000000000,
          longitude: 128.29191150000000000
        }
      }
    },
		methods:{
			ratingToPercent() {
				const score = 3 * 20;
				return score + 1.5;
			}
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
}
 
.star-ratings-base {
  color: #aaa9a9; 
  z-index: 0;
  padding: 0;
}
	
</style>