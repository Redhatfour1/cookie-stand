'use strict';

var firstAndPike = {
  minNumCustPerHr: 23,
  maxNumCustperHr: 65,
  aveNumCookPerCust: 6.3,
  dailyCookies: [],
  custPerHr: function() {
    return Math.random() * (this.maxNumCustperHr - this.minNumCustPerHr);
  },
  cookiesPerHr: function() {
    for(var index = 0; index < 15; index++) {
      this.dailyCookies.push(Math.floor(this.custPerHr() * this.aveNumCookPerCust));
    }
    return this.dailyCookies;
    console.log(firstAndPike.cookiesPerHr());
    var listElement = document.createElement('li');
    listElement.setAttribute('class', 'cookies-per-hr-list');
    listElement.textContent = firstAndPike[index]
      + ' - index';
    cookiesPerHrList.appendChild(listElement);
  }
};

var seaTacAirport = {
  minNumCustPerHr: 3,
  maxNumCustperHr: 24,
  aveNumCookPerCust: 1.2,
  dailyCookies: [],
  custPerHr: function() {
    return Math.random() * (this.maxNumCustperHr - this.minNumCustPerHr);
  },
  cookiesPerHr: function() {
    for(var index = 0; index < 15; index++) {
      this.dailyCookies.push(Math.floor(this.custPerHr() * this.aveNumCookPerCust));
    }
    return this.dailyCookies;
    console.log(firstAndPike.cookiesPerHr());
    var listElement = document.createElement('li');
    listElement.setAttribute('class', 'cookies-per-hr-list');
    listElement.textContent = firstAndPike[index]
    + ' - index';
    cookiesPerHrList.appendChild(listElement);
  }
};

var seattleCenter = {
  minNumCustPerHr: 11,
  maxNumCustperHr: 38,
  aveNumCookPerCust: 3.7,
  dailyCookies: [],
  custPerHr: function() {
    return Math.random() * (this.maxNumCustperHr - this.minNumCustPerHr);
  },
  cookiesPerHr: function() {
    for(var index = 0; index < 15; index++) {
      this.dailyCookies.push(Math.floor(this.custPerHr() * this.aveNumCookPerCust));
    }
    return this.dailyCookies;
    console.log(firstAndPike.cookiesPerHr());
    var listElement = document.createElement('li');
    listElement.setAttribute('class', 'cookies-per-hr-list');
    listElement.textContent = firstAndPike[index]
    + ' - index';
    cookiesPerHrList.appendChild(listElement);
  }
};

var capitolHill = {
  minNumCustPerHr: 20,
  maxNumCustperHr: 38,
  aveNumCookPerCust: 2.3,
  dailyCookies: [],
  custPerHr: function() {
    return Math.random() * (this.maxNumCustperHr - this.minNumCustPerHr);
  },
  cookiesPerHr: function() {
    for(var index = 0; index < 15; index++) {
      this.dailyCookies.push(Math.floor(this.custPerHr() * this.aveNumCookPerCust));
    }
    return this.dailyCookies;
    console.log(firstAndPike.cookiesPerHr());
    var listElement = document.createElement('li');
    listElement.setAttribute('class', 'cookies-per-hr-list');
    listElement.textContent = firstAndPike[index]
    + ' - index';
    cookiesPerHrList.appendChild(listElement);
  }
};

var Alki = {
  minNumCustPerHr: 2,
  maxNumCustperHr: 16,
  aveNumCookPerCust: 4.6,
  dailyCookies: [],
  custPerHr: function() {
    return Math.random() * (this.maxNumCustperHr - this.minNumCustPerHr);
  },
  cookiesPerHr: function() {
    for(var index = 0; index < 15; index++) {
      this.dailyCookies.push(Math.floor(this.custPerHr() * this.aveNumCookPerCust));
    }
    return this.dailyCookies;
    console.log(firstAndPike.cookiesPerHr());
    var listElement = document.createElement('li');
    listElement.setAttribute('class', 'cookies-per-hr-list');
    listElement.textContent = firstAndPike[index]
    + ' - index';
    cookiesPerHrList.appendChild(listElement);
  }
};
