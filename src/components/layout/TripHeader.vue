<template>
    <div class="container">
        <div class="nav-scroller py-1 mb-2">
            <nav class="nav d-flex justify-content-between">
                <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">관광지</span><i class="fa-solid fa-map-location-dot"></i></button>
                <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">숙박</span><i class="fa-solid fa-hotel"></i></button>
                <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">쇼핑</span><i class="fa-solid fa-cart-shopping"></i></button>
                <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">문화시설</span><i class="fa-solid fa-gamepad"></i></button>
                <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">축제</span><i class="fa-solid fa-ticket"></i></button>
                <button type="button" class="btn btn-outline-dark d-flex justify-content-between dropdown dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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
}
</script>

<style scoped>

</style>
