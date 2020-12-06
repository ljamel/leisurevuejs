<template>

  <div id="app">
  <!--<img class="indeximg" alt="img" src="../assets/index.png" />-->

    <article id="content">
      <section class="container content-padding-lg">
        <div class="row animated">
          <div class="col-sm-8 col-sm-offset-2 text-center">
            <h3 class="text-center"><small>Que faire ce week end ?</small>Plus de 90 000 activité loisirs sur toutes la France</h3>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ornare eros. Ut pharetra ornare lorem, sit amet bibendum quam imperdiet ut.
            </p>
            <p>Duis diam eros, dignissim sed condimentum ac, vehicula nec nisl. Suspendisse condimentum libero tempus, accumsan augue et, varius dui. Morbi justo tortor, tincidunt ornare magna ut, molestie mattis enim. Cras ac justo et augue suscipit euismod vel eget lectus. Proin vehicula nunc arcu, pulvinar accumsan.
            </p>
            <a href="/plan" class="btn btn-inline">Bon plan loisir ?</a>
          </div><!-- .col-sm-8 -->
        </div><!-- .row -->
      </section><!-- .container -->
      <section class="fullwidth-row">
        <div class="container content-padding-xl">
          <div class="row animated">
            <div class="col-sm-12 parallax-container" data-stellar-offset-parent="true" data-stellar-vertical-offset="150">
              <div class="content-column half text-center">
                <img src="https://loisirsetsports.com/templates/holidaysnew/images/paris.jpg" class="parallax-image img-responsive" data-stellar-ratio="1.15123" alt="">
                <img src="https://loisirsetsports.com/templates/holidaysnew/images/lion.jpg" class="parallax-image img-responsive" data-stellar-ratio="0.94456456" alt="">
                <img src="https://loisirsetsports.com/templates/holidaysnew/images/bordeaux.jpg" class="parallax-image img-responsive" data-stellar-ratio="1.111111" alt="">
              </div><!-- .content-column -->
              <div class="content-column half last">
                <h2><small>Découvrez des loisirs et des lieux insolites.</small>Divertissement pour toute la famille et tous les budgets.</h2>
                <p>Mise à jour régulière des sorties et des événements.
                </p>
                <p>Vous trouverez des activités et de loisirs près de chez vous.
                </p>
                <a href="resort.html" class="btn btn-inline">Explore our Deluxe Golf Course</a>


              </div><!-- .content-column -->
            </div><!-- .parallax-container -->
          </div><!-- .row -->
        </div><!-- .container -->
      </section><!-- .fullwidth-row -->
      <section class="container content-padding-lg">
        <div class="row animated">
          <aside class="col-sm-12">
            <h2 class="text-center"><small>What can you do at the Leisure Template?</small>LEISURE CLUB ACTIVITIES</h2>
            <div class="services-carousel">
              <div class="item">
                <a href="activities.html" class="link-image"><img src="https://loisirsetsports.com/templates/holidaysnew/images/paris.jpg" alt=""></a>
                <div class="item-content">
                  <h4><a href="activities.html">Welness &amp; Spa Gateaway Weekend</a></h4>
                  <p>Curabitur est gravida et libero vitae dictum. Magna pars studiorum, prodita quaerimus. </p>
                </div>
              </div>
              <div class="item">
                <a href="children.html" class="link-image"><img src="https://loisirsetsports.com/templates/holidaysnew/images/lion.jpg" alt=""></a>
                <div class="item-content">
                  <h4><a href="children.html">Indoor &amp; Outdoor Swimming Pools</a></h4>
                  <p>Quam diu etiam furor iste tuus nos eludet? Curabitur est gravida et libero vitae dictum. </p>
                </div>
              </div>
              <div class="item">
                <a href="dining.html" class="link-image"><img src="images/food.jpg" alt=""></a>
                <div class="item-content">
                  <h4><a href="dining.html">International Cuisine for all Your Tastes</a></h4>
                  <p>A communi observantia non est recedendum. Cum ceteris in veneratione tui montes. </p>
                </div>
              </div>
              <div class="item">
                <a href="activities.html" class="link-image"><img src="images/sail.jpg" alt=""></a>
                <div class="item-content">
                  <h4><a href="activities.html">Take our Yacht and Visit the Surroundings</a></h4>
                  <p>Prima luce, cum quibus mons aliud  consensu ab eo. Quid securi etiam tamquam eu fugiat. </p>
                </div>
              </div>
              <div class="item">
                <a href="rooms.html" class="link-image"><img src="images/room.jpg" alt=""></a>
                <div class="item-content">
                  <h4><a href="rooms.html">Studios &amp; VIP Exclusive Apartments</a></h4>
                  <p>Magna pars studiorum, prodita quaerimus. Quid securi etiam tamquam eu fugiat nulla. </p>
                </div>
              </div>
              <div class="item">
                <a href="activities.html" class="link-image"><img src="images/fitness.jpg" alt=""></a>
                <div class="item-content">
                  <h4><a href="activities.html">Pro Fitness Instructor for Every Day Classes</a></h4>
                  <p>Praeterea iter est quasdam res quas ex communi. Vivamus sagittis lacus vel augue laoreet. </p>
                </div>
              </div>
            </div><!-- .services-carousel -->
          </aside><!-- .col-sm-12 -->
        </div><!-- .row -->
      </section><!-- .container -->
      <iframe src="https://opendata.paris.fr/explore/embed/dataset/que-faire-a-paris-/map/?disjunctive.category&disjunctive.tags&disjunctive.address_name&disjunctive.address_zipcode&disjunctive.address_city&disjunctive.access_type&disjunctive.price_type&basemap=jawg.streets&location=11,48.87104,2.35142&static=false&datasetcard=false&scrollWheelZoom=true" width="800" height="450" frameborder="0"></iframe>
    </article><!-- #content -->
  </div>
</template>
<style scoped>

.indeximg{
  width: 100%;
}
</style>
<script>
export default {
  data: function () {
    return {
      activeClass: 'active',
      errorClass: 'text-danger',
      head: 'header-content'
    }
  }
}
</script>
