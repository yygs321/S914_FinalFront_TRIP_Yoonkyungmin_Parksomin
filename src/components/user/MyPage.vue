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
					<span class="h5 my-0 my-lg-4 me-3 me-lg-0">Hi! I'm {{userInfo.name}}</span>
					
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
							<button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" aria-label="Close" @click="resign">탈퇴</button>
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
					<form class="form mt-5">
						<div class="mb-4">
							<label for="InfoId" style="float:left">아이디</label><br>
							<input type="text" class="form-control rounded-pill" id="InfoId" v-model="id" readonly>
						</div>
						<div class="mb-4">
							<label for="InfoName" style="float:left">이름</label><br>
							<input type="text" class="form-control rounded-pill" id="InfoName" v-model="username" readonly>
						</div>
						<div class="mb-4">
							<label for="InfoPW" style="float:left">비밀번호</label><br>
							<input type="password" class="form-control rounded-pill" id="InfoPW" v-model="pass">
						</div>
						<div class="mb-4">
							<label for="InfoEmail" style="float:left">이메일</label><br>
							<input type="text" class="form-control rounded-pill" id="InfoEmail" v-model="email">
						</div>
						<div class="mb-4">
							<label for="InfoAddress" style="float:left">주소</label><br>
							<input type="text" class="form-control rounded-pill" id="InfoAddress" v-model="address">
						</div>
						<div class="mb-4 mx-1">
							<button id="modifyBtn" class="btn btn-primary mt-5 rounded-pill"  @click.prevent="modify">수정</button>
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
import { mapState, mapActions, mapMutations } from "vuex";
import http from "@/axios/axios-common.js"

const memberStore = "memberStore";

export default {
	name: 'MyPage',
	components: {},
	data(){
		return{
			id: "",
			username: "",
			pass: "",
			email: "",
			address: ""
		}
	},
	created(){
			this.id =this.userInfo.id;
			this.username= this.userInfo.name;
			this.pass= this.userInfo.pass;
			this.email= this.userInfo.email;
			this.address= this.userInfo.address;
	}
	,
	computed: {
		...mapState(memberStore, ["userInfo"]),
	},
	watch:{
		userInfo(){
			this.id =this.userInfo.id;
			this.username= this.userInfo.name;
			this.pass= this.userInfo.pass;
			this.email= this.userInfo.email;
			this.address= this.userInfo.address;
		}
	},
	methods: {
		...mapActions(memberStore, ["userLogout"]),
		...mapMutations(memberStore,["SET_USER_INFO"]),
        // ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
        onClickLogout() {
            // this.SET_IS_LOGIN(false);
            // this.SET_USER_INFO(null);
            // sessionStorage.removeItem("access-token");
            // if (this.$route.path != "/") this.$router.push({ name: "main" });
            console.log(this.userInfo.id);
            //vuex actions에서 userLogout 실행(Backend에 저장 된 리프레시 토큰 없애기
            //+ satate에 isLogin, userInfo 정보 변경)
            // this.$store.dispatch("userLogout", this.userInfo.userid);
            this.userLogout(this.userInfo.id);
            sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
            sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
            if (this.$route.path != "/") this.$router.push({ name: "home" });
        },
		modify(){
			console.log("??");
			let $this = this;
			const newUserInfo = {
				id: this.id,
				name: this.username,
				pass: this.pass,
				email: this.email,
				address: this.address
				};
			http.put("/users",newUserInfo )
				.then(() => 
				{
					console.log("들어오심 ?")
					newUserInfo.pass = "";
					console.log(newUserInfo);
					$this.SET_USER_INFO(newUserInfo);
					
					// this.$router.push({name:"mypage"})
				})
				.catch(function(error){
					alert(error)
			})
		},
		resign(){
			http.delete("/users/" + this.userInfo.id) 
				.then((response) => 
				{
					response;
					alert('그동안 이용해주셔서 감사합니다.')
					this.onClickLogout()
					// this.$router.push({name:"home"})
				})
				.catch(function(error){
					alert(error)
				})
			}
	},
}

</script>

<style>
#noBtn {
	background-color: white;
	color: blue;
	border: 1px solid  blue; /* Green */
}

#modifyBtn {
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