<template>
  <div>
    <common-nav></common-nav>
      <h1 style="text-align: center">BOYS</h1>
      <div class="xinwen">
        <ul class="xinwen1">
          <li><a href=""><img src="http://b3-q.mafengwo.net/s10/M00/3F/77/wKgBZ1ox4EWAaZ9TAB0_ZgPRQGM05.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" align="left" alt=""></a><div class="wenzi"><div class="biaoti"><h3>姓名：</h3><br><span>Courtyard by Marriott Hangzhou Wulin</span></div><p>去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。</p><span class="fabu">发布时间</span></div></li>
          <li><a href=""><img src="https://p1-q.mafengwo.net/s10/M00/3F/72/wKgBZ1ox4EGAYeCUAByLBqGp97k61.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90" align="left" alt=""></a><div class="wenzi"><div class="biaoti"><h3>姓名：</h3><br><span>Courtyard by Marriott Hangzhou Wulin</span></div><p>去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。</p><span class="fabu">发布时间</span></div></li>
          <li><a href=""><img src="http://b3-q.mafengwo.net/s10/M00/3F/77/wKgBZ1ox4EWAaZ9TAB0_ZgPRQGM05.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" align="left" alt=""></a><div class="wenzi"><div class="biaoti"><h3>姓名：</h3><br><span>Courtyard by Marriott Hangzhou Wulin</span></div><p>去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。</p><span class="fabu">发布时间</span></div></li>
          <li><a href=""><img src="https://p1-q.mafengwo.net/s10/M00/3F/72/wKgBZ1ox4EGAYeCUAByLBqGp97k61.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90" align="left" alt=""></a><div class="wenzi"><div class="biaoti"><h3>姓名：</h3><br><span>Courtyard by Marriott Hangzhou Wulin</span></div><p>去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。</p><span class="fabu">发布时间</span></div></li>          
        </ul>
      </div>

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
  .xinwen{
     box-sizing: border-box;
     width: 90%;
     margin-left: 5%;
   }
.xin{
    width: 100%;
    padding-left: 40px;
    padding-top: 10px;
    text-align: center;
  }
  .xin a{
     text-decoration: none;
     color: black;
     margin-left:5%;
     margin-top: 50px;
   }
  
  .xinwen li{
    list-style: none;
    padding: 25px 0;
    border-bottom: 1px solid #ececec;
    
  }
  .xinwen1 li img{
    margin-right: 20px;
    width: 330px;
    height: 240px;
    border-radius: 5px;
 }
  .wenzi{
    border: 0;
    width: 70%;
    height: 240px;
    margin-left: 29%;
    border-radius: 5px;
    position: relative;
  }
  .wenzi span {
    font-size: 14px;
    color: #999;
    vertical-align: middle;
  }
  .wenzi p {
    margin: 5px 0 15px;
    font-size: 14px;
    line-height: 26px;
    max-height: 78px;
  }
 .xinwen .xinwen1 .fabu{
    position: absolute;
    bottom: 0;
  }
  .xinwen .xinwen1 .zuozhe{
    position: absolute;
    bottom: 0;
    margin-left: 15%;
  } 

.biaoti{
  height: 58px;
}
.biaoti h3{
    margin-right: 5px;
    line-height: 30px;
    font-size: 18px;
    font-weight: normal;
    display: inline;
    color: #666;
}
</style>
