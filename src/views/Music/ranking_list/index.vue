<template>
    <!-- 排行榜 -->
    <div class="ranking_box">
        <div class="box_left">
            <!-- 卡片 -->
            <div class="box_left_card" v-for="item in left_topAyy">

                <div class="cover_img">
                    <img class="img" :src="`${item.coverImgUrl}`" />
                </div>

                <div class="cover_info">

                    <div class="cover-header">{{ item.name }}
                        <span> (04月14日 更新)</span>
                    </div>


                    <div class="cover-author-tags">
                        <img class="img" :src="wyyImg" />
                        <div class="cover-name">网易云音乐</div>
                        <div class="cover-date">2014-06-30</div>
                    </div>

                    <div class="cover-digital">
                        <span class="cover-playCount">545338.9万次</span>
                        <span class="cover-playCount">403.9万次</span>
                        <span class="cover-playCount">21.9万次</span>
                    </div>


                    <div class="cover-desc">
                        <h5>歌单简介</h5>
                        <p>{{ item.description }}</p>
                    </div>

                </div>

            </div>
            <!-- 列表 -->
            <div class="box_left_list">

                <div class="song-header">
                    <h4>歌曲列表 <em>100首歌</em></h4>
                </div>

                <div class="songs-list-main">

                    <div class="list-header">
                        <div class="columnIndex">序号</div>
                        <div class="columnSong">歌曲</div>
                        <div class="columnSinger">歌手</div>
                        <div class="columnAlbum">专辑</div>
                        <div class="columnTime">时长</div>
                    </div>

                    <div class="list-scroll">
                        <div class="list-main">
                            <div class="list-item" v-for="(item, index) in left_listAyy">
                                <div class="columnIndex">{{ index + 1 }}</div>
                                <div class="columnSong">{{ item.name }}</div>
                                <div class="columnSinger">{{ item.author }}</div>
                                <div class="columnAlbum"></div>
                                <div class="columnTime"></div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div>

        <div class="box_right">
            <!-- 导航 -->
            <div class="box_right_nav">

                <div class="aside_nav">

                    <span class="active" :class="'active-' + item.code" v-for="item in activeAyy" @click="openPop(item)">
                        {{ item.title }}
                    </span>

                </div>


                <div class="type_nav">

                    <div class="nav" :class="'nav-' + item.code" v-for="item in navAyy" @click="openPop2(item)">

                        <div class="nav_left">
                            <div class="nav_item1">{{ item.title1 }}</div>
                            <div class="nav_item2">{{ item.title2 }}</div>
                        </div>

                        <div class="nav_right">

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
import wyyImg from '@/assets/images/wyy.jpg'
import { toplist, topRankList } from '@/api/http.js';
const author = ref([])
const activeAyy = ref([
    {
        title: 'TOP榜',
        code: '0'
    },
    {
        title: '特色榜',
        code: '1'
    },
    {
        title: '场景榜',
        code: '1'
    },
]) // 右侧 导航栏
const navAyy = ref([
    {
        title1: "飙升榜",
        title2: "更新82首",
        code: "0"
    },
    {
        title1: "新歌榜",
        title2: "更新12首",
        code: "1"
    },
    {
        title1: "原创榜",
        title2: "每周四更新",
        code: "1"
    },
    {
        title1: "热歌榜",
        title2: "每天更新",
        code: "1"
    },
]) //右侧 导航栏
const left_topAyy = ref([]) //左侧 top
const left_listAyy = ref([]) //左侧 列表
//点击事件
const openPop = (a) => {
    activeAyy.value.forEach((e) => {
        e.code = 1;
    });
    a.code = 0;
};
const openPop2 = (a) => {
    navAyy.value.forEach((e) => {
        e.code = 1;
    });
    a.code = 0;
};


onMounted(() => {
    Toplist();// 排行榜
    TopRankList() //排行榜歌单列表
})

const Toplist = () => {
    toplist({}).then((res) => {
        left_topAyy.value = res.data.list.slice(0, 1)
    });
};

const TopRankList = () => {
    topRankList({ id: 19723756 }).then((res) => {
        left_listAyy.value = Object.values(res.data.playlist.tracks)



    });
};




</script>


<style lang="scss" scoped>
.ranking_box {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .box_left {
        width: 72%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .box_left_card {
            width: 100%;
            height: 20%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .cover_img {
                display: flex;
                align-items: center;
                width: 218px;
                height: 100%;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 20px 27px #0000000d;
                flex-shrink: 0;
                @include bbl;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .cover_info {
                width: 790px;
                height: 80%;
                @include bbl;
                display: flex;
                flex-direction: column;
                padding: 20px;

                .cover-header {
                    height: 34px;
                    font-size: 24px;
                    font-weight: 700;
                    height: 34px;
                    line-height: 34px;

                    & span {
                        display: inline-block;
                        padding-left: 10px;
                        font-weight: 400;
                        line-height: 22px;
                        font-size: 14px;
                        color: #909090;
                    }
                }

                .cover-author-tags {
                    width: 27%;
                    font-size: 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 0;

                    img {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                    }
                }

                .cover-digital {
                    width: 40%;
                    font-size: 15px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    padding-bottom: 10px;
                }

                .cover-desc {
                    h5 {
                        padding: 5px 0 5px;
                        line-height: 20px;
                        font-size: 14px;
                        color: #fff;
                    }

                    p {
                        display: block;
                        flex: 1;
                        flex-basis: auto;
                        overflow: auto;
                        box-sizing: border-box;
                    }
                }
            }
        }

        .box_left_list {
            width: 100%;
            height: 76%;
            @include bbl;

            .song-header {
                display: flex;
                padding: 10px 20px 10px;

                h4 {
                    flex: 1;
                    font-size: 20px;
                    line-height: 40px;
                }

                em {
                    display: inline-block;
                    padding-left: 10px;
                    font-size: 12px;
                    line-height: 14px;
                    font-style: normal;
                    font-weight: 400;
                    color: #666;
                    vertical-align: baseline;
                }
            }

            .songs-list-main {
                padding: 0px 20px 10px;
                height: 100%;
                display: flex;
                flex-direction: column;

                .list-header {
                    width: 100%;
                    height: 6%;
                    display: flex;
                    line-height: 50px;
                    border-bottom: 1px solid #EBEEF5;
                    font-weight: 700;
                    color: rgb(245, 240, 240);

                    .columnIndex {
                        width: 80px;
                        line-height: 50px;
                        padding-left: 10px;
                    }

                    .columnSong {
                        display: flex;
                        flex: 2;
                        width: 0;
                        padding-right: 10px;
                        overflow: hidden;
                        align-items: center;
                    }

                    .columnSinger {
                        flex: 1.5;
                        width: 0;
                        padding-right: 10px;
                        overflow: hidden;
                    }

                    .columnAlbum {
                        flex: 1;
                        width: 0;
                    }

                    .columnTime {
                        width: 100px;
                        padding-right: 10px;
                        text-align: right;
                    }
                }

                .list-scroll {
                    height: 100%;

                    .list-main {
                        height: 85%;
                        overflow-y: auto;
                        transition: transform .3s;

                        .list-item {
                            height: 50px;
                            @extend .list-header;
                            border: 0;
                        }

                        .list-item:nth-of-type(2n) {
                            border-radius: 8px;
                            background: rgba(#FAFAFA, 0.2);
                            backdrop-filter: blur(1.5px);
                        }
                    }
                }
            }
        }
    }

    .box_right {
        width: 27%;
        height: 100%;

        .box_right_nav {
            width: 100%;
            height: 230px;

            .aside_nav {
                width: 100%;
                height: 18%;
                font-size: 13px;
                color: #000;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                position: relative;

                .active {
                    padding: 10px 20px;
                    border-radius: 8px;
                    background-color: #fff;
                    position: relative;
                }

                .active-0 {
                    color: #fff;
                    background-color: #ff641e;
                    transition: 0.3s ease all;
                }

                .active-0:active {
                    transform: scale(0.9);
                }

            }

            .type_nav {
                width: 100%;
                height: 68%;
                font-size: 13px;
                color: #000;
                font-weight: 600;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-around;
                position: relative;

                .nav {
                    width: 150px;
                    height: 50px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    background: #ffffff;
                    border-radius: 12px;

                    .nav_left {
                        width: 50%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;

                        .nav_item1 {
                            width: 100%;
                            font-weight: 700;
                            line-height: 30px;
                            display: inline-block;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            vertical-align: top;
                        }

                        .nav_item2 {
                            font-size: 12px;
                            line-height: 12px;
                            color: #909090;
                        }
                    }

                    .nav_right {
                        width: 30%;
                        height: 100%;
                    }
                }

                .nav-0 {
                    @include bgjb(#ffb08e);
                }
            }
        }
    }
}
</style>