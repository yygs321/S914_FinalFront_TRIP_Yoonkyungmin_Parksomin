<template>
<div class="dashboard">

    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h3 class="m-0 font-weight-bold text-primary"> Notice </h3>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="dataTables_length" id="dataTable_length">
                                <div style="float:left">
                                    <a>정렬방식</a>
                                    <select name="dataTable_length" aria-controls="dataTable" class="custom-select custom-select-sm form-control form-control-sm ">
                                        <option value="25">최신순</option>
                                        <option value="50">오래된 순</option>
                                    </select> 
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div id="dataTable_filter" class="dataTables_filter">
                                <div style="float:right">
                                    <a>Search</a>
                                    <input type="search" class="form-control form-control-sm rounded-pill" placeholder="" aria-controls="dataTable">
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4" v-if="notices.length">
                        <div class="col-sm-12">
                            <table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style="width: 100%;" >
                                <thead>
                                    <tr role="row">
                                        <th class="sorting sorting_asc" aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" style="width: 10%;" id="no">No</th>
                                        <th class="sorting" aria-controls="dataTable" rowspan="1" colspan="1" style="width: 30%" id="noticeTitle">제목</th>
                                        <th class="sorting" aria-controls="dataTable" rowspan="1" colspan="1" style="width: 40%" id="content">내용</th>
                                        <th class="sorting" aria-controls="dataTable" rowspan="1" colspan="1" style="width: 20%" id="date">작성 날짜</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd" v-for="notice in notices" :key="notice.id">
                                            <td>{{ notice.id }}</td>
                                            <td>
                                                <router-link :to="`/notices/${notice.id}`">
                                                    {{ notice.title }}
                                                </router-link>
                                            </td>
                                            <td>{{ notice.content }}</td>
                                            <td>{{ notice.createdAt }}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        <div class="mt-3" style="fl"> 
                            
                            <button v-if="isEditable" id="writeBtn" class="btn btn-lg btn-primary mb-2 mx-2 rounded-pill" style="width: 10%; float: right;"  @click="goToInsert">
                                글쓰기
                            </button>
                        </div>
                    </div>
                    <div v-else class="text-center">내용이 없습니다.</div>
                    
                    
                    <div class="row mt-3">
                        <!-- Pagination -->
                        <nav aria-label="Page navigation">
                            <ul class="pagination justify-content-center mt-4">
                                <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                                    <a class="page-link" href="#" @click="previousPage">이전</a>
                                </li>
                                <li class="page-item" v-for="pageNumber in displayedPages" :key="pageNumber" :class="{ 'active': pageNumber === currentPage }">
                                    <a class="page-link" href="#" @click="goToPage(pageNumber)">{{ pageNumber }}</a>
                                </li>
                                
                                <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                                    <a class="page-link" href="#" @click="nextPage">다음</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import http from "@/axios/axios-common.js"
import { mapState } from "vuex";
const memberStore = "memberStore";

export default {
    name: 'NoticeBoard',
    data() {
        return {
            notices: [],
            currentPage: 1,
			pageSize: 12,
			maxDisplayedPages: 5,
        };
    },
    computed: {
        ...mapState(memberStore, ["userInfo"]),
        isEditable() {
            //userInfo가 없는데 grade를 찾으려하면 error 발생
            if (this.userInfo) {
                return this.userInfo.grade == 0
            }
            return false;
        },
        totalPages() {
			return Math.ceil(this.notices.length / this.pageSize);
		},

		displayedNotices() {
			const startIndex = (this.currentPage - 1) * this.pageSize;
			const endIndex = startIndex + this.pageSize;
			return this.notices.slice(startIndex, endIndex);
		},
		displayedPages() {
		const totalPages = this.totalPages;
		const currentPage = this.currentPage;
		const maxDisplayedPages = this.maxDisplayedPages;
		let startPage = 1;
		let endPage = totalPages;

		if (totalPages > maxDisplayedPages) {
			const halfDisplayedPages = Math.floor(maxDisplayedPages / 2);
			if (currentPage <= halfDisplayedPages) {
			endPage = maxDisplayedPages;
			} else if (currentPage >= totalPages - halfDisplayedPages) {
			startPage = totalPages - maxDisplayedPages + 1;
			} else {
			startPage = currentPage - halfDisplayedPages;
			endPage = currentPage + halfDisplayedPages;
			}
		}

		return Array(endPage - startPage + 1)
			.fill()
			.map((_, index) => startPage + index);
		},
    },
    created() {
        this.selectAll();
    },
    methods: {
        selectAll() {
            http.get("/notices").then((response)=> (this.notices=response.data))
        },
        goToInsert() {
            this.$router.push('/insertNotice');
        },
        previousPage() {
			if (this.currentPage > 1) {
				this.currentPage--;
			}
		},
		nextPage() {
			if (this.currentPage < this.totalPages) {
				this.currentPage++;
			}
		},
		goToPage(pageNumber) {
			this.currentPage = pageNumber;
		},
    },
};
</script>

<style scoped>


#writeBtn {
border: none;
color: black;
font-weight: bold;
font-size: medium;
text-decoration: none !important;
background-color:rgb(124, 224, 194);
}


</style>
