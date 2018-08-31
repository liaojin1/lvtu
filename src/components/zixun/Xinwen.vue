<template>
  <div>
    <common-nav></common-nav>
    <div style="width: 50%;margin-left: 25%">
      <h1 style="text-align: center">新闻推荐</h1>
      <div class="xinwen">
        <ul class="xinwen1">
          <li>
            <img src="../../assets/img/z1.jpg" align="left" alt="">
            <div class="wenzi">
              <h1 class="biaoti">标题</h1>
              <hr>
               <br>
                <div style="height: 130px;overflow: hidden">
                  <p style="font-size: 16px">&nbsp&nbsp&nbsp&nbsp我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀</p>
                </div>
              <hr>
              <span class="fabu">发布时间</span>
              <span class="zuozhe">作者</span>
            </div>
          </li>
          <li>
            <img src="../../assets/img/z1.jpg" align="left" alt="">
            <div class="wenzi">
              <h1 class="biaoti">标题</h1>
              <hr>
               <br>
                <div style="height: 130px;overflow: hidden">
                  <p style="font-size: 16px">&nbsp&nbsp&nbsp&nbsp我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀</p>
                </div>
              <hr>
              <span class="fabu">发布时间</span>
              <span class="zuozhe">作者</span>
            </div>
          </li>
          <li>
            <img src="../../assets/img/z1.jpg" align="left" alt="">
            <div class="wenzi">
              <h1 class="biaoti">标题</h1>
              <hr>
               <br>
                <div style="height: 130px;overflow: hidden">
                  <p style="font-size: 16px">&nbsp&nbsp&nbsp&nbsp我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀</p>
                </div>
              <hr>
              <span class="fabu">发布时间</span>
              <span class="zuozhe">作者</span>
            </div>
          </li>
          <li>
            <img src="../../assets/img/z1.jpg" align="left" alt="">
            <div class="wenzi">
              <h1 class="biaoti">标题</h1>
              <hr>
               <br>
                <div style="height: 130px;overflow: hidden">
                  <p style="font-size: 16px">&nbsp&nbsp&nbsp&nbsp我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀</p>
                </div>
              <hr>
              <span class="fabu">发布时间</span>
              <span class="zuozhe">作者</span>
            </div>
          </li>
          <li>
            <img src="../../assets/img/z1.jpg" align="left" alt="">
            <div class="wenzi">
              <h1 class="biaoti">标题</h1>
              <hr>
               <br>
                <div style="height: 130px;overflow: hidden">
                  <p style="font-size: 16px">&nbsp&nbsp&nbsp&nbsp我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀我是内容呀</p>
                </div>
              <hr>
              <span class="fabu">发布时间</span>
              <span class="zuozhe">作者</span>
            </div>
          </li>

        </ul>

      </div>
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
  .xin a{
    text-decoration: none;
    color: black;
    margin-left:5%;
    margin-top: 50px;
  }
  .xinwen{
    width: 100%;
  }
  .xinwen li{
    list-style: none;
    margin-top: 10px;
    position: relative;
  }
  .xinwen1 li img{
    width: 30%;
    height: 200px;

  }
  .wenzi{
    width:60%;
    margin-top: 40px;
    border: 1px solid gainsboro;
    height: 200px;
    margin-left: 30%;
    margin-right: 0px;
  }
  .xinwen .xinwen1 .biaoti{
    padding-left: 5px;
  }
  .xinwen .xinwen1 .fabu{
    margin-left: 15%;
    position: absolute;
    bottom: 0px;
  }
  .xinwen .xinwen1 .zuozhe{
    position: absolute;
    right:130px;
    bottom: 0px;
  }

</style>
