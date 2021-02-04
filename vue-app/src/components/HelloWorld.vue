<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul> -->
    <!-- <vue-friendly-iframe :src="example1Form.src" @load="onLoad"></vue-friendly-iframe> -->

    <!-- <iframe v-on:load="load" src="http://grafana.istio-system.svc.clusters.local:3000/grafana/d-solo/vu8e0VWZk/istio-performance-dashboard?orgId=1&refresh=5s&from=1612452314751&to=1612452614751&panelId=7" width="450" height="200" frameborder="0"></iframe>
    <iframe v-on:load="load" src="http://34.69.56.73:15031/grafana/d-solo/vu8e0VWZk/istio-performance-dashboard?orgId=1&refresh=5s&theme=light&panelId=7" width="450" height="200" frameborder="0"></iframe>
    <iframe v-on:load="load" src="http://grafana.istio-system:3000/grafana/d-solo/vu8e0VWZk/istio-performance-dashboard?orgId=1&refresh=5s&theme=light&panelId=902" width="450" height="200" frameborder="0"></iframe> -->
    <iframe v-on:load="load" src="http://34.69.56.73:15031/grafana/d-solo/vu8e0VWZk/istio-performance-dashboard?orgId=1&refresh=5s&from=1612452314751&to=1612452614751&panelId=7" width="450" height="200" frameborder="0"></iframe>
    <iframe v-on:load="load" src="http://34.69.56.73:15031/grafana/d-solo/vu8e0VWZk/istio-performance-dashboard?orgId=1&refresh=5s&theme=light&panelId=7" width="450" height="200" frameborder="0"></iframe>
    <iframe v-on:load="load" src="http://34.69.56.73:15031/grafana/d-solo/vu8e0VWZk/istio-performance-dashboard?orgId=1&refresh=5s&theme=light&panelId=902" width="450" height="200" frameborder="0"></iframe>
    
    <!-- <div id="vue-frame">
    <vue-frame text="grafana.istio-system.svc.clusters.local" url="http://grafana.istio-system.svc.clusters.local:3000/grafana/d-solo/vu8e0VWZk/istio-performance-dashboard?orgId=1&refresh=5s&from=1612452314751&to=1612452614751&panelId=7" frame="myframe" type="button" class="form-control"></vue-frame>
    <vue-frame text="34.69.56.73:15031" url="http://34.69.56.73:15031/grafana/d-solo/vu8e0VWZk/istio-performance-dashboard?orgId=1&refresh=5s&theme=light&panelId=7" frame="myframe" type="a"></vue-frame>
    <vue-frame text="grafana.istio-system" url="http://grafana.istio-system:3000/grafana/d-solo/vu8e0VWZk/istio-performance-dashboard?orgId=1&refresh=5s&theme=light&panelId=902" frame="myframe" type="a"></vue-frame>
    
    <br/>

    <iframe id="myframe" width="100%" height="600"></iframe> -->

    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'iframe test'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
