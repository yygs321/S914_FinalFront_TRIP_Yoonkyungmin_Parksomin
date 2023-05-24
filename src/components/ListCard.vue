<template>
    <div class="col">
        <div class="card">
            <img :src="src" class="card-img-top w-100 h-100" alt="...">
            <div class="card-body">
                <h5 class="card-title text-start">{{title}}</h5>
                <div class="star-ratings">
                    <div 
                    class="star-ratings-fill space-x-2 text-lg"
                    :style="{ width: ratingToPercent() + '%' }"
                    >
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    <div class="star-ratings-base space-x-2 text-lg">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ListCard',
    props : ["src","title", "rating"],
    methods:{
        ratingToPercent() {
				return this.rating * 20 + 1.5;
			}
    }
}
</script>

<style scoped>

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

    img{
        background-size: cover;
    }
</style>
