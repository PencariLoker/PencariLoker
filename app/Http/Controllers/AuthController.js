'use strict'
var Linkedin = require('node-linkedin')('75nb5nsun5gsp3', 'OKFiE0UtZNFHfk2p', 'http://128.199.133.46/authentication')
var logged_Linkedin = false;
var userData;
const User = use('App/Model/Users');

class AuthController {
	static isAuthenticated(){
		return logged_Linkedin;
	}
	static data(variable_name){
		if(!logged_Linkedin)return "";
		if(variable_name === 'name')
			return userData.formattedName;
		if(variable_name === 'pic')
			return userData.pictureUrl;
		if(variable_name === 'email')
			return userData.emailAddress;
		if(variable_name === 'city')
			return userData.location.name;
	}

	* authentication (request, response) {
	    Linkedin.auth.authorize(response, ['r_basicprofile', 'r_emailaddress', 'w_share'])
	}

	* accessToken (request, response) {
    	var tmp = request.get()
		var prom = function(){
			return new Promise(function(resolve,reject){
				Linkedin.auth.getAccessToken(response, tmp.code, tmp.state, function(err, results) {
			        if ( err )
			        	reject(err);
			        resolve(results);
			    });
			});
		}

		const resToken = yield prom();
		yield request.session.put('access_token',resToken.access_token);

		var linkedin = Linkedin.init(resToken.access_token, {
		    timeout: 10000
		});

		// var	users = yield User.select('linkedin_id').where('linkedin_id','1111');
		// console.log(users);

		linkedin.people.me(function(err, $in) {
			userData = $in;
        	logged_Linkedin = true;
        	response.redirect('/checkDatabase');
		});
	}

	* logout(request,response){
		logged_Linkedin = false;
		yield request.session.forget('access_token');
		yield request.session.forget('userData');
        response.redirect('/');
  	}

  	*checkDatabase(request,response){
  		var resQuery = yield User.where('linkedin_id',userData.id);
  		if(resQuery.length == 0){
  			console.log("gak ada");
  			User.inDatabase = false;
  			response.redirect('/profile');
  		}
  		else {
  			User.inDatabase = true;
  			console.log("ada")
  			response.redirect('/')
  		}
  	}

  	*data(request,response){
  		if(User.inDatabase){
  			var resQuery = yield User.where('linkedin_id',userData.id);
  			var data = resQuery[0];
  		}else{
  			if(!userData){
  				var data = {}
  			}else{
				var data = userData;
  			}
  		}
		data.logged = logged_Linkedin;
  		response.json(data);
  	}

  	*saveProfile(request,response){
  		const semua = yield request.all();
        response.send(semua);
  	}

  	*share(request,response){
  // 		console.log(request.get().test);
  // 		console.log("Share Done");
		// var tmpToken = yield request.session.get('access_token');
		// var url = 'https://api.linkedin.com/v1/people/~/shares?format=json&oauth2_access_token=' + tmpToken
		// console.log(url)
		// $.support.cors = true;
		// $.ajaxSettings.xhr = function() {
		//     return new XMLHttpRequest();
		// };
  // 		$.ajax({
	 //  		url:url,
	 //  		dataType:"json",
	 //  		data: {
		// 		  "comment": "Check out developer.linkedin.com! http://linkd.in/1FC2PyG",
		// 		  "visibility": {
		// 		    "code": "anyone"
		// 		  }
		// 		},
	 //  		async:true,
	 //  		cache:false,
	 //  		timeout:30000,
	 //  		headers:{"Content-Type": "application/json", "x-li-format": "json","Access-Control-Allow-Origin":"https"},
	 //  		success:function(e){
	 //  			console.log(e);
	 //  			response.send(e);
	 //  		},
	 //  		error:function(e,f,g){
	 //  			console.log(f);
	 //  			response.send(f);
	 //  		},
	 //  		type:'POST'
	 //  	});
  	}
  	*share2(request,response){
  // 		console.log(request.get().from);
  // 		console.log("Share2 Done");
		// var tmpToken = yield request.session.get('access_token');
		// var url = 'https://api.linkedin.com/v1/people/~/shares?format=json&oauth2_access_token=' + tmpToken
		// console.log(url)
		// response.send("done 2");
  	}
}

module.exports = AuthController
