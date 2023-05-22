<template>
  <div class="mypage">
    <trip-header></trip-header>
    <section class="section-header">
      <div class="container">
        <div class="row justify-content-center mt-4">

          <my-page></my-page>
          <my-page-info></my-page-info>
        </div>   
      </div>
    </section>
  </div>
</template>

<script>
import MyPage from '@/components/user/MyPage.vue'
import TripHeader from '@/components/layout/TripHeader.vue'
import MyPageInfo from '@/components/user/MyPageInfo.vue'
export default {
    name: 'MyPageView',
    components: { TripHeader, MyPage, MyPageInfo },
}
</script>

<style>

.mt-4 {
  margin-top: 1rem; /* 조절 가능한 간격 크기 */
}

.section-header {
  padding: 12px;
}

.flex-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

</style>