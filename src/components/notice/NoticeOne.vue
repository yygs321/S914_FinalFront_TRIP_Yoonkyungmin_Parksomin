

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
                                <input type="text" class="form-control" name="title" v-model="notice.title" readonly>
                            </div>
                            <div class="form-group text-left mt-3 d-flex">
                                <label for="title" style="width: 15%;">작성자</label>
                                <input type="text" class="form-control" style="width: 30%;" name="title" v-model="notice.userId" readonly>
                                <label class="ms-2" for="title" style="width: 15%;">작성일</label>
                                <input type="text" class="form-control" name="title" style="width: 40%;" v-model="notice.createdAt" readonly>
                            </div>
                            
                            <div class="form-group text-left d-flex">
                                <label for="content" style="width: 15%;">내 용</label>                                
                                <textarea class="form-control" rows="5" id="content" name="content" v-model="notice.content" readonly>
                                </textarea>
                            </div>
                            
                            <div class="mt-5 text-end">
                                <button v-if="isEditable" type="button" class="btn rounded btn-secondary me-1"  value="수정" @click="moveModify(notice.id)">
                                    수정
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
    data:function() {
        return {
            notice: {},
        };
    },
    created() {
        const id = this.$route.params.id;
        this.selectOne(id);
    },
    computed: {
        ...mapState(memberStore, ["userInfo"]),
        isEditable() {
            if (this.userInfo) {
                return this.userInfo.grade==0;
            }
            return false;
            
        },
    },
    methods: {
        remove(id) {
            http.delete("/notices/" + id).then(() => {
                    alert("삭제가 완료되었습니다!");
                    this.$router.push("/notices");
            });
        },
        selectOne(id){
			http.get("/notices/" + id)
				.then((response) => 
				{
					this.notice = response.data
				})
        },
        moveModify(id){
            this.$router.push("/notices/modify/" + id)
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

    table {
      border-collapse: collapse;
      width: 100%;
    }
    
    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
    }
    
    th {
      background-color: #f2f2f2;
    }

</style>