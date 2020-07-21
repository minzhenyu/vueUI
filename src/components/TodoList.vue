<template>
	<div class="hello">
		<input type="text" v-model="text" @keyup.enter="add"><button @click="add">添加任务</button>
		<button @click="clear()">清空缓存</button>
		<div>
			<p class="title">
				{{filterLabel}}
			</p>
			<TodoItem :item="item" :filter="filterFlag" @on-change="changeState(item)" @on-del="del(index)" v-for="(item,index) in taskList" :key="index" />
		</div>
		<div class="list-mt-20">
			<FilterItem :item="item" v-for="(item,index) in statusList" :key="index" @on-filter="filter(item.flag,item.label)" :active="filterFlag" />
		</div>

		<div>
			<p>
				已完成
			</p>
			<TodoItem :item="item" :filter="filterFlag" @on-change="changeState(item)" @on-del="del(index)"  v-for="(item,index) in completedData" :key="'complete'+index" />
			<p>
				未完成
			</p>
			<TodoItem :item="item" :filter="filterFlag" @on-change="changeState(item)" @on-del="del(index)"  v-for="(item,index) in unCompletedData" :key="'uncomplete'+index" />
		</div>
		
		<div class="allcheck">
		<input type="checkbox" :checked="checkAll?true:false" @click="changecheckAll" name="checkAll"> <label for="checkAll">全选</label>
		<button @click="inverse">
			反选
		</button>
		</div>
	</div>
</template>
<script>
	import TodoItem from './TodoItem.vue';
	import FilterItem from './FilterItem.vue';
	import Store from '../store.js'
	export default {
		name: 'TodoLit',
		created(){
			this.taskList=this.fetchData();
		},
		data() {
			return {
				taskList: [],
				text: "",
				filterFlag: 'all',
				filterLabel: '全部',
				checkAll:false,
				statusList: [{
						label: "全部",
						flag: 'all'
					},
					{
						label: "已完成",
						flag: 'completed'
					},
					{
						label: "未完成",
						flag: 'uncompleted'
					}
				]
			}
		},
		computed: {
			completedData(){
				let data = [];
				this.taskList.map(item => {
					if (item.done) data.push(item)
				})
				return data
			},
			unCompletedData(){
				let data = [];
				this.taskList.map(item => {
					if (!item.done) data.push(item)
				})
				return data
			}
		},
		components: {
			TodoItem,
			FilterItem
		},
		methods: {
			
			//存储
			saveData(){
				Store.save('taskList',this.taskList);
			},
			//获取
			fetchData(){
				let res = Store.fetch('taskList');
				console.log(res);
				return res;
			},
			//清空
			clear(){
				Store.remove('taskList')
			},
			//添加任务
			add() {
				const repeat = this.taskList.some(item => {
					return item.text == this.text
				});
				if (this.text != '' && !repeat) this.taskList.push({
					text: this.text,
					done: false
				})
				this.text='';
				this.saveData();

			},
			//改变任务状态
			changeState(item) {
				item.done = !item.done;
				this.checkCheckAll();
			},
			//删除任务
			del(index) {
				this.taskList.splice(index, 1);
				this.saveData();
			},
			//过滤任务列表
			filter(flag, label) {
				this.filterFlag = flag;
				this.filterLabel = label;
			},
			
			//全选按钮
			changecheckAll(){
				if(this.checkAll){
					this.taskList.map(item=>{
						item.done=false;
					})
				}else{
					this.taskList.map(item=>{
						item.done=true;
					})
				}
				this.checkAll=!this.checkAll;
				this.saveData();
			},
			//反选
			
			inverse(){
                this.taskList.map(item=>{
                    item.done = !item.done;
                })
				this.checkCheckAll()
            },
			checkCheckAll(){
				let checkedCount = this.taskList.filter(function(item){
					return item.done==true;
				})
				if(checkedCount.length==this.taskList.length){
					this.checkAll=true;
				}else{
					this.checkAll=false;
				}
				this.saveData();
			}
		}
	}
</script>
<style scoped>
	.list-mt-20 {
		margin-top: 20px;
	}
</style>
