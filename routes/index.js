module.exports = (app) => {
  require("./login.js")(app);
  require("./yelp.js")(app);
}
