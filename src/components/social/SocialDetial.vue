<template>
  <div>
    <common-nav></common-nav>
    <h3 class="display-4" style=" margin-top: 20px;color: #17233d;top: 0px;background-color: white;border-bottom: solid 3px #e8eaec" >稻城结伴旅行</h3>
    <div style="width: 60%;height:100%;margin-left: 20%;background-color:#f8f8f9;margin-top: 50px">
      <div class="fabuzhe">
        <div class="touxiang"></div>
        <div style="padding-top: 10px"><span>姓  名</span></div>
      </div>
      <hr style="width: 50%;margin-left: 25%">
      <br>
      <br>
      <div class="neirong">
        <p>出发时间：</p>
        <p>出发方式：</p>
        <p>预计人数：</p>
        <p>大概路线描述:</p>
        <br>
        <p><span>&nbsp&nbsp&nbsp&nbsp本次自驾稻城，时间定在8月初（避开雨季，建议这个时间去，不会遇到下雨），去的时候走成都-雅安-新都桥-理塘-稻城，回来可走南线或者北线，多玩一两个景点，比如丹巴藏寨、海螺沟。
我们已有一个车，3人（1男2女），可以再加2人，或者有车一起自驾稻城，相互有个照应！有想法的可以报名联系！ </span></p>
        <div class="tuji">
          <img src="../../assets/img/j2.jpg" alt="">
          <br>
          <br>
          <p><span>&nbsp&nbsp&nbsp&nbsp本次自驾稻城，时间定在8月初（避开雨季，建议这个时间去，不会遇到下雨），去的时候走成都-雅安-新都桥-理塘-稻城，回来可走南线或者北线，多玩一两个景点，比如丹巴藏寨、海螺沟。
我们已有一个车，3人（1男2女），可以再加2人，或者有车一起自驾稻城，相互有个照应！有想法的可以报名联系！ </span></p>
          <img src="../../assets/img/j3.jpg" alt="">
          <br>
          <br>
          <hr>
          <br>
          <br>
          <h2 style="text-align: left">留言</h2>
          <br>
          <form action="">
            <input type="text" style="height:50px;width: 90%">
            <button style="width: 9%;height: 50px">提交</button>
          </form>
          <br>
          <br>
          <div>
            <div class="liuyan">
              <div class="liuyan_left">
                <div class="touxiang2"></div>
                <span style="text-align:center;display: inline-block">&nbsp&nbsp&nbsp用户名</span>
              </div>
              <div class="liuyan_right">
                &nbsp&nbsp2018.08.02
                <a href="" class="a1">回复</a><a href="" >举报</a>
                <br><br>
                &nbsp&nbsp想结伴？想咨询自由行或线路行程攻略的？想知道自由行最新的资讯？
              </div>
            </div>
            <br>
            <div class="liuyan">
              <div class="liuyan_left">
                <div class="touxiang2"></div>
                <span style="text-align:center;display: inline-block">&nbsp&nbsp&nbsp用户名</span>
              </div>
              <div class="liuyan_right">
                &nbsp&nbsp2018.08.02
                <a href="" class="a1">回复</a><a href="" >举报</a>
                <br><br>
                &nbsp&nbsp想结伴？想咨询自由行或线路行程攻略的？想知道自由行最新的资讯？
              </div>
            </div>
            <br>
            <div class="liuyan">
              <div class="liuyan_left">
                <div class="touxiang2"></div>
                <span style="text-align:center;display: inline-block">&nbsp&nbsp&nbsp用户名</span>
              </div>
              <div class="liuyan_right">
                &nbsp&nbsp2018.08.02
                <a href="" class="a1">回复</a><a href="" >举报</a>
                <br><br>
                &nbsp&nbsp想结伴？想咨询自由行或线路行程攻略的？想知道自由行最新的资讯？
              </div>
            </div>
            <br>
            <div class="liuyan">
              <div class="liuyan_left">
                <div class="touxiang2"></div>
                <span style="text-align:center;display: inline-block">&nbsp&nbsp&nbsp用户名</span>
              </div>
              <div class="liuyan_right">
                &nbsp&nbsp2018.08.02
                <a href="" class="a1">回复</a><a href="" >举报</a>
                <br><br>
                &nbsp&nbsp想结伴？想咨询自由行或线路行程攻略的？想知道自由行最新的资讯？
              </div>
            </div>
            <br>



          </div>

        </div>

      </div>
    </div>
    <!-- <div style="position: fixed;top:300px;left: 50px;width: 50px;height: 50px;background-color: #808695" v-on:click="fanhui"><span style="font-size: 50px;display: inline-block;line-height: 50px;"><</span></div> -->
  </div>


</template>

<script>
  import CommonNav from '@/components/common/Nav'

  export default {
    components:{
      CommonNav,
    },
    methods: {
      fanhui(){
        this.$router.push(`/Social/`);
      }
    }
  }
</script>

<style scoped>
  .fabuzhe{
    margin-top: 100px;
    margin-left: 30%;
    text-align: center;
    height: 150px;
    width:100px ;
    display: inline-block;
    color: #515a6e;
  }
  .touxiang{
    height: 100px;
    width: 100px;
    border-radius: 50px;
    border: solid 1px #808695;
  }
  .fabuzhe span{
    font-size: 20px;
  }
  .chufa span{
    padding-top: 10px;
  }
  .neirong{
    width: 60%;
    margin-left: 20%;
    color: #515a6e;

  }
  .tuji img{
    width: 60%;
    margin-left: 20%;
    height:35%;

  }
  .neirong p{
    font-size: 20px;
    color: #515a6e;
  }
  .neirong p span{
    font-size: 16px;
    color: #515a6e;
  }
  h3{
    width: 100%;
    height: 50px;
    text-align: center;
  }
  .liuyan{
    height:80px;
    width: 100%;
    overflow: hidden;
    color: #515a6e;
  }
  .touxiang2{
    padding-top: 5px;
    width: 60px;
    height:60px;
    border-radius:30px;
    background-color: #808695;

  }
  .liuyan_left{
    display: inline-block;
    width: 15%;
  }
  .liuyan_right{
    display: inline-block;
    float: right;
    width: 83%;
    height: 80%;
    padding-top: 0px;
    position: relative;
    color: #515a6e;
  }
  .liuyan_right a{
    text-decoration: none;
    color:#ff9900;
    position: absolute;
    right: 0px;
  }
  .liuyan_right .a1{
    position: absolute;
    right: 35px;

  }
  </style>
