'use strict'

const Factory = use('Factory')

const User = use('App/Model/Users');
const Hash = use('Hash');

class InsertDefaultAdminSeeder {

  * run () {
    const user = new User;
    user.name = "Administrator";
    user.email = "admin@admin.com";
    user.password = yield Hash.make('admin');
    user.admin = 1;
    user.photo_url = "http://soccerlogo.net/uploads/posts/2014-09/1410464738_fc-manchester-united.png";
    yield user.save();
    return;
  }

}

module.exports = InsertDefaultAdminSeeder
