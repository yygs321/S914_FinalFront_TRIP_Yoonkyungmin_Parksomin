<template>
    <div class="container">
        <div class="nav-scroller py-1 mb-2">
            <nav class="nav d-flex justify-content-between">
                <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">관광지</span><i class="fa-solid fa-map-location-dot"></i></button>
                <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">숙박</span><i class="fa-solid fa-hotel"></i></button>
                <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">쇼핑</span><i class="fa-solid fa-cart-shopping"></i></button>
                <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">문화시설</span><i class="fa-solid fa-gamepad"></i></button>
                <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">축제</span><i class="fa-solid fa-ticket"></i></button>
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
