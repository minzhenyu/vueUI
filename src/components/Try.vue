<template>
		<div class="try">
			aaa
			<input type="text" v-model="bb">
			<p>
				{{bb}}
			</p>
			<p>
				{{a}}
			</p>
			
		</div>
</template>

<script>
	export default{
		name:'Try',
		data:()=>{
			return {bb:12}
			},
		props:{},
		methods:{
			
		},
		computed:{
			a:vm=>vm.bb+1
		}
	}
</script>

<style scoped>
</style>
