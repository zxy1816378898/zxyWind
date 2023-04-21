<template>
    <div class="main">

        <div class="left_aside">

            <div class="li" v-for="item in Artists_listAyy">

                <img class="img" :src="`${item.img1v1Url}`" />

                <em class="circle"></em>
                <div class="info">

                    <div class="info-header">
                        <a href="/singer?id=3684" class="name">{{ item.name }}</a>
                        <i class="iconfont icon-collect"></i>
                    </div>

                    <div class="info-num">
                        <span class="albumSize"><em>专辑</em><br>{{ item.albumSize }}</span>
                        <span class="musicSize"><em>单曲</em><br>{{ item.musicSize }}</span>
                        <span class="fansSize"><em>粉丝</em><br>{{ $utils.formartNum(item.fansCount) }}</span>
                    </div>

                </div>
            </div>

        </div>

        <div class="right_aside">
            <div class="filter">
                <div class="filter-item">
                    <span :class="'active-' + item.code" v-for="item in titleAyy" @click="openPop(item)">{{ item.title
                    }}</span>

                </div>
                <div class="filter-item">
                    <span :class="'active-' + item.code" v-for="item in titleAyy2" @click="openPop2(item)">{{ item.title
                    }}</span>
                </div>
                <div class="filter-item">
                    <span :class="'active-' + item.code" v-for="item in titleAyy3" @click="openPop3(item)">{{
                        item.title }}</span>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import { topArtists } from '@/api/http.js';
const Artists_listAyy = ref([]);
const titleAyy = ref([
    {
        title: "热门",
        code: '0'
    },
    {
        title: "A",
        code: '1'
    },
    {
        title: "B",
        code: '1'
    },
    {
        title: "C",
        code: '1'
    },
    {
        title: "D",
        code: '1'
    },
    {
        title: "E",
        code: '1'
    },
    {
        title: "F",
        code: '1'
    }, {
        title: "G",
        code: '1'
    },
    {
        title: "H",
        code: '1'
    },
    {
        title: "I",
        code: '1'
    }, {
        title: "J",
        code: '1'
    },

    {
        title: "K",
        code: '1'
    }, {
        title: "L",
        code: '1'
    },
    {
        title: "M",
        code: '1'
    },
    {
        title: "N",
        code: '1'
    },
    {
        title: "O",
        code: '1'
    },
    {
        title: "P",
        code: '1'
    },
    {
        title: "Q",
        code: '1'
    },
    {
        title: "R",
        code: '1'
    },
    {
        title: "S",
        code: '1'
    }, {
        title: "T",
        code: '1'
    }, {
        title: "U",
        code: '1'
    }, {
        title: "V",
        code: '1'
    }, {
        title: "W",
        code: '1'
    },

    {
        title: "X",
        code: '1'
    },
    {
        title: "Y",
        code: '1'
    }, {
        title: "Z",
        code: '1'
    },
    {
        title: "#",
        code: '1'
    },

])
const titleAyy2 = ref([
    {
        title: '全部',
        code: '0'
    },
    {
        title: '华语',
        code: '1'
    },
    {
        title: '欧美',
        code: '1'
    },
    {
        title: '日本',
        code: '1'
    },
    {
        title: '韩国',
        code: '1'
    },
    {
        title: '其他',
        code: '1'
    },
])
const titleAyy3 = ref([
    {
        title: '全部',
        code: '0'
    },
    {
        title: '男歌手',
        code: '1'
    },
    {
        title: '女歌手',
        code: '1'
    },
    {
        title: '乐队',
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
    getArtists();
})

const getArtists = () => {
    topArtists({}).then((res) => {
        console.log(res.data.artists);
        Artists_listAyy.value = res.data.artists;
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
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    .li {
        width: 350px;
        height: 120px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        @include bbl;
        margin: 15px 0;

        img {
            width: 100px;
            height: 100px;
            position: relative;
            padding-top: 10px;
            border-radius: 8px;
        }

        .circle {
            position: absolute;
            right: 15px;
            top: 22px;
            display: inline-block;
            padding: 10px;
            border-radius: 100%;
            border: 1px solid transparent;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(1.5px);
            box-shadow: 0 2px 7px #0000001a inset;
        }

        .circle:before {
            position: absolute;
            top: 6px;
            left: 6px;
            display: inline-block;
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 100%;
            background: rgba(255, 255, 255, 0.85);
            box-shadow: 0 2px 7px #0000001a;
        }

        .info {
            width: 205px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .info-header {
                height: 40px;

                .name {
                    display: inline-block;
                    white-space: nowrap;
                    max-width: 80%;
                    margin-right: 10px;
                    line-height: 40px;
                    font-size: 20px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    vertical-align: middle;
                }
            }

            .info-num {
                height: 40px;
                display: flex;
                padding-top: 10px;
                color: #cdc8c8;

                & span {
                    flex: 1;
                    display: inline-block;
                    font-weight: 600;
                    color: #e8e8e8;
                }
            }
        }



    }
}

.right_aside {
    width: 22%;
    height: 260px;
    margin: 15px 0;

    .filter {
        @include bbl;
        height: 270px;
        width: 310px;
        padding: 20px 0px 0px 15px;

        .filter-item {
            font-size: 0;
            padding-bottom: 20px;


            & span {
                display: inline-block;
                padding: 0 12px;
                font-size: 14px;
                line-height: 30px;
                margin-right: 6px;
                vertical-align: top;
                cursor: pointer;
                border-radius: 3px;
            }

            .active {
                color: #fff;
                background: #ff641e;
            }

            .active-0 {
                color: #fff;
                background: #ff641e;
            }
        }
    }
}
</style>