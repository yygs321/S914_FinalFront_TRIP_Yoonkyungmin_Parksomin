<template>
	<div>
		<div class="container position-relative mt-5 mb-3 text-center" >
			<form class="form-control border-white shadow rounded-pill w-75 d-inline-flex" onSubmit="return false">
				<a class="btn" @click="search"><i class="fa-solid fa-magnifying-glass" style="font-size: 1.5rem;"></i></a>
				<input type="text" class="form-control w-75 border-white" placeholder="어디로 가시나요?" v-model="searchKeyword" @keyup.enter="search">
			</form>
		</div>

		<div class="container mb-5 text-center w-100 ">
			<div class="row justify-content-center">
				<button :class="['btn', 'btn-outline-mint', 'rounded-pill', 'col', 'col-9', 'mx-2', { 'active': this.category === '12' }]" @click="selectCategory('12')">관광지</button>
				<button :class="['btn', 'btn-outline-mint', 'rounded-pill', 'col', 'col-9', 'mx-2', { 'active': this.category === '32' }]" @click="selectCategory('32')">숙박</button>
				<button :class="['btn', 'btn-outline-mint', 'rounded-pill', 'col', 'col-9', 'mx-2', { 'active': this.category === '38' }]" @click="selectCategory('38')">쇼핑</button>
				<button :class="['btn', 'btn-outline-mint', 'rounded-pill', 'col', 'col-9', 'mx-2', { 'active': this.category === '15' }]" @click="selectCategory('15')">축제</button>
				<button :class="['btn', 'btn-outline-mint', 'rounded-pill', 'col', 'col-9', 'mx-2', { 'active': this.category === '39' }]" @click="selectCategory('39')">음식점</button>
				<button :class="['btn', 'btn-outline-mint', 'rounded-pill', 'col', 'col-9', 'mx-2', { 'active': this.category === '25' }]" @click="selectCategory('25')">투어</button>
				<button :class="['btn', 'btn-outline-mint', 'rounded-pill', 'col', 'col-9', 'mx-2', { 'active': this.category === '28' }]" @click="selectCategory('28')">레포츠</button>
				<button :class="['btn', 'btn-outline-mint', 'rounded-pill', 'col', 'col-9', 'mx-2', { 'active': this.category === '14' }]" @click="selectCategory('14')">문화</button>
			</div>
		</div>

		<div class="container">
		<div id="carouselArea" class="carousel slide">
			<div class="carousel-inner">
			<div class="carousel-item ms-0 active">
				<div class="row">
					<area-index-vue src="Seoul.jpg" title="서울" v-model="keyword"></area-index-vue>
					<area-index-vue src="busan.jpg" title="부산" v-model="keyword"></area-index-vue>
					<area-index-vue src="jeju.jpg" title="제주" v-model="keyword"></area-index-vue>
					<area-index-vue src="daejeon.jpg" title="대전" v-model="keyword"></area-index-vue>
					<area-index-vue src="sokcho.jpg" title="속초" v-model="keyword"></area-index-vue>
				</div>
			</div>
			<div class="carousel-item ms-0">
				<div class="row">
					<area-index-vue src="daejeon.jpg" title="대전" v-model="keyword"></area-index-vue>
					<area-index-vue src="sokcho.jpg" title="속초" v-model="keyword"></area-index-vue>
					<area-index-vue src="gyungju.jpg" title="경주" v-model="keyword"></area-index-vue>
					<area-index-vue src="busan.jpg" title="부산" v-model="keyword"></area-index-vue>
					<area-index-vue src="jeju.jpg" title="제주" v-model="keyword"></area-index-vue>
				</div>
			</div>
			<div class="carousel-item ms-0">
				<div class="row">
					<area-index-vue src="gangneung.jpg" title="강릉" v-model="keyword"></area-index-vue>
					<area-index-vue src="yeosu.jpg" title="여수" v-model="keyword"></area-index-vue>
					<area-index-vue src="jeonju.jpg" title="전주" v-model="keyword"></area-index-vue>
					<area-index-vue src="busan.jpg" title="부산" v-model="keyword"></area-index-vue>
					<area-index-vue src="jeju.jpg" title="제주" v-model="keyword"></area-index-vue>
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
		<div v-for="trip in displayedPosts" :key="trip.contentId" class="col">
			<list-card-vue :src="trip.firstImage" :title="trip.title" :rating="trip.rating" :id="trip.contentId"></list-card-vue>
		</div>
</div>

		<!-- Pagination -->
		<nav aria-label="Page navigation">
			<ul class="pagination justify-content-center mt-4">
				<li class="page-item" :class="{ 'disabled': currentPage === 1 }">
					<a class="page-link" href="#" @click="previousPage">이전</a>
				</li>
				<li class="page-item" v-for="pageNumber in displayedPages" :key="pageNumber" :class="{ 'active': pageNumber === currentPage }">
					<a class="page-link" href="#" @click="goToPage(pageNumber)">{{ pageNumber }}</a>
				</li>
				
				<li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
					<a class="page-link" href="#" @click="nextPage">다음</a>
				</li>
			</ul>
		</nav>
	</div>

		


	</div>
</template>

<script>
	import AreaIndexVue from "./AreaIndex.vue"
	import ListCardVue from "./ListCard.vue"
	import http from "@/axios/axios-common.js"
	export default {
		name: 'TripList',
		components:{AreaIndexVue, ListCardVue},
	data(){
		return {
			trips: [
			],
			currentPage: 1,
			pageSize: 12,
			maxDisplayedPages: 5,
			keyword: "",
			searchKeyword : "",
			category: "",
			flag: true

		}

	},
	watch: {
		keyword: {
				immediate: true,
				handler() {
					if (this.flag && this.keyword != undefined && this.keyword != "")
						this.select();
				},
		},
		category: {
				immediate: true,
				handler() {
					if (this.flag && this.category != undefined && this.category != "")
						this.select();
				},
		},
	},
	computed: {
		totalPages() {
			return Math.ceil(this.trips.length / this.pageSize);
		},

		displayedPosts() {
			const startIndex = (this.currentPage - 1) * this.pageSize;
			const endIndex = startIndex + this.pageSize;
			return this.trips.slice(startIndex, endIndex);
		},
		displayedPages() {
		const totalPages = this.totalPages;
		const currentPage = this.currentPage;
		const maxDisplayedPages = this.maxDisplayedPages;
		let startPage = 1;
		let endPage = totalPages;

		if (totalPages > maxDisplayedPages) {
			const halfDisplayedPages = Math.floor(maxDisplayedPages / 2);
			if (currentPage <= halfDisplayedPages) {
			endPage = maxDisplayedPages;
			} else if (currentPage >= totalPages - halfDisplayedPages) {
			startPage = totalPages - maxDisplayedPages + 1;
			} else {
			startPage = currentPage - halfDisplayedPages;
			endPage = currentPage + halfDisplayedPages;
			}
		}

		return Array(endPage - startPage + 1)
			.fill()
			.map((_, index) => startPage + index);
		},
	},

	created(){
		this.keyword = this.$route.params.keyword
		this.searchKeyword = this.keyword
		this.category = this.$route.params.category
		if (this.keyword != this.$route.params.keyword)
			this.keyword = this.$route.params.keyword;

		if (this.category != this.$route.params.category)
			this.category = this.$route.params.category;
		// this.search(this.keyword);
	},

	methods:{
		ratingToPercent() {
			const score = 3 * 20;
			return score + 1.5;
		},

		select(){
			let url = "/attractions/search"
			if (this.category == undefined || this.category == "")
				url += "/keyword/" + this.keyword
			else if (this.keyword == undefined || this.keyword == "")
				url += "/category/" + this.category
			else{
				url += "?keyword=" + this.keyword + "&contentTypeId=" + this.category
			}
			this.currentPage = 1
			http.get(url)
					.then((response) => 
					{
						this.trips = response.data
					})
		},
		selectCategory(category){
			this.flag = false
			this.keyword = this.searchKeyword

			this.flag = true
			this.category = category
		},
		search(){
			if (this.searchKeyword == "" || this.searchKeyword == "undefined")
				alert('검색어를 입력해주세요!!')
			else{
				this.keyword = this.searchKeyword
				if (this.category == "" || this.category == undefined){
					this.$router.push(`/list/keyword/${this.searchKeyword}`);
				}
				else{
					this.$router.push(`/list/all/${this.searchKeyword}/${this.category}`);
				}
			}
		},
		previousPage() {
			if (this.currentPage > 1) {
				this.currentPage--;
			}
		},
		nextPage() {
			if (this.currentPage < this.totalPages) {
				this.currentPage++;
			}
		},
		goToPage(pageNumber) {
			this.currentPage = pageNumber;
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
}

.star-ratings-base {
	color: #aaa9a9; 
	z-index: 0;
	padding: 0;
}

.btn-outline-mint{
	--bs-btn-color: rgb(38, 214, 170);
    --bs-btn-border-color: rgb(38, 214, 170);
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: rgb(38, 214, 170);
    --bs-btn-hover-border-color: rgb(38, 214, 170);
    --bs-btn-focus-shadow-rgb: 33, 37, 41;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: rgb(38, 214, 170);
    --bs-btn-active-border-color: rgb(38, 214, 170);
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: rgb(38, 214, 170);
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: rgb(42, 235, 155);
    --bs-gradient: none;
	font-weight: bold;
	width: 10% !important;
}
	
</style>