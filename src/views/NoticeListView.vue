<template>
  <div class="notice">

    <trip-header></trip-header>
    <div class="container">

      <notice-list></notice-list>
    </div>

  </div>

</template>

<script>
import TripHeader from '@/components/TripHeader.vue'
import NoticeList from '@/components/NoticeList.vue'
export default {
  name:'NoticeListView',
  components: { TripHeader, NoticeList},

}
</script>


<style scoped>
.container {
  padding: 12px;
}

</style>
