
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
                        {{ $utils.formartNum(item.playCount) }}
                    </div>
                </div>

            </div>

        </div>


    </div>
</template>
<script setup>
import { mv } from '@/api/http.js';
const mv_listAyy = ref([]);

onMounted(() => {
    getMv();
})

const getMv = () => {
    mv({}).then((res) => {
        mv_listAyy.value = res.data.data;
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
    height: 260px;

    .title_box {
        width: 100%;
        height: 260px;
        @include bbl;
        display: flex;
        flex-direction: column;

        .title {
            width: 100%;
            height: 20%;
            line-height: 180%;
            font-size: 23px;
            margin-left: 20px;
        }

        .mini_title {
            width: 100%;
            height: 20%;
            line-height: 180%;
            font-size: 20px;
            display: flex;
            flex-direction: row;

            & span {
                margin: 0 20px;
            }

            // justify-content: space-around;
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