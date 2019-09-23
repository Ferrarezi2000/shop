<template>
  <div v-if="jogos.length">
    <div :style="{backgroundColor: corSubMenu}">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link navCategoria" href="#" @click="filtroPlataforma('grey', null)"
                   :class="{'navCategoriaAtivo' : !getPlataforma}">Todos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link navCategoria" href="#" @click="filtroPlataforma('black', 'PC')"
                   :class="{'navCategoriaAtivo' : getPlataforma === 'PC'}">PC</a>
              </li>
              <li class="nav-item">
                <a class="nav-link navCategoria" href="#" @click="filtroPlataforma('darkblue', 'PS 4')"
                   :class="{'navCategoriaAtivo' : getPlataforma === 'PS 4'}">Playstation 4</a>
              </li>
              <li class="nav-item">
                <a class="nav-link navCategoria" href="#" @click="filtroPlataforma('green', 'Xbox One')"
                   :class="{'navCategoriaAtivo' : getPlataforma === 'Xbox One'}">Xbox One</a>
              </li>
            </ul>
          </div>

          <div class="col-md-6">
            <div class="input-group input-group-sm pesquisa">
              <input v-model="filtro" type="text" class="form-control" placeholder="Pesquisar...">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-3">
      <div class="card-deck animated fadeIn ml-1 alinhamento">
        <div class="card tamanhoCard" v-for="(item, index) in lista" :key="index">
          <div class="divImg">
            <img :src="item.img" width="150">
          </div>
          <div class="plataforma" :style="{color: corNomePlataforma(item.plataforma)}">{{ item.plataforma }}</div>
          <div class="card-body" style="padding: 0 10px 10px 10px">
            <div class="card-title titulo">{{ item.nome }}</div>
            <div class="preco">{{ item.preco | currency }}</div>
          </div>
          <div class="card-footer text-white adcCarrinho" @click="addProduto(item)">
            <div>Adicionar ao carrinho</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { C } from '../../constante'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ListaProdutos',
  created () {
    this.buscarJogos()
  },
  data () {
    return {
      jogos: [],
      filtro: ''
    }
  },
  computed: {
    ...mapGetters(['getPlataforma', 'corSubMenu', 'getMeusProdutos']),
    lista () {
      let novaLista = []
      this.jogos.forEach(item => {
        if (item.plataforma === this.getPlataforma || !this.getPlataforma) {
          novaLista.push(item)
        }
      })
      if (this.filtro) {
        return novaLista.filter(i => i.nome.toUpperCase().indexOf(this.filtro.toUpperCase()) > -1)
      }
      return novaLista
    }
  },
  methods: {
    ...mapMutations(['setCorSubMenu', 'setPlataforma', 'setMeusProdutos']),
    corNomePlataforma (plataforma) {
      console.log('passou', plataforma)
      switch (plataforma) {
        case 'PS 4':
          return 'blue'
        case 'Xbox One':
          return 'green'
        case 'PC':
          return '#000'
      }
    },
    buscarJogos () {
      this.jogos = C.URL.PRODUTOS.JOGOS
    },
    addProduto (produto) {
      if (this.getMeusProdutos.filter(item => item.id === produto.id) > -1) {
        this.setMeusProdutos(produto)
      } else {
        this.$toasted.show(produto.nome + ' já está no seu carrinho.', {
          position: 'top-center',
          type: 'info',
          duration: 3000
        })
      }
    },
    filtroPlataforma (cor, plataforma) {
      this.setCorSubMenu(cor)
      this.setPlataforma(plataforma)
      this.filtro = ''
    }
  }
}
</script>

<style scoped>
.navCategoriaAtivo {font-weight: 700 !important;}
.corPaginacao {background-color: whitesmoke}
.alinhamento {align-items: center}
.pesquisa {margin-top: 4px; margin-bottom: 5px !important}
.navCategoria {color: white; font-weight: lighter}
.tamanhoCard {max-width: 250px !important; min-width: 250px !important; margin-bottom: 20px}
nav {background-color: white}
.divImg {text-align: center; width: 100%; padding: 10px 0 0 0; cursor: pointer}
.divImg:hover {transform: scale(1.1);}
.preco {font-size: 20px; font-weight: 700}
.titulo {padding: 3px; border: red solid 1px; border-left: 0; border-right: 0; font-weight: 500}
.plataforma {font-size: 13px; text-align: left; margin: 10px 0 0 10px; font-weight: 500}
.adcCarrinho {cursor: pointer; background-color: #8aba2b}
.adcCarrinho:hover {background-color: #689807 !important;}
</style>
