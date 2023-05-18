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
			<div id="carouselExample2" class="carousel slide my-3">
				<div class="carousel-inner">
					<div class="carousel-item ms-0 active">
						<div class="row">
							<img class="col" src="@/assets/sunmarina-beach.jpg" alt="">
							<img class="col" src="@/assets/sunmarina-beach.jpg" alt="">
							<img class="col" src="@/assets/sunmarina-beach.jpg" alt="">
							<img class="col" src="@/assets/sunmarina-beach.jpg" alt="">
						</div>
					</div>

					<div class="carousel-item ms-0">
						<div class="row">
							<img class="col" src="@/assets/sunmarina-beach.jpg" alt="">
							<img class="col" src="@/assets/sunmarina-beach.jpg" alt="">
							<img class="col" src="@/assets/sunmarina-beach.jpg" alt="">
							<img class="col" src="@/assets/sunmarina-beach.jpg" alt="">
						</div>
					</div>
				</div>

				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>

		<h1 class="text-start ms-2 my-2">둘러보기</h1>
		<div class="container">
		<div id="carouselExample4" class="carousel slide">
			<div class="carousel-inner">
			<div class="carousel-item ms-0 active">
				<div class="row">
				<div class="col">
					<div class="d-flex position-relative" style="height: 100%;">
					<h2 class="d-flex position-absolute bottom-0 start-50 translate-middle z-1 text-white font-weight-bold" style="transform: translate(-50%, -50%);">
						서울
					</h2>
					<img class="w-100 h-100 z-0 position-relative" src="@/assets/Seoul.jpg" alt="">
					</div>
				</div>
				<div class="col">
					<div class="d-flex position-relative" style="height: 100%;">
					<h2 class="d-flex position-absolute bottom-0 start-50 translate-middle z-1 text-white font-weight-bold" style="transform: translate(-50%, -50%);">
						부산
					</h2>
					<img class="w-100 h-100 z-0 position-relative" src="@/assets/busan.jpg" alt="">
					</div>
				</div>
				<div class="col">
					<div class="d-flex position-relative" style="height: 100%;">
					<h2 class="d-flex position-absolute bottom-0 start-50 translate-middle z-1 text-white font-weight-bold" style="transform: translate(-50%, -50%);">
						제주
					</h2>
					<img class="w-100 h-100 z-0 position-relative" src="@/assets/jeju.jpg" alt="">
					</div>
				</div>
				</div>
			</div>
			<div class="carousel-item ms-0">
				<div class="row">
				<div class="col">
					<div class="d-flex position-relative" style="height: 100%;">
					<h2 class="d-flex position-absolute bottom-0 start-50 translate-middle z-1 text-white font-weight-bold" style="transform: translate(-50%, -50%);">
						대전
					</h2>
					<img class="w-100 h-100 z-0 position-relative" src="@/assets/daejeon.jpg" alt="">
					</div>
				</div>
				<div class="col">
					<div class="d-flex position-relative" style="height: 100%;">
					<h2 class="d-flex position-absolute bottom-0 start-50 translate-middle z-1 text-white font-weight-bold" style="transform: translate(-50%, -50%);">
						속초
					</h2>
					<img class="w-100 h-100 z-0 position-relative" src="@/assets/sokcho.jpg" alt="">
					</div>
				</div>
				<div class="col">
					<div class="d-flex position-relative" style="height: 100%;">
					<h2 class="d-flex position-absolute bottom-0 start-50 translate-middle z-1 text-white font-weight-bold" style="transform: translate(-50%, -50%);">
						경주
					</h2>
					<img class="w-100 h-100 z-0 position-relative" src="@/assets/gyungju.jpg" alt="">
					</div>
				</div>
				</div>
			</div>
			<div class="carousel-item ms-0">
				<div class="row">
				<div class="col">
					<div class="d-flex position-relative" style="height: 100%;">
					<h2 class="d-flex position-absolute bottom-0 start-50 translate-middle z-1 text-white font-weight-bold" style="transform: translate(-50%, -50%);">
						강릉
					</h2>
					<img class="w-100 h-100 z-0 position-relative" src="@/assets/gangneung.jpg" alt="">
					</div>
				</div>
				<div class="col">
					<div class="d-flex position-relative" style="height: 100%;">
					<h2 class="d-flex position-absolute bottom-0 start-50 translate-middle z-1 text-white font-weight-bold" style="transform: translate(-50%, -50%);">
						여수
					</h2>
					<img class="w-100 h-100 z-0 position-relative" src="@/assets/yeosu.jpg" alt="">
					</div>
				</div>
				<div class="col">
					<div class="d-flex position-relative" style="height: 100%;">
					<h2 class="d-flex position-absolute bottom-0 start-50 translate-middle z-1 text-white font-weight-bold" style="transform: translate(-50%, -50%);">
						전주
					</h2>
					<img class="w-100 h-100 z-0 position-relative" src="@/assets/jeonju.jpg" alt="">
					</div>
				</div>
				</div>
			</div>

			</div>

			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample4" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExample4" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
			</button>
		</div>
		</div>


	</div>
</template>

<script>
export default {
	name: 'TripMain'
}
</script>

<style scoped>
	.d-flex > img {
		filter: brightness(50%);
	}
	
</style>