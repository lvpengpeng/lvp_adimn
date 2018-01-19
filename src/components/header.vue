<template>
  <div class="header">
    <div class="header-center">
      <a class="icon">
        <img src="../assets/logo.png" alt="">
      </a>
      <ul class="header-nav">
        <li>登录</li>
        <li>丨</li>
        <li>注册</li>
        <li>丨</li>
        <li>关于</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  .header{
    width:100%;
    height: 90px;
    line-height: 90px;
    text-align: center;
    background:#363636;

    .header-center{
      width: 1200px;
      height: 100%;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      .icon,.header-nav{
        height: 100%;
      }
      .icon{
        width: 100px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .header-nav{
        li{
          color: greenyellow;
          display: inline-block;
        }
      }
    }
  }
</style>


