<template>
    <div class="col-lg-4">
        <div id="map"></div>
    </div>
</template>

<script>

export default {
    name: 'KakaoMap',
    props : ["attraction", "latitude"],
    data() {
        return {
            map:null
        };
    },
    mounted() {
        // this.loadScript();
        if (window.kakao && window.kakao.maps) {
          // 카카오 객체가 있고, 카카오 맵그릴 준비가 되어 있다면 맵 실행
            this.loadMap();
        } else {
          // 없다면 카카오 스크립트 추가 후 맵 실행
            this.loadScript();
        }
    },
    methods: {
        loadScript() {
        const script = document.createElement("script");
        script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?appkey=1ee25645fc345a7a0c86b839df835af5&libraries=services,clusterer,drawing&autoload=false"
          script.onload = () => window.kakao.maps.load(this.loadMap); // 스크립트 로드가 끝나면 지도를 실행될 준비가 되어 있다면 지도가 실행되도록 구현

          document.head.appendChild(script); // html>head 안에 스크립트 소스를 추가
        },
        loadMap() {
            const container = document.getElementById("map"); // 지도를 담을 DOM 영역
            const options = {
            // 지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(this.attraction.latitude, this.attraction.longitude), // 지도의 중심좌표
            level: 3, // 지도의 레벨(확대, 축소 정도)
            };

            this.map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

            this.loadMaker()
        },
        // 지정한 위치에 마커 불러오기
        loadMaker() {
            const markerPosition = new window.kakao.maps.LatLng(
                this.attraction.latitude,
                this.attraction.longitude
            );

            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });

            marker.setMap(this.map);
        },
    }
};
</script>

<style scoped>
    #map{
        width:100%;
        height: 400px;
    }
</style>
