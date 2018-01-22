<template>
  <div class="detail-wrap">
    <div class="detail-wrap-left">
      <img :src="productIcon" alt="">
      <ul>
        <router-link v-for="item in products" :to="{path:item.path}" tag="li" active-class="active"> {{item.name}}</router-link>
      </ul>
    </div>
    <div class="detail-wrap-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          {
            name: '数据统计',
            path: 'count',
            icon: require('../assets/images/1.png'),
            active: false
          },
          {
            name: '数据预测',
            path: 'forecast',
            active: false
          },
          {
            name: '流量分析',
            path: 'analysis',
            active: false
          },
          {
            name: '广告发布',
            path: 'publish',
            active: false
          }
        ],
        imgMap: {
          '/detail/count': require("../assets/images/1.png"),
          '/detail/forecast': require("../assets/images/2.png"),
          '/detail/analysis': require("../assets/images/3.png"),
          '/detail/publish': require("../assets/images/4.png")
        }
      }
    },
    computed: {
      productIcon () {
        return this.imgMap['/detail/count']
      }
    }
  }
</script>

<style scoped lang="scss">
  .detail-wrap{
    width: 1200px;
    padding:10px 0;
    background: #ccc;
    margin:0 auto;
    .detail-wrap-left{
      width:200px;
      height:300px;
      background:#fff;
      overflow:hidden;
      img{
        display: block;
        /*width: 100px;*/
        /*height:100px;*/
        margin:20px auto;
      }
      ul{
        li{
          width:200px;
          height: 34px;
          line-height:34px;
          text-align:center;
        }
        li:hover {
          background: #4fc08d;
          color: #fff;
        }
      }
    }
  }
</style>
