<template>
<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><img src="/img/logo.png" class="img-responsive" style="height:120%;" id="logo" alt="Image"></a>
            </div>
            <!-- /.navbar-header -->
            <ul class="nav navbar-top-links navbar-right">
                <!-- /.dropdown -->
                <div style="padding:20px 20px 10px 0;font-size:14px;font-weight:900"><a href="logout"><i class="fa fa-sign-out fa-fw"></i>Logout</a></div>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

<div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li>
                            <a href="#!/">
                                <strong>
                                    <i class="fa fa-home fa-fw"></i> Home
                                </strong>
                            </a>
                        </li>
                         <li>
                            <a href="#!/lowongan/"><strong><i class="fa fa-briefcase fa-fw"></i> Lowongan</strong></a>
                        </li>
                        <li>
                            <a href="#!/company/"><strong><i class="fa fa-building-o fa-fw"></i> Company</strong></a>
                        </li>
                        <li>
                            <a href="#!/user">
                                <strong>
                                    <i class="fa fa-users fa-fw"></i> Users
                                </strong>
                            </a>
                        </li>
                         <!-- <li>
                            <a href="#"><strong><i class="fa fa-newspaper-o fa-fw"></i> Job Vacancy Categories<span class="fa arrow"></span></strong></a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <a href="http://medanjob-hashed.rhcloud.com/lowongancat/create">Add</a>
                                </li>
                                <li>
                                    <a href="http://medanjob-hashed.rhcloud.com/lowongancat">List</a>
                                </li>
                            </ul>
                                                 </li>
                                                 Job Vacancy
                                                 <li>
                            <a href="#"><strong><i class="fa fa-briefcase fa-fw"></i> Job Vacancies<span class="fa arrow"></span></strong></a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <a href="http://medanjob-hashed.rhcloud.com/lowongan/create">Add</a>
                                </li>
                                <li>
                                    <a href="http://medanjob-hashed.rhcloud.com/lowongan">List</a>
                                </li>
                            </ul>
                                                 </li>
                                                 Penyedia Lowongan
                                                 <li>
                            <a href="#!/company"><strong><i class="fa fa-building-o fa-fw"></i> Companies<span class="fa arrow"></span></strong></a>
                                                 </li>
                                                 User
                                                 <li>
                            <a href="#"><strong><i class="fa fa-users fa-fw"></i> User<span class="fa arrow"></span></strong></a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <a href="http://medanjob-hashed.rhcloud.com/register">Add</a>
                                </li>
                                <li>
                                    <a href="http://medanjob-hashed.rhcloud.com/user">List</a>
                                </li>
                            </ul>
                                                 </li> -->
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>
</template>

<script type="text/javascript">
	export default {
		ready: function(){
			console.log("Navbar Ready")
		}
	}
</script>
