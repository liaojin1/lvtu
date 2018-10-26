<template>
    <div>
        <common-nav></common-nav>

  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2" class=""></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="3" class=""></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="http://n3-q.mafengwo.net/s11/M00/32/D9/wKgBEFtnqtuALq_yAAgMRg_6Uh843.jpeg?imageMogr2%2Fstrip"  data-holder-rendered="true">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="http://n2-q.mafengwo.net/s12/M00/86/2F/wKgED1uXytSAOAXwAAQkW30M5A805.jpeg?imageMogr2%2Fstrip"  data-holder-rendered="true">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="http://n3-q.mafengwo.net/s10/M00/93/03/wKgBZ1oOlXiAJV5VAAWsICelVjU81.jpeg?imageMogr2%2Fstrip"  data-holder-rendered="true">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="http://p2-q.mafengwo.net/s11/M00/98/7F/wKgBEFtNdFuACSL8ABODb0fvY_s80.jpeg?imageMogr2%2Fstrip"  data-holder-rendered="true">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>


      
    
    <!-- four nav -->
      <div class="popularDestinations">
        <div class="section">
          <ul class="regionTabs">
            <!--  :class="{'active':item.active}" -->
            <li :class="{active:current == key}" @mousemove="selectStyle (key)" v-for="(item, key) in items"><a href="./">{{item.select}}</a></li>
          </ul>
        </div>
      </div>

    <div class="four-content">
    <!-- 美食 -->
      <div class="meishi1 clearfix" :style="'display:'+(current=='0'?'block':'none')">
        <ul class="food clearfix">
          <li v-for="(item, key) in data"><a href=""><img src="https://b4-q.mafengwo.net/s11/M00/E8/BE/wKgBEFsCN6-ATqM_AAeqOOJkMpM448.gif?imageMogr2%2Fthumbnail%2F%21440x270r%2Fgravity%2FCenter%2Fcrop%2F%21440x270%2Fquality%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{item.contant}}</span></li>
          <li><a href=""><img src="http://n2-q.mafengwo.net/s11/M00/92/B2/wKgBEFqVWKSAIzWPAATcLeY4oMc53.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp冰糖葫芦又叫糖葫芦，在天津又称糖墩儿，在安徽凤阳叫作糖球。冰糖葫芦是中国传统小吃,它是将野果用竹签串成串后蘸上麦芽糖稀，糖稀遇风迅速变硬。北方冬天常见的小吃，一般用山楂串成，糖稀冻硬。吃起来又酸又甜，还很冰。</span></li>
          <li><a href=""><img src="http://n1-q.mafengwo.net/s11/M00/20/DB/wKgBEFpQ6QWAC8ZmAAm7J3MSp8U98.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp锅包肉原名锅爆肉，是一道东北菜，光绪年间始创自哈尔滨道台府府尹杜学赢厨师郑兴文之手。成菜后，色泽金黄，口味酸甜。锅包肉是为适应外宾口味，把咸鲜口味的“焦烧肉条”改成了一道酸甜口味的菜肴。</span></li>
          <li><a href=""><img src="http://b3-q.mafengwo.net/s10/M00/24/DC/wKgBZ1oqqXyAMNHWAA8xtqTHqkw15.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp探鱼，经营烤鱼，以原创单品重庆豆花烤鱼作为主打菜；融合了腌、烤、堂烧、涮等多种烹饪技法，其鱼鲜嫩糯软、香浓麻辣。除烤鱼外，探鱼还有“串烧、前菜、小吃主食、甜点、自制饮品”等5条产品线，满足消费者的味蕾享受。</span></li>
          <li><a href=""><img src="http://n2-q.mafengwo.net/s11/M00/1A/24/wKgBEFpQ4ASASrtXAAS1NzkVKOg51.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp哈尔滨红肠，原产于东欧的立陶宛。中东铁路修建后，外国人大量进入哈尔滨。这种灌肠传到哈尔滨已有近百年的历史。因为肠的外表呈枣红色，所以被哈尔滨人称之为红肠。</span></li>
          <li><a href=""><img src="http://b3-q.mafengwo.net/s10/M00/1E/AD/wKgBZ1oqoa-AO-2QAAwUKH0zY2Q02.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp冰糖葫芦又叫糖葫芦，在天津又称糖墩儿，在安徽凤阳叫作糖球。冰糖葫芦是中国传统小吃,它是将野果用竹签串成串后蘸上麦芽糖稀，糖稀遇风迅速变硬。北方冬天常见的小吃，一般用山楂串成，糖稀冻硬。吃起来又酸又甜，还很冰。</span></li>
          <li><a href=""><img src="http://b2-q.mafengwo.net/s11/M00/3A/15/wKgBEFtKo4GAdbrCAAE7C4IJcv841.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp锅包肉原名锅爆肉，是一道东北菜，光绪年间始创自哈尔滨道台府府尹杜学赢厨师郑兴文之手。成菜后，色泽金黄，口味酸甜。锅包肉是为适应外宾口味，把咸鲜口味的“焦烧肉条”改成了一道酸甜口味的菜肴。</span></li>
          <li><a href=""><img src="http://p1-q.mafengwo.net/s11/M00/1B/66/wKgBEFpQ4bGAcmznAAb2EJ4VyLk77.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp探鱼，经营烤鱼，以原创单品重庆豆花烤鱼作为主打菜；融合了腌、烤、堂烧、涮等多种烹饪技法，其鱼鲜嫩糯软、香浓麻辣。除烤鱼外，探鱼还有“串烧、前菜、小吃主食、甜点、自制饮品”等5条产品线，满足消费者的味蕾享受。</span></li>

          <li v-for="(item, key) in data"><a href=""><img src="https://b4-q.mafengwo.net/s11/M00/E8/BE/wKgBEFsCN6-ATqM_AAeqOOJkMpM448.gif?imageMogr2%2Fthumbnail%2F%21440x270r%2Fgravity%2FCenter%2Fcrop%2F%21440x270%2Fquality%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{item.contant}}</span></li>
          <li><a href=""><img src="http://n2-q.mafengwo.net/s11/M00/92/B2/wKgBEFqVWKSAIzWPAATcLeY4oMc53.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp冰糖葫芦又叫糖葫芦，在天津又称糖墩儿，在安徽凤阳叫作糖球。冰糖葫芦是中国传统小吃,它是将野果用竹签串成串后蘸上麦芽糖稀，糖稀遇风迅速变硬。北方冬天常见的小吃，一般用山楂串成，糖稀冻硬。吃起来又酸又甜，还很冰。</span></li>
          <li><a href=""><img src="http://n1-q.mafengwo.net/s11/M00/20/DB/wKgBEFpQ6QWAC8ZmAAm7J3MSp8U98.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp锅包肉原名锅爆肉，是一道东北菜，光绪年间始创自哈尔滨道台府府尹杜学赢厨师郑兴文之手。成菜后，色泽金黄，口味酸甜。锅包肉是为适应外宾口味，把咸鲜口味的“焦烧肉条”改成了一道酸甜口味的菜肴。</span></li>
          <li><a href=""><img src="http://b3-q.mafengwo.net/s10/M00/24/DC/wKgBZ1oqqXyAMNHWAA8xtqTHqkw15.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp探鱼，经营烤鱼，以原创单品重庆豆花烤鱼作为主打菜；融合了腌、烤、堂烧、涮等多种烹饪技法，其鱼鲜嫩糯软、香浓麻辣。除烤鱼外，探鱼还有“串烧、前菜、小吃主食、甜点、自制饮品”等5条产品线，满足消费者的味蕾享受。</span></li>
          <li><a href=""><img src="http://n2-q.mafengwo.net/s11/M00/1A/24/wKgBEFpQ4ASASrtXAAS1NzkVKOg51.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp哈尔滨红肠，原产于东欧的立陶宛。中东铁路修建后，外国人大量进入哈尔滨。这种灌肠传到哈尔滨已有近百年的历史。因为肠的外表呈枣红色，所以被哈尔滨人称之为红肠。</span></li>
          <li><a href=""><img src="http://b3-q.mafengwo.net/s10/M00/1E/AD/wKgBZ1oqoa-AO-2QAAwUKH0zY2Q02.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp冰糖葫芦又叫糖葫芦，在天津又称糖墩儿，在安徽凤阳叫作糖球。冰糖葫芦是中国传统小吃,它是将野果用竹签串成串后蘸上麦芽糖稀，糖稀遇风迅速变硬。北方冬天常见的小吃，一般用山楂串成，糖稀冻硬。吃起来又酸又甜，还很冰。</span></li>
          <li><a href=""><img src="http://b2-q.mafengwo.net/s11/M00/3A/15/wKgBEFtKo4GAdbrCAAE7C4IJcv841.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp锅包肉原名锅爆肉，是一道东北菜，光绪年间始创自哈尔滨道台府府尹杜学赢厨师郑兴文之手。成菜后，色泽金黄，口味酸甜。锅包肉是为适应外宾口味，把咸鲜口味的“焦烧肉条”改成了一道酸甜口味的菜肴。</span></li>
          <li id="more"><a href=""><img src="http://p1-q.mafengwo.net/s11/M00/1B/66/wKgBEFpQ4bGAcmznAAb2EJ4VyLk77.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="food1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp探鱼，经营烤鱼，以原创单品重庆豆花烤鱼作为主打菜；融合了腌、烤、堂烧、涮等多种烹饪技法，其鱼鲜嫩糯软、香浓麻辣。除烤鱼外，探鱼还有“串烧、前菜、小吃主食、甜点、自制饮品”等5条产品线，满足消费者的味蕾享受。</span></li>
        </ul>
      </div>

    <!-- 景点 -->
      <div class="jingdian clearfix" :style="'display:'+(current=='1'?'block':'none')">
        <ul class="jingdian1 clearfix">
          <li><a href=""><img src="https://p4-q.mafengwo.net/s11/M00/AF/43/wKgBEFtr6BmAQyVBACUnu33Y7_M723.gif?imageMogr2%2Fthumbnail%2F%21440x270r%2Fgravity%2FCenter%2Fcrop%2F%21440x270%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp翻越阿尔卑斯山便是普罗旺斯，那是法国的薰衣草之乡，遍地紫色的薰衣草和空气中弥漫的香味，是所有坠入爱河的情侣所向往的地方。今年的“普罗旺斯”，将打造成为“北有太阳岛、南有薰衣草”的国际知名旅游胜地。</span></li>
          <li><a href=""><img src="http://p1-q.mafengwo.net/s10/M00/9A/E9/wKgBZ1n3NEuAMme3AAn8n3_mRMA42.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp中央大街是黑龙江省哈尔滨市很繁盛的一条商业步行街，北起江畔的防洪纪念塔广场南接新阳广场，长1400米。这条长街始建于1900年，街道建筑包罗了文艺复兴，巴洛克等多种风格的建筑71栋。</span></li>
          <li><a href=""><img src="http://p4-q.mafengwo.net/s12/M00/42/6E/wKgED1vCnbyAbHuVAAVjlsLh9y896.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp索菲亚教堂坐落在东北名城哈尔滨，始建于1907年3月，原为沙俄东西伯利亚第四步兵师修建中东铁路的随军教堂，全木结构，占地面积为721平方米，通高53.35米，平面呈拉丁十字布局，是典型的拜占庭风格建筑</span></li>
          <li><a href=""><img src="http://b4-q.mafengwo.net/s10/M00/80/CC/wKgBZ1lVBGeAe2BIABXcjqdDehs72.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp黑龙江地处中国最北部。是四季分明的亚寒带气候，因此冬季降雪较多，降雪冬季基本不融化，放眼望去银装素裹，被称为雪乡。雪乡位于黑龙江省牡丹江市辖下海林市大海林林业局双峰林场占地面积500公顷，整个地区海拔均在1200米以上。</span></li>
          <li><a href=""><img src="http://n3-q.mafengwo.net/s11/M00/6D/55/wKgBEFqVOziAVGlrAA8XBWzhyMA59.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp翻越阿尔卑斯山便是普罗旺斯，那是法国的薰衣草之乡，遍地紫色的薰衣草和空气中弥漫的香味，是所有坠入爱河的情侣所向往的地方。今年的“普罗旺斯”，将打造成为“北有太阳岛、南有薰衣草”的国际知名旅游胜地。</span></li>
          <li><a href=""><img src="http://b3-q.mafengwo.net/s10/M00/FB/D7/wKgBZ1os4pWAQDrmAAY8_6Smuz006.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp中央大街是黑龙江省哈尔滨市很繁盛的一条商业步行街，北起江畔的防洪纪念塔广场南接新阳广场，长1400米。这条长街始建于1900年，街道建筑包罗了文艺复兴，巴洛克等多种风格的建筑71栋。</span></li>
          <li><a href=""><img src="http://p4-q.mafengwo.net/s11/M00/4E/BE/wKgBEFtm7-aAA_qCAAt95dsLfkI22.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp索菲亚教堂坐落在东北名城哈尔滨，始建于1907年3月，原为沙俄东西伯利亚第四步兵师修建中东铁路的随军教堂，全木结构，占地面积为721平方米，通高53.35米，平面呈拉丁十字布局，是典型的拜占庭风格建筑</span></li>
          <li><a href=""><img src="http://p1-q.mafengwo.net/s11/M00/DB/FA/wKgBEFqPwiKAEUmrAAftJLn48q424.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp黑龙江地处中国最北部。是四季分明的亚寒带气候，因此冬季降雪较多，降雪冬季基本不融化，放眼望去银装素裹，被称为雪乡。雪乡位于黑龙江省牡丹江市辖下海林市大海林林业局双峰林场占地面积500公顷，整个地区海拔均在1200米以上。</span></li>

          <li><a href=""><img src="https://p4-q.mafengwo.net/s11/M00/AF/43/wKgBEFtr6BmAQyVBACUnu33Y7_M723.gif?imageMogr2%2Fthumbnail%2F%21440x270r%2Fgravity%2FCenter%2Fcrop%2F%21440x270%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp翻越阿尔卑斯山便是普罗旺斯，那是法国的薰衣草之乡，遍地紫色的薰衣草和空气中弥漫的香味，是所有坠入爱河的情侣所向往的地方。今年的“普罗旺斯”，将打造成为“北有太阳岛、南有薰衣草”的国际知名旅游胜地。</span></li>
          <li><a href=""><img src="http://p1-q.mafengwo.net/s10/M00/9A/E9/wKgBZ1n3NEuAMme3AAn8n3_mRMA42.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp中央大街是黑龙江省哈尔滨市很繁盛的一条商业步行街，北起江畔的防洪纪念塔广场南接新阳广场，长1400米。这条长街始建于1900年，街道建筑包罗了文艺复兴，巴洛克等多种风格的建筑71栋。</span></li>
          <li><a href=""><img src="http://p4-q.mafengwo.net/s12/M00/42/6E/wKgED1vCnbyAbHuVAAVjlsLh9y896.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp索菲亚教堂坐落在东北名城哈尔滨，始建于1907年3月，原为沙俄东西伯利亚第四步兵师修建中东铁路的随军教堂，全木结构，占地面积为721平方米，通高53.35米，平面呈拉丁十字布局，是典型的拜占庭风格建筑</span></li>
          <li><a href=""><img src="http://b4-q.mafengwo.net/s10/M00/80/CC/wKgBZ1lVBGeAe2BIABXcjqdDehs72.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp黑龙江地处中国最北部。是四季分明的亚寒带气候，因此冬季降雪较多，降雪冬季基本不融化，放眼望去银装素裹，被称为雪乡。雪乡位于黑龙江省牡丹江市辖下海林市大海林林业局双峰林场占地面积500公顷，整个地区海拔均在1200米以上。</span></li>
          <li><a href=""><img src="http://n3-q.mafengwo.net/s11/M00/6D/55/wKgBEFqVOziAVGlrAA8XBWzhyMA59.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp翻越阿尔卑斯山便是普罗旺斯，那是法国的薰衣草之乡，遍地紫色的薰衣草和空气中弥漫的香味，是所有坠入爱河的情侣所向往的地方。今年的“普罗旺斯”，将打造成为“北有太阳岛、南有薰衣草”的国际知名旅游胜地。</span></li>
          <li><a href=""><img src="http://b3-q.mafengwo.net/s10/M00/FB/D7/wKgBZ1os4pWAQDrmAAY8_6Smuz006.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp中央大街是黑龙江省哈尔滨市很繁盛的一条商业步行街，北起江畔的防洪纪念塔广场南接新阳广场，长1400米。这条长街始建于1900年，街道建筑包罗了文艺复兴，巴洛克等多种风格的建筑71栋。</span></li>
          <li><a href=""><img src="http://p4-q.mafengwo.net/s11/M00/4E/BE/wKgBEFtm7-aAA_qCAAt95dsLfkI22.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp索菲亚教堂坐落在东北名城哈尔滨，始建于1907年3月，原为沙俄东西伯利亚第四步兵师修建中东铁路的随军教堂，全木结构，占地面积为721平方米，通高53.35米，平面呈拉丁十字布局，是典型的拜占庭风格建筑</span></li>
          <li><a href=""><img src="http://p1-q.mafengwo.net/s11/M00/DB/FA/wKgBEFqPwiKAEUmrAAftJLn48q424.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90" alt=""></a><span class="jing1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp黑龙江地处中国最北部。是四季分明的亚寒带气候，因此冬季降雪较多，降雪冬季基本不融化，放眼望去银装素裹，被称为雪乡。雪乡位于黑龙江省牡丹江市辖下海林市大海林林业局双峰林场占地面积500公顷，整个地区海拔均在1200米以上。</span></li>
        </ul>
      </div>

    <!-- 住宿 -->
      <div class="zhusu clearfix"  :style="'display:'+(current=='2'?'block':'none')">
        <ul class="zhusu1 clearfix">
          <li><a href=""><img src="http://p4-q.mafengwo.net/s8/M00/8D/0D/wKgBpVV1SoeAXRKSACPZXF9NFzo95.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp哈尔滨雅客莱假日酒店座落于哈尔滨的繁华商业区黄金地段，地理位置优越，交通便利，闹中取静。是哈尔滨市一家采用国内最先进的智能化硬件设施系统、独具匠心的人文关怀设计与功能配置的快捷宾馆。也是哈尔滨市提倡“尊贵、品味、时尚、私密”的服务理念，处处为顾客提供细腻、体贴、关怀、周到服务让顾客拥有“家外有家”的快捷宾馆。</span></li>
          <li><a href=""><img src="http://n1-q.mafengwo.net/s11/M00/90/81/wKgBEFt7fGCACVhaABTml6pbY6U47.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp汉庭酒店是一家标准星级会议型酒店。酒店拥有豪华客房，有标准房、双人海景房及主席套房。房间设施齐备，包括电视机、雪柜、迷你吧、保险箱、电脑门卡系统及先进的空调系统。酒店内有多间中西餐厅及宴会厅为旅客提供舒适和最大灵活性的享受，适合短期住客和长期住客。此外，餐厅可以满足最挑剔客人的口味，适合中外不同阶层宾客居住。</span></li>
          <li><a href=""><img src="http://p3-q.mafengwo.net/s7/M00/44/40/wKgB6lPRPHOAdoPBAAQKG28-nlM29.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp哈尔滨勃莱梅大酒店隶属于哈尔滨云马酒店管理有限公司，管理公司是一家以酒店经营管理为主业的专业管理公司，经营管理资产总额已达数亿元人民币，项目涉及酒店管理、产权经营、金融担保等领域，在同业中享有极高声誉。哈尔滨勃莱梅大酒店是哈尔滨云马酒店管理有限公司旗下的又一经典之作----五星级酒店。</span></li>
          <li><a href=""><img src="http://n3-q.mafengwo.net/s10/M00/E5/37/wKgBZ1mMbEOATcKxABHrxTIiw1w91.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp哈尔滨新巴黎大酒店建筑面积35,000余平方米，主楼29层，地下2层，裙楼5层。拥有各类客房，可接收国际、国内卫星电视节目及光纤宽带上网，并为VIP客人设置配有液晶电脑的行政客房和行政酒廊；中餐厅、法式西餐厅可同时容纳800人用餐；大堂吧、雪茄吧、红酒吧别具欧罗巴风情。配有同声传译系统的国际会议中心可同时容纳500人开会。</span></li>
           <li><a href=""><img src="http://b3-q.mafengwo.net/s11/M00/F3/C5/wKgBEFtEJ_OAbAqYAMwkF6eYny437.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp哈尔滨雅客莱假日酒店座落于哈尔滨的繁华商业区黄金地段，地理位置优越，交通便利，闹中取静。是哈尔滨市一家采用国内最先进的智能化硬件设施系统、独具匠心的人文关怀设计与功能配置的快捷宾馆。也是哈尔滨市提倡“尊贵、品味、时尚、私密”的服务理念，处处为顾客提供细腻、体贴、关怀、周到服务让顾客拥有“家外有家”的快捷宾馆。</span></li>
          <li><a href=""><img src="http://n4-q.mafengwo.net/s10/M00/1A/73/wKgBZ1mVTI6AAzZjAASCTyQ13MM26.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp汉庭酒店是一家标准星级会议型酒店。酒店拥有豪华客房，有标准房、双人海景房及主席套房。房间设施齐备，包括电视机、雪柜、迷你吧、保险箱、电脑门卡系统及先进的空调系统。酒店内有多间中西餐厅及宴会厅为旅客提供舒适和最大灵活性的享受，适合短期住客和长期住客。此外，餐厅可以满足最挑剔客人的口味，适合中外不同阶层宾客居住。</span></li>
          <li><a href=""><img src="http://p3-q.mafengwo.net/s11/M00/36/08/wKgBEFtqgD-ASMFzABsq_zei5JU54.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp哈尔滨勃莱梅大酒店隶属于哈尔滨云马酒店管理有限公司，管理公司是一家以酒店经营管理为主业的专业管理公司，经营管理资产总额已达数亿元人民币，项目涉及酒店管理、产权经营、金融担保等领域，在同业中享有极高声誉。哈尔滨勃莱梅大酒店是哈尔滨云马酒店管理有限公司旗下的又一经典之作----五星级酒店。</span></li>
          <li><a href=""><img src="http://n1-q.mafengwo.net/s10/M00/39/35/wKgBZ1nMrEqASR96AAINwd6aBeY92.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp哈尔滨新巴黎大酒店建筑面积35,000余平方米，主楼29层，地下2层，裙楼5层。拥有各类客房，可接收国际、国内卫星电视节目及光纤宽带上网，并为VIP客人设置配有液晶电脑的行政客房和行政酒廊；中餐厅、法式西餐厅可同时容纳800人用餐；大堂吧、雪茄吧、红酒吧别具欧罗巴风情。配有同声传译系统的国际会议中心可同时容纳500人开会。</span></li>

          <li><a href=""><img src="http://p4-q.mafengwo.net/s8/M00/8D/0D/wKgBpVV1SoeAXRKSACPZXF9NFzo95.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp哈尔滨雅客莱假日酒店座落于哈尔滨的繁华商业区黄金地段，地理位置优越，交通便利，闹中取静。是哈尔滨市一家采用国内最先进的智能化硬件设施系统、独具匠心的人文关怀设计与功能配置的快捷宾馆。也是哈尔滨市提倡“尊贵、品味、时尚、私密”的服务理念，处处为顾客提供细腻、体贴、关怀、周到服务让顾客拥有“家外有家”的快捷宾馆。</span></li>
          <li><a href=""><img src="http://n1-q.mafengwo.net/s11/M00/90/81/wKgBEFt7fGCACVhaABTml6pbY6U47.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp汉庭酒店是一家标准星级会议型酒店。酒店拥有豪华客房，有标准房、双人海景房及主席套房。房间设施齐备，包括电视机、雪柜、迷你吧、保险箱、电脑门卡系统及先进的空调系统。酒店内有多间中西餐厅及宴会厅为旅客提供舒适和最大灵活性的享受，适合短期住客和长期住客。此外，餐厅可以满足最挑剔客人的口味，适合中外不同阶层宾客居住。</span></li>
          <li><a href=""><img src="http://p3-q.mafengwo.net/s7/M00/44/40/wKgB6lPRPHOAdoPBAAQKG28-nlM29.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp哈尔滨勃莱梅大酒店隶属于哈尔滨云马酒店管理有限公司，管理公司是一家以酒店经营管理为主业的专业管理公司，经营管理资产总额已达数亿元人民币，项目涉及酒店管理、产权经营、金融担保等领域，在同业中享有极高声誉。哈尔滨勃莱梅大酒店是哈尔滨云马酒店管理有限公司旗下的又一经典之作----五星级酒店。</span></li>
          <li><a href=""><img src="http://n3-q.mafengwo.net/s10/M00/E5/37/wKgBZ1mMbEOATcKxABHrxTIiw1w91.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp哈尔滨新巴黎大酒店建筑面积35,000余平方米，主楼29层，地下2层，裙楼5层。拥有各类客房，可接收国际、国内卫星电视节目及光纤宽带上网，并为VIP客人设置配有液晶电脑的行政客房和行政酒廊；中餐厅、法式西餐厅可同时容纳800人用餐；大堂吧、雪茄吧、红酒吧别具欧罗巴风情。配有同声传译系统的国际会议中心可同时容纳500人开会。</span></li>
           <li><a href=""><img src="http://b3-q.mafengwo.net/s11/M00/F3/C5/wKgBEFtEJ_OAbAqYAMwkF6eYny437.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp哈尔滨雅客莱假日酒店座落于哈尔滨的繁华商业区黄金地段，地理位置优越，交通便利，闹中取静。是哈尔滨市一家采用国内最先进的智能化硬件设施系统、独具匠心的人文关怀设计与功能配置的快捷宾馆。也是哈尔滨市提倡“尊贵、品味、时尚、私密”的服务理念，处处为顾客提供细腻、体贴、关怀、周到服务让顾客拥有“家外有家”的快捷宾馆。</span></li>
          <li><a href=""><img src="http://n4-q.mafengwo.net/s10/M00/1A/73/wKgBZ1mVTI6AAzZjAASCTyQ13MM26.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp汉庭酒店是一家标准星级会议型酒店。酒店拥有豪华客房，有标准房、双人海景房及主席套房。房间设施齐备，包括电视机、雪柜、迷你吧、保险箱、电脑门卡系统及先进的空调系统。酒店内有多间中西餐厅及宴会厅为旅客提供舒适和最大灵活性的享受，适合短期住客和长期住客。此外，餐厅可以满足最挑剔客人的口味，适合中外不同阶层宾客居住。</span></li>
          <li><a href=""><img src="http://p3-q.mafengwo.net/s11/M00/36/08/wKgBEFtqgD-ASMFzABsq_zei5JU54.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp哈尔滨勃莱梅大酒店隶属于哈尔滨云马酒店管理有限公司，管理公司是一家以酒店经营管理为主业的专业管理公司，经营管理资产总额已达数亿元人民币，项目涉及酒店管理、产权经营、金融担保等领域，在同业中享有极高声誉。哈尔滨勃莱梅大酒店是哈尔滨云马酒店管理有限公司旗下的又一经典之作----五星级酒店。</span></li>
          <li><a href=""><img src="http://n1-q.mafengwo.net/s10/M00/39/35/wKgBZ1nMrEqASR96AAINwd6aBeY92.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90" alt=""></a><span class="zhu1">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp哈尔滨新巴黎大酒店建筑面积35,000余平方米，主楼29层，地下2层，裙楼5层。拥有各类客房，可接收国际、国内卫星电视节目及光纤宽带上网，并为VIP客人设置配有液晶电脑的行政客房和行政酒廊；中餐厅、法式西餐厅可同时容纳800人用餐；大堂吧、雪茄吧、红酒吧别具欧罗巴风情。配有同声传译系统的国际会议中心可同时容纳500人开会。</span></li>
        </ul>
      </div>

    <!-- 新闻 -->
      <div class="xinwen">
        <ul class="xinwen1"  :style="'display:'+(current=='3'?'block':'none')">
          <li><a href=""><img src="../../assets/img/z1.jpg" align="left" alt=""></a><div class="wenzi"><div class="biaoti"><h3>标题</h3><br><span>Courtyard by Marriott Hangzhou Wulin</span></div><p>去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。</p><span class="fabu">发布时间</span><span class="zuozhe">作者</span></div></li>
          <li><a href=""><img src="../../assets/img/z1.jpg" align="left" alt=""></a><div class="wenzi"><div class="biaoti"><h3>标题</h3><br><span>Courtyard by Marriott Hangzhou Wulin</span></div><p>去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。</p><span class="fabu">发布时间</span><span class="zuozhe">作者</span></div></li>
          <li><a href=""><img src="../../assets/img/z1.jpg" align="left" alt=""></a><div class="wenzi"><div class="biaoti"><h3>标题</h3><br><span>Courtyard by Marriott Hangzhou Wulin</span></div><p>去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。</p><span class="fabu">发布时间</span><span class="zuozhe">作者</span></div></li>
          <li><a href=""><img src="../../assets/img/z1.jpg" align="left" alt=""></a><div class="wenzi"><div class="biaoti"><h3>标题</h3><br><span>Courtyard by Marriott Hangzhou Wulin</span></div><p>去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。去武林广场步行十五分钟，在门口骑共享单车就能到西湖。有室内泳池和健身房，和万豪共用的。早餐不错，服务人员态度热情。</p><span class="fabu">发布时间</span><span class="zuozhe">作者</span></div></li>          
        </ul>
      </div>
    </div>


    </div>
</template>
<script>
  import CommonNav from '@/components/common/Nav'
  import axios from 'axios'
  import Vue from 'vue'
  export default {
    data(){
      return {
        data:[],
        current: 0,
        items:[
            {select: '美食推荐'},
            {select: '景点推荐'},
            {select: '住宿推荐'},
            {select: '热点新闻'}
        ],
      }
    },
    components:{
      CommonNav,
    },
    methods:{
      selectStyle (i) {
        this.current = i;
　　　 },
    },
    mounted: function() {
      axios.get('/api/data').then(res => {
        this.data = res.data.data;
        console.log(res.data.data);
      }).catch(res => {
        console.log('wrong data');
      })
    },
  }

</script>
<style scoped>
  .clearfix{
    clear: both;
    content: "";
  }
  .meishi1 a,.jingdian a,.zhusu a{
     text-decoration: none;
   }
  .meishi1, .jingdian, .zhusu, .xinwen{
     box-sizing: border-box;
     width: 90%;
     margin-left: 5%;
   }
  .food li, .jingdian1 li, .zhusu1 li{
    float: left;
    width: 24%;
    margin-left: 1%;
    height: 200px;
    list-style: none;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 2%;
  }
  .food li img, .jingdian1 li img, .zhusu1 li img{
    width: 100%;
    height: 200px;
    border-radius: 5px;
  }
  .food1,.jing1,.zhu1{
    display: inline-block;
    position: absolute;
    bottom:0px;
    left: 0px;
    width: 100%;
    height: 25%;
    /* rgba(211,211,211,.3) */
    background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0.4) 25%,rgba(0,0,0,0.9) 100%);;
    color:white;
    text-align: left;
    overflow: hidden;
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
  .jing1,.zhu1,.food1{
    transition: height 1s;
  }
  .jing1:hover,.zhu1:hover,.food1:hover{
    height: 70%;
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

.popularDestinations .section {
    margin-top: 40px;
}
.popularDestinations .regionTabs {
    width: 943px;
}
.popularDestinations .regionTabs {
    display: table;
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #e3e2df;
    border-bottom-color: #e3e2df;
    box-shadow: 0 1px 5px 1px #e3e2df;
}
.popularDestinations .regionTabs li.active, .popularDestinations .regionTabs li.active:hover {
    color: #5cadff;
    background: #fff;
    cursor: default;
}
.popularDestinations .regionTabs li:first-child {
    padding-left: 16px;
    border-left: none;
}
.popularDestinations .regionTabs li {
    display: table-cell;
    /* display: inline!ie; */
    /* zoom: 1!ie; */
    height: 35px;
    padding: 4px 15px;
    line-height: 35px;
    border-left: 1px solid #dad7c8;
    color: #9e9a89;
    font-weight: bold;
    background: #f4f3f0;
    text-align: center;
    cursor: pointer;
    position: relative;
    transition: all 100ms linear;
}
.popularDestinations .regionTabs li.active:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4px;
    background: #5cadff;
}
.popularDestinations .regionTabs li.active:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -12px;
    width: 0;
    height: 0;
    margin-left: -8px;
    border: solid transparent;
    border-top-color: #5cadff;
    border-width: 6px 8px;
}
.popularDestinations .regionTabs li.active a, .popularDestinations .regionTabs li.active a:hover {
    color: #5cadff;
}
.popularDestinations .regionTabs li a {
    display: inline-block;
    max-width: 200px;
    font-size: 16px;
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #9e9a89;
}
a, a:visited, a:active {
    color: #069;
    text-decoration: none;
    outline: none;
}
</style>
