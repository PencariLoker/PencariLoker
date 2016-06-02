<template>
	<!-- template for the modal component -->
		<div class="modal fade" id="modal-id">
		<div class="modal-dialog modal-sm">
			<div class="modal-content custModal">
				<div class="modal-header">
					<h4 class="modal-title">Sign In</h4>
				</div>
				<div class="modal-body">
					<a href="/oauth/linkedin">
						<img id="linkedinBtn" src="/img/linkedinlogo/Retina/Sign-In-Large---Default.png">
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		ready: function () {
			console.log("Modal Ready");
		}
	}
</script>