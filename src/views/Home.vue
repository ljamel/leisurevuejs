<template>

  <div id="app">
  <!--<img class="indeximg" alt="img" src="../assets/index.png" />-->
    <article id="content">
      <section class="container content-padding-lg">
        <div class="row animated">
          <div class="col-sm-8 col-sm-offset-2 text-center">
            <h3 class="text-center"><small>Que faire ce week end ?</small>Plus de 90 000 activité loisirs sur toutes la France</h3>
            <p class="lead">Les loisirs permettent de tuer l’ennui et de redonner gout à la vie.
            </p>
            <p>Pourtant, il arrive que les personnes soient en difficulté pour trouver la bonne activité à faire lors de son temps libre,
              Il arrive également que la personne ne trouve pas le lieu pour faire les activités en question. Notre site web vous propose des solutions à vos problèmes.
            </p>
            <a href="/page/plan" class="btn btn-inline">Bon plan loisir </a>
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
                <a href="/page/e" class="btn btn-inline">Voyager dans d'autre regions</a>


              </div><!-- .content-column -->
            </div><!-- .parallax-container -->
          </div><!-- .row -->
        </div><!-- .container -->
      </section><!-- .fullwidth-row -->
      <section class="container content-padding-lg">
        <div class="row animated">
          <aside class="col-sm-12">
            <h2 class="text-center"><small>Selection des activités loisirs</small>Les meilleurs activités loisirs</h2>
            <div class="services-carousel">


              <div class="item">
                <a href="https://loisirsetsports.com/activiter/aventure" class="link-image"><img src="../assets/agroville.png" alt=""></a>
                <div class="item-content">
                  <h4><a href="https://loisirsetsports.com/activiter/aventure">Acrogivry : l'Aventure en Forêt</a></h4>
                  <p>{{ "A proximité de la Voie Verte, découvrez la plus grande Aventure en Forêt de Bourgogne, située à Givry au cœur de la Côte Chalonnaise, à 10 km de Chalon. Venez vous amuser sur 24 parcours d'acrobranches, sur plus de 200 jeux aériens et 20 tyroliennes dont 2 géantes de 250 mètres … 10 parcours enfants dont 2 parcours Bambin entièrement sécurisé à partir de 3 ans et 14 parcours pour toute la famille de 8 à 77 ans… Parc forestier accessible gratuitement pour les accompagnateurs. Aire de pique-nique ombragée, buvette, restauration possible...." | truncate(300, '...') }} </p>
                </div>
              </div>

              <div class="item">
                <a href="https://loisirsetsports.com/activiter/nature-jardin-plante" class="link-image"><img src="../assets/acrobate1.png" alt=""></a>
                <div class="item-content">
                  <h4><a href="https://loisirsetsports.com/activiter/nature-jardin-plante">Acro'Bath, Parc de Loisirs Nature</a></h4>
                  <p>{{ "Aventure et détente. Quoi de mieux qu'une forêt pour vivre l'aventure ! Découvrez votre adresse ou mettez à l'épreuve vos forces, votre équilibre et votre sang-froid pour évoluer d'arbre en arbre. Les 6 niveaux (mini-kid à partir de 3 ans, 3 boucles kids pour les 6/9 ans et 3 parcours ados adultes) que vous offre Acro'Bath séduiront les débutants comme les plus téméraires. Quoi de mieux qu'une forêt pour se détendre ? Après l'émotion de la dernière tyrolienne, l'aire de pique-nique, son barbecue, l'acro-snack terroir, les jeux géants ou le jeu de piste botanique vous attendent pour enrichir votre journée en forêt. Nombreuses animations et spectacles pendant toute la saison ! Circuit L’Arbre en Poésie - Balade Histoires d'arbres - Jeu La Clé des Bois... Demandez-les à l'accueil ! Nouveautés 2012 : la balade de Sylvette (circuit d'interprétation et de découverte de la forêt des 3 Monts), le katamino géant ou les jambes de bois et de nouveaux ateliers acrobatiques. Réservation conseillée. Aire de pique-nique ombragée. Buvette et petit snack l'été." | truncate(300, '...') }} </p>
                </div>
              </div>

              <div class="item">
                <a href="https://loisirsetsports.com/activiter/bibliotheque-ludotheque-mediathequ" class="link-image"><img src="../assets/ludo.png" alt=""></a>
                <div class="item-content">
                  <h4><a href="https://loisirsetsports.com/activiter/bibliotheque-ludotheque-mediatheque">Ludothèque </a></h4>
                  <p> {{ "Ludothèque Envie de passer un moment avec vos enfants autour d'un jeu de société adapté à leur âge. Vous y trouverez livres, jeux de sociétés, jeux de rôle, jeux pour bébés... Pour trouver d'autres activités pour enfants près de chez vous, faites une recherche avec notre outil de recherche d'activités." | truncate(300, '...') }} </p>
                </div>
              </div>

              <div class="item">
                <a href="https://loisirsetsports.com/activiter/nature-jardin-plante" class="link-image"><img src="../assets/divertiparc.png" alt=""></a>
                <div class="item-content">
                  <h4><a href="https://loisirsetsports.com/activiter/nature-jardin-plante">Diverti'parc </a></h4>
                  <p>
                    {{ "Un parc d’un nouveau genre ! Labyrinthes et jeux géants , réserve des vaches du monde. Des nouveautés : le maxi-parcours araignée tout en filets avec 15 ateliers d'agilité en forêt : balançoires de cordes, lianes suspendues, filets du pirates, échelles de cordes... Une journée de loisirs pour toute la famille dans un parc de 12 hectares alliant Nature et Biodiversité. Promenades au cœur des labyrinthes, permanents ou saisonniers, de blé, maïs, gazon, charmilles, pierres et fleurs multicolores, bambous, mais aussi du Minotaure en cassis et groseilles... Défis sur les jeux géants en bois installés sous 3 halles couvertes. Balade contée et chasse au trésor en forêt. Défoulement sur les jeux gonflables, trampolines, karts à pédales, mini-golf familiale, tyrolienne... En forêt, dès 3 ans, les enfants évolueront sur ponts de singe, tunnel en bois...D'autres préfèreront marcher à même le sol sur le sentier 'pieds nus' aménagé pour de meilleures découvertes sensorielles sur galets, rondins de bois, sable, écorces... Découverte des 30 races de vaches de la réserve animalière et goûter des vaches tous les jours à 15h. Tables pique-nique, snack, bar, boutique. Animaux non admis. Animations et tarifs variables au fil des saisons (tarif famille, carte pass annuelle). Groupes sur réservation. Sur le site, hébergements insolites (roulottes de campagne, cabanes Pods, carré d'Etoiles, écolodge 'vache labyrinthe' prochainement)" | truncate(300, '...') }}
                 </p>
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
  },


}
</script>
