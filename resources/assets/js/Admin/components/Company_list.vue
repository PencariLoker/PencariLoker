<template>
<div class="row">
	<div class="col-lg-12">
		<a href="#" @click="addnewcompany" class="btn btn primary"><i class="fa fa-plus"></i> Add New Company</a>
		<a href="#" @click="ajax" class="btn btn primary"><i class="fa fa-plus"></i> Test Ajax</a>
		<div class="panel panel-default">
			<div class="panel-heading">
				List Company
			</div>
			<div class="panel-body">
				<div class="table-responsive">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>Name</th>
								<th>Username</th>
								<th>Email</th>
								<th>Active</th>
								<th>Admin</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
</template>


<script>
	export default {
		ready: function(){
			console.log("Company List Ready")
		},
		methods: {
			addnewcompany: function(){
				this.$dispatch('change_mode', 'add', 'Add New Company');
			},
			ajax: function(e){
				console.log(e)
			}
		}
	}
</script>