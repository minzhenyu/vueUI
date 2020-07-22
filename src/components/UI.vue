<template>
	<div>
		<el-row>
			<el-col :span="24">
				<div class="grid-content bg-purple-dark"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="8">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="4">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple-light">
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
			</el-col>
		</el-row>

		<el-button icon="el-icon-search" circle></el-button>
		<el-button type="primary" icon="el-icon-edit" circle></el-button>
	</div>
</template>

<script>
	import 'element-ui/lib/theme-chalk/index.css';
	export default {
		name: 'UI',
		data() {
			return {
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: ''
			}
		},
	}
</script>

<style>
	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>
