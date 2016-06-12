
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
				<h1 class="page-header">List Users</h1>
				<p>Total : <b>{{arr.length}}</b></p>
			</div>
		</div>

		<!-- List -->
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<div class="table-responsive">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>Id LinkedIn</th>
								<th>Name</th>
								<th>Email</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in arr">
								<td>foo</td>
								<td>{{item.name}}</td>
								<td>{{item.email}}</td>
								<td>
								<a href="">Edit</a> | <a href="">Delete</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>


<script type="text/javascript">
	export default {
		ready: function(){
			var _this = this;
			$.ajax({
				method : 'GET',
				async : true,
				cache : false,
				'url' : window.location.origin + "/admin/users/list",
				success : function(res){
					_this.arr = res;
				}.bind(_this)
			});

			$('title').text('Users')
		},
		data () {
		  return {
		    arr : [],
		  };
		},
		components:{
			navbar:require('./_navbar.vue')
		}
	}
</script>