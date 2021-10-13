<template>
  <div id="personal_content">
    <Header></Header>
    <ContentTitle></ContentTitle>
    <ContentCenter></ContentCenter>
  </div>
</template>

<script>
import Header from "../components/Home/Header";
import ContentTitle from "../components/Personal/ContentTitle";
import ContentCenter from "../components/Personal/ContentCenter";
export default {
  name: "Personal",
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
#personal_content {
  background-color: #ffcc99;
  /* min-width: 1700px; */
  height: 100%;
}
</style>