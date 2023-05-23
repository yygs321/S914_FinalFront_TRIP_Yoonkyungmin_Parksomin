<template>
    <div class="container">
        <table class="table">
            <tbody>
                <tr>
                    <td v-for="weather in weathers" :key="weather.day + 'day'" colspan=2>{{weather.day}}</td>
                </tr>
                <tr>
                    <td v-for="weather in weathers" :key="weather.day + 'am'">
                        <img :src="weather.amImg" alt="" class="w-100">
                    </td>
                    <td v-for="weather in weathers" :key="weather.day + 'pm'">
                        <img :src="weather.pmImg" alt="" class="w-100">
                    </td>
                    
                </tr>
                <tr>
                    <td colspan=2 v-for="weather in weathers" :key="weather.day + 'temper'">{{weather.lowTemperature}} / {{weather.highTemperature}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import http from "@/axios/axios-common.js"

export default {
    name: 'WeatherTable',
    props : ["sido", "gugun"],
    data() {
        return {
            weathers:{}
        };
    },
    mounted() {
        this.selectWeather();
    },
    methods: {
        selectWeather(){
        http.get("/attractions/weather?sido=" + this.sido + "&gugun=" + this.gugun)
            .then((response) => 
            {
                this.weathers = response.data
            })
        },
    }
};
</script>

<style scoped>

</style>
