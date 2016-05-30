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
				<addnewusers></addnewusers>
			</div>
		</div>
	</div>	
</template>


<script type="text/javascript">
	Vue.component('navbar', require('./_navbar.vue'));
	var List = require('./Company_list.vue');
	var AddNewUsers = require('./Company_add.vue');
	export default {
		ready: function () {
			// body...
		},
		data: function(){
			return {
				'head' : 'Company',
				'status' : 'list',
			}
		},
		components: {
			'list' : List,
			'addnewusers' : AddNewUsers
		},
		events: {
			change_mode: function(a,b){
				this.head=b;
				this.status=a;
			}
		}
	}
</script>