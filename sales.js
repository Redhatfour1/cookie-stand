'use strict';
//created object constructor for cookie store, listed properties.
function CookieStore (location, minNumCust, maxNumCust, aveCookPerSale) {
  this.currentLoc = location;
  this.minNumCust = minNumCust;
  this.maxNumCust = maxNumCust;
  this.aveCookPerSale = aveCookPerSale;
};

var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];
var firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3);
var seaTac = new CookieStore('SeaTac', 3, 24, 1.2);
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3,7);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);

//get average # of customer and round it.
CookieStore.prototype.aveNumCust = function() {
  return this.Math.random() * (this.maxNumCust - this.minNumCust);
  console.log('ave num cust: ' + aveNumCust);
};
//get number of cookies per customer.
CookieStore.prototype.aveCookPerSale = function() {
  return this.aveNumCust * this.aveCookPerSale;
  console.log('ave cookies per customer: ' + aveCookPerSale);
};
var currentLoc = ['hours','First and Pike', 'SeaTac', 'Seattle Center', 'Capitol Hill', 'Alki'];
var tableEl = document.getElementById('cookie-table');
console.log('tableEl: ' + tableEl);

for (var index = 0; 0 < currentloc.length; index++) {
  var rowData = locations[index];
  console.log('rowData: ' + rowData);

  var rowEl = document.createElement('tr');
  console.log('rowEl: ' + rowEl);

  for (i = 0; i < rowData.length; i++) {}
}

var formEl = document.getElementById('salesForm');

formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();

  renderLocName(event.target.currentLoc.value);
  console.log(event.currentLoc.value);
}, false);

function renderLocName(locName) {
  var sectionEl = document.getElementById('cookie-table');
  var locNameEl = document.createElement('tr');
  locNameEl.textContent = locName;
  console.log('currentLoc ');
  tableEl.appendChild(locNameEl);
}

// tableEl is not yet created, but this form is ready for when the table is set to go!
