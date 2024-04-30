let isLogin = () => {
  // do we hava admin cookie.
  if ((document.cookie = "username ==admin")) return true;
  return false;
};
export default isLogin;
