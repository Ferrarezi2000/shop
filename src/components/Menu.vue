<template>
  <div>
    <nav class="navbar navbar-light">
      <a class="navbar-brand" href="/">
        <img src="../../static/img/logo.png" width="120" height="30" class="d-inline-block align-top" alt="logo">
      </a>

      <button type="button" class="btn btn-outline-success botaoCarrinho" data-toggle="modal" data-target="#modalCarrinho">
        <i class="fas fa-cart-plus iconCarrinho"></i>
        <span class="badge badge-light" v-if="getMeusProdutos.length">{{ getMeusProdutos.length }}</span>
      </button>
    </nav>

    <!--Modal Carrinho-->
    <div class="modal fade" id="modalCarrinho" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Meu carrinho</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <div v-if="getMeusProdutos.length">
              <div class="row" v-for="(item, index) in getMeusProdutos" :key="index">
                <div class="col-2">
                  <img :src="item.img" width="50"/>
                </div>
                <div class="col-5 mt-2">
                  {{ item.nome }}
                </div>
                <div class="col-3 mt-2">
                  <strong>{{ item.preco | currency }}</strong>
                </div>
                <div class="col-2 mt-2">
                  <button type="button" class="btn btn-outline-danger btn-sm tooltips" @click="remover(item)">
                    <i class="fas fa-minus"></i>
                    <span>Remover</span>
                  </button>
                </div>
                <hr style="width: 100%" class="border-top" v-if="index + 1 !== getMeusProdutos.length">
              </div>

              <div class="border-top mt-4">
                <div class="mt-3">Total: <strong>{{ total | currency }}</strong></div>
              </div>
            </div>

            <div v-else>
              Seu carrinho está vazio
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-dismiss="modal">Fechar</button>
            <button type="button" class="btn btn-success" @click="finalizar" v-if="getMeusProdutos.length">Finalizar</button>
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
    ...mapGetters(['getMeusProdutos']),
    total () {
      return this.getMeusProdutos.reduce((acc, item) => acc + item.preco, 0)
    }
  },
  methods: {
    ...mapMutations(['removerProdutos', 'zerarCarrinho']),
    finalizar () {
      this.$toasted.show('Pedido realizado com sucesso.', {
        position: 'top-center',
        type: 'success',
        duration: 3000
      })
      window.jQuery('#modalCarrinho').modal('toggle')
      this.zerarCarrinho()
    },
    remover (produto) {
      this.getMeusProdutos.forEach((item, index) => {
        if (item.id === produto.id) {
          this.removerProdutos(index)
        }
      })
    }
  }
}
</script>

<style scoped>
  button.tooltips {
    position: relative;
    display: inline;
    cursor: pointer;
  }
  button.tooltips span {
    position: absolute;
    width:70px;
    color: #FFFFFF;
    background: black;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    text-align: center;
    visibility: hidden;
    border-radius: 10px;
  }
  button.tooltips span:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: 5px;
    width: 0; height: 0;
    border-top: 8px solid black;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
  }
  button:hover.tooltips span {
    visibility: visible;
    opacity: 0.9;
    bottom: 35px;
    left: 100%;
    margin-left: -76px;
    z-index: 999;
  }
nav {background-color: white}
.iconCarrinho {font-size: 25px; color: #9bcb3b}
.botaoCarrinho:hover {background-color: #f8f9fa}
</style>
