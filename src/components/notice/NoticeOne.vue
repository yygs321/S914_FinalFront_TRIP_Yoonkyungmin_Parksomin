

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
                                <div class="view">{{notice.title}}</div>
                            </div>
                            <div class="form-group text-left d-flex">
                                <label for="pw" style="width: 15%;">작성자</label>
                                <div class="view">{{notice.userId}}</div>
                            </div>
                            <div class="form-group text-left d-flex">
                                <label for="name" style="width: 15%;">작성 날짜</label>
                                <div class="view">{{notice.createdAt}}</div>
                            </div>
                            <div class="form-group text-left d-flex">
                                <label for="content" style="width: 15%;">내 용</label>
                                <div class="view">{{notice.content}}</div>
                            </div>
                            
                            <!-- 작성자인 경우에만 수정, 삭제 버튼 보이도록-->
                            <div class="d-grid mt-5">
                                <button v-if="isEditable" type="button" class="btn rounded btn-secondary"  value="수정" @click="modify(notice.id)">
                                </button>
                                <button v-if="isEditable" type="button" class="btn rounded btn-secondary" value="삭제" @click="remove(notice.id)">
                                    삭제
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
import { mapState } from "vuex";
const memberStore = "memberStore";

export default {
    name: 'NoticeOne',
    data() {
        return {
            notice: {},
        };
    },
    computed: {
        ...mapState(memberStore, ["userInfo"]),
        isEditable() {
            if (this.userInfo) {
                return (this.notice.userId == this.userInfo.id) && (this.notice.grade==0) ;
            }
            return false;
            
        },
    },
    created() {
        const id = this.$route.params.id;
        this.selectOne(id);
    },
    methods: {
        modify(id) {
            http.put("/notices/" + id, {
                title: this.notice.title,
                content: this.notice.content
            })
            .then(() => {
                alert("수정이 완료되었습니다.")
                this.$router.push({ path: `/notices/${id}` });
            })
            .catch((error) => {
                console.error("수정 실패:", error);
            });
        },
        remove(id) {
            http.delete("/notices/" + id).then(() => {
                    alert("삭제가 완료되었습니다!");
                    this.$router.push("/notices");
            });
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