<template>
<div>
    <h1> Tabela </h1>
    <table>
        <tr>
            <td>Nota Fiscal</td>
            <td>Sacado</td>
            <td>Cedente</td>
            <td>Emissão</td>
            <td>Valor</td>
            <td>Status</td>
        </tr>
        <tr v-for="item in list" v-bind:key="item.id">
            <td>{{item.nNf}}</td>
            <td>{{item.buyer && item.buyer.name}}</td>
            <td>{{item.provider && item.provider.name}}</td>
            <td>{{item.emissionDate}}</td>
            <td>{{item.value}}</td>
            <td>{{item.orderStatusBuyer}}</td>
        </tr>
     </table>
</div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
    name:'table',
    data() {
        return {
            list:undefined
        }
    },
    mounted () {
        Vue.axios.get('http://localhost:3003')
        .then((res) => {
            this.list = res.data
            console.log(this.list)
        })
    }
}
</script>