<template>
  <div>
    <nav class="navbar navbar-light">
      <a class="navbar-brand" href="/">
        <img src="../../static/img/logo.png" width="120" height="30" class="d-inline-block align-top" alt="logo">
      </a>

      <button type="button" class="btn btn-outline-success">
        <i class="fas fa-cart-plus iconCarrinho"></i> <span class="badge badge-light">4</span>
      </button>
    </nav>

    <div :style="{backgroundColor: corSubMenu}">
      <div class="container">
        <div class="row">
          <div class="col">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active" href="#" @click="setPlataforma('grey')">Todos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#" @click="setPlataforma('black')">PC</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="setPlataforma('darkblue')">Playstation 4</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="setPlataforma('green')">Xbox One</a>
              </li>
            </ul>
          </div>

          <div class="col">
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <div class="input-group input-group-sm pesquisa">
                  <input type="text" class="form-control" placeholder="Pesquisar...">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-search"></i> </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Menu',
  computed: {
    ...mapGetters(['corSubMenu'])
  },
  methods: {
    ...mapMutations(['setCorSubMenu']),
    setPlataforma (cor) {
      this.setCorSubMenu(cor)
    }
  }
}
</script>

<style scoped>
.pesquisa {margin-top: 4px; margin-bottom: 0 !important}
a {color: white}
nav {background-color: white}
.iconCarrinho {font-size: 25px; color: #9bcb3b}
</style>
