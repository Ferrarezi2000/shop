<template>
    <div v-if="produto">
      <div :style="{backgroundColor: corNomePlataforma(produto.plataforma), color: 'white', padding: '8px', fontWeight: 700}">
        {{ produto.plataforma }}
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col">
            <img :src="produto.img" width="300"/>
          </div>
          <div class="col">
            <div class="produtoNome">{{ produto.nome }} - {{ produto.plataforma }}</div>

            <div class="card mt-4">
              <h5 class="card-header">Ficha técnica</h5>
              <div class="card-body">

                <ul class="list-group text-left">
                  <li class="list-group-item">Código: {{ produto.id }}</li>
                  <li class="list-group-item">Plataforma: {{ produto.plataforma }}</li>
                </ul>

                <div class="produtoPreco">{{ produto.preco | currency }}</div>

                <button type="button" class="btn btn-success btn-lg btn-block mt-4" @click="addProduto">
                  Adicionar ao carrinho
                </button>

                <a href="#" class="btn btn-light mt-3" @click="$router.push('/')">Voltar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'DetalheProduto',
  created () {
    this.buscarProduto()
  },
  data () {
    return {
      produto: null
    }
  },
  computed: {
    ...mapGetters(['getProdutoDetalhe', 'getMeusProdutos'])
  },
  methods: {
    ...mapMutations(['setMeusProdutos']),
    addProduto () {
      if (this.getMeusProdutos.filter(item => item.id === this.produto.id) > -1) {
        this.setMeusProdutos(this.produto)
        this.$toasted.show(this.produto.nome + ' adicionado ao seu carrinho.', {
          position: 'top-center',
          type: 'success',
          duration: 3000
        })
        this.$router.push('/')
      } else {
        this.$toasted.show(this.produto.nome + ' já está no seu carrinho.', {
          position: 'top-center',
          type: 'info',
          duration: 3000
        })
      }
    },
    buscarProduto () {
      this.produto = this.getProdutoDetalhe
    },
    corNomePlataforma (plataforma) {
      switch (plataforma) {
        case 'PS 4':
          return 'blue'
        case 'Xbox One':
          return 'green'
        case 'PC':
          return '#000'
      }
    }
  }
}
</script>

<style scoped>
.produtoNome {font-size: 25px; text-align: center; font-weight: 600}
.produtoPreco {font-size: 25px; text-align: center; font-weight: 600; margin-top: 20px}
</style>
