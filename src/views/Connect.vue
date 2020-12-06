<template>
  <div id="app">
    <link href="./src/assets/styles.css" rel="stylesheet">
    <h1>Connection</h1>
    <p>test page ree</p>
  </div>
</template>
<script>
export default {
  data: function (){
    return{
      theme: [],
      searchIndex: [],
      activeClass: 'active',
      errorClass: 'text-danger',
      head: 'header-content'
    };
  },
  mounted: function(){
   this.theme = 'header-content';
   this.searchIndex= 'hidden';
  }
}
</script>
<style>
@import '../assets/styles.css';
</style>
