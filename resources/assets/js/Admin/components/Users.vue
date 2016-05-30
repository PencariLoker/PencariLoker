<style>
	body{
		overflow-x: hidden
	}
</style>
<template>
	<navbar></navbar>
	<div id="page-wrapper">
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header">{{head}}</h1>
			</div>
			<div v-if="status == 'list'">
				<list></list>
			</div>

			<div v-if="status == 'add'">
				<addusers></addusers>
			</div>
		</div>
	</div>
</template>


<script type="text/javascript">
	Vue.component('navbar', require('./_navbar.vue'));
	var UserList = require('./Users_list.vue');
	var UserAdd = require('./Users_add.vue');
	export default {
		ready: function () {
			console.log("Users Rready");
		},
		data: function(){
			return {
				'head' : 'Users',
				'status' : 'list',
			}
		},
		components: {
			'list' : UserList,
			'addusers' : UserAdd,
		},
		events:{
			change_mode: function(a, b){
				this.status = a;
				this.head = b;
			}
		}
	}
</script>