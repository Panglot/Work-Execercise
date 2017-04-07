<template>
    <div>
        <label for="inputBox">Text to add: </label>
        <input name="InputBox" id="inputBox" type="text"/>
        <button @click="addItem"> Add </button>
        <list :items="this.$store.getters.getList"></list>
        <hr/>
        <list :items="this.$store.getters.getCapitalList"></list>
        <hr />
        <list :items="this.$store.getters.getLowerList"></list>
    </div>
</template>
<script>
    import List from './components/ListComponent.vue'
    import { ADD_TO_LIST } from './vuex/store'

    export default {
        name : 'app',
        data() {
            return {
            	inputValue : ""
            }
        },
        methods : {
            addItem () {
           	this.$store.commit(ADD_TO_LIST, document.getElementById('inputBox').value)
            }
        },
        components:{
    	    List
        }
    }
</script>