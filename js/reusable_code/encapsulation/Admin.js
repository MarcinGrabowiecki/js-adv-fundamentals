/*
 * new Admin(params) class:
 * Public properties:
 * + uuid (generated using private static property NEXT_UUID)
 * Private properties:
 * - login
 * - password
 * Privileged methods:
 * + getLogin()
 * + setLogin(value)
 * + getEncodedPassword()
 * Private methods:
 * - _encodePassword(passwd) (encoded using private static property ENCODING_STR)
 * Private static properties:
 * - NEXT_UUID = 0
 * - ENCODING_KEY = "imba!"
 * Private static methods:
 * - _generateUuid() (generates next uniq UUID)
 * */
function adminTest(Admin) {
  var login = "Bob";
  var passwd = "#secret!";

  var admin = new Admin({
    login: login,
    password: passwd
  });

  assertEqual(admin.uuid, 0);
  assertEqual(admin.getLogin(), login);
  login = "kate";
  admin.setLogin(login);
  assertEqual(admin.getLogin(), login);
  assertEqual(admin.getEncodedPassword(), passwd + "imba!");
}

//adminTest(MyApp.Models.Admin);