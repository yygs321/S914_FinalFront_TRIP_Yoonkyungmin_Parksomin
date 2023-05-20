<template>
<div class="dashboard">
    <!-- <h2 class="dashboard-title">공지사항</h2>
    <div v-for="notice in notices" :key="notice.id" class="notice-item">
        <table id="todo-list">
            <colgroup>
            <col style="width: 20%" />
            <col style="width: 30%" />
            <col style="width: 50%" />
            </colgroup>
            <thead>
            <tr>
                <th>완료 여부</th>
                <th>번 호</th>
                <th>할 일</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="notice in notices" :key="notice.id" class="notice-item">
                <td><h3 class="notice-title">{{ notice.title }}</h3></td>
                <td><p class="notice-content">{{ notice.content }}</p></td>
                <td><span class="notice-date"></span></td>
                <td><span class="notice-author">작성자: {{ notice.author }}</span></td>
            </tr>
            </tbody>
    </table>


        
    </div> -->

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
                                        <option value="10">제목순</option>
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
                    <div class="row mt-4">
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
                                    <tr class="odd">
                                            <td class="sorting_1">Airi Satou</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>33</td>
                                    </tr>
                                    <tr class="even">
                                            <td class="sorting_1">Angelica Ramos</td>
                                            <td>Chief Executive Officer (CEO)</td>
                                            <td>London</td>
                                            <td>47</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
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
export default {
    name: 'NoticeList',
    data() {
        return {
            notices: [
                {
                    id: 1,
                    title: '공지사항 제목 1',
                    content: '공지사항 내용 1',
                    date: '2023-05-19',
                    author: '관리자',
                },
                {
                    id: 2,
                    title: '공지사항 제목 2',
                    content: '공지사항 내용 2',
                    date: '2023-05-18',
                    author: '관리자',
                },
            // Add more notices as needed
            ],
        };
    },
};
</script>

<style scoped>





</style>
