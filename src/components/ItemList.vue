<template>
  <div id="itemList_content">
    <Header></Header>
    <ContentTitle></ContentTitle>
    <ContentCenter1></ContentCenter1>
    <Footer :product="this.product"></Footer>
  </div>
</template>

<script>
import Header from "../components/Home/Header";
import ContentTitle from "../components/ItemList/ContentTitle";
import ContentCenter1 from "../components/ItemList/ContentCenter1";
import Footer from "../components/ItemList/Footer";
export default {
  name: "ItemList",
  components: {
    Header,
    ContentTitle,
    ContentCenter1,
    Footer
  },
  data(){
    return{
      product:[]
    }
  },
  created(){
    this.product = this.$route.query;
  }
};
</script>

<style scoped>
#itemList_content {
  background-color: #ffcc99;
  /* min-width: 1700px; */
  height: 100%;
}
</style>