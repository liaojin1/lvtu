<template>
    <div>
        <common-nav></common-nav>
        
    </div>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import axios from 'axios'
export default {
    data(){
        return {
            data:'',

        }
    },
    components:{
      CommonNav,
    },
    mounted:function(){
        axios.get(API_PROXY+'http://mobile.weather.com.cn/data/sk/101050101.html?_=1381891661455').then((res) => {
            // this.data = res;
            console.log(res.data);
        }).catch((res) => {
            console.log('wrong');
        })
    }
}
</script>

<style scoped>

</style>
