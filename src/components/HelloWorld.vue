<template>
  <div class="hello" v-if="jogos.length">
    <div class="card-deck">
      <div class="card" v-for="(item, index) in lista" :key="index">
        <div class="divImg">
          <img :src="item.img" width="150">
        </div>
        <div class="plataforma">{{ item.plataforma }}</div>
        <div class="card-body" style="padding: 0 10px 10px 10px">
          <div class="card-title titulo">{{ item.nome }}</div>
          <div class="preco">{{ item.preco | currency }}</div>
        </div>
        <div class="card-footer text-white adcCarrinho">
          <div>Adicionar ao carrinho</div>
        </div>
      </div>
    </div>

    <nav style="margin-top: 20px">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { C } from '../constante'
import { mapGetters } from 'vuex'

export default {
  created () {
    this.jogos = C.URL.PRODUTOS.JOGOS
  },
  data () {
    return {
      jogos: []
    }
  },
  computed: {
    ...mapGetters(['getPlataforma']),
    lista () {
      let novaLista = []
      if (this.getPlataforma) {
        this.jogos.forEach(item => {
          if (item.plataforma === this.getPlataforma) {
            novaLista.push(item)
          }
        })
        return novaLista
      } else {
        return this.jogos
      }
    }
  }
}
</script>

<style scoped>
.divImg {text-align: center; width: 100%; padding: 10px 0 0 0; cursor: pointer}
.divImg:hover {transform: scale(1.1);}
.preco {font-size: 20px; font-weight: 700}
.titulo {padding: 3px; border: red solid 1px; border-left: 0; border-right: 0; font-weight: 500}
.plataforma {font-size: 14px; text-align: left; margin: 10px 0 0 10px}
.adcCarrinho {cursor: pointer; background-color: #8aba2b}
.adcCarrinho:hover {background-color: #689807 !important;}
</style>
