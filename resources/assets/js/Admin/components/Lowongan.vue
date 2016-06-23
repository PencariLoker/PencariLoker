<style>
  .flatpickr-wrapper{
    display: none;
  }
</style>
<template>
  <navbar></navbar>
  <div id="page-wrapper">
    <!-- Row Header -->
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">
          Job
        </h1>
        <a href="#" v-link="{path : '/lowongan/add'}">Add Lowongan</a>
        <ol class="breadcrumb" style="margin-bottom: 5px;">
          <li><a href="#">Home</a></li>
          <li class="active">Job</li>
        </ol>
      </div>
    </div>
    <!-- End of Row -->

    <!-- Row List -->
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Category</th>
              <th>Salary</th>
              <th>Created Date</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in lowongan">
              <td>{{item.name}}</td>
              <td>{{item.company.name}}</td>
              <td>{{item.lowongancat.name}}</td>
              <td></td>
              <td>{{date(item.created_at)}}</td>
              <td>Due Date</td>
              <td>
                <i class="fa fa-pencil" @click="edit(item)"></i> |
                <i class="fa fa-trash" @click="remove(item)"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- End Row -->
  </div>
</template>


<script type="text/javascript">
  var moment = require('moment');
  var swal = require('sweetalert');
  var Lowongan = require('../lib/Lowongan');
  export default {
    ready: function(){
      this.getLowongan();
    },
    data: function(){
      return {
        lowongan: {},
      }
    },
    components:{
      navbar: require('./_navbar.vue')
    },
    methods:{
      edit: function(e){
        console.log(e.id);
        this.$router.go({ path: '/lowongan/edit/' + e.id});
      },
      remove: function(item){
        var self = this;
        var deleteLowongan = function(e){
          self.lowongan.$remove(item);
          swal("Deleted!", "Your imaginary file has been deleted.", "success");
        }
        swal({
          title: "Yakin Mas?",
          type: "warning",
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
        },function(){
          var lowongan = new Lowongan;
          lowongan.deleteLowongan(item, function(e){
            deleteLowongan(e);
          })
        })
      },
      getLowongan: function(){
        $.ajax({
          method: 'GET',
          async : true,
          cache : false,
          url : window.location.origin + '/admin/lowongan',
          success: function(res){
            this.lowongan = res;
            console.log(res);
          }.bind(this)
        })
      },
      date: function(a){
        return moment(a).format('DD/MM/YYYY')
      }
    }
  }
</script>
