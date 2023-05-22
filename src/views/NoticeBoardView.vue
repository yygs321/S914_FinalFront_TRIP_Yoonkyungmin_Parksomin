<template>
  <div class="notice">

    <trip-header></trip-header>
    <div class="container">

      <notice-board></notice-board>
    </div>

  </div>

</template>

<script>
import TripHeader from '@/components/layout/TripHeader.vue'
import NoticeBoard from '@/components/notice/NoticeBoard.vue'
export default {
  name:'NoticeBoardView',
  components: { TripHeader, NoticeBoard},

}
</script>


<style scoped>
.container {
  padding: 12px;
}

</style>
