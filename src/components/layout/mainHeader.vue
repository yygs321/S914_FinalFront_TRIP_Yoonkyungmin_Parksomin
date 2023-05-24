<template>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src="@/assets/logo.png" class="fs-4 w-25"/>
        </a>
        <ul class="nav nav-pills" >
            <li class="nav-item"><a class="nav-link mx-1 rounded-pill" id="loginBtn" aria-current="page"><router-link to="/users/login">로그인</router-link></a></li>
            <li class="nav-item"><a class="nav-link mx-1 rounded-pill" id="signBtn"><router-link to="/signup">회원가입</router-link></a></li>
        </ul>
    </header>
</template>

<script>
export default {
    name:'MainHeader',
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

#loginBtn > a, #signBtn > a{
    text-decoration: none !important;
    color: white !important;
    font-weight: 400;
}
</style>