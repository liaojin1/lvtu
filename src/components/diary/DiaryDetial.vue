<template>
    <div>
        <common-nav></common-nav>

      <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">旅途日记</h1>
                <br />
                <br />
                <hr />
                <p class="lead">旅途日记，用来记录大家的点点滴滴.</p>
            <button type="button" class="btn btn-outline-primary">续写</button>
            </div>
        </div>

        <Timeline style="margin:0 5%">
        <TimelineItem>
            <p class="time"><Icon size="25" color="#424242" type="ios-paw"></Icon>第一天</p>
            <p class="content">
                <div class="card mb-3">
                    <img class="card-img-top" src="../../assets/img/beach.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">1984年</p>
            <p class="content">
                <div class="card bg-dark text-white">
                    <img class="card-img" src="../../assets/img/beach.jpg" alt="Card image">
                    <div class="card-img-overlay">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
            </p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2007年</p>
            <p class="content">发布 iPhone</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2010年</p>
            <p class="content">发布 iPad</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2011年10月5日</p>
            <p class="content">史蒂夫·乔布斯去世</p>
        </TimelineItem>
    </Timeline>

    </div>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
    components:{
        CommonNav,
    }
}
</script>

<style scoped>
ul li{
    list-style: none;
}
.time-line{
    margin-left: 20%;
}
.line{

}
.time{
    font-size: 14px;
    font-weight: bold;
}
.content{
    padding-left: 5px;
}
.btn{
    margin-top: 3%;
}
</style>
