<template>
    <div>
        <input v-model="inputValue" type="text"/>
        <button @click="addItem">add</button>
        <list :items="items"></list>
        <hr />
        <list :items="items | onlyCapital"></list>
        <hr />
        <list :items="items | onlyLower"></list>
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
        computed : {
    		items() { return this.$store.getters.getList}
        },
        methods : {
            addItem () {
           	this.$store.commit(ADD_TO_LIST, this.inputValue)
            }
        },
        components:{
    	    List
        },
	    filters: {
		    onlyCapital: function (value) {
                return value.filter((item) => item[0] === item[0].toUpperCase())
		    },
            onlyLower: function (value) {
                return value.filter(item => item[0] === item[0].toLowerCase())
            }
	    }
    }
</script>