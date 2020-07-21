<template>
	<div class="header">
		<span @click='goBack(-1)'> 我是返回按钮</span>
		<p @click='goBack(-1)'>
			{{title | add}}
			
			
		</p>
		<p>
			<input type="text" v-model="title">
		<button @click="addItem()">
			+
		</button>
		</p>
		<p>
			{{a}}
		</p>
		<p @click="increment()">
			{{this.$store.state.count}} 我是vuex  产生的全局数据
		</p>
		
		<p v-for="(item,index) in arr" :key='index'>
			
			{{item.name}}
			<span @click="delItem(item)">
				del
			</span>
		</p>
		
	</div>
</template>

<script>
	
	export default{
		name:'Header',
		data:()=>{
				return {
					title:'111',
					h2:'我是计算的结果',
					arr:[{index:1,name:'原始数据1',id:0},{index:1,name:'原始数据2',id:0},{index:1,name:'原始数据3',id:0},]
				}
		},
		props:{
			age:Number
		},
		watch:{
			title:function(val,oldVal){
				console.log('new: %s, old: %s', val, oldVal)
			},
		},
		methods:{
			addItem(){
				this.arr.push({name:this.title,id:this.arr.length+1,})
			},
			delItem(item){
				
				let index=this.arr.indexOf(item)+1;
				console.log(index)
				this.arr.splice(index,1)
				console.log(this.arr)
			},
			goBack(vm,step){
				console.log(step)
				this.$router.go(-1)
			},
			increment() {
				this.$store.commit('increment')
				console.log(this.$store.state.count)
				console.log(this.$store)
				console.log(this.$router)
			}
		},
		computed:{
			a: (vm)=>{
				return vm.title+vm.h2
			},
			
		},
		filters:{
			add:value=>{
				return value+'我是筛选的数据'
			},
			reverseArr:arr=>{
				return arr.reverse()
			},
			
		}
	}
</script>

<style scoped>
		.header{
			background: #ccc;
			color:#fff;
			font-size: 30px;
			font-weight:bold;
			/* position: fixed; */
			top: 0;
			width: 100%;
			text-align: center;
		}
		
	
</style>
