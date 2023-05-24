

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
                                <label for="userId" style="width: 15%;">작성자</label>
                                <input type="text" class="form-control" id="userId" name="userId" v-model="userId">
                            </div>
                            <div class="form-group text-left d-flex">
                                <label for="createdAt" style="width: 15%;">작성 날짜</label>
                                <input type="text" class="form-control" id="createdAt" name="createdAt" v-model="createdAt">
                            </div>
                            <div class="form-group text-left d-flex">
                                <label for="content" style="width: 15%;">내 용</label>
                                
                                <textarea class="form-control" rows="5" id="content" name="content" v-model="content">
                                </textarea>
                            </div>
                            
                            <div class="d-grid mt-5">
                                <button type="submit" class="btn rounded btn-secondary" @click="registNotice">
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
            userId: "",
            createdAt: "",
            content: ""
        };
    },
    methods: {
        registNotice() {
            http.post("/notices", {
                title: this.title,
                userId: this.userId,
                createdAt: this.createdAt,
                content: this.title,
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