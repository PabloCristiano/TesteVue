<template>
  <div class="container">
    <div class="container">
      <meu-menu :rotas="routes" />
    </div>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu';
export default {
  components:{
    'meu-menu' : Menu
  },
  data() {
    return {
      routes
    }
  }

}
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}
</style>
