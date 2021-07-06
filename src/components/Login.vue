<template>
  <div class='login_container'>
    <div class="login_box">
      <!-- 头像区 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!-- 登录表单区,这些 组件都需要在element.js中导入 -->
      <!-- 在登录表单区域：model动态绑定data里的loginform，
      再为具体的表单项进行双向绑定到data里的loginform里的具体数据 -->
      <el-form ref='loginFormRef' :model="loginForm" :rules='loginFormRules' label-width="0px" class='login_form'>
        <!-- 用户名区 -->
        <el-form-item prop='username'>
         <el-input v-model='loginForm.username' prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码区 prop指定具体检验规则-->
        <el-form-item prop='password'>
         <el-input  v-model='loginForm.password' prefix-icon="el-icon-lock" type='password'></el-input>
        </el-form-item>
        <!-- 按钮区 -->
        <el-form-item class='btns'>
           <el-button type="primary" @click='login'>登录</el-button>
           <el-button type="info" @click='resetLoginForm'>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    // 点击登录
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        // 因为result输出为promise，所以可以用await+async方法，await紧挨的方法将修饰为异步的async方法，
        // 此时result输出不再是promisel，而是一个具体的响应对象,将result改写为{ data: res }p22
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        // 将登录成功之后的token保存到客户端的sessionstorage中
        window.sessionStorage.setItem('token', res.data.token)
        // 通过编程式导航跳转到后台主页，路由地址是/home
        // 跳转到登录页面
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang='less' scoped>
  .login_container{
  background-color: #2b4b6b;
  height: 100%;
  }
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .btns {
      display: flex;
      justify-content: flex-end;
    }
    .login_form {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;// 图片和边框之间的间距
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;//离父盒子左侧父盒子宽度的50%
    transform: translate(-50%, -50%);//相对于自己位置自己宽度的50%,相对于自己位置自己高度的50%
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;

    }

  }
</style>
