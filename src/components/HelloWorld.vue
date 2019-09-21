<template>
  <div class="hello" v-if="jogos.length">
    <div class="card-deck">
      <div class="card">
        <div class="divImg">
          <img :src="jogos[0].img" width="150">
        </div>
        <div class="plataforma">{{ jogos[0].plataforma }}</div>
        <div class="card-body" style="padding: 0 10px 10px 10px">
          <div class="card-title titulo">{{ jogos[0].nome }}</div>
          <div class="preco">{{ jogos[0].preco | currency }}</div>
        </div>
        <div class="card-footer text-white adcCarrinho">
          <div>Adicionar ao carrinho</div>
        </div>
      </div>
      <div class="card">
        <!--<img src="..." class="card-img-top" alt="...">-->
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <!--<img src="..." class="card-img-top" alt="...">-->
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>

      <div class="card">
        <!--<img src="..." class="card-img-top" alt="...">-->
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
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
    ...mapGetters(['corSubmenu'])
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
