import store from '../store'

// redirect to: if the user is not yet logged in
const loginPage = 'main'

// redirect to: if the user is already logged in
const defaultPage = 'emp-home'

/**
* need to create another function
* so the event loop can update the router state,
* before we check the auth user.
*/
function _redirect(auth_user, to, from, next) {
  if(!auth_user) {
    console.log('redirect to login..');
    if(to.name != loginPage)
      next({ name: loginPage });
    else
      next();
  }
  else {
    console.log('proceed to next route..');
    if(to.name == loginPage)
      next({ name: defaultPage });
    else
      next();
  }
}

export const auth = function (from, to, next) {
  /**
  * ON window.location.reload() :
  *   to.name IS null
  *   meta.requiresAuth IS undefined
  */
  if(to.matched.some(record => record.meta.requiresAuth) || to.name == null) {
    let user = store.getters['user/currentUser']
    _redirect(user, from, to, next)
  }
  else {
    next()
  }
}
