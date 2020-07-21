<template>
    <span :class="active==item.flag?'active filter-ml-20 ':'filter-ml-20' " @click="filter1" >
        {{item.label}}
    </span>
</template>
<script>
    export default {
        name: 'FilterItem',
        props: ['item','active'],
        methods:{
            //过滤任务列表
            filter1(){
                this.$emit('on-filter')
            }
        }
    }
</script>
<style scoped>
.filter-ml-20{
    margin-left: 20px;
}
.active {
	background: #42B983;
	color:#fff;
	}

</style>

