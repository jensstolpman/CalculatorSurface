Vue.axios=axios;
const NotFound = { template: '<p>Page not found</p>' }
const Calc = { template: '#calculator-template' }
const Config = { template: '#configurator-template' }

const routes = {
  'calc' : Calc,
  'config': Config
}
new Vue({
    el: '#app',
    data: {
        currentRoute: 'calc',
        port: '8080',
    },
    computed: {
      ViewComponent () {
        return routes[this.currentRoute] || NotFound
      }
    },
    render (h) { return h(this.ViewComponent) },
    mounted: function(){
       this.setPort(this.getUrlParam('port'));
    },

    methods: {
        getUrlParam: function getUrlParam(name) {
          var url_string = window.location;
          var url = new URL(url_string);
          var c = url.searchParams.get(name);
          return c;
        },
        setPort: function setPort(port){
            this.port=port;
        }
    }
});
