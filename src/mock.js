//引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random;
//使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {//当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
    let list = [];
    // for(let i = 0; i < 30; i++) {
        let listObject = {
            contant: Random.csentence(80, 130),//随机生成一段中文文本。
            
        }
        list.push(listObject);
    // }
    return {
        data: list
    }
})