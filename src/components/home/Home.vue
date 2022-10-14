<template>
    <div>
        <h1 class="titulo">{{titulo}}</h1>
        <input type="search" class="filtro" placeholder="filtre pelo título da foto"
            @input="filtro = $event.target.value">
        <ul class="lista-fotos">
            <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
                <meu-painel :titulo="foto.titulo">
                    <imagemResponsiva :url="foto.url" :titulo="foto.titulo" />
                    <meu-botao tipo="button" rotulo="REMOVER" @botaoAtivado="remove(foto)" :confirmacao="true"
                        estilo="perigo" />
                </meu-painel>
            </li>
        </ul>
    </div>
</template>
  
<script>

import painel from '../shared/painel/painel';
import imagemResponsiva from '../shared/imagem-responsiva/imagemResponsiva';
import Botao from '../shared/botao/Botao';


export default {
    components: {
        'meu-painel': painel,
        'imagemResponsiva': imagemResponsiva,
        'meu-botao': Botao,
        
    },
    data() {
        return {
            titulo: 'Seja Bem Vindo',
            fotos: [],
            filtro: '',
        }
    },
    computed: {
        fotosComFiltro() {
            if (this.filtro) {
                let exp = new RegExp(this.filtro.trim(), 'i');
                return this.fotos.filter(foto => exp.test(foto.titulo));
            } else {
                return this.fotos
            }
        }
    },
    methods: {
        remove(foto) {
            alert(foto.titulo);
        },
    },    
    created() {
        let promise = this.$http.get('http://vmi1033367.contaboserver.net/api/modelo');
        promise
            .then(res => res.json())
            .then(fotos => this.fotos = fotos, err => console.log(err));
    },
}
</script>
  
<style>
.titulo {
    text-align: center;
}

.lista-fotos {
    list-style: none;
}

.lista-fotos .lista-fotos-item {
    display: inline-block;
}

.imagem-responsiva {
    width: 100%;
}

/* estilo do painel */

.painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
}

.painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
}

.filtro {
    display: block;
    width: 100%;
}
</style>
  