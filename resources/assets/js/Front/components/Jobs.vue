<template>
	<navbar></navbar>
	<modal></modal>
	<div class="container bungkus">
	  	<div class="single">
		    <div class="col-md-3 colputih" style="padding: 0 1em 0 1em;">
			   	<div class="widget_search">
					<h5 class="widget-title">Search</h5>
					<div class="widget-content">
				        <form action="#" method="get" role="form">
				            <select name="idcomp" id="input" class="selectpicker" v-model="idcomp" data-style="form-control" data-live-search="true" title='Choose Company'>
					            <option value="">Show all</option>
				                <option v-for="company in companies" value="{{company.id}}">{{company.name}}</option>
					        </select><br>
					        <select name="idcat" id="input" class="selectpicker" v-model="idcat" data-style="form-control" data-live-search="true" title='Choose Category'>
					            <option value="">Show all</option>
					             <option v-for="lowongancat in lowongancats" value="{{lowongancat.id}}">{{lowongancat.name}}</option>
				            </select>
				            <hr>
				            <button type="button" class="btn btn-default btn-info" @click="filterCategory">Cari</button>
				        </form>
				    </div>
			    </div>
		    </div>
		    <div class="col-md-9 single_left">
		        <div class="but_list">
			        <div id="myTabContent" class="tab-content">
				        <div role="tabpanel" class="tab-pane fade in active" id="home" aria-labelledby="home-tab">
				            <a v-for="lowongan in lowongans" track-by="id" class="tab_grid_link" href="{{ '/jobdetails/'+lowongan.id }}" target="blank_">
						        <div class="tab_grid colputih">
						            <div class="jobs-item with-thumb">
									    <div class="jobs_right">
					                    	<img style="float:right;" v-bind:src="returnCorrectUrl(lowongan.company.logo)" alt="">
									        <div class="date_desc">
									        	<h6 class="title">{{lowongan.name}}</h6>
									            <span class="meta">{{lowongan.company.name}}</span>
									        </div>
			  						      	<div class="clearfix" style="border-top:1px solid rgba(100,100,100,0.3);"></div>
						                    <ul class="descriptionjob" type=square>
							                    {{{ lowongan.highlight }}}
						                    </ul>
						                    <div class="salary" style="float:right;"> Estimated Salary : {{lowongan.gaji | currency 'Rp' 0}}</div>
					                    </div>
								        <div class="clearfix"> </div>
							        </div>
						        </div>
				            </a>
				        </div>
		            </div>
			    </div>
		    	<ul class="pagination">
			    	<li v-for="page in pageCol"><a href="#" @click="gotoPage(page.value)">{{{ page.text }}}</a></li>
			    </ul>
		    </div>
	    	<div class="clearfix"> </div>
	  	</div>
	</div>
</template>

<script type="text/javascript">
	Vue.component('navbar', require('./_navbar.vue'));
	Vue.component('modal', require('./_modal.vue'));
  var path = require('path');
	export default {
		ready: function () {
			var _this = this;
            $.ajax({
                method : 'GET',
                async : false,
                cache : false,
                'url' : window.location.origin + "/jobsInit",
                success : function(res){
                    _this.companies = res.companies;
                    _this.lowongancats = res.lowongancat;
                    _this.lowongans = res.lowongans;
                    _this.page = 1;
                    _this.maxPage = res.totalPage;
                    _this.renderPagination();
                }.bind(_this)
            });
		},
        data: function(){
            return {
                companies:[],
                lowongancats:[],
                lowongans:[],
                idcomp:'',
                idcat:'',
                page:1,
                maxPage:0,
                pageCol:[]
            }
        },
        methods: {
          returnCorrectUrl: function(url){
            return window.location.origin + "/" + path.join('img', url);
          },
        	renderPagination:function() {
        		this.pageCol = [];
        		if(this.maxPage == 1) return;
        		if(this.page <= 3){
        			if(this.maxPage < 6){
	        			for (var i = 0; i < this.maxPage; i++) {
	        				this.pageCol.push({value:i+1,text:i+1});
	        			}
        			}else{
	        			for (var i = 0; i < 5; i++) {
	        				this.pageCol.push({value:i+1,text:i+1});
	        			}
	        			this.pageCol.push({value:"next",text:"&raquo;"});
        			}
        		}else if(this.page + 3 > this.maxPage){
        			if(this.maxPage < 6){
	        			for (var i = 0; i < this.maxPage; i++) {
	        				this.pageCol.push({value:i+1,text:i+1});
	        			}
        			}else{
        				this.pageCol.push({value:"prev",text:"&laquo;"});
	        			for (var i = this.maxPage-5; i < this.maxPage; i++) {
	        				this.pageCol.push({value:i+1,text:i+1});
	        			}
	        		}
        		}else{
        			this.pageCol.push({value:"prev",text:"&laquo;"});
        			for (var i = this.page-3; i < this.page + 2; i++) {
        				this.pageCol.push({value:i+1,text:i+1});
        			}
        			this.pageCol.push({value:"next",text:"&raquo;"});
        		}
        	},
        	gotoPage:function(value){
        		if(value == "prev"){
        			this.page -= 5;
        		}else if(value == "next"){
        			this.page += 5;
        		}else{
        			this.page = value;
        		}
        		var data = {
					_csrf : $('meta[name=csrf]').attr('content'),
					idcomp:this.idcomp,
					idcat:this.idcat,
					page:this.page
				}
				var _this = this;
				$.ajax({
					url : window.location.origin + "/getPage",
					method : 'POST',
					async : false,
					data : data,
					success : function(res){
						_this.lowongans = res.lowongans;
	                    _this.renderPagination();
					}
				})
        	},
			filterCategory: function(){
				var data = {
					_csrf : $('meta[name=csrf]').attr('content'),
					idcomp:this.idcomp,
					idcat:this.idcat,
				}
				var _this = this;
				$.ajax({
					url : window.location.origin + "/filterData",
					method : 'POST',
					async : false,
					data : data,
					success : function(res){
						_this.lowongans = res.lowongans;
						_this.page = 1;
	                    _this.maxPage = res.totalPage;
	                    _this.renderPagination();
					}
				})
			}
		}
	}
</script>
