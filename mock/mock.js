import Mock from 'mockjs'
const Random = Mock.Random;

// 登录页
Mock.mock('/api/users', 'post', (option) => {
    // 判断是否成功
    let success = 0;
    let usersName = '1317856526';
    let pwd = '123456';
    let {
        user,
        password
    } = JSON.parse(option.body)
    // console.log(option.body);
    console.log(user);
    console.log(password);
    if (user == usersName && password == pwd) {
        success = 1;
    }
    return success;
})


// 注册页
var registers = [
    '18232467553',
    '18232467554',
    '18232467555',
    '18232467556',
]
Mock.mock('/api/register', 'post', (option) => {
    //是否成功  0表示失败，1表示注册成功
    let successr = 0;
    let {
        user,
        password,
        password2,
        yanzheng
    } = JSON.parse(option.body)
    //当前已经注册的手机号
    console.log(user);
    console.log(password);
    console.log(password2);
    console.log(yanzheng);
    for (var i = 0; i < registers.length; i++) {
        if (registers[i] == user) {
            successr = 0;
            break;
        } else {
            //			把注册成功的手机号添加到数组里
            successr = 1;
        }
    }
    registers.push(user)

    return successr

})