<template>
	<navbar></navbar>	
	<div id="page-wrapper">
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header">Dashboard <small>Statistic Overview</small></h1>
			</div>
		</div>
		<div class="row">
			
		</div>
	</div>
</template>


<script type="text/javascript">
	export default {
		ready: function(){
			$('title').text('Dashboard')
			console.log("Home REady");
		},
		components: {
			navbar: require('./_navbar.vue')
		}
	}
</script>