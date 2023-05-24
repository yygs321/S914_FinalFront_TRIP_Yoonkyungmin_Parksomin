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
                                            <td>{{ notice.title }}</td>
                                            <td>{{ notice.content }}</td>
                                            <td>{{ notice.createdAt }}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        <div class="row mr-1 mt-3"> 
                            <a class="" id="writeBtn" aria-current="page"><router-link to="/insertNotice">글쓰기</router-link>
                            </a>
                        </div>
                    </div>
                    <div v-else class="text-center">내용이 없습니다.</div>
                    
                    
                    <div class="row mt-3">
                        <!-- Pagination -->
                        <nav aria-label="Page navigation">
                            <ul class="pagination justify-content-center mt-4">
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li class="page-item active" aria-current="page">
                                <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">Next</a>
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

export default {
    name: 'NoticeBoard',
    data() {
        return {
            notices: [],
        };
    },
    created() {
        this.selectAll();
    },
    methods: {
        selectAll() {
            http.get("/notices")
                .then((response) => (this.notices = response.data))
                .catch(console.log("data확인"))
        },
    },
};
</script>

<style scoped>


#writeBtn >a {
border: none;
color: black;
font-weight: bold;
text-decoration: none !important;
float:right

}


</style>
