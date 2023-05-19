<template>

<!-- 사용자 정보 시작-->
<div class="card board col-4 col-lg-4 mb-4 ">

                <div class="card-header bg-white border-0 text-center d-flex flex-row flex-lg-column align-items-center justify-content-center px-1 px-lg-4">
                        <div class="profile-thumbnail dashboard-avatar mx-lg-5 me-3 mt-4">
                                <img src="@/assets/profile.jpg" class="card-img-top rounded-circle border-white" alt="Bonnie Green Portrait"/>
                        </div>
                        <span class="h5 my-0 my-lg-4 me-3 me-lg-0">Hi! I'm kimssafy</span>
                        
                </div>
                <div class="card-footer pt-5 bg-white border-0">
                        <a href="#" class="btn btn-gray-300 btn-xs" data-bs-toggle="modal"
                                                data-bs-target="#modal-default">
                                <span class="me-2">
                                        <span class="fas fa-sign-out-alt" ></span>
                                        탈퇴하기
                                </span>
                        </a>
                        <div class="modal fade" id="modal-default" tabindex="-1" aria-labelledby="modal-default"
                                style="display: none;" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                        <div class="modal-header">
                                        <h2 class="h6 modal-title">정말로 탈퇴하시겠습니까?</h2>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-footer">
                                        <a href="#" type="button" class="btn btn-outline-danger">탈퇴</a>
                                        <button type="button" class="btn ms-auto" data-bs-dismiss="modal" id="noBtn">아니오</button>
                                        </div>
                                </div>
                                </div>
                        </div>
                </div>

</div>

</template>

<script>
export default {
        name: 'MyPage',
}

</script>

<style>
#noBtn {
  background-color: white;
  color: blue;
  border: 1px solid  blue; /* Green */
}

</style>