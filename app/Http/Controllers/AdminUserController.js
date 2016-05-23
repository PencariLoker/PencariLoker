'use strict'
class AdminUserController {
  * index (request, response) {
  	var hash = "lorem";
    const view = yield response.view('backend/Users/list.html', {title: hash})
    response.send(view)
  }
}
module.exports = AdminUserController
