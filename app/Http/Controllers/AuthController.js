'use strict'
var nodeLinkedIn = require('node-linkedin')('75nb5nsun5gsp3', 'OKFiE0UtZNFHfk2p','http://localhost:3000/authentication');
var linkedin;
var logged_in = false;

class AuthController {
	* authentication(request, response) {
		nodeLinkedIn.auth.authorize(response, ['r_basicprofile','r_emailaddress','w_share']);
	}
	* accessToken(req, res) {
		let getUser = this.getUserData(req, res);
		nodeLinkedIn.auth.getAccessToken(res, req.get().code, req.get().state, function(err, results) {
	        if ( err )
	            return console.error(err);
	        console.log(results);
	        linkedin = nodeLinkedIn.init(results.access_token,{
				 timeout: 60000
			});
	        return getUser.next();
	    });
	}
	* getUserData(request, response) {
		linkedin.people.me(['id', 'first-name', 'last-name','headline','location:(name)','industry','num-connections'
			,'summary','specialties','positions:(id,title,summary,start-date,end-date,is-current,company:(id,name,type,industry))'
			,'picture-url','picture-urls::(original)','site-standard-profile-request','api-standard-profile-request','public-profile-url'
			], function(err, $in) {
		    console.log($in);
		    logged_in = true;
		    return response.redirect('/');
		});
	}
	* tester() {
		console.log("asd");
	}
}

module.exports = AuthController