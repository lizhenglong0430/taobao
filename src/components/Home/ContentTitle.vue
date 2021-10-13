<template>
  <div class="contentTitle">
    <div class="image">
      <img class="taobao_img" src="../../assets/img/taobao.png" alt="">
      <a class="wenzi" href="www.baidu.com" >
        中国大陆
      </a>
    </div>
    <div class="title_search">
      <input class="title_seacrh_input" type="search" placeholder="男t虚">
      <el-button class="title_searcch_button" round>搜索</el-button>
      <div class="title_seacrh_wenzi">
        <a class="title_wenzi">海澜之家  套装 秋 移动电源 紧身裤牛仔高腰 洗衣机 泰茶 收纳盒   更多。。。</a>
      </div>
    </div>
    <button @click="clickme()">今日签到</button>
  </div>
</template>

<script>
export default {
  name:"ContentTitle",
  methods:{
    clickme(){
      this.$store.commit("addyouMoney",100);
    }
  }
}
</script>

<style scoped>
  .contentTitle{
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
  }
  .image{
    height: 60px;
    /* width: 190px; */
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex: 2;
    justify-content: flex-end;
  }
  .image > .taobao_img{
    height: 100%;
    width: 100px;
    padding-right: 10px;
    border-right: 2px solid orangered;
  }
  .image > .wenzi {
    height: 100%;
    width: 70px;
    font-size: 25px;
    margin-left: 10px;
    margin-top: -5px;
    color: orangered;
    text-decoration: none;
  }
  .title_search{
    margin-top: 20px;
    flex: 4;
    margin-left: 40px;
  }
  .title_seacrh_input{
    height: 50px;
    width: 630px;
    border-radius: 25px;
    border: 0px;
    outline:none;
    padding-left: 10px;
    /* flex: 6; */
  }
  .title_searcch_button{
    position: relative;
    background-color: orangered;
    color: #fff;
    font-size: 15px;
    left: -90px;
  }
  .title_seacrh_wenzi{
    margin-top: 10px;
  }
  .title_wenzi{
    font-size: small;
    color:	#A0A0A0;
    cursor: pointer;
    margin-left: 15px;
  }
  .title_wenzi:hover{
    color: orangered;
  }
</style>