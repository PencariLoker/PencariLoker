<template>
<navbar></navbar>
<div id="page-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">Dashboard <small>Statistic Overview</small>
        </h1>
      </div>
    </div>

    <div class="row">

      <div class="col-lg-3 col-md-6">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xs-3">
                <i class="fa fa-building-o fa-5x"></i>
              </div>
              <div class="col-xs-9 text-right">
                <div class="huge">0</div>
                  <div>Company</div>
              </div>
            </div>
          </div>
            <a href="">
              <div class="panel-footer">
                <span class="pull-left">Detail</span>
                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                <div class="clearfix"></div>
              </div>
            </a>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="panel panel-yellow">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xs-3">
                <i class="fa fa-users fa-5x"></i>
              </div>
              <div class="col-xs-9 text-right">
                <div class="huge">0</div>
                  <div>Users</div>
              </div>
            </div>
          </div>
            <a href="#" v-link="{path:'/user'}">
              <div class="panel-footer">
                <span class="pull-left">Detail</span>
                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                <div class="clearfix"></div>
              </div>
            </a>
        </div>
      </div>

    </div>
    <!-- End Row -->

    <!-- Start Row -->
    <div class="row">
      <div class="col-md-6">
        <h1><small>Server Information</small></h1>
        <p>Hostname : <b>{{system.hostname}}</b></p>
        <p>Platform : <b>{{system.platform}}</b></p>
        <p>Architecture : <b>{{system.arch}}</b></p>
        <p>Release : <b>{{system.release}}</b></p>
        <p>Homedir : <b>{{system.homedir}}</b></p>
        <p>Type : <b>{{system.type}}</b></p>
      </div>
      <div class="col-md-6">

      </div>
    </div>
</div>
</template>


<script type="text/javascript">
	export default {
		ready: function(){
      setInterval(console.log("S"), 500)
			$('title').text('Dashboard')
      this.updateMessage();
		},
    data: function(){
      return {
        system : {},
        msg: 'not updated',
      }
    },
    methods:{
        updateMessage: function () {
          $.ajax({
            'method' : 'GET',
            async : true,
            url : window.location.origin + "/api/server",
            success: function(res){
                this.system = res
            }.bind(this)
          })
        }
    },
		components: {
			navbar: require('./_navbar.vue')
		}
	}
</script>
