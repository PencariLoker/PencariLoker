<template>
	<navbar></navbar>
	<div id="page-wrapper">
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header">
          Company
          <small></small>
        </h1>
				<a href="#" v-link="{path:'/company/add'}" v-if="!loading">Add New Company</a>
			</div>
		</div>

		<div class="row" v-if="!loading">
      <div class="col-md-12">
				<div class="table-responsive">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>Name</th>
								<th>Indsutry</th>
								<th>Website</th>
								<th>Phone</th>
								<th>Email</th>
								<th>Address</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in arr">
                <td>{{item.name}}</td>
                <td>{{item.industry}}</td>
                <td>{{item.website}}</td>
                <td>{{item.phone}}</td>
                <td>{{item.email}}</td>
								<td>{{{item.address}}}</td>
                <td>
                  <i class="fa fa-pencil" @click="edit(item)" style="cursor: pointer"></i> |
                  <i class="fa fa-trash" @click="remove(item)" style="cursor: pointer"></i>
                </td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

    <div v-if="loading">
      <h1 class="text-center">
        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
        <small>Loading Data</small>
      </h1>
    </div>
	</div>
</template>


<script>
	var Navbar = require('./_navbar.vue');
  var Utils = require('../Utils').Utils;
  var swal = require('sweetalert');
	export default {
		ready: function(){
			$('title').text('Company');
      this.showCompany();
		},
    data: function(){
      return {
        arr : [],
        loading : true,
      }
    },
		methods: {
			addnewcompany: function(){
			},
			ajax: function(e){
			},
      showCompany: function(){
        var self = this;
        var handle = function(e){
          if(Array.isArray(e)){
            self.arr = e;
            self.loading = false;
          }
          else{
            self.showCompany();
          }
        }
        $.ajax({
          async: true,
          method : 'GET',
          cache : false,
          url : window.location.origin + '/admin/company/list',
          success: function(res){
            handle(res);
          }
        })
      },
      edit: function(e){
        console.log(e.id);
        this.$router.go({ path: '/company/edit/' + e.id});
      },
      remove: function(e){
        var self = this;
        console.log(e);
        var hapus = function(){
          self.arr.$remove(e);
        }
        swal({
          title: "Yakin Mas?",
          type: "warning",
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
        },function(){
          var utils = new Utils;
          var data = {'id' : e.id}
          var _self = self;
          utils.deleteServices(data, function(e){
            if (e.status == 'ok'){
              hapus();
              swal("Deleted!", "Your imaginary file has been deleted.", "success");
            }
          });
        });
      }
		},
		components:{
			navbar: Navbar
		}
	}
</script>
