<template>
  <div id="app">
    <article id="content">
      <section class="container content-padding-lg">
        <div class="row animated">
          <div class="col-sm-8 col-sm-offset-2 text-center">
            <h3>Résultats page!</h3>
          </div>
        </div><!-- .row -->
      </section><!-- .container -->
    </article><!-- #content -->
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
