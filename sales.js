var times = [' ',' ', '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];
var currentLoc = [];
var totalRow = [];
//created object constructor for cookie store, listed properties.
function CookieStore (location, minNumCustPerHr, maxNumCustPerHr, aveCookPerSale) {
  this.currentLoc = location;
  this.minNumCustPerHr = minNumCustPerHr;
  this.maxNumCustPerHr = maxNumCustPerHr;
  this.aveNumCookPerCust = aveCookPerCust;
  this.cookSoldWithinTheHour =[];
  this.totalNumCookiesSoldToday = 0;
};

var firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3);
var seaTac = new CookieStore('SeaTac', 3, 24, 1.2);
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3,7);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);

//get average # of customer and round it.
CookieStore.prototype.aveNumCustPerHr = function() {
  for (var index = 0; index < times.length; index++) {
    return Math.random() * (this.maxNumCustPerHr - this.minNumCustPerHr) + this.minNumCustPerHr;
    console.log(' the average number of customer: ' + this.aveNumCustPerHr);
    this.aveNumCookPerCust.push(aveNumCookPerCust);

  };
};
CookieStore.prototype.aveCookPerSale = function() {
  for (var index = 0; index < times.length; index++) {
    return this.aveNumCustPerHr * this.numCookPerSale;
    console.log('the number of cookies sold within the hour: ' + this.cookSoldWithinHour);
    this.cookWithinTheHour.push(cookWithinTheHour);
    this.totalNumCookiesSoldToday += cookWithinTheHour;
  };
};

var rendertableHeader = function {
  var headerTitels = ['Locations!', 'Daily Total'];
  var locationInfo = document.getElementById('locationinfo');
  var trEl = document.createElement('tr');
  for (var index = 0; index < headerTitles.length; 1ndex++) {
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
  }


for ( var index = 0; index < hours.length; index++)  {
  var thEl = document.createElement('th');
  thEl = textContent = hours[index];
  }
}
var currentLoc = ['hours','First and Pike', 'SeaTac', 'Seattle Center', 'Capitol Hill', 'Alki'];
var tableEl = document.getElementById('cookie-table');
console.log('tableEl: ' + tableEl);

for (var index = 0; index < currentLoc.length; index++) {
  var rowData = currentLoc[index];
  console.log('rowData: ' + rowData);
}
  var rowEl = document.createElement('tr');
  console.log('rowEl: ' + rowEl);

      function renderLocName(locName) {
      var sectionEl = document.getElementById('cookie-table');
      var locNameEl = document.createElement('tr');
      locNameEl.textContent = locName;
      console.log('currentLoc ');
      tableEl.appendChild(locNameEl);
}
currentLoc = ['hours','First and Pike', 'SeaTac', 'Seattle Center', 'Capitol Hill', 'Alki'];
var formEl = document.getElementById('salesForm');

formEl.addEventListener('submit', functionElementSubmit, false);

function formElementSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  var locName = event.target.locName.value;
  console.log('Name of location: ' + locName);
  var minNumCust = event.target.minNumCust.value;
  console.log('Minimum number of cookies: ' + minNumCust);
  var maxNumCust = event.target.maxNumCust.value;
  console.log('Maximum number of cookies: ' + maxNumCust);
  var aveCookPerSale = event.target.aveCookPerSale.value;
  console.log('Average number of cookies: ' + aveCookPerSale);
  renderLocName(event.target.currentLoc.value);
  console.log(event.currentLoc.value);

  //creat new store to stage in array and add data to table
  var newLoc = new Location(locName, minNumCust, maxNumCust, aveCookPerSale);
  openNewloc.push(newloc);

  for (var i = 0; i < currentLoc.length; i++) {
    console.console.log(currentLoc[i], toString(i)
}

newLoc.aveCookPerSale();
renderTableRow(newloc);
}, false)

rendertableHeader();
for (var i = 0; i < currentLoc.length; i++) {
  currentLoc[i].aveCookPerSale();
  renderTableRow(currentLoc[i]);
}
