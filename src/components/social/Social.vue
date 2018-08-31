<template>
    <div>
        <common-nav></common-nav>
      <div class="top">
      <Input v-model="value4" icon="ios-search" placeholder="目的地" style="width: 200px" class="sousuo"></Input>
      <DatePicker type="date" placeholder="选择日期" style="width: 200px" class="data"></DatePicker>
      <Button type="info"  style="width: 200px" class="fabu">+发布结伴</Button>
      </div>
      <div class="middle">

        <div class="m1"><ul>
          <li v-on:click="xiangqing">
            <div class="image">
              <img src="../../assets/img/ao1.jpg" alt="">
              <div class="after">
                <div style="width: 100%;height: 40px;background-color: lightskyblue;border-radius: 10px 10px 0px 0px"></div>

                <b style="font-size: 20px">&nbsp&nbsp192</b>
                天后
              </div>

            </div>
            <hr style="width:60%">
            <h1>奥地利</h1>
            <span>奥地利共和国（ 德语：Republik Österreich，英语：The Republic of Austria），简称“奥地利”（Austria），是一个位于欧洲中部的议会制共和制制国家</span>
          </li>
          <li style="margin-left: 1%" v-on:click="xiangqing">
            <div class="image">
              <img src="../../assets/img/ao2.jpg" alt="">
              <div class="after">
                <div style="width: 100%;height: 40px;background-color: lightskyblue;border-radius: 10px 10px 0px 0px"></div>
                <b style="font-size: 20px">&nbsp&nbsp192</b>
                天后
              </div>
            </div>
            <hr style="width:60%">            
            <h1>奥地利</h1>
            <span>奥地利共和国（ 德语：Republik Österreich，英语：The Republic of Austria），简称“奥地利”（Austria），是一个位于欧洲中部的议会制共和制制国家</span>
          </li>
          <li style="margin-left: 1.5%" v-on:click="xiangqing">
            <div class="image">
              <img src="../../assets/img/ao3.jpg" alt="">
              <div class="after">
                <div style="width: 100%;height: 40px;background-color: lightskyblue;border-radius: 10px 10px 0px 0px"></div>
                <b style="font-size: 20px">&nbsp&nbsp192</b>
                天后
              </div>
            </div>
            <hr style="width:60%">            
            <h1>奥地利</h1>
            <span>奥地利共和国（ 德语：Republik Österreich，英语：The Republic of Austria），简称“奥地利”（Austria），是一个位于欧洲中部的议会制共和制制国家</span>
          </li>
          <li style="margin-left: 1.5%" v-on:click="xiangqing">
            <div class="image">
              <img src="../../assets/img/ao4.jpg" alt="">
              <div class="after">
                <div style="width: 100%;height: 40px;background-color: lightskyblue;border-radius: 10px 10px 0px 0px"></div>
                <b style="font-size: 20px">&nbsp&nbsp192</b>
                天后
              </div>
            </div>
            <hr style="width:60%">            
            <h1>奥地利</h1>
            <span>奥地利共和国（ 德语：Republik Österreich，英语：The Republic of Austria），简称“奥地利”（Austria），是一个位于欧洲中部的议会制共和制制国家</span>
          </li>
        </ul></div>
        <div class="m2"><ul>
          <li v-on:click="xiangqing">
            <div class="image">
              <img src="../../assets/img/ao1.jpg" alt="">
              <div class="after">
                <div style="width: 100%;height: 40px;background-color: lightskyblue;border-radius: 10px 10px 0px 0px"></div>
                <b style="font-size: 20px">&nbsp&nbsp192</b>
                天后
              </div>

            </div>
            <hr style="width:60%">
            <h1>奥地利</h1>
            <span>奥地利共和国（ 德语：Republik Österreich，英语：The Republic of Austria），简称“奥地利”（Austria），是一个位于欧洲中部的议会制共和制制国家</span>
          </li>
          <li style="margin-left: 1%" v-on:click="xiangqing">
            <div class="image">
              <img src="../../assets/img/ao2.jpg" alt="">
              <div class="after">
                <div style="width: 100%;height: 40px;background-color: lightskyblue;border-radius: 10px 10px 0px 0px"></div>
                <b style="font-size: 20px">&nbsp&nbsp192</b>
                天后
              </div>
            </div>
            <hr style="width:60%">
            <h1>奥地利</h1>
            <span>奥地利共和国（ 德语：Republik Österreich，英语：The Republic of Austria），简称“奥地利”（Austria），是一个位于欧洲中部的议会制共和制制国家</span>
          </li>
          <li style="margin-left: 1.5%" v-on:click="xiangqing">
            <div class="image">
              <img src="../../assets/img/ao3.jpg" alt="">
              <div class="after">
                <div style="width: 100%;height: 40px;background-color: lightskyblue;border-radius: 10px 10px 0px 0px"></div>
                <b style="font-size: 20px">&nbsp&nbsp192</b>
                天后
              </div>
            </div>
            <hr style="width:60%">
            <h1>奥地利</h1>
            <span>奥地利共和国（ 德语：Republik Österreich，英语：The Republic of Austria），简称“奥地利”（Austria），是一个位于欧洲中部的议会制共和制制国家</span>
          </li>
          <li style="margin-left: 1.5%" v-on:click="xiangqing">
            <div class="image">
              <img src="../../assets/img/ao4.jpg" alt="">
              <div class="after">
                <div style="width: 100%;height: 40px;background-color: lightskyblue;border-radius: 10px 10px 0px 0px"></div>
                <b style="font-size: 20px">&nbsp&nbsp192</b>
                天后
              </div>
            </div>
            <hr style="width:60%">
            <h1>奥地利</h1>
            <span>奥地利共和国（ 德语：Republik Österreich，英语：The Republic of Austria），简称“奥地利”（Austria），是一个位于欧洲中部的议会制共和制制国家</span>
          </li>
        </ul></div>
      </div>

    </div>
</template>

<script>
//引入common/Nav.vue @表示src
import CommonNav from '@/components/common/Nav'
export default {
    components: {
        CommonNav,
    },
  methods: {
    xiangqing(){
      this.$router.push(`/SocialDetial/`);
    }
  }
}
</script>

<style scoped>
 .top{
   text-align: center;
 }
  .sousuo,.data,.fabu{
    margin-left: 20px;
  }
  .middle{
    width: 80%;
    margin-left: 10%;
    margin-top: 50px;
  }
  .middle ul{
    width: 100%;

  }
  .middle ul li{
    width: 24%;
    list-style: none;
    float: left;
    position:relative;
    background-color:gainsboro;
    box-shadow: 10px 10px 5px #888888;
  }
  .middle ul li img{
    width: 100%;
    height: 200px;
  }
  .middle ul li .image{
    width: 100%;
    height: 230px;
  }
.after{
  position: absolute;
  top: 150px;
  right: 0px;
  width: 30%;
  border-radius: 10px;
  height: 80px;
  background-color: white;
}
  h1{
    margin-top: 20px;
  }
  .m1,.m2{
    width: 100%;
    float: left;
    margin-top: 10px;
  }

</style>
