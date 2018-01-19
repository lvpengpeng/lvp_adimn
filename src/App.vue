<template>
  <div id="app">
    <app-header></app-header>
    <!--<img src="./assets/logo.png">-->
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import axios from 'axios'
import appHeader from  "./components/header.vue"
import appFooter from  "./components/footer.vue"
export default {
  name: 'App',
  components:{
    appHeader,
    appFooter
  },
  created() {
    axios.get('/api/getNewsList').then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
  }
}
</script>

<style>
  * {margin: 0;outline: 0;padding: 0;}
  body {background:#fff;font-family: "Microsoft Yahei";font-size:12px;margin: 0;padding: 0;}
  body, form, ul, ol, li, p, h1, h2, h3, h4, h5, h6, dl, dt, dd, table, fieldset, hr, div {margin: 0;padding: 0;font-weight: normal;}
  img {border: 0 none;}
  ul, ol, li {list-style-type: none;}
  :focus { outline: none; }
  .fl{float: left}
  .fr{float: right;}
  a {outline: medium none;text-decoration: none; color:#ccc;cursor: pointer;}
  em {font-style: normal;}
  i{font-style: normal;}
  input[type="button"], input[type="submit"], input[type="reset"] {
    -webkit-appearance: none;}
  .clear {zoom: 1;}
  *{-webkit-tap-highlight-color: transparent;   border:0}
  .clearfix:after{ content: '';display: block;clear: both;zoom:1;}
  .m0-auto{ margin:0 auto}
  .pr{position: relative;}
  .pa{position: absolute;}
  .pf{position: fixed;}

  .container{
    width: 1200px;
    height: 768px;
    margin: 0 auto;
  }
</style>


