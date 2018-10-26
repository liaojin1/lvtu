<template>
    <div class="title">
        <div class="backgroungimg"></div>

        <h3><strong>旅 途</strong></h3>
        <div class="content-box">
            <div class="login-box">
                <h6><strong>注册</strong></h6>
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                        <FormItem label="账号" prop="name">
                            <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
                        </FormItem>
                        <FormItem label="密码" prop="password">
                            <Input v-model="formValidate.password" placeholder="Enter your password"></Input>
                        </FormItem>
                        
                        <FormItem label="签证期限">
                            <Row>
                                <Col span="11">
                                    <FormItem prop="date">
                                        <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                                    </FormItem>
                                </Col>
                                <Col span="2" style="text-align: center">-</Col>
                                <Col span="11">
                                    <FormItem prop="date">
                                        <DatePicker type="date" placeholder="Select date" v-model="formValidate.date2"></DatePicker>
                                    </FormItem>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem label="性别" prop="gender">
                            <RadioGroup v-model="formValidate.gender">
                                <Radio label="male">男</Radio>
                                <Radio label="female">女</Radio>
                            </RadioGroup>
                        </FormItem>
                        
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
                            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                        </FormItem>
                </Form>
                    <a class="go-regist" @click="gologin">已有账号去登录</a>
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
                formValidate: {
                    name: '',
                    password: '',
                    gender: '',
                    interest: [],
                    date: '',
                    date2: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'password cannot be empty', trigger: 'blur' },
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            gologin(){
                this.$router.push(`/User/`);
            }
        }
}
</script>

<style scoped>
    .title{
        height: 100%;
    }
    h3{
        color: white;
        position: absolute;
        top: 15%;
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
        width: 40%;
        background-color: white;
        border-radius: 10px;
    }
    .btn-style{
        margin-top: 10%;
        width: 100%;
        margin-right: 3%;
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
</style>
