<template>
    <div>
        <h1>Tasks- test_vuex.vue:</h1>
        <hr />
        <p>{{ count }}</p>
        <p>
            <button @click="increment">+</button>
            <!--
            <button @click="decrement">-</button>
            -->
        </p>        
        <hr />
        <TestChild_2 />

    </div>
</template>

<!-- -->
<script>
import axios from 'axios'
import {Mixin} from '../../mixin'
import TestChild_2 from '../../components/Element/TestChild_2'

//
export default {
    mixins:[Mixin],
    components: { TestChild_2 },
    created() {
        this.updateTask()
    },
    computed: {
        count () {
            return this.$store.state.count
        },
        getTasks(){
            return this.$store.getters.getTasks;
        }        
    },    
    data() {
        return {
            message : "data: Hello-TestChild-123",
        }
    },
    methods: {
        increment () {
            this.$store.commit("increment");
        },
        updateTask() {
            var url = this.sysConst.URL_BASE +'/api/test_tasks'
//console.log(url)
            axios.get(url).then(res =>  {
                this.tasks = res.data
                this.$store.commit('setTasks',  {'tasks' : this.tasks }  )
            })                        
        },       
    }
}
</script>

