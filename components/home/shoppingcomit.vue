<template>
    <cmt :id="this.$route.params.id"></cmt> 
</template>
<script>
import cmt from './cmt.vue' 
export default {
    data(){
        return {

        }
    },
    methods:{

    },
    components:{
        "cmt":cmt
    }

}
</script>
<style lang="scss" scoped>
    
</style>
