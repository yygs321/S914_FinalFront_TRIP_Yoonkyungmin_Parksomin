<template>
<section class="section-header">
        <div class="container">
                <div class="row justify-content-center mt-4">
                        <!--사진-->
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

                        <!-- info-->
                        <!-- 상세정보 시작-->
                        <div class="col-8 card border-gray-300 p-0 p-md-4 mb-4">
                                <div class="card-body">

                                        <h3 class="h5 mb-0">사용자 정보</h3>
                                        <form class="form mt-5" autocomplete="off">
                                        <div class="mb-4">
                                                <label for="InfoName" style="float:left">사용자 ID</label><br>
                                                <a class="form-control rounded-pill" id="InfoId" required=""> {{userinfo.userid}}</a>
                                        </div>
                                        <div class="mb-4">
                                                <label for="InfoOne" style="float:left">이름</label><br>
                                                <a class="form-control rounded-pill" id="InfoName" required=""> username</a>
                                        </div>
                                        <div class="mb-4">
                                                <label for="InfoBirth" style="float:left">비번</label><br>
                                                <a class="form-control rounded-pill" id="InfoPass" required=""> password</a>
                                        </div>
                                        <div class="mb-4 mx-1">
                                                <button id="submit" class="btn btn-primary mt-5 rounded-pill" type="submit">수정</button>
                                                
                                        </div>
                                        </form>
                                </div>
                        </div>
                        <!-- 상세정보 끝-->
                </div>
        </div>
</section>

<!-- 사용자 정보 시작-->

</template>

<script>
import { mapState } from "vuex";

const memberStore = "memberStore";

export default {
        name: 'MyPage',
        components: {},
        computed: {
                ...mapState(memberStore, ["userInfo"]),
        },
}

</script>

<style>
#noBtn {
        background-color: white;
        color: blue;
        border: 1px solid  blue; /* Green */
}

#submit {
        border: none;
        color: black;
        font-weight: bold;
        background-color: rgb(124, 224, 194);
        width:20%;
}

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