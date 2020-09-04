var express = require('express');
var router = express.Router();

/* GET 'shops-list' page. */
const shopslist = (req, res) => {
    res.render('shops-list', { 
        title: 'List of Shops',
        pageHeader: {
            title: 'Liste an Unverpackt-Läden',
        },
        shops: [{
            name: 'Laden Nummer 1',
            address: 'Hauptstraße 1, 12334 Potsdam',
            rating: 3,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            distance: '100m'
        }, {
            name: 'Laden Nummer 2',
            address: 'Marktplatz 5, 13666 Berlin',
            rating: 4,
            facilities: ['Food', 'Premium Wifi'],
            distance: '1km'
        }]
    });
}

/* GET 'shop-info' page. */
const shop = (req, res) => {
    res.render('shop-info', {
        title: 'Shop Infos',
        shop: {
            name: 'Laden Nummer 1',
            address: 'Hauptstraße 1, 12334 Potsdam',
            rating: 3,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            coords: {
                lat: 52.391176, 
                lng: 13.062142
            },
            openingHours: [{
                days: 'Montag - Freitag',
                opening: '9:00',
                closing: '18:00',
                closed: false
            }, {
                days: 'Samstag',
                opening: '9:00',
                closing: '16:00',
                closed: false
            }, {
                days: 'Sonntag',
                closed: true
            }],
            reviews: [{
                author: 'Person 1',
                rating: 2,
                timestamp: '3 September 2020',
                reviewText: 'Ein toller Laden'
            }, {
                author: 'Person 2',
                rating: 4,
                timestamp: '4 September 2020',
                reviewText: 'Freundliche Bedienung'
            }]
        }
    });
}

/* GET 'shop-review-form' page. */
const addReview = (req, res) => {
    res.render('shop-review-form', {
        title: 'Add Review',
        pageHeader: {
            title: 'Bewertungen Laden Nummer 1'
        }
    });
}

module.exports = {
    shopslist,
    shop,
    addReview
};