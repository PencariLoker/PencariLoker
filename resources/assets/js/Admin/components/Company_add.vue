<template>
	<navbar></navbar>
	<div id="page-wrapper">
		<div class="row">
			<div class="col-lg-12 col-sm-12 col-md-12">
				<h1 class="page-header">Add Company</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="col-md-6">
					<div class="form-group">
						<label for="">Name</label>
						<input type="text" name="name" id="inputName" class="form-control" placeholder="Name">
					</div>
					<div class="form-group">
						<label for="">Indsutry</label>
						<input type="text" name="" id="input" class="form-control" placeholder="Indsutry">
					</div>
					<div class="form-group">
						<label for="">Website</label>
						<input type="url" name="url" id="inputUrl" class="form-control" placeholder="http://yourcompany.com">
					</div>
					<div class="form-group"></div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="">Size</label>
						<input type="text" name="size" id="inputSize" class="form-control" placeholder="Size">
					</div>
					<div class="form-group">
						<label for="">Address</label>
						<textarea name="address" class="form-control" placeholder="Address"></textarea>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 col-sm-12">
				<a href="#" v-link="{path:'/company'}" class="btn btn-danger" style="margin-left:15px;">Cancel</a>
				<button type="button" class="btn btn-primary" style="">Save</button>
			</div>
		</div>
	</div>	
</template>


<script type="text/javascript">
	var Navbar = require('./_navbar.vue');
	export default {
		ready: function(){
			$('title').text('Add Company');
		},
		components:{
			navbar: Navbar
		}
	}
</script>