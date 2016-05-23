'use strict'
var Linkedin = require('node-linkedin')('75nb5nsun5gsp3', 'OKFiE0UtZNFHfk2p','http://localhost:3000/authentication');
var logged_Linkedin = false;
var userData;
class AuthController {
	static isAuthenticated(){
		return logged_Linkedin;
	}
	static data(variable_name){
		if(!logged_Linkedin)return "";
		if(variable_name === 'name')
			return userData.firstName + " " + userData.lastName;
		if(variable_name === 'pic')
			return userData.pictureUrl;
	}
	* authentication(request, response) {
		Linkedin.auth.authorize(response, ['r_basicprofile','r_emailaddress','w_share']);
	}
	* accessToken(request, response) {
		var tmp = request.get();
		var prom = function(){
			return new Promise(function(resolve,reject){
				Linkedin.auth.getAccessToken(response, tmp.code, tmp.state, function(err, results) {
			        if ( err )
			        	reject(err);
			        resolve(results);
			    });
			});
		}

		const test2 = yield prom();
		yield request.session.put('access_token',test2.access_token);
		
		var linkedin = Linkedin.init(test2.access_token, {
		    timeout: 10000
		});
		linkedin.people.me(function(err, $in) {
			userData = $in;
        	logged_Linkedin = true;
        	response.redirect('/');
		});
	}
	* logout(request,response){
		logged_Linkedin = false;
        response.redirect('/');
	}
}

module.exports = AuthController