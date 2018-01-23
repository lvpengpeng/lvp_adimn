<template>
    <div class="myselect-wrap">
      <div class="select-wrap-top">
        <span>11233</span>
        <div class="jt"></div>
      </div>
      <!--<ul>-->
        <!--<li></li>-->
        <!--<li></li>-->
        <!--<li></li>-->
      <!--</ul>-->
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
  .myselect-wrap{
    width: 100px;
    height: 30px;
    .select-wrap-top{
      display: flex;
      align-items: center;
      border: 1px solid #ccc;
      span{
        width: 80px;
        height: 30px;
        background: #ddd;
      }
      .jt{
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top:10px solid #ccc;
        width: 0;
        height: 0;
        margin: 0 auto;
      }
    }
  }
</style>
