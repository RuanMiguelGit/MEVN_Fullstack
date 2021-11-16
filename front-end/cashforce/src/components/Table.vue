<template>
    <h1> Tabela </h1>
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
        Vue.axios.get('http://localhost:3002')
        .then((res) => {
            this.list = res
            console.warn(res)
        })
    }
}
</script>