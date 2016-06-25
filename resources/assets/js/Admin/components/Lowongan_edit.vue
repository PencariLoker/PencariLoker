<template>
  <link rel="stylesheet" href="/css/flatpickr.min.css">
  <navbar></navbar>
  <div id="page-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">Edit Lowongan</h1>
      </div>
    </div>

    <!-- Starf Form -->
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12">
      <div class="form-group">
        <label for="">Title</label>
        <input type="text" name="title" id="inputTitle" class="form-control" placeholder="Job Title" v-model="lowongan.name">
      </div>
      <div class="form-group">
        <label for="">Job Category</label>
        <select name="category" id="inputCategory" class="form-control" v-model="lowongan.category">
          <option value="">Pilih Salah Satu</option>
          <option v-for="item in category" v-bind:value="item.id">{{item.name}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="">Company</label>
        <select name="company" id="inputCompany" class="form-control" required="required" v-model="lowongan.company">
          <option value="">Select Company</option>
          <option v-for="item in company" v-bind:value="item.id">{{item.name}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="">Job Description</label>
        <textarea name="" id="jobdescription" cols="30" rows="10" class="form-control"></textarea>
      </div>
    </div>

    <div class="col-lg-6 col-md-6-col-sm-12">
      <div class="form-group">
        <label for="inputRegion">Region/Province</label>
        <input type="text" name="region" id="inputRegion" class="form-control" v-model="lowongan.region">
      </div>
      <div class="form-group">
        <label for="">Due Date</label>
        <input type="text" name="duedate" id="inputDuedateBaruLagi" class="calendar form-control" v-model="lowongan.duedate">
      </div>
      <div class="form-group">
        <label for="banner">Banner</label>
        <input type="file" name="bannner" id="banner" class="form-control" @change="addBanner">
      </div>
    </div>
  </div> <!-- end of row -->

  <div class="row">
    <div class="col-lg-12 col-md-12">
      <button type="button" class="btn btn-primary" @click="save">Update</button>
    </div>
  </div>

  </div>
</template>


<script>
  var Navbar = require('./_navbar.vue');
  var Utils = require('../Utils').Utils;
  var cat = require('../lib/Category').Category;
  var flatpickr = require('flatpickr');
  var moment = require('moment');
  var Lowongan = require('../lib/Lowongan');
  export default {
    ready: function(){
      var self = this;
      var utils = new Utils;
      var category = new cat;
      utils.getAllCompany(function(e){
        self.company = e;
      })
      category.getCat(function(e){
        console.log(e);
        self.category = e;
      });
      var setDueDate = function(a){
        self.lowongan.duedate = a;
      }
      this.loadData(this.$route.params.lowonganId);
    },
    data: function(){
      return {
        company: {},
        category : {},
        lowongan :{
          name: '',
          description : '',
          duedate : '',
          category : '',
          company : '',
          banner: '',
          region : '',
        }
      }
    },
    methods:{
      loadData: function(id){
        var lowongan = new Lowongan;
        var self = this;
        lowongan.getById(id, function(e){
          $("#jobdescription").summernote();
          self.lowongan.id = e.data.id;
          self.lowongan.company = e.data.company_id;
          self.lowongan.category = e.data.lowongancat_id;
          self.lowongan.name = e.data.name;
          self.lowongan.description = e.data.descript;
          self.lowongan.duedate = moment(e.data.tanggalberakhir).format('YYYY-MM-DD');
          self.lowongan.region = e.data.kotaprovinsi;
          var setDueDate = function(a){
            self.lowongan.duedate = a;
          }
          flatpickr('#inputDuedateBaruLagi')
            .set('onChange', function(d){
              setDueDate(moment(d).format("YYYY-MM-DD HH:mm:ss"));
            }.bind(this));
          $("#jobdescription").summernote('code', self.lowongan.description);
        })
      },
      date: function(a){
        return moment(a).format('DD/MM/YYYY')
      },
      save: function(){
        var data;
        var self = this;
        var lowongan = new Lowongan;
        data = this.lowongan;
        data.descript = $("#jobdescription").val();
        lowongan.updateLowongan(data, function(e){
          console.log(self.$router.go({path : '/lowongan'}));
        })
        console.log(data);
      },
      addBanner: function(e){
        var target = e.target;
        console.log(target.files[0]);

        var tmpFile = target.files[0];
        var formData = new FormData();
        formData.append('profile', tmpFile);
        formData.append('_csrf', $('meta[name=csrf]').attr('content'));

        var lowongan = new Lowongan;
        lowongan.uploadBanner(formData, function(e){
          console.log(e);
        });
      }
    },
    components:{
      navbar: Navbar
    }
  }
</script>
