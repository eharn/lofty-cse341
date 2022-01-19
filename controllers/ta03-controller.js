const objects = require('../models/ta03-model');

exports.getAllData = (req, res, next) => {
objects.fetchAll(test => {
    res.render('pages/ta03', {
        title: 'Team Activity 03',
        path: '/ta03', 
        activeTAO3: true,
        contentCSS: true,
        objects: test
    });
});

}