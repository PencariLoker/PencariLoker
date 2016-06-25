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
              <td>
                {{item.name}}
                <div>
                  <span class="label label-success" style="cursor: pointer">View Appliant</span>
                </div>
              </td>
              <td>{{item.company.name}}</td>
              <td>{{item.lowongancat.name}}</td>
              <td>{{item.gaji | currency 'Rp' 0}}</td>
              <td>{{date(item.created_at)}}</td>
              <td>{{date(item.tanggalberakhir)}}</td>
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
      var self = this;
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
        var lowongan = new Lowongan;
        var self = this;
        lowongan.getLowongan(function(e){
          //console.log(Array.isArray(e.lowongan));
          if (false == Array.isArray(e.lowongan)){
            self.getLowongan();
            return;
          }else{
            self.lowongan = e.lowongan;
          }
        });
      },
      date: function(a){
        return moment(a).format('DD/MM/YYYY')
      }
    }
  }
</script>
