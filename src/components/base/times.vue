<template>
  <ul>
    <li v-for="(item,index) in times" @click="selectColor(index)" :class="{active:index === nowIndex}">{{item.label}}</li>
  </ul>
</template>

<script>
    export default {
        props:{
          times:{
            type:Array,
            default:[{
              label: '半年',
              value: 0
            }]
          }
        },
      data(){
          return{
            nowIndex:0
          }
      },
      methods:{
        selectColor(index){
          this.nowIndex=index
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
