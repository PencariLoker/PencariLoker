<template>
	<navbar></navbar>
	<modal></modal>
	<a name="about"></a>
	<div class="intro-header">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="intro-message">
						<h1 class="landing">PencariLoker.com</h1 class="landing">
						<h3 class="landing">Solusi Kerja Masa Kini</h3 class="landing">
						<hr class="intro-divider">
						<ul class="list-inline intro-social-buttons">
							<li>
								<a href="/jobs" class="btn btn-default btn-lg"><i class="fa fa-search fa-fw"></i> <span class="network-name">Cari Lowongan</span></a>
							</li>
							<!-- <li>
												<a href="#" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
							</li> -->
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- /.container -->
	</div>
	<a  name="services"></a>
	<div class="content-section-a">
		<div class="container">
			<div class="row">
				<div class="col-lg-5 col-sm-6">
					<hr class="section-heading-spacer">
					<div class="clearfix"></div>
					<h2 class="landing" class="section-heading">Sulit Mendapat Pekerjaan?<br><br><a href="/jobs" class="btn btn-default btn-lg"><i class="fa fa-search fa-fw"></i> <span class="network-name">Cari Lowongan</span></a></h2 class="landing">
					<p class="lead">Berbagai lowongan tersedia di <a target="_blank" href="#">PencariLoker.com</a>. <br>Ayo segera upload CV anda dan dapatkan pekerjaan yang anda impikan !</p>
				</div>
				<div class="col-lg-5 col-lg-offset-2 col-sm-6">
					<img class="img-responsive" src="/img/ipad.png" alt="">
				</div>
			</div>
		</div>
		<!-- /.container -->
	</div>
	<div class="content-section-b">
		<div class="container">
			<div class="row">
				<div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
					<hr class="section-heading-spacer">
					<div class="clearfix"></div>
					<h2 class="landing" class="section-heading">Sulit mencari calon karyawan?<br><br></h2 class="landing">
					<p class="lead">Segera pasang lowongan anda di <a target="_blank" href="#">PencariLoker.com</a>! <br> Anda akan segera mendapatkan karyawan yang sesuai dengan kriteria perusahaan anda.</p>
				</div>
				<div class="col-lg-5 col-sm-pull-6  col-sm-6">
					<img class="img-responsive" src="img/dog.png" alt="">
				</div>
			</div>
		</div>
		<!-- /.container -->
	</div>
	<!-- /.content-section-b -->
	<div class="content-section-a">
		<div class="container">
			<div class="row">
				<div class="col-lg-5 col-sm-6">
					<hr class="section-heading-spacer">
					<div class="clearfix"></div>
					<h2 class="landing" class="section-heading">Butuh karyawan berkualitas?</h2 class="landing">
					<p class="lead">Kami menyediakan fitur ujian secara online untuk mensortir calon karyawan yang melamar di perusahaan anda.</p>
				</div>
				<div class="col-lg-5 col-lg-offset-2 col-sm-6">
					<img class="img-responsive" src="/img/phones.png" alt="">
				</div>
			</div>
		</div>
		<!-- /.container -->
	</div>
	<!-- /.content-section-a -->
	<a  name="contact"></a>
	<div class="bannerlanding">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<h2 class="landing">Follow us :</h2 class="landing">
				</div>
				<div class="col-lg-6">
					<ul class="list-inline banner-social-buttons">
						<li>
							<a href="https://twitter.com" class="btn btn-default btn-lg" style="width:170px;background:none;color:white;"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
						</li>
						<li>
							<a href="http://instagram.com" class="btn btn-default btn-lg" style="width:170px;background:none;color:white;"><i class="fa fa-instagram fa-fw"></i> <span class="network-name">Instagram</span></a>
						</li>
						<li>
							<a href="http://facebook.com" class="btn btn-default btn-lg" style="width:170px;background:none;color:white;"><i class="fa fa-facebook fa-fw"></i> <span class="network-name">Facebook</span></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- /.container -->
	</div>
	<foot></foot>
</template>


<script type="text/javascript">
	Vue.component('navbar', require('./_navbar.vue'));
	Vue.component('modal', require('./_modal.vue'));
	Vue.component('foot', require('./_footer.vue'));
	export default {
		ready: function () {
			console.log("Home Ready");
		}
	}
</script>
