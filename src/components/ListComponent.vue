<template>
    <ul>
        <li v-for="item in items">{{item}}</li>
    </ul>

</template>
<script>
    export default {
    	data () {
    		return {}
        },
        props : {
    		items : {
    			type: Array,
                default: () => []
            }
        }
    }
</script>