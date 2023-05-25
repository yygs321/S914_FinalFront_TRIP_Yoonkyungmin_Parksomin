<template>
  <div>
    <div>
      <trip-detail></trip-detail>
    </div>
    <div>
      <trip-review></trip-review>
    </div>

  </div>
</template>

<script>
import TripDetail from '@/components/TripDetail.vue'
import TripReview from '@/components/TripReview.vue'

export default {
  name: 'TripDetailView',
  components: {TripDetail, TripReview},



}
</script>

<style>

</style>