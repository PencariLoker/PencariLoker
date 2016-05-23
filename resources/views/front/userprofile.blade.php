@include('front.partial.master')
<!DOCTYPE HTML>
<html class="greybody">
  @yield('jobshead')
  <link rel="stylesheet" href="{{URL::asset('assets/frontend/css/lightslider.min.css')}}">
  <body class="greybody jobdescbody">
	@yield('navbar')


<div class="container content">
				@if(Auth::user()->id == $userprofile->id) {{ Form::open(array('url' => 'user'.'/'.$userprofile->id, 'files'=>true)) }} @endif
				

					<div class="col-lg-12 col-xs-12 col-sm-12 col-md-6" style="margin:0 auto;">
						<div class="panel panel-default">
							<div class="panel-heading">
								<h3>{{$userprofile->name}} Edit Profile</h3>
							</div>
							<div class="panel-body">
								<div class="form-group">
									<img style="margin:0 auto;height:300px;width:auto;" @if(!is_null($userprofile->photos)) src="{{URL::asset($userprofile->photos)}}"  @else src="http://www.hdi-slc.com/wp-content/uploads/2012/07/blank-profile.jpg" @endif class="img-responsive" alt="Image">
									<input @if(Auth::user()->id != $userprofile->id) disabled @endif style="margin:0 auto;" type="file" accept="image/*" name="fotouser" value="" placeholder="">
								</div>
								<div class="form-group">
									<label>Name</label>
									<input @if(Auth::user()->id != $userprofile->id) disabled @endif placeholder="Name" name="name" value="{{$userprofile->name}}" class="inputkecil form-control">
								</div>
								<div class="form-group">
									<label>Username</label>
									<p class="inputkecil form-control" style="background:#DDD;">{{$userprofile->username}}</p>
								</div>
								<div class="form-group">
									<label>Email</label>
									<p class="inputkecil form-control" style="background:#DDD;">{{$userprofile->email}}</p>
								</div>
								<div class="form-group">
									<label>Gender</label>
									<select name="gender" id="input" class="form-control" required="required">
										<option @if($userprofile->gender == 0) selected @endif value="0">Male</option>
										<option @if($userprofile->gender == 1) selected @endif value="1">Female</option>
									</select>
								</div>
								<div class="form-group">
									<label>Address</label>
									<textarea @if(Auth::user()->id != $userprofile->id) disabled @endif name="alamat" id="input" class="form-control" rows="3" required="required">{{$userprofile->address}}</textarea>
								</div>
								<div class="form-group">
									<label>Birthdate</label>
									<input @if(Auth::user()->id != $userprofile->id) disabled @endif style="width:160px;" type="date" name="dob" id="tanggal" class="form-control" value="{{{ isset($userprofile->dob) ? date('Y-m-d',strtotime($userprofile->dob)) : ''}}}" required="required" title="">
								</div>
								<div class="form-group">
									<label>Phone</label>
									<input @if(Auth::user()->id != $userprofile->id) disabled @endif type="text" name="telepon" id="tanggal" class="form-control" value="{{$userprofile->phone}}" required="required" title="">
								</div>
								<div class="form-group">
									<label>Upload A File ( CV / Resume / Portfolio ) in .pdf</label>
									@if(!is_null($userprofile->lampiran))
									<a target="_blank" href="{{URL::asset($userprofile->lampiran)}}">Download Lampiran</a>
									@else
									<p>CV not uploaded yet</p>
									@endif
									<input @if(Auth::user()->id != $userprofile->id) disabled @endif type="file" name="lampiran" accept=".pdf" value="" placeholder="">
								</div>
								@if(Auth::user()->id == $userprofile->id) <button type="submit" class="btn btn-primary">Submit</button> @endif
								
							</div>
							<!-- /.panel-body -->
						</div>
						<!-- /.panel -->
					</div>
		
					<!-- /.row -->
					@if(Auth::user()->id == $userprofile->id) {{Form::close()}} @endif
				


</div>		
	 @yield('footer')
  </body>
</html>