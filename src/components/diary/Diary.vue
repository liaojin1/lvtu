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
            <button type="button" class="btn btn-outline-primary">写日记</button>
            </div>
        </div>

<div class="out-content">
    <div class="card-deck content">
        <div class="card" @click="goDetial">
            <img class="card-img-top" src="@/assets/img/beach.jpg" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        <div class="card" @click="goDetial">
            <img class="card-img-top" src="@/assets/img/beach.jpg" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        <div class="card" @click="goDetial">
            <img class="card-img-top" src="@/assets/img/beach.jpg" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    </div>
        <!-- 2row -->

<div class="card-deck content">
        <div class="card" @click="goDetial">
            <img class="card-img-top" src="@/assets/img/beach.jpg" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        <div class="card" @click="goDetial">
            <img class="card-img-top" src="@/assets/img/beach.jpg" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        <div class="card" @click="goDetial">
            <img class="card-img-top" src="@/assets/img/beach.jpg" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    </div>

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
    data(){

    },
    methods:{
        goDetial(){
            this.$router.push(`/diarydetial/`);
        }
    }
}
</script>

<style scoped>
.content{
    margin-top: 3%;
}
.out-content{
    margin-left:10%;
    margin-right: 10%;
}
.btn{
    margin-top: 3%;
}
</style>
