<template>
    <div class="col">
        <div class="card h-100">
            <img :src="require(`@/assets/place/${src}`)" class="card-img-top w-100 h-75" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold">{{title}}</h5>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CustomCard',
    props : ["src","title"]
}
</script>

<style scoped>
</style>
