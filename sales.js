'use strict';
//created object constructor for cookie store, listed properties
//function CookieStore (location, minimum customers, maximum customers, customer cookie average, total cookies daily) {
  //this.location = location;
  //this.minimum customers = minimum customers;
  //this.maximum customers = maximum customers;
  //this.customer cookie average = customer cookie average;
  //this.total cookies daily = total cookies daily;
//}
//var tableData = [['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'], ['minimun customers', 'maximum customers', 'average number per customer', 'daily cookies']];
//var tableEl= document.getElementById('cookie-table');
//for(var i = 0; i < tableData.length; i++){
//rowData = tableData[i];
//for(var j = 0; j < rowData.length; j++) {
//var content = rowData = rowData[j];
//}
//}

//Array of times on global scale
var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];

//location literal
var firstAndPike = {
  minNumCustPerHr: 23,
  maxNumCustperHr: 65,
  aveNumCookPerCust: 6.3,
  dailyCookies: [],
  custPerHr: function() {
//Getting difference of max and min, finding random number
    return Math.random() * (this.maxNumCustperHr - this.minNumCustPerHr);
  },
//created a methhod called cookies per hour to get the product of the random # of customers per hour and average # cookies per customer to evaluate 15 times
  cookiesPerHr: function() {
    for(var index = 0; index < hours.length; index++) {
      this.dailyCookies.push(Math.round(this.custPerHr() * this.aveNumCookPerCust));
    }
//don't put return in a loop because it will stop it
    return this.dailyCookies;
  },
//This function called show on page is what will populate and where
  showOnPage: function() {
    //console.log(firstAndPike.cookiesPerHr());
    var ul = document.getElementById('firstAndPike');
//this loop will put content will put the daily # of cookies in a list that will populate under list
    for(var index = 0; index < 15; index++) {
      var li = document.createElement('li');
      li.textContent = hours[index] + ' ' + this.dailyCookies[index] + ' cookies';
      ul.appendChild(li);
    }
  }
};
//calling cookies function and show function
firstAndPike.cookiesPerHr();
firstAndPike.showOnPage();

var seaTacAirport = {
  minNumCustPerHr: 3,
  maxNumCustperHr: 24,
  aveNumCookPerCust: 1.2,
  dailyCookies: [],
  custPerHr: function() {
//Getting difference of max and min, finding random number
    return Math.random() * (this.maxNumCustperHr - this.minNumCustPerHr);
  },
  //created a methhod called cookies per hour to get the product of the random # of customers per hour and average # cookies per customer to evaluate 15 times
  cookiesPerHr: function() {
    for(var index = 0; index < hours.length; index++) {
      this.dailyCookies.push(Math.round(this.custPerHr() * this.aveNumCookPerCust));
    }
//don't put return in a loop because it will stop it
    return this.dailyCookies;
  },
//This function called show on page is what will populate and where
  showOnPage: function() {
//console.log(firstAndPike.cookiesPerHr());
    var ul = document.getElementById('SeaTac');
//this loop will put content will put the daily # of cookies in a list that will populate under list
    for(var index = 0; index < 15; index++) {
      var li = document.createElement('li');
//li.textContent = this.hours[i] + ' ' + "First and Pike";
      li.textContent = hours[index] + ' ' + this.dailyCookies[index] + ' cookies';
      ul.appendChild(li);
    }
  }
};
//calling cookies function and show function
seaTacAirport.cookiesPerHr();
seaTacAirport.showOnPage();

var seattleCenter = {
  minNumCustPerHr: 11,
  maxNumCustperHr: 38,
  aveNumCookPerCust: 3.7,
  dailyCookies: [],
  custPerHr: function() {
//Getting difference of max and min, finding random number
    return Math.random() * (this.maxNumCustperHr - this.minNumCustPerHr);
  },
//created a methhod called cookies per hour to get the product of the random # of customers per hour and average # cookies per customer to evaluate 15 times
  cookiesPerHr: function() {
    for(var index = 0; index < hours.length; index++) {
      this.dailyCookies.push(Math.round(this.custPerHr() * this.aveNumCookPerCust));
    }
//don't put return in a loop because it will stop it
    return this.dailyCookies;
  },
//This function called show on page is what will populate and where
  showOnPage: function() {
//console.log(firstAndPike.cookiesPerHr());
    var ul = document.getElementById('seattleCenter');
//this loop will put content will put the daily # of cookies in a list that will populate under list
    for(var index = 0; index < 15; index++) {
      var li = document.createElement('li');
//li.textContent = this.hours[i] + ' ' + "First and Pike";
      li.textContent = hours[index] + ' ' + this.dailyCookies[index] + ' cookies';
      ul.appendChild(li);
    }
  }
};
//calling cookies function and show function
seattleCenter.cookiesPerHr();
seattleCenter.showOnPage();

var capitolHill = {
  minNumCustPerHr: 20,
  maxNumCustperHr: 38,
  aveNumCookPerCust: 2.3,
  dailyCookies: [],
  custPerHr: function() {
  //Getting difference of max and min, finding random number
    return Math.random() * (this.maxNumCustperHr - this.minNumCustPerHr);
  },
  //created a methhod called cookies per hour to get the product of the random # of customers per hour and average # cookies per customer to evaluate 15 times
  cookiesPerHr: function() {
    for(var index = 0; index < hours.length; index++) {
      this.dailyCookies.push(Math.round(this.custPerHr() * this.aveNumCookPerCust));
    }
//don't put return in a loop because it will stop it
    return this.dailyCookies;
  },
//This function called show on page is what will populate and where
  showOnPage: function() {
//console.log(firstAndPike.cookiesPerHr());
    var ul = document.getElementById('capitolHill');
//this loop will put content will put the daily # of cookies in a list that will populate under list
    for(var index = 0; index < 15; index++) {
      var li = document.createElement('li');
  //li.textContent = this.hours[i] + ' ' + "First and Pike";
      li.textContent = hours[index] + ' ' + this.dailyCookies[index] + ' cookies';
      ul.appendChild(li);
    }
  }
};
//calling cookies function and show function
capitolHill.cookiesPerHr();
capitolHill.showOnPage();

var alki = {
  minNumCustPerHr: 2,
  maxNumCustperHr: 16,
  aveNumCookPerCust: 4.6,
  dailyCookies: [],
  custPerHr: function() {
//Getting difference of max and min, finding random number
    return Math.random() * (this.maxNumCustperHr - this.minNumCustPerHr);
  },
//created a methhod called cookies per hour to get the product of the random # of customers per hour and average # cookies per customer to evaluate 15 times
  cookiesPerHr: function() {
    for(var index = 0; index < hours.length; index++) {
      this.dailyCookies.push(Math.round(this.custPerHr() * this.aveNumCookPerCust));
    }
//don't put return in a loop because it will stop it
    return this.dailyCookies;
  },
//This function called show on page is what will populate and where
  showOnPage: function() {
//console.log(firstAndPike.cookiesPerHr());
    var ul = document.getElementById('alki');
//this loop will put content will put the daily # of cookies in a list that will populate under list
    for(var index = 0; index < 15; index++) {
      var li = document.createElement('li');
//li.textContent = this.hours[i] + ' ' + "First and Pike";
      li.textContent = hours[index] + ' ' + this.dailyCookies[index] + ' cookies';
      ul.appendChild(li);
    }
  }
};
//calling cookies function and show function
alki.cookiesPerHr();
alki.showOnPage();
