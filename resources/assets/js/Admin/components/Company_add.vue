<style>
	body{
		overflow-x: hidden;
	}
</style>
<template>
	<div class="row">
		<div class="panel panel-default">
			<div class="panel-body">
				<div class="col-md-6">
					<div class="form-group">
						<label for="">Name</label>
						<input type="text" name="name" id="inputName" class="form-control" value="" required="required" placeholder="Company Name">
					</div>
					<div class="form-group">
						<label for="">Industry</label>
						<input type="text" name="industry" id="inputIndustry" class="form-control" value="" required="required" placeholder="Industry">
					</div>
					<div class="form-group">
						<label for="">Website</label>
						<input type="text" name="website" id="inputWebsite" class="form-control" value="" required="required" placeholder="http://yourcompany.com">
					</div>
					<div class="form-group">
						<label for="">Email</label>
						<input type="email" name="email" id="inputEmail" class="form-control" value="" required="required" placeholder="you@company.com">
					</div>
					<div class="form-group">
						<button type="button" class="btn btn-primary">Save</button>
						<button type="button" class="btn btn-danger" @click="cancel">Back</button>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="">Address</label>
						<textarea name="address" id="inputAddress" class="form-control" rows="3" required="required" placeholder="Google Street"></textarea>
					</div>
					<div class="form-group">
						<div class="checkbox">
							<label>
								<input type="checkbox" value="">
								Active
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		ready: function(){

		},
		data: function(){
			return {

			}
		},
		methods:{
			cancel: function(a,b){
				this.$dispatch('change_mode', 'list', 'Company')
			}
		}
	}
</script>