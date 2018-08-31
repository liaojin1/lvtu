<template>
    <div class="title">
        <div class="backgroungimg"></div>

        <h3><strong>旅 途</strong></h3>
        <div class="content-box">
            <div class="login-box">
                <h6><strong>登录</strong></h6>
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <FormItem prop="user" class="input-style">
                        <Input type="text" v-model="formInline.user" placeholder="Username">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password" class="input-style">
                        <Input type="password" v-model="formInline.password" placeholder="Password">
                            <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                        <Button class="btn-style" type="primary" @click="handleSubmit('formInline')">登录</Button>
                </Form>
                    <a class="go-regist clearfix" @click="goregister">没有账号去注册</a>
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
    data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            goregister(){
                this.$router.push(`/Register/`);
            }
        }
}
</script>

<style scoped>
    .clearfix:before,.clearfix:after{
        content: '';
        clear: both;
        display: block;
    }
    .title{
        height: 100%;
    }
    h3{
        color: white;
        position: absolute;
        top: 18%;
        left: 50%;
        transform: translateX(-50%);
    }
    h6{
        margin-bottom: 5%;
    }
    .backgroungimg{
        position: relative;
        width: 100%;
        height: 100%;
        background: url('../../assets/img/beach.jpg') no-repeat center/cover;
    }
    .content-box{
        margin-top: 3%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 30%;
        height: 50%;
        background-color: white;
    }
    .btn-style{
        margin-top: 10%;
        display: block;
        margin: 0 auto;
    }
    .login-box{
        margin-top: 5%;
        margin: 5% 3%;
    }
    .content-box .login-box .go-regist{
        color: gray;
        font-size: 10%;
    }
    .content-box .login-box .go-regist:hover{
        cursor: pointer;
        color: black;
    }
    .input-style{
        width: 100%;
    }
</style>
