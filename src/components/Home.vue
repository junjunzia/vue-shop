<template>
  <el-container>
    <!-- 头部区域 -->
    <el-header>Header<el-button type='info' @click='logout'>退出</el-button></el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏区域 -->
      <el-aside width="200px">Aside</el-aside>
      <!-- 右侧内容主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      // 清除token
      window.sessionStorage.clear()
      // 跳转到登录页面
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
</style>
