<template>
    <div class="col">
        <div class="d-flex position-relative" style="height: 100%;">
            <h2 class="d-flex position-absolute bottom-0 start-50 translate-middle z-1 text-white font-weight-bold" style="transform: translate(-50%, -50%);">
                {{title}}
            </h2>
            <img class="w-100 h-100 z-0 position-relative" :src="require(`@/assets/${src}`)" alt="" @click="search">
        </div>
    </div>
</template>

<script>

export default {
    name: 'CustomCardArea',
    props : ["src","title"],
    methods: {
        search(){
            this.$router.push('list/keyword/' + this.title);
		},
    }
}

</script>

<style scoped>
	.d-flex > img {
		filter: brightness(50%);
	}
</style>
