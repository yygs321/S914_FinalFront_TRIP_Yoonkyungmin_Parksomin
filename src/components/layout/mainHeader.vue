<template>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src="@/assets/logo.png" class="fs-4 w-25"/>
        </a>

        <!-- after login-->
        
        <ul class="nav nav-pills" v-if="userInfo">
            <li class="nav-item d-flex">{{userInfo.name}}({{userInfo.id}})님 환영합니다.</li>
            <li class="nav-item">
                <a class="nav-link mx-1 rounded-pill" id="loginBtn" aria-current="page"><router-link to="/users/mypage">마이페이지</router-link></a>
            </li>
            <li class="nav-item"><a class="nav-link mx-1 rounded-pill" id="logoutBtn" @click.prevent="onClickLogout"><router-link to="/">로그아웃</router-link></a></li>
        </ul>
    

        <!-- before login-->
        <ul class="nav nav-pills" v-else>
            <li class="nav-item"><a class="nav-link mx-1 rounded-pill" id="loginBtn" aria-current="page"><router-link to="/users/login">로그인</router-link></a></li>
            <li class="nav-item"><a class="nav-link mx-1 rounded-pill" id="signBtn"><router-link to="/signup">회원가입</router-link></a></li>
        </ul>
    </header>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
    name: 'MainHeader',
    data() {
        return {
            checkid:"check"
        };
    },
    computed: {
        ...mapState(memberStore, ["isLogin", "userInfo"]),
        ...mapGetters(memberStore,["checkUserInfo"]),
    },
    created() { 
        console.log("생성?");
    },
    methods: {
        ...mapActions(memberStore, ["userLogout"]),
        // ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
        onClickLogout() {
            // this.SET_IS_LOGIN(false);
            // this.SET_USER_INFO(null);
            // sessionStorage.removeItem("access-token");
            // if (this.$route.path != "/") this.$router.push({ name: "main" });
            console.log(this.userInfo.userid);
            //vuex actions에서 userLogout 실행(Backend에 저장 된 리프레시 토큰 없애기
            //+ satate에 isLogin, userInfo 정보 변경)
            // this.$store.dispatch("userLogout", this.userInfo.userid);
            this.userLogout(this.userInfo.userid);
            sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
            sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
            if (this.$route.path != "/") this.$router.push({ name: "main" });
        },
    },
}
</script>

<style>
.d-flex{
    align-items: center;
}

.d-flex > button {
    width: 15%;
}

.nav-pills > .nav-item > .nav-link {
    color: white;
    background-color: black !important;
}

#loginBtn > a, #signBtn > a, #logoutBtn >a{
    text-decoration: none !important;
    color: white !important;
    font-weight: 400;
}
</style>