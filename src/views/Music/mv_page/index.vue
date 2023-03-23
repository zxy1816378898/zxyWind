<template>
    <div class="main">

        <div class="left_aside">

            <div class="li" v-for="item in mv_listAyy">

                <img class="img" :src="`${item.cover}`" />

                <div class="item">
                    <div class="name">{{ item.name }}</div>

                    <div class="artistName">{{ item.artistName }}</div>

                    <div class="playCount">{{ playCount_W }}万</div>
                </div>

            </div>

        </div>

        <div class="right_aside">

        </div>
    </div>
</template>
<script setup>
import { mv } from '@/api/http.js';
const playCount_W = ref('')
const mv_listAyy = ref([]);

onMounted(() => {
    getMv();
})

const getMv = () => {
    mv({}).then((res) => {
        mv_listAyy.value = res.data.data;
        for (let i = 0; i < res.data.data.length; i++) {
            playCount_W.value = (res.data.data[i].playCount / 10000).toFixed(1);
            console.log(playCount_W.value);
        }
    });
};
</script>
<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow-y: auto;
}

.left_aside {
    width: 80%;
    height: 100%;
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    .li {
        width: 190px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        @include bbl;
        margin: 15px 0;

        img {
            width: 180px;
            height: 110px;
            position: relative;
            padding-left: 5px;
            padding-top: 5px;
        }

        .item {
            width: 100%;
            height: 60px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .name {
                font-size: 15px;
                text-overflow: ellipsis;
                height: 20px;
                overflow: hidden;
                white-space: nowrap;
                padding-left: 5px;
            }

            .artistName {
                @extend .name;
                font-size: 14px;
            }

            .playCount {
                @extend .artistName;
            }
        }


    }
}

.right_aside {
    width: 20%;
    height: 100%;
    border: 1px solid red;
}
</style>