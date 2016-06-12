<template>
    <nav class="navbar navbar-default navbar-fixed-top topnav landing" role="navigation">
        <div class="container topnav landing">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header landing">
                <button type="button landing" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only landing">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand topnav landing" id="logonav" href="/"><img src="/img/logo.png" class="img-responsive" id="logo" alt="Image"/></a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse landing" id="bs-example-navbar-collapse-1">
                <ul v-if="user.logged == true" class="nav navbar-nav navbar-right landing" >
                    <li>
                        <img v-bind:src="pictureUrl" class="img img-responsive user_pic" style="width: 40px; height: 40px; border-radius: 100%; border: 1px solid #dadada; position: relative; top: 5px; left: 5px;">
                    </li>
                    <li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Hello, {{ formattedName }}<b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="/profile">Edit Profile</a></li>
                                <li><a href="logout">Log Out</a></li>
                            </ul>
                        </li>
                    </li>
                </ul>
                <ul v-if="user.logged == false" class="nav navbar-nav navbar-right landing" >
                    <li>
                        <a id="show-modal" href="#modal-id" data-toggle="modal" class="landing btn-regis">Masuk</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
</template>

<script type="text/javascript">
	export default {
		ready: function(){
			console.log("Navbar Ready")
            var _this = this;
            $.ajax({
                method : 'GET',
                async : false,
                cache : false,
                'url' : window.location.origin + "/data",
                success : function(res){
                    _this.user = res;
                    _this.formattedName = res.formattedName || res.name;
                    _this.pictureUrl = res.pictureUrl || res.photo_url
                }.bind(_this)
            });
		},
        data: function(){
            return {
                user : {},
                formattedName:'',
                pictureUrl:''
            }
        }
	}
</script>