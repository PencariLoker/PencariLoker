'use strict'
var Linkedin = require('node-linkedin')('75nb5nsun5gsp3', 'OKFiE0UtZNFHfk2p','http://localhost:3000/authentication');
class AuthController {
	* authentication(request, response) {
		Linkedin.auth.authorize(response, ['r_basicprofile','r_emailaddress','w_share']);
	}
	* accessToken(request, response) {
		var tmp = request.get();
		var cs = Linkedin.auth.getAccessToken(response, tmp.code, tmp.state, function(err, results) {
	        if ( err )
	            response.send(err,500);

	        var linkedin = Linkedin.init(results.access_token, {
			    timeout: 10000
			});
			linkedin.people.me(function(err, $in) {
	        	response.json($in);
			});
	    });
	}
}

module.exports = AuthController