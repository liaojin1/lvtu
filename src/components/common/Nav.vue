<template>
    <div>
        <div class="nav">
        <div class="container">
            <div class="nav-left">
                <a class="fontColor" href="/"><strong>首页</strong></a>
                <span>|</span>
                <!-- <a class="fontColor" href=""><strong></strong></a> -->
                <!-- <span>|</span> -->
                <a class="fontColor" href="/guide"><strong>导航</strong></a>
                <span>|</span>
                <a class="fontColor" href="/zixun"><strong>Cate.Hotel.Scenery</strong></a>
                <span>|</span>
                <a class="fontColor" href="/xinwen"><strong>新闻</strong></a>
                <span>|</span>
                <a class="fontColor" @mouseover="isShow" @mouseout="isHidden" href="/social"><strong>社交</strong>
                    <ul class="two-nav clearfix" v-show='isshow'>
                        <li class="two-nav-li"><a href="/men">BOYS</a></li>
                        <li class="two-nav-li"><a href="/women">GIRLS</a></li>
                    </ul>

                </a>

                <span>|</span>
                <a class="fontColor" href="/diary"><strong>旅途日记</strong></a>
                <span>|</span>
                <a class="fontColor" href="/other"><strong>其他</strong></a>
            </div>
            <div class="nav-right">
                <a class="fontColor" href="/user"><strong>登录</strong></a>
                <span>|</span>
                <a class="fontColor" href="/register"><strong>注册</strong></a>
            </div>
        </div>
    </div>
</div>
</template>

<script>


export default {
    data(){
        return{
           isshow:false,
       }
    },
    methods:{
        isShow(){
            this.isshow = true;
        },
        isHidden(){
            this.isshow = false;
        }
    },
}
</script>

<style scoped>

.clearfix:after{
    content: "";
    clear: both;
    display: block;
}

/*nav css start*/
.nav{
    /* position: fixed; */
    background-color: #f8f8f9;
    width: 100%;
    height: 30%;
    line-height: 39px;
}
.nav-left{
    float: left;
}
.nav-right{
    float: right;
}
.nav a{
    color: #424242;
    font-size: 15px;
    text-decoration: none;
    margin-right: 10px;
    margin-left: 10px;
    position: relative;
    display: inline-block;
    height: 40px;
}
.nav a:hover{
    color: #5cadff;
}
.nav span{
    color: #d3d3d3;
    font-size: 15px;
}
.two-nav .two-nav-li{
    list-style: none;
    color: #424242;
}
.two-nav .two-nav-li:hover{
    /* color: #fff; */
    cursor: pointer;
    color: #5cadff;
    /* background: #5cadff; */
}
.two-nav{
    float: left;
    position: absolute;
    left: -85%;
    border: 1px solid #d3d3d3;
    font-size: 15px;
    padding: 5px 11px 5px;
    border-radius: 5%;
    /* width: 150%; */
    z-index: 10;
    background-color: #fff;
}
/*nav css end*/
</style>
