<template>

                <!-- 상세정보 시작-->
                <div class="col-8 card border-gray-300 p-0 p-md-4 mb-4">
                    <div class="card-body">

                        <h3 class="h5 mb-0">사용자 정보</h3>
                        <form class="form mt-5" autocomplete="off">
                            <div class="mb-4">
                                <label for="InfoName" style="float:left">사용자 ID</label><br>
                                <a class="form-control rounded-pill" id="InfoId" required=""> 유저ID</a>
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


</template>

<script>
export default {

    name:'MypageInfo',
}
</script>

<style>

#submit {
  border: none;
  color: black;
  font-weight: bold;
  background-color: rgb(124, 224, 194);
  width:20%;
}

</style>