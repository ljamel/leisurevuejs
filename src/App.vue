<template>

    <div id="nav">

      <header id="header" class="head" :class="theme"  role="banner">
        <div class="header-row clearfix">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 absolute-header text-uppercase">
                <div class="pull-left"><i class="fa fa-map-marker"></i> {{zone.name}}</div>
                <div class="pull-right">
                  <span class="weather">{{date}} <i data-icon="sky"></i> {{weather}}&deg;C</span>
                </div>
              </div><!-- .absolute-header -->
            </div><!-- .row -->
          </div><!-- .container -->
          <nav role="navigation" id="main-nav">
            <div class="container">
              <div class="row">
                <div class="col-xs-12">
                  <a href="index.html" id="logo"></a>
                  <input type="checkbox" id="toggle-main-nav" class="toggle-nav-input">
                  <ul id="menu-main-menu" class="menu">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item current_page_item">
                      <a href="/"><i class="fa fa-home hidden-xs"></i><span class="visible-xs-inline">Home</span></a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-parent-item">
                      <a href="/page/sport">Sport</a>
                      <ul class="sub-menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/page/ballon">Ballon</a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/page/combat">Combat</a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/page/sport">salle de sport</a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/page/forme">Remise en forme</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                      <a href="/page/culture">Culture</a>
                      <ul class="sub-menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/page/livres">Bibliothèque - Ludothèque</a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/page/enfant">Salle de jeux</a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/page/muse">Musé</a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/page/Theatre">Théatre</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom">
                      <a href="/page/events">Évenement</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/page/ephemere">Éphémère</a>
                    </li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-parent-item">
                      <a href="/page/fete">Ludique</a>
                      <ul class="sub-menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/page/concert">Jeux sur plateaux échec</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                      <a href="/page/info">Info</a>
                      <ul class="sub-menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/page/Info">Actualitée</a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/page/covid">Covid 19</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-parent-item"><a href="contact.html">Contact</a></li>
                    <li class="menu-item">
                      <a href="#" class="search-button hidden-xs"><i class="fa fa-search"></i></a>
                      <form id="search-form-inline" action="search.html" class="visible-xs-block" role="search">
                        <input type="text" class="search-field" placeholder="Type something to search  ...">
                      </form><!-- #search-form-inline -->
                    </li>
                  </ul><!-- .menu -->
                </div><!-- .col-xs-12 -->
              </div><!-- .row -->
            </div><!-- .container -->
            <form id="search-form" action="search.html" class="hidden-xs">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 text-center">
                    <input v-on:keyup="click(searching)" v-model="searching" class="search-field"  placeholder="search" value="">
                    <a href="#" class="close-search fa fa-search"></a>
                  </div>
                </div>
              </div>
            </form><!-- #search-form -->
          </nav><!-- #main-nav -->
          <nav role="navigation" id="secondary-nav">
            <div class="container">
              <input type="checkbox" class="toggle-nav-input" id="toggle-secondary-nav">
              <ul class="menu">
                <li class="menu-item">
                  <a href="/page/saison">Saisons <em>Rooms &amp; Suites</em></a>
                  <ul class="sub-menu bg-accomodation">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/page/Hiver">Hiver</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/page/ete">Été</a>
                    </li>
                  </ul>
                </li>
                <li class="menu-item">
                  <a href="/page/nature">Nature <em>12 Courses</em></a>
                  <ul class="sub-menu bg-golf">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/page/zoo">Zoo</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="aquarium">Aquarium</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="jardin">Jardin des plantes</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/page/muse-nature">Musé d'histoire naturelle</a>
                    </li>
                  </ul>
                </li>
                <li class="menu-item">
                  <a href="activities.html">Aventure en plein ciel <em>All Seasons</em></a>
                  <ul class="sub-menu bg-tennis">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/page/avion">ulm avion</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/page/parachute">parachute</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/page/montgolfiere">Montgolfière</a>
                    </li>
                  </ul>
                </li>
                <li class="menu-item">
                  <a href="activities.html">Dans les eaux <em>Outdoor &amp; Indoor</em></a>
                  <ul class="sub-menu bg-pool">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/page/bateaux">Bateaux</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/page/piscine">Piscine</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/page/peche">Pêche</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/page/plonger">Plonger</a>
                    </li>
                  </ul>
                </li>
              </ul><!-- .menu -->
            </div><!-- .container -->
          </nav><!-- #secondary-nav -->
          <label class="toggle-nav-label" for="toggle-main-nav"><i class="fa fa-bars fa-lg"></i> Menu</label>
          <label class="toggle-nav-label" for="toggle-secondary-nav"><i class="fa fa-info-circle fa-lg"></i> Services</label>
        </div><!-- .header-row -->
        <div class="booking-row content-padding-xs" :class="searchIndex">
          <div class="container">
            <div class="row">
              <form method="get" id="booking-form" role="form" action="/">
                <div class="col-md-3 col-sm-6 icon-next">
                  <label class="sr-only" for="departure-date">Départ</label>
                  <input type="text" class="form-control" placeholder="Recherche" name="search">
                </div>
                <div class="col-md-3 col-sm-6">
                  <i class="fa fa-map-marker rechercheIndex"></i>
                  <label class="sr-only" >Recherche</label>
                  <input  list="browsers" v-on:keyup="adressf(adressc)" v-model="adressc" type="text" class="form-control"  data-date-autoclose="true" placeholder="Ville" name="city" >
                  <datalist id="browsers">
                    <option v-for="(citys,name,index) in adress" :key="index" :data-list-id="citys" :value='citys.properties.label'/>
                    <option value="Paris" />
                    <option value="Lille" />
                    <option value="Lyon" />
                    <option value="Normandie" />
                  </datalist>
                </div>
                <div class="col-md-2 col-sm-4">
                  <i class="fa fa-child rechercheIndex"></i>
                  <label class="sr-only" for="adults">Age</label>
                  <select class="form-control" id="adults" name="cat">
                    <option>En famille</option>
                    <option>Adultes</option>
                    <option>Enfants</option>
                    <option>Tous</option>
                  </select>
                </div>
                <div class="col-md-2 col-sm-4 ">
                  <i class="fa fa-euro rechercheIndex"></i>
                  <label class="sr-only" >Budget</label>
                  <input type="number" class="form-control"  data-date-autoclose="true" placeholder="Budget" name="price">
                </div>
                <div class="col-md-2 col-sm-4">
                  <input type="submit" class="btn btn-primary btn-block" >
                </div>
              </form>
            </div><!-- .row -->
          </div><!-- .container -->
        </div><!-- .booking-row -->
      </header><!-- #header -->

<!-- todo quand le résultat retourne un article appeller directement le résultat, quand c'est plusieurs articles utiliser une boucle for -->

    <!-- <p v-for="(image,name,index) in apiResult.image" :key="image">{{image}} <span v-if="index === 0" ><img v-bind:src="image"/></span></p>-->

      <div v-for="(citys,name,index) in apiResult" :key="index" :data-list-id="citys">
        <h1>{{ citys.title }}</h1>
        <p>{{citys.description}}</p>

        {{citys}}
        <a :href="'/show/'+citys.slug">En savoir plus</a>
      </div>
      <!--<div v-for="(citys,name,index) in adress" :key="index" :data-list-id="citys"> <p> {{citys.properties.label}}</p> </div>-->

    <router-view/>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      apiResult: [],
      searching: [],
      theme: '',
      searchIndex: '',
      weather: [],
      date: [],
      zone: [],
      sky: [],
      adress: [],
      adressc: [],
      routec:this.$route.name,
      routecat:this.$route.params.cat,
    };
  },
  methods : {
    click : function(testt) {
      this.axios.get(":8888/"+testt).then((response) => {
        this.theme = 'header-content';
        this.searchIndex= 'hidden';
        this.apiResult = response.data

      });
    },
    adressf : function(adressc) {
      this.axios.get("https://api-adresse.data.gouv.fr/search/?q="+adressc+"&type=housenumber&autocomplete=1").then((response) => {
        console.log(adressc);
        this.adress = response.data.features
        console.log(this.adress);

      });
    },

  },


  mounted: function (){
    this.axios.get("https://api.openweathermap.org/data/2.5/weather?q=Republic of France&lang=fr&appid=7e5877c2acfbadb8e997311a27a2f07e&units=metric").then((weather) => {

      this.weather = weather.data.main.temp.toFixed(0)
      this.zone = weather.data
      this.sky = weather.data.weather

      if(this.routec != "Home"){
        this.theme = 'header-content';
        this.searchIndex= 'hidden';
        this.axios.get("http://127.0.0.1:8888/"+this.routecat).then((response) => {
          this.apiResult = response.data
          console.log(this.routecat);
        });
      }

    });

    // translate datetime FR
    let d = new Date();
    let weekday = new Array(7);
    weekday[0] = "Dimanche";
    weekday[1] = "Lundi";
    weekday[2] = "Mardi";
    weekday[3] = "Mercredi";
    weekday[4] = "Jeudi";
    weekday[5] = "Vendredi";
    weekday[6] = "Samedi";

    this.date = weekday[d.getDay()];
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



#nav a {
  font-weight: bold;
  color: #55C2DF;
}

#nav a.router-link-exact-active {
  color: #414D69;
}
</style>
