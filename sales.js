'use strict';
//created object constructor for cookie store, listed properties.
function CookieStore (location, minNumCust, maxNumCust, aveCookPerSale) {
  this.loc = location;
  this.minNumCust = minNumCust;
  this.maxNumCust = maxNumCust;
  this.aveNumCookPerSale = aveNumCookPerSale;
  //get average # of customer and round it.
  this.aveNumCust = function() {
    return this.Math.random() * (this.maxNumCust - this.minNumCust);
    //get number of cookies per customer.
    this.numOfCookPerCust = function() {
      return this.aveNumCust * this.aveCookPerSale;
      //need to gigure out how to loop this 15 times.
    };
  };
}
var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];
var firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3);
var seaTac = new CookieStore('SeaTac', 3, 24, 1.2);
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3,7);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);

var details = firstAndPike.location + ' cookies: ' + hours[index];
details += firstAndPike.numOfCookPerCust();
var elCookieStore = document.getElementsById(CookieStore1);
elCookieStore.textContent = details;
