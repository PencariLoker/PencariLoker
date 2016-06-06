@include('front.partial.master')
<!DOCTYPE HTML>
<html>
@yield('jobshead')
<body>
@yield('navbar')
<div class="container bungkus">
  <div class="single">  
  <!--Sidebar-->
    <div class="col-md-3 colputih" style="padding: 0 1em 0 1em;">
	   	<div class="widget_search">
			  <h5 class="widget-title">Search</h5>
			  <div class="widget-content">
          <form action="{{ URL::action('FrontpageController@search') }}" method="get" role="form">
            <select name="idcomp" id="input" class="selectpicker" data-style="form-control" data-live-search="true" title='Choose Company'>
              <option value="">Show all</option>
              @foreach($companies as $company)
                <option @if((isset($_GET['idcomp']) ? $_GET['idcomp'] : '') == $company->id) selected @endif value="{{$company->id}}">{{$company->name}}</option>
              @endforeach
              </select><br>
              <select name="idcat" id="input" class="selectpicker" data-style="form-control" data-live-search="true" title='Choose Category'>
                <option value="">Show all</option>
              @foreach($lowongancats as $lowongancat)
                <option @if((isset($_GET['idcat']) ? $_GET['idcat'] : '') == $lowongancat->id) selected @endif value="{{$lowongancat->id}}">{{$lowongancat->name}}</option>
              @endforeach
            </select>  
            <hr>
             <!--  <div class="col_3">
                  <h3>Kategori</h3>
                    <table class="table">
                          <tbody>
                              @foreach($lowongancats as $lowongancat)
                              <tr class="unread checked">
                                  <td class="">
                                      <input type="checkbox" class="checkbox">
                                  </td>
                                  <td class="">
                                     {{$lowongancat->name}}
                                  </td>
                                  <td>
                                      ({{count($lowongancat->lowongans)}})
                                  </td>
                              </tr>
                              @endforeach
                      </tbody>
                   </table>

            </div> -->
            <input type="submit" class="btn btn-default" value="Cari">
          </form>
		    </div>
	    </div>
    </div>
    <div class="col-md-9 single_left">
      <div class="but_list">
	      <div id="myTabContent" class="tab-content">
	        <div role="tabpanel" class="tab-pane fade in active" id="home" aria-labelledby="home-tab">
            @foreach($lowongans as $lowongan)
            @if($companies->find($lowongan->company_id) && $lowongancats->find($lowongan->lowongancat_id))
            <a class="tab_grid_link" href="{{URL::route('jobdetails',[$lowongan->id] )}}" target="blank_">
			        <div class="tab_grid colputih">
			          <div class="jobs-item with-thumb">
				          <div class="jobs_right">
                    <img style="float:right;" src="{{$lowongan->company->logo}}" alt="">
						        <div class="date_desc"><h6 class="title">{{$lowongan->name}}</h6>
						          <span class="meta">{{$lowongan->company->name}}</span>
						        </div>
  						      <div class="clearfix" style="border-top:1px solid rgba(100,100,100,0.3);"> </div>
                    <ul class="descriptionjob" type=square>
                        {{$lowongan->highlight}}
                    </ul>
                    <div class="salary" style="float:right;"> Estimated Salary : {{$lowongan->gaji}}</div>
                  </div>
					        <div class="clearfix"> </div>
				        </div>
			        </div>
            </a>
            @endif
            @endforeach
	        </div>
       </div>
      </div>
      {{$lowongans->links()}}
 <!--  <ul class="pagination jobs_pagination">
	<li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
	<li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
	<li><a href="#">2</a></li>
	<li><a href="#">3</a></li>
	<li><a href="#">4</a></li>
	<li><a href="#">5</a></li>
	<li><a href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
</ul> -->
    </div>
    <div class="clearfix"> </div>
  </div>
</div>
@yield('footer')
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.7.5/js/bootstrap-select.min.js"></script>
</body>
</html>	