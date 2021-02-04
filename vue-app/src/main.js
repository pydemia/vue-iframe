// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFriendlyIframe from 'vue-friendly-iframe';
import VueFrame from 'vue-frame'


Vue.use(VueFriendlyIframe);
export default {
  components: { VueFrame },
  data () {
    return { /*...*/ }
  },
  methods: {
		load: function(){
    	this.iframe.loaded = true;
    }
  }
}


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
