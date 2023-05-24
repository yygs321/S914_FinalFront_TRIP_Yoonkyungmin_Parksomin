<template>
<div class="container">
    <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between flex-wrap">
            <button type="button" class="btn btn-outline-dark d-flex justify-content-between col-md-auto col-6 mb-2" @click="search('12')"><span class="me-2">관광지</span><i class="fa-solid fa-map-location-dot"></i></button>
            <button type="button" class="btn btn-outline-dark d-flex justify-content-between col-md-auto col-6 mb-2" @click="search('32')"><span class="me-2">숙박</span><i class="fa-solid fa-hotel"></i></button>
            <button type="button" class="btn btn-outline-dark d-flex justify-content-between col-md-auto col-6 mb-2" @click="search('38')"><span class="me-2">쇼핑</span><i class="fa-solid fa-cart-shopping"></i></button>
            <button type="button" class="btn btn-outline-dark d-flex justify-content-between col-md-auto col-6 mb-2" @click="search('15')"><span class="me-2">축제</span><i class="fa-solid fa-ticket"></i></button>
            <button type="button" class="btn btn-outline-dark d-flex justify-content-between col-md-auto col-6 mb-2" @click="search('39')"><span class="me-2">음식점</span><i class="fa-solid fa-utensils"></i></button>
            <button type="button" class="btn btn-outline-dark d-flex justify-content-between col-md-auto col-6 mb-2" @click="search('25')"><span class="me-2">투어</span><i class="fa-solid fa-plane-departure"></i></button>
            <button type="button" class="btn btn-outline-dark d-flex justify-content-between col-md-auto col-6 mb-2" @click="search('28')"><span class="me-2">레포츠</span><i class="fa-solid fa-person-walking"></i></button>
            <button type="button" class="btn btn-outline-dark d-flex justify-content-between col-md-auto col-6 mb-2" @click="search('14')"><span class="me-2">문화</span><i class="fa-solid fa-gamepad"></i></button>
            <button type="button" class="btn btn-outline-dark d-flex justify-content-between dropdown dropdown-toggle col-md-auto col-6 mb-2" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="me-2">더보기</span>
                <!-- <i class="fa-solid fa-ellipsis"></i> -->
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">공지사항</a></li>
                    <li><a class="dropdown-item" href="#">Q&A</a></li>
                </ul>
            </button>
        </nav>
    </div>
</div>

</template>

<script>

export default {
    name: 'TripHeader',
    methods:{
		search(contentId){
            this.$router.push('list/category/' + contentId);
		}
	},
}
</script>

<style scoped>

</style>
