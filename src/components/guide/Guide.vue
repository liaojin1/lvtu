<template>
    <div>
        <common-nav></common-nav>
        <div ref="allmap" class="mapbar"></div>
    </div>
</template>
<script>
import CommonNav from '@/components/common/Nav'
export default {
    components:{
        CommonNav,
    },
    // 创建地图对象，在mounted生命周期调用；
    mounted() {
        var map = new BMap.Map(this.$refs.allmap);
        var point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);
        var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
        var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
        var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
        map.addControl(top_left_control);
		map.addControl(top_left_navigation);
        map.addControl(top_right_navigation);
        map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
	    map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

        window.setTimeout(function(){
            map.panTo(new BMap.Point(126.618714,45.721202));
        }, 2000);
    },
    methods: {

    }
}

</script>

<style scoped>
.mapbar{
    width: 100%;
    height: 500px;
}
</style>
