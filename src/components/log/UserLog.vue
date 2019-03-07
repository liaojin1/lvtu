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
            <!-- <a href="/write"><button type="button" class="btn btn-outline-primary">续写</button></a> -->
            </div>
        </div>

        <div style="padding: 20px 10%">
            <Form :model="formItem" :label-width="80">
                <FormItem label="标题">
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="地点">
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="心得">
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 20,maxRows: 30}" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="上传照片">
                    <image style="background-color:#eee"></image>
                </FormItem>
                <FormItem>
                    <Button type="primary">提交</Button>
                    <Button style="margin-left: 8px">取消</Button>
                </FormItem>
            </Form>
        </div>

    </div>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
    components:{
        CommonNav,
    },
    data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
}
</script>

<style scoped>

</style>
