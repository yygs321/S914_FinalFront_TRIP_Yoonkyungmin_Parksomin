<template>
    <div class="container">
        <h3 class="text-start">댓글</h3>
        <table class="table">
        <thead>
            <tr>
            <th>ID</th>
            <th>댓글 내용</th>
            <th>평점</th>
            <th>이미지</th>
            <th>동작</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="comment in comments" :key="comment.reviewId">
            <td>{{ comment.reviewId }}</td>
            <td>{{ comment.reviewContent }}</td>
            <td>{{ comment.rating }}</td>
            <td>{{ comment.image }}</td>
            <td>
                <button @click="editComment(comment)">수정</button>
                <button @click="deleteComment(comment.reviewId)">삭제</button>
            </td>
            </tr>
        </tbody>
        </table>
        <form @submit.prevent="addComment">
            <input type="text" v-model="newComment.reviewContent" placeholder="댓글 내용" />
            <input type="number" v-model="newComment.rating" placeholder="평점" />
            <input type="text" v-model="newComment.image" placeholder="이미지 URL" />
        <button type="submit">추가</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    
    name: 'TripReview',
    data() {
        return {
            comments: [
            { id: 1, text: "첫 번째 댓글" },
            { id: 2, text: "두 번째 댓글" },
            { id: 3, text: "세 번째 댓글" },
            ],
            newComment: {
                reviewContent: '',
                rating: 0,
                image: '',
            },
        };
    },
    methods: {
        addComment() {
            if (this.newComment.reviewContent) {
            // 백엔드와의 통신을 통해 새 댓글을 추가하는 로직을 구현해야 함
            // 백엔드로 전송할 데이터는 this.newComment 객체를 활용
            // 성공적으로 추가된 후, this.newComment 초기화

            // 예시: axios를 사용하여 백엔드로 POST 요청 보내기
            axios.post('/api/review', this.newComment)
                .then(() => {
                    // 성공적으로 추가된 후, this.newComment 초기화
                    this.newComment = {
                        reviewContent: '',
                        rating: 0,
                        image: '',
                    };
                })
                .catch((error) => {
                    console.error('댓글 추가 실패:', error);
                });
            }
        },
        editComment(commentId) {
            // 수정 로직을 추가하세요
            console.log("댓글 수정:", commentId);
        },
        deleteComment(reviewId) {
        // 백엔드와의 통신을 통해 댓글을 삭제하는 로직을 구현해야 함
        // reviewId를 사용하여 백엔드에서 해당 댓글을 삭제

        // 예시: axios를 사용하여 백엔드로 DELETE 요청 보내기
            axios.delete(`/api/review/${reviewId}`)
                .then(() => {
                // 성공적으로 삭제된 후, 화면에서 해당 댓글을 제거하기 위해 comments 배열에서도 삭제
                this.comments = this.comments.filter(comment => comment.reviewId !== reviewId);
                })
                .catch((error) => {
                console.error('댓글 삭제 실패:', error);
            });
        }
    },
}
</script>

<style>

</style>