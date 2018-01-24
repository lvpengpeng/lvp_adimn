<template>
  <ul>
    <li v-for="(item ,index) in edition" @click="selectColor(index)" :class="{active: checkActive(index)}">{{item.label}}</li>
  </ul>
</template>

<script>
  import _ from 'lodash'
  export default {
    props:{
      edition:{
        type:Array,
        default:[{
          label: '代理商版',
          value: 0
        }]
      }
    },
    data(){
      return{
        nowIndexes: [1]
      }
    },
    methods:{
      selectColor(index) {
          if (this.nowIndexes.indexOf(index) === -1) {
            this.nowIndexes.push(index);
          }
          else {
            this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
              return idx !== index
            })
//            或者直接用es6里的filter，不用lodash工具库。
//            this.nowIndexes=this.nowIndexes.filter(function(item) {
//              return item!== index
//            });
          }
          let nowObjArray = _.map(this.nowIndexes, (idx) => {
            return this.selections[idx]
          })
      },
      checkActive (index) {
        return this.nowIndexes.indexOf(index) !== -1
      }
    }
  }
</script>

<style scoped lang="scss">
  ul{
    display: flex;
    li{
      height: 30px;
      width: 60px;
      line-height: 30px;
      text-align:center;
      margin-right: 10px;
      background: #ccc;
    }
    .active{
      background: #4fc08d;
    }
  }
</style>
