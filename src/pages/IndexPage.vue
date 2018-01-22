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
        <div class="index-wrap-bloack news">
          <h2>最新消息</h2>
            <ul>
              <li v-for="news in newsList">
                <a :href="news.url" class="new-text">{{news.title}}</a>
              </li>
            </ul>
        </div>
      </div>
      <div class="index-right">
        <div class="banner">轮播图</div>
        <div class="index-board-list clearfix">
          <div class="index-board-box" v-for="(board ,index) in boardList" :class="[{'line-last' : index % 2 !== 0}, 'banner-inner-'+board.id]">
            <div class="banner-inner-left" ></div>
            <div class="banner-inner-right">
              <h2>{{board.title}}</h2>
              <p>{{board.description}}</p>
              <div class="button">立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from "axios"
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
          "login": {
            "username": "yudongdong",
            "userId": 123123
          },
          "getPrice": {
            "amount": 678
          },
          "createOrder": {
            "orderId": "6djk979"
          },
          "getOrderList": {
            "list": [
              {
                "orderId": "ddj123",
                "product": "数据统计",
                "version": "高级版",
                "period": "1年",
                "buyNum": 2,
                "date": "2016-10-10",
                "amount": "500元"
              },
              {
                "orderId": "yuj583",
                "product": "流量分析",
                "version": "户外版",
                "period": "3个月",
                "buyNum": 1,
                "date": "2016-5-2",
                "amount": "2200元"
              },
              {
                "orderId": "pmd201",
                "product": "广告发布",
                "version": "商铺版",
                "period": "3年",
                "buyNum": 12,
                "date": "2016-8-3",
                "amount": "7890元"
              }
            ]
          },
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
      },
      created: function () {
        axios.get('/api/getNewsList')
          .then((res) => {
            this.newsList = res.data
          }, (err) => {
            console.log(err)
          })
      }
    }
</script>

<style scoped lang="scss">
.index-wrap{
  width: 1200px;
  height: 100%;
  margin: 15px auto 0;
  display: flex;
  justify-content: space-between;
  .index-left{
    width: 300px;
    height: 100%;
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
    .news{
      margin-top: 20px;
      min-height: 380px;
      .new-text{
        display: block;
        width: 200px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      }
    }
  }
  .index-right{
    width: 900px;
    height: 100%;
    overflow: hidden;
    .banner{
      width: 900px;
      height: 406px;
      background: #fff;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    .index-board-list{
      width: 100%;
      height: 348px;
      overflow: hidden;
      margin-top: 10px;
      .banner-inner-car .banner-inner-left{
        background: url("../assets/images/1.png");
        background-size: cover;
      }
      .banner-inner-loud .banner-inner-left{
        background: url("../assets/images/2.png");
        background-size: cover;
      }
      .banner-inner-earth .banner-inner-left{
        background: url("../assets/images/3.png");
        background-size: cover;
      }
      .banner-inner-hill .banner-inner-left{
        background: url("../assets/images/4.png");
        background-size: cover;
      }
      .line-last{
        margin-left: 20px;
      }
      .index-board-box{
        display: flex;
        width: 440px;
        height: 140px;
        float: left;
        margin-top: 8px;
        background: #fff;
        .banner-inner-left{
          margin: 10px;
          width: 120px;
          height: 120px;
        }
        .banner-inner-right{
          h2{
            margin-top: 10px;
            font-weight: bold;
          }
          p{
            margin-top: 20px;
          }
          .button{
            width: 96px;
            height: 34px;
            background: rgba(73, 165, 20, 0.54);
            margin-top: 20px;
            line-height: 34px;
            text-align: center;
          }
        }
      }
    }
  }
}
  a{
    color: #333;
  }
</style>
