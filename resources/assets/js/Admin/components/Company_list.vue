<template>
	<navbar></navbar>
	<div id="page-wrapper">
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header">Company</h1>
				<a href="#" v-link="{path:'/company/add'}">Add New Company</a>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="table-responsive">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>Name</th>
								<th>Indsutry</th>
								<th>Website</th>
								<th>Phone</th>
								<th>Email</th>
								<th>Address</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in arr">
                <td>{{item.name}}</td>
                <td>{{item.industry}}</td>
                <td>{{item.website}}</td>
                <td>{{item.phone}}</td>
                <td>{{item.email}}</td>
								<td>{{item.address}}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	var Navbar = require('./_navbar.vue');
	export default {
		ready: function(){
			$('title').text('Company');
			$.ajax({
        async: true,
        method : 'GET',
        cache : false,
        url : window.location.origin + '/admin/company/list',
        success: function(res){
          this.arr = res;
        }.bind(this)
      })
		},
    data: function(){
      return {
        arr : [],
      }
    },
		methods: {
			addnewcompany: function(){
				this.$dispatch('change_mode', 'add', 'Add New Company');
			},
			ajax: function(e){
			}
		},
		components:{
			navbar: Navbar
		}
	}
</script>
