<template>
  <div id="app">
    <div class="hearder_top">
      <el-link :underline="false" class="link">茅台股份官网</el-link> | <el-link :underline="false" class="link">茅台党建</el-link>
    </div>
    <ul class="nav">
      <li><img src="@/components/img/logo.gif"></li>
      <li><router-link class="a" to="/">首页</router-link></li>
      <li><router-link class="a" to="/go">走进茅台</router-link></li>
      <li><router-link class="a" to="/news">新闻资讯</router-link></li>
      <li><router-link class="a" to="/brand">品牌战略</router-link></li>
      <li><router-link class="a" to="/shehui">社会责任</router-link></li>
      <li><router-link class="a" to="/wenhua">文化茅台</router-link></li>
      <li><router-link class="a" to="/jiu">酒之博览</router-link></li>
      <li><router-link class="a" to="/city">茅台商城</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*头部链接*/
.hearder_top{
  position: absolute;
  top: 15px;
  right: 75px;
  z-index: 99;
}
.hearder_top>.link:hover{
  color: red;
}
/*导航条*/
ul.nav{
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 99;
}
ul.nav>li{
  float: left;
  color: red;
}
ul.nav>li:nth-child(1){
  background: none;
}
ul.nav>li:nth-child(2){
  padding-left: 20px;
}
ul.nav>li:nth-child(9){
  padding-right: 20px;
}
ul.nav>li{
  background: rgba(250,252,253,0.9);
}
ul.nav>li>.a{
  display: inline-block;
  width: 118px;
  height: 70px;
  line-height: 70px;
  text-decoration: none;
  color: #444;
  font-size: 18px;
  font-weight: bold;
  /*margin: 0;*/
}
ul.nav>li>.a:hover{
  background: #b20000;
  color: #fff;
}
</style>
