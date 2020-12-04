<template>



    <div id="nav">

      <header id="header" class="head" :class="theme"  role="banner">
        <div class="header-row clearfix">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 absolute-header text-uppercase">
                <div class="pull-left"><i class="fa fa-map-marker"></i> {{zone.name}}</div>
                <div class="pull-right">
                  <span class="weather">{{date}} <i data-icon="sky"></i> {{weather.temp}}&deg;C</span>
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
                      <a href="index.html"><i class="fa fa-home hidden-xs"></i><span class="visible-xs-inline">Home</span></a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-parent-item">
                      <a href="/sport">Sport</a>
                      <ul class="sub-menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/ballon">Ballon</a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/combat">Combat</a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/sport">salle de sport</a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/forme">Remise en forme</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                      <a href="/culture">Culture</a>
                      <ul class="sub-menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/livres">Bibliothèque - Ludothèque</a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/enfant">Salle de jeux</a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/muse">Musé</a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/Theatre">Théatre</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom">
                      <a href="/events">Évenement</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/ephemere">Éphémère</a>
                    </li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-parent-item">
                      <a href="/fete">Fête</a>
                      <ul class="sub-menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="/concert">/concert</a>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom">
                          <a href="/">Elements</a>
                        </li>

                        <li class="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href="media-gallery.html">Media Gallery</a>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-parent-item">
                          <a href="sidebar-left.html">Other Pages</a>
                          <ul class="sub-menu">
                            <li class="menu-item menu-item-type-custom menu-item-object-custom">
                              <a href="sidebar-left.html">Left Sidebar</a>
                            </li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom">
                              <a href="sidebar-right.html">Right Sidebar</a>
                            </li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom">
                              <a href="members.html">Pricing Table</a>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page">
                              <a href="coming-soon.html">Coming Soon</a>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page">
                              <a href="404.html">404 Page</a>
                            </li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page">
                              <a href="faq.html">FAQ Page</a>
                            </li>
                          </ul>
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
                  <a href="/saison">Saisons <em>Rooms &amp; Suites</em></a>
                  <ul class="sub-menu bg-accomodation">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/Hiver">Hiver</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/ete">Été</a>
                    </li>
                  </ul>
                </li>
                <li class="menu-item">
                  <a href="/nature">Nature <em>12 Courses</em></a>
                  <ul class="sub-menu bg-golf">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/zoo">Zoo</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="aquarium">Aquarium</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="jardin">Jardin des plantes</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/muse-nature">Musé d'histoire naturelle</a>
                    </li>
                  </ul>
                </li>
                <li class="menu-item">
                  <a href="activities.html">Aventure en plein ciel <em>All Seasons</em></a>
                  <ul class="sub-menu bg-tennis">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/avion">ulm avion</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/parachute">/parachute</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/montgolfiere">Montgolfière</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="activities.html">Meet our Pro's</a>
                    </li>
                  </ul>
                </li>
                <li class="menu-item">
                  <a href="activities.html">Dans les eaux <em>Outdoor &amp; Indoor</em></a>
                  <ul class="sub-menu bg-pool">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/bateaux">Bateaux</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/piscine">Piscine</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/peche">Pêche</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="/plonger">Plonger</a>
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
              <form id="booking-form" role="form">
                <div class="col-md-3 col-sm-6">
                  <i class="fa fa-map-marker rechercheIndex"></i>
                  <label class="sr-only" >Recherche</label>
                  <input type="text" class="form-control"  data-date-autoclose="true" placeholder="Recherchee">
                </div>
                <div class="col-md-3 col-sm-6 icon-calendar">
                  <label class="sr-only" for="departure-date">Departure</label>
                  <input type="text" class="form-control" data-provide="datepicker" data-date-autoclose="true" data-date-format="mm/dd/yyyy" id="departure-date" placeholder="Departure Date">
                </div>
                <div class="col-md-2 col-sm-4 icon-arrow">
                  <label class="sr-only" for="adults">Adults</label>
                  <select class="form-control" id="adults">
                    <option selected disabled>Adults</option>
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                  </select>
                </div>
                <div class="col-md-2 col-sm-4 icon-arrow">
                  <label class="sr-only" for="room">Room</label>
                  <select class="form-control" id="room">
                    <option selected disabled>Room</option>
                    <option>Standard Deluxe</option>
                    <option>Double Bedroom</option>
                    <option>Standard Suite</option>
                    <option>Queen's Suite</option>
                    <option>King's Suite</option>
                  </select>
                </div>
                <div class="col-md-2 col-sm-4">
                  <input type="submit" class="btn btn-primary btn-block" name="Book a Room" value="Book a Room">
                </div>
              </form>
            </div><!-- .row -->
          </div><!-- .container -->
        </div><!-- .booking-row -->
      </header><!-- #header -->

<!-- todo quand le résultat retourne un article appeller directement le résultat, quand c'est plusieurs articles utiliser une boucle for -->

    <!-- <p v-for="(image,name,index) in apiResult.image" :key="image">{{image}} <span v-if="index === 0" ><img v-bind:src="image"/></span></p>-->

      <div v-for="(citys,name,index) in apiResult" :key="index" :data-list-id="citys"> <h1>{{ citys.title }}</h1> <p>{{citys.description}}</p> </div>

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
    };
  },
  methods : {
    click : function(testt) {
      this.axios.get("http://127.0.0.1:8888/"+testt).then((response) => {
        console.log(testt);
        this.theme = 'header-content';
        this.searchIndex= 'hidden';
        this.apiResult = response.data
        console.log(this.apiResult);

      });
    },

  },


  mounted: function (){
    this.axios.get("http://api.openweathermap.org/data/2.5/weather?q=Republic of France&lang=fr&appid=7e5877c2acfbadb8e997311a27a2f07e&units=metric").then((weather) => {

      this.weather = weather.data.main
      this.zone = weather.data
      this.sky = weather.data.weather
      console.log(this.weather);

    });

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
