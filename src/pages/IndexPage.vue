<template>
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-wrap-bloack">
          <h2>全部产品</h2>
          <template v-for="product in productList">
            <h3>{{product.title}}</h3>
            <ul>
              <li v-for="item in product.list">
                <a :href="item.url">{{item.name}}</a>
                <span v-if="item.hot" class="hot-tag">HOT</span>
              </li>
            </ul>
            <div v-if="!product.last" class="hr"></div>
          </template>
        </div>
      </div>
      <div class="index-right"></div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          invTime: 2000,
          slides: [
            {
              src: require('../assets/slideShow/pic1.jpg'),
              title: 'xxx1',
              href: 'detail/analysis'
            },
            {
              src: require('../assets/slideShow/pic2.jpg'),
              title: 'xxx2',
              href: 'detail/count'
            },
            {
              src: require('../assets/slideShow/pic3.jpg'),
              title: 'xxx3',
              href: 'http://xxx.xxx.com'
            },
            {
              src: require('../assets/slideShow/pic4.jpg'),
              title: 'xxx4',
              href: 'detail/forecast'
            }
          ],
          boardList: [
            {
              title: '开放产品',
              description: '开放产品是一款开放产品',
              id: 'car',
              toKey: 'analysis',
              saleout: false
            },
            {
              title: '品牌营销',
              description: '品牌营销帮助你的产品更好地找到定位',
              id: 'earth',
              toKey: 'count',
              saleout: false
            },
            {
              title: '使命必达',
              description: '使命必达快速迭代永远保持最前端的速度',
              id: 'loud',
              toKey: 'forecast',
              saleout: true
            },
            {
              title: '勇攀高峰',
              description: '帮你勇闯高峰，到达事业的顶峰',
              id: 'hill',
              toKey: 'publish',
              saleout: false
            }
          ],
          newsList: [],
          productList: {
            pc: {
              title: 'PC产品',
              list: [
                {
                  name: '数据统计',
                  url: 'http://starcraft.com'
                },
                {
                  name: '数据预测',
                  url: 'http://warcraft.com'
                },
                {
                  name: '流量分析',
                  url: 'http://overwatch.com',
                  hot: true
                },
                {
                  name: '广告发布',
                  url: 'http://hearstone.com'
                }
              ]
            },
            app: {
              title: '手机应用类',
              last: true,
              list: [
                {
                  name: '91助手',
                  url: 'http://weixin.com'
                },
                {
                  name: '产品助手',
                  url: 'http://twitter.com',
                  hot: true
                },
                {
                  name: '智能地图',
                  url: 'http://maps.com'
                },
                {
                  name: '团队语音',
                  url: 'http://phone.com'
                }
              ]
            }
          }
        }
      }
    }
</script>

<style scoped lang="scss">
.index-wrap{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .index-left{
    width: 300px;
    height: 100%;
    background: #ccc;
    padding-top: 15px;
    .index-wrap-bloack{
      width: 270px;
      margin: 0 auto;
      background: #fff;
      h2{
        background: #4fc08d;
        padding:10px 20px;
      }
      h3{
        padding: 15px;
      }
      ul{
        padding: 10px 15px;
      }
      .hr{
        width: 100%;
        height: 1px;
        background: #ccc;
      }
      .hot-tag{
        background: red;
        color: orange;
      }
    }
  }
  .index-right{
    width: 900px;
    height: 100%;
    background: #ddd;
  }
}
  a{
    color: #333;
  }
</style>
