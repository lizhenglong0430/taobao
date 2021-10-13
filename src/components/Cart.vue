<template>
  <div id="cart_content">
    <Header></Header>
    <ContentTitle></ContentTitle>
    <ContentCenter></ContentCenter>
  </div>
</template>

<script>
import Header from "../components/Home/Header";
import ContentTitle from "../components/Cart/ContentTitle";
import ContentCenter from "../components/Cart/ContentCenter";
export default {
  name: "Cart",
  data() {
    return {
      data1: [],
    };
  },
  components: {
    ContentTitle,
    Header,
    ContentCenter
  },
  created() {
    
  },
};
</script>

<style scoped>
#cart_content {
  background-color: #ffcc99;
  /* min-width: 1700px; */
  height: 100%;
}
</style>