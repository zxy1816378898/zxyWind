<template>
    <div class="main">

        <div class="top_aside">
            <div class="title_box">
                <div class="title">排序</div>
                <div class="mini_title"><span>上升最快</span><span>最新</span></div>
                <div class="title">区域</div>
                <div class="mini_title">
                    <span>全部</span>
                    <span>内地</span>
                    <span>港台</span>
                    <span>欧美</span>
                    <span>日本</span>
                    <span>韩国</span>
                </div>
                <div class="title">类型</div>
                <div class="mini_title">
                    <span>全部</span>
                    <span>原生</span>
                    <span>现场版</span>
                    <span>官方版</span>
                    <span>网易出品</span>
                </div>
            </div>
        </div>

        <div class="bot_aside">

            <div class="li" v-for="item in mv_listAyy">

                <img class="img" :src="`${item.cover}`" />

                <div class="item">
                    <div class="name">{{ item.name }}</div>

                    <div class="artistName">{{ item.artistName }}</div>

                    <div class="playCount">
                        <span class="iconfont icon-record-video-full"></span>
                        {{ playCount_W }}万
                    </div>
                </div>

            </div>

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
        console.log(mv_listAyy.value);
        for (let i = 0; i < res.data.data.length; i++) {
            playCount_W.value = (res.data.data[i].playCount / 10000).toFixed(1);
        }
    });
};
</script>
<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

.top_aside {
    width: 100%;
    height: 22%;
    margin-bottom: 50px;
    .title_box {
        width: 100%;
        height: 260px;
        @include bbl;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .title {
            width: 100%;
            height: auto;
            font-size: 23px;
            padding-left: 20px;
        }

        .mini_title {
            width: 100%;
            height: auto;
            font-size: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
    }
}

.bot_aside {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    .li {
        width: 200px;
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
            padding-left: 10px;
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
</style>