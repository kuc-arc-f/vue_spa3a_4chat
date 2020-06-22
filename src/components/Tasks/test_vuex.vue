<template>
    <div>
        <h1>Tasks- testChild:</h1>
        <hr />
        <!--
        test : {{ message }}
            -->
        <hr />
        <p>{{ count }}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>        
        <hr />
        <TestTimerChild></TestTimerChild>

    </div>
</template>

<script>
//import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

import {Mixin} from '../../mixin'
import TestTimerChild from '../../components/Element/TestTimerChild'

Vue.use(Vuex)
//
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
})
//
export default {
    mixins:[Mixin],
    components: { TestTimerChild },
    created() {
//        this.getTasks()
//console.log( this.sysConst.URL_BASE )
    },
    computed: {
        count () {
            return store.state.count
        }
    },    
    data() {
        return {
            user : [],
            message : "data: Hello-TestChild-123",
            child_data : "hoge",
            items : [],
        }
    },
    methods: {
        getTasks(){
        },
        increment () {
            store.commit('increment')
        },
        decrement () {
            store.commit('decrement')
        }        
    }
}
</script>

