const yelp = require("yelp-fusion");
const apiKey= 'g9EeN1YvpMFGmbPjwKqrAVIVoCCCCK0g-uyPyF9nJigZOIKQpJYJa2S3FOUhlJ9Y6cnJszqMSRFjwrobfelVeALnWAHR1uBlC2L9fVkWZh0-sfqrvRZYjecDMWGRW3Yx';
const client = yelp.client(apiKey);

module.exports = (app) => {
  app.post("/api/hotelSearch",(req,res)=>{
    client.search({
      term: "hotel",
      location: req.body.destination
    }).then((data)=>{
      res.json(data.jsonBody.businesses);
    });
  });
};
