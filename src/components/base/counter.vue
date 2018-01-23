<template>
    <div class="counter-wrap">
      <div class="minus" @click="minus">-</div>
      <input type="text" v-model="number" @keyup="fixNumber">
      <div class="add" @click="add">+</div>
    </div>
</template>

<script>
    export default {
      props:{
        max:{
          type:Number,
          default:5
        },
        min:{
          type:Number,
          default:1
        }
      },
      data(){
        return{
          number:this.min
        }
      },
      methods:{
        fixNumber(){
          let fix
          if(typeof this.number==="string"){
            fix = Number(this.number.replace(/\D/g, ''))
          }else {
            fix = this.number
          }
          if (fix > this.max || fix < this.min) {
            fix = this.min
          }
          this.number = fix
        },
        minus(){
          if(this.number<=this.min){
            return
          }
          this.number--
        },
        add(){
          if(this.number>=this.max){
            return
          }
          this.number++
        }
      }
    }
</script>

<style scoped lang="scss">
  .counter-wrap{
    display: flex;
    .minus,.add{
      width: 20px;
      height:20px;
      line-height: 20px;
      text-align: center;
      border:1px solid #ccc;
      &:hover{
        background: #4fc08d;
        color: #fff;
      }
    }
    input{
      height: 20px;
      width:30px;
      line-height: 20px;
      text-align: center;
      border:1px solid #ccc;
    }
  }
</style>
