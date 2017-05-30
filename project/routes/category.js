/**
 * Created by User on 5/30/2017.
 */
const express = require('express');
const uuid = require('uuid/v4');
const router = express.Router();

const Category = require('../models/Category');
const Item = require('../models/Item');

router.get('/', function(req, res, next) {
    var categories = [];
    for (var i = 0; i < 6; i++) {
        var items = [];
        for (var k = 0; k < 20; k++) {
            items.push(new Item(uuid(), "Item №" + (k + 1) + " inside category №" + (i + 1)));
        }

        categories.push(new Category(uuid(), "Category" + (i + 1), items));
    }

    res.json(categories);
});

router.get('/:categoryName', function(req, res, next) {
    var categories = [];
    for (var i = 0; i < 5; i++) {
        var items = [];
        for (var k = 0; k < 20; k++) {
            items.push(new Item(uuid(), "Item №" + (k + 1) + " inside category №" + (i + 1)));
        }

        categories.push(new Category(uuid(), "Category" + (i + 1), items));
    }

    res.json(categories);
});

module.exports = router;