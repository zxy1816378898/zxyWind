<template>
    <div class="playlist">
        <div class="filter">

            <div class="filter-item">
                <div class="filter-title">语种</div>
                <div class="filter-box">
                    <span class="item-box"><em>华语</em></span>
                    <span class="item-box"><em>欧美</em></span>
                    <span class="item-box"><em>日语</em></span>
                    <span class="item-box"><em>韩语</em></span>
                    <span class="item-box"><em>粤语</em></span>
                </div>
            </div>

            <div class="filter-item">
                <div class="filter-title">风格</div>
                <div class="filter-box">
                    <span class="item-box"><em>流行</em></span>
                    <span class="item-box"><em>摇滚</em></span>
                    <span class="item-box"><em>民谣</em></span>
                    <span class="item-box"><em>电子</em></span>
                    <span class="item-box"><em>舞曲</em></span>
                    <span class="item-box"><em>说唱</em></span>
                </div>
            </div>

            <div class="filter-item">
                <div class="filter-title">场景</div>
                <div class="filter-box">
                    <span class="item-box"><em>清晨</em></span>
                    <span class="item-box"><em>夜晚</em></span>
                    <span class="item-box"><em>学习</em></span>
                    <span class="item-box"><em>工作</em></span>
                    <span class="item-box"><em>地铁</em></span>
                    <span class="item-box"><em>驾车</em></span>
                </div>
            </div>

            <div class="filter-item">
                <div class="filter-title">主题</div>
                <div class="filter-box">
                    <span class="item-box"><em>综艺</em></span>
                    <span class="item-box"><em>影视原声</em></span>
                    <span class="item-box"><em>ACG</em></span>
                    <span class="item-box"><em>儿童</em></span>
                    <span class="item-box"><em>校园</em></span>
                    <span class="item-box"><em>游戏</em></span>
                </div>
            </div>


        </div>
    </div>
    <div class="list-container">
        <div class="list-head">
            <h2>全部歌单</h2>
            <div class="type">
                <span :class="'active-' + item.code" v-for="item in typeAyy" @click="openClick(item)">{{ item.title
                }}</span>
            </div>
        </div>
        <div class="playlist2">
            <div class="item" v-for="item in itemAyy">

                <img class="img" :src="`${item.coverImgUrl}`" />

                <div class="text">{{ item.description }}</div>

                <div class="lable">#{{ item.tags[0] }} #{{ item.tags[1] }} #{{ item.tags[2] }}</div>

                <div class="mini_lable">
                    <span class="iconfont icon-erji"></span>
                    {{ $utils.formartNum(item.playCount) }}/{{ item.trackCount }}首

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { playList } from '@/api/http.js';

const typeAyy = ref([
    {
        title: '热门',
        code: '0'
    }, {
        title: '最新',
        code: '1'
    }

])
const itemAyy = ref([])
const openClick = (a) => {
    typeAyy.value.forEach((e) => {
        e.code = 1;
    });
    a.code = 0;
}
onMounted(() => {
    getplayList();
})

const getplayList = () => {
    playList({}).then((res) => {
        console.log(res.data.playlists);
        itemAyy.value = res.data.playlists
        console.log(itemAyy.value);
    });
};

</script>

<style lang="scss" scoped>
.playlist {
    padding-top: 40px;

    .filter {
        display: flex;
        height: 116px;
        padding: 20px;
        margin-bottom: 25px;
        @include bbl;
        border-radius: 12px;
        box-shadow: 0 20px 27px #0000000d;

        .filter-item {
            flex: 1;
            border: 0;
            padding-left: 0;

            .filter-title {
                font-weight: 700;
                margin-bottom: 5px;
            }

            .filter-box {
                font-size: 20px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;

                .item-box {
                    width: 50%;
                    height: 30px;


                    & em {
                        display: inline-block;
                        font-style: normal;
                        font-size: 15px;
                        line-height: 26px;
                        margin-top: 4px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}

.list-container {
    height: 100%;

    .list-head {
        display: flex;
        padding: 15px 0;

        & span {
            position: relative;
            z-index: 9;
            display: inline-block;
            height: 20px;
            font-size: 14px;
            line-height: 20px;
            margin-right: 34px;
            font-weight: 300;
            color: #333;
            cursor: pointer;
        }

        .active-0 {
            font-weight: 600;
            color: #000;
        }

        .active-0::after {
            position: absolute;
            content: "";
            left: 0px;
            top: 10px;
            width: 100%;
            height: 6px;
            background: #ff641e;
            z-index: -2;
        }

        h2 {
            font-size: 24px;
            line-height: 30px;
        }

        .type {
            flex: 1;
            padding: 5px 40px;


        }
    }

    .playlist2 {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        font-size: 0;

        .item {
            width: 230px;
            height: 280px;
            @include bbl;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;

            .img {
                position: relative;
                width: 145px;
                height: 145px;
                border-radius: 8px;
                top: 14px;
            }

            .text {
                width: 90%;
                font-size: 16px;
                height: 60px;
                line-height: 30px;
                text-align: left;
                font-weight: 400;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: break-all;
                position: relative;
                top: 32px;
            }

            .lable {
                width: 90%;
                height: 30px;
                font-size: 14px;
                position: relative;
                top: 34px;
                color: #ff641e;
                text-align: left;
            }

            .mini_lable {
                width: 110px;
                position: absolute;
                font-size: 14px;
                top: 16px;
                right: 43px;
                line-height: 30px;
                border-radius: 0 4px 0 0;
                background: -moz-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .5) 97%, rgba(0, 0, 0, .5) 100%);
                background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .5) 97%, rgba(0, 0, 0, .5) 100%);
                background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .5) 97%, rgba(0, 0, 0, .5) 100%);
            }

            &:hover {
                transform: scale(1.02);
                transition: 0.5s;
                @include bbl;
            }

        }
    }
}
</style>