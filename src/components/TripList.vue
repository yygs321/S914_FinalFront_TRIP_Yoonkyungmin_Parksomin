<template>
	<div>
		<div class="container position-relative my-5 text-center">
			<form class="form-control border-white shadow rounded-pill w-75 d-inline-flex">
				<a class="btn"><i class="fa-solid fa-magnifying-glass" style="font-size: 1.5rem;"></i></a>
				<input type="text" class="form-control w-75 border-white" placeholder="어디로 가시나요?">
			</form>
		</div>

		<div class="container">
		<div id="carouselArea" class="carousel slide">
			<div class="carousel-inner">
			<div class="carousel-item ms-0 active">
				<div class="row">

					<area-index-vue src="Seoul.jpg" title="서울"></area-index-vue>
					<area-index-vue src="busan.jpg" title="부산"></area-index-vue>
					<area-index-vue src="jeju.jpg" title="제주"></area-index-vue>
					<area-index-vue src="daejeon.jpg" title="대전"></area-index-vue>
					<area-index-vue src="sokcho.jpg" title="속초"></area-index-vue>
				</div>
			</div>
			<div class="carousel-item ms-0">
				<div class="row">
					<area-index-vue src="daejeon.jpg" title="대전"></area-index-vue>
					<area-index-vue src="sokcho.jpg" title="속초"></area-index-vue>
					<area-index-vue src="gyungju.jpg" title="경주"></area-index-vue>
					<area-index-vue src="busan.jpg" title="부산"></area-index-vue>
					<area-index-vue src="jeju.jpg" title="제주"></area-index-vue>
				</div>
			</div>
			<div class="carousel-item ms-0">
				<div class="row">
					<area-index-vue src="gangneung.jpg" title="강릉"></area-index-vue>
					<area-index-vue src="yeosu.jpg" title="여수"></area-index-vue>
					<area-index-vue src="jeonju.jpg" title="전주"></area-index-vue>
					<area-index-vue src="busan.jpg" title="부산"></area-index-vue>
					<area-index-vue src="jeju.jpg" title="제주"></area-index-vue>
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

<div class="container mt-5">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div v-for="(trip, index) in trips" :key="index" class="col">
        <list-card-vue src="busan.jpg" :title="trip.title" :rating="trip.rating"></list-card-vue>
      </div>
  </div>

  <!-- Pagination -->
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center mt-4">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
      </li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</div>

		


	</div>
</template>

<script>
	import AreaIndexVue from "./AreaIndex.vue"
  import ListCardVue from "./ListCard.vue"
	export default {
		name: 'TripList',
		components:{AreaIndexVue, ListCardVue},
    data(){
      return {
        trips: [
          {
            title: "부산 광안리",
            rating: 3.5,
          },
          {
            title: "부산 광안리",
            rating: 3.1,
          },
          {
            title: "부산 광안리",
            rating: 4.5,
          },
          {
            title: "부산 광안리",
            rating: 1.5,
          },
          {
            title: "부산 광안리",
            rating: 2.5,
          },
          {
            title: "부산 광안리",
            rating: 3.0,
          },
          {
            title: "부산 광안리",
            rating: 4.8,
          },
          {
            title: "부산 광안리",
            rating: 2.3,
          },
        ],
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