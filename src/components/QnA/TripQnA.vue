

<template>
    <div class="insertBoard">
        <section class="section-header">
            <div class="container">
                <!-- 글 작성 시작-->
                <div class="card border-0 p-2 p-md-3 p-lg-5">
                    <div class="card-header bg-white border-0 text-center">
                        <h2>Notice</h2>
                    </div>
                    <div class="container text-center">
                        <form>
                            <div class="form-group text-left mt-3 d-flex">
                                <label for="title" style="width: 15%;">제 목</label>
                                <input type="text" class="form-control" name="title" v-model="title">
                            </div>
                            <div class="form-group text-left d-flex">
                                <label for="pw" style="width: 15%;">작성자</label>
                                <input type="text" class="form-control" id="name" name="name" v-model="name">
                            </div>
                            <div class="form-group text-left d-flex">
                                <label for="name" style="width: 15%;">작성 날짜</label>
                                <input type="text" class="form-control" id="date" name="date" v-model="date">
                            </div>
                            <div class="form-group text-left d-flex">
                                <label for="comment" style="width: 15%;">내 용</label>
                                
                                <textarea class="form-control" rows="5" id="content" name="content" v-model="content">
                                </textarea>
                            </div>
                            <!-- 공개여부-->
                            <div class="form-group text-left d-flex" style="flex-direction: row;">
                                <label for="secret" id="secret" style="width: 15%;">공개 여부</label>
                                <div style="flex-direction: column; margin: 0;">
                                    <div class="d-flex" style="width: 250px; margin: 0;">
                                        <input id="all" name="all" type="radio" tabindex="5" checked="checked">
                                        <label for="all" class="choice" style="display: inline-block; margin-left: 5px; width: 80%;">공개글</label>
                                    </div>
                                    <div class="d-flex" style="width: 250px; margin: 0;">
                                        <input id="secret" name="secret" type="radio" tabindex="6">
                                        <label for="secret" class="choice" style="display: inline-block; margin-left: 5px; width: 80%;">비밀글</label>
                                    </div>
                                </div>
                            </div>
                            <div class="d-grid mt-5">
                                <button type="submit" class="btn rounded btn-secondary">
                                    작성 완료
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import http from "@/axios/axios-common.js"

export default {
    name: 'TripNotice',
    data() {
        return {
            title: "",
            name: "",
            date: "",
            content: "",
            secret: ""
        };
    },
    methods: {
        registNotice() {
            http.post("/notices", {
                title: this.title,
                name: this.name,
                date: this.date,
                content: this.title,
                secret: this.secret
            })
            .then(() => {
                alert("등록 완료");
                this.$router.push({path: `/notices`})
            })
        }
    }

};
</script>

<style scoped>
label {
    width: 15%;
    text-align: left;
}

div {
    margin-bottom: 5%;
}

</style>