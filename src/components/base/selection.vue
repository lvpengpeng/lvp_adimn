<template>
    <div class="myselect-wrap">
      <div class="select-wrap-top" @click="toggleSelect">
        <span>{{this.selections[newIndex].label}}</span>
        <div class="jt"></div>
      </div>
      <ul class="select-wrap-bottom" v-if="isShow">
        <li v-for="(item ,index) in selections" :key="index" @click="selected(index)">{{ item.label }}</li>
      </ul>
    </div>
</template>

<script>
    export default {
      props:{
        selections:{
          type:Array,
          default: [{
            label: 'test',
            value: 0
          }]
        }
      },
      data(){
        return {
          isShow:false,
          newIndex:0
        }
      },
      methods:{
        toggleSelect(){
          this.isShow=!this.isShow
        },
        selected(index){
          this.newIndex=index;
          this.isShow=false;
          this.$emit('on-change', this.selections[this.nowIndex])
        }
      }
    }
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
    .select-wrap-bottom{
      width: 100px;
      position: relative;
      li{
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #fff;
        border: 1px solid #ccc;
        &:hover{
          background: #4fc08d;;
        }
      }
    }
  }
</style>
