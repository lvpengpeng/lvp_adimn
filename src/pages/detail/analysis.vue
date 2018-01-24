<template>
  <div>
    <div class="flow-wrap">
      <h2>流量分析</h2>
      <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
      <div class="flow-from">
        <div class="flow-from-item">
          <div>购买数量:</div>
          <my-counter></my-counter>
        </div>
        <div class="flow-from-item">
          <div>产品类型：</div>
          <my-select :selections="buyTypes"></my-select>
        </div>
        <div class="flow-from-item">
          <div>有效时间：</div>
          <my-times :times="periodList"></my-times>
        </div>
        <div class="flow-from-item">
          <div>产品版本：</div>
          <my-edition :edition="versionList"></my-edition>
        </div>
        <div class="flow-from-item">
          <div>总价：</div>
          <div>{{ price }}元</div>
        </div>
        <div class="pay-from">付款</div>
      </div>
    </div>
    <div class="product-wrap">
      <h3>产品说明</h3>
      <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

      <h3>用户行为指标</h3>
      <ul>
        <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
        <li>用户在网站的停留时间；</li>
        <li>用户来源网站（也叫“引导网站”）；</li>
        <li>用户所使用的搜索引擎及其关键词；</li>
        <li>在不同时段的用户访问量情况等。</li>
      </ul>

      <h3>浏览网站方式</h3>
      <ul>
        <li>用户上网设备类型</li>
        <li>用户浏览器的名称和版本</li>
        <li>访问者电脑分辨率显示模式</li>
        <li>用户所使用的操作系统名称和版本</li>
        <li>用户所在地理区域分布状况等</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import myCounter from '../../components/base/counter.vue'
  import mySelect from "../../components/base/selection.vue"
  import myTimes from "../../components/base/times.vue"
  import myEdition from "../../components/base/edition.vue"
    export default {
      components:{
        myCounter,
        mySelect,
        myTimes,
        myEdition
      },
      data(){
        return {
          price:23,
          versionList: [
            {
              label: '客户版',
              value: 0
            },
            {
              label: '代理商版',
              value: 1
            },
            {
              label: '专家版',
              value: 2
            }
          ],
          periodList: [
            {
              label: '半年',
              value: 0
            },
            {
              label: '一年',
              value: 1
            },
            {
              label: '三年',
              value: 2
            }
          ],
          buyTypes: [
            {
              label: '入门版',
              value: 0
            },
            {
              label: '中级版',
              value: 1
            },
            {
              label: '高级版',
              value: 2
            }
          ],
        }
      },
      methods:{
      }
    }
</script>

<style scoped lang="scss">
  .flow-wrap{
    background: #fff;
    padding: 10px 0;
    margin-bottom: 10px;
    h2{
      width:100%;
      height: 30px;
      line-height:30px;
      padding: 10px 0 10px 10px;
    }
    p{
      width:970px;
      padding-left: 10px;
      line-height:30px;
      background: #f7fcff;
    }
    .flow-from{
      .flow-from-item {
        display: flex;
        width: 940px;
        height: 30px;
        line-height:30px;
        margin-left: 20px;
        margin-bottom: 10px;
         div:nth-child(1){
           width: 80px;
         }
      }
      .pay-from{
        width: 60px;
        height: 30px;
        background: #4fc08d;;
        margin-left: 100px;
        text-align: center;
        line-height:30px;
      }
    }
  }
  .product-wrap{
    width:960px;
    padding: 10px;
    background: #fff;
    h3{
      font-size: 20px;
      padding: 10px 0;
    }
    ul{
      li{
        line-height: 20px;
      }
    }
  }
</style>
