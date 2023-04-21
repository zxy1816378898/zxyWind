<template>
    <div class="main">


        <div class="left_aside">

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

        <div class="right_aside">
            <div class="title_box">
                <div class="title">排序</div>
                <div class="mini_title mini_1">
                    <span v-for="item in titleAyy" :class="'isActive-' + item.code" @click="openPop(item)">
                        {{ item.title }} </span>
                </div>
                <div class="title">区域</div>
                <div class="mini_title">
                    <span v-for="item in titleAyy2" :class="'isActive-' + item.code" @click="openPop2(item)">
                        {{ item.title }} </span>
                </div>
                <div class="title">类型</div>
                <div class="mini_title">
                    <span v-for="item in titleAyy3" :class="'isActive-' + item.code" @click="openPop3(item)">
                        {{ item.title }} </span>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import { mv } from '@/api/http.js';
const mv_listAyy = ref([]);
const titleAyy = ref([
    {
        title: '上升最快',
        code: '0'
    },
    {
        title: '最新',
        code: '1'
    },
])
const titleAyy2 = ref([
    {
        title: '全部',
        code: '0'
    },
    {
        title: '内地',
        code: '1'
    },
    {
        title: '港台',
        code: '1'
    },
    {
        title: '欧美',
        code: '1'
    },
    {
        title: '韩国',
        code: '1'
    },
    {
        title: '日本',
        code: '1'
    },
])
const titleAyy3 = ref([
    {
        title: '全部',
        code: '0'
    },
    {
        title: '原生',
        code: '1'
    },
    {
        title: '现场版',
        code: '1'
    },
    {
        title: '网易出品',
        code: '1'
    },
])
// 点击事件
const openPop = (a) => {
    titleAyy.value.forEach((e) => {
        e.code = 1;
    });
    a.code = 0;
};
const openPop2 = (a) => {
    titleAyy2.value.forEach((e) => {
        e.code = 1;
    });
    a.code = 0;
};
const openPop3 = (a) => {
    titleAyy3.value.forEach((e) => {
        e.code = 1;
    });
    a.code = 0;
};
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
    flex-direction: row;
    justify-content: space-between;
    overflow-y: auto;
}

.left_aside {
    width: 72%;
    height: 100%;
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

.right_aside {
    width: 25%;
    height: 260px;
    margin: 15px 0;

    .title_box {
        width: 100%;
        height: 260px;
        @include bbl;
        display: flex;
        flex-direction: column;

        .title {
            width: 90%;
            height: 20%;
            font-size: 23px;
            margin-left: 20px;
            margin-top: 10px;
            font-weight: 600;
        }

        .mini_title {
            width: 90%;
            height: 20%;
            font-size: 18px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-left: 22px;
     
            & span{
                position: relative;
            }

            .isActive-0::after {
                position: absolute;
                content: "";
                left: 0px;
                top: 14px;
                width: 100%;
                height: 7px;
                background: #ff641e;
                z-index: -2;
            }
        }

        .mini_1 {
            width: 35%;
        }
    }
}
</style>