<template>
  <div class="mypage">
    <trip-header></trip-header>
    <my-page></my-page>

  </div>
</template>

<script>
import MyPage from '@/components/user/MyPage.vue'
import TripHeader from '@/components/layout/TripHeader.vue'
export default {
    name: 'MyPageView',
    components: { TripHeader, MyPage },
}
</script>

<style>



</style>