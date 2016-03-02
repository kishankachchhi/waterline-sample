var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/country/', function (req, res, next) {
    req.models.country.find().exec(function (err, allUsers) {
        if (err) return res.json({error: err}, 500);
        res.json(allUsers);
    });
});

/* POST create new user. */
router.post('/country/', function (req, res) {
    req.models.country.create(req.body, function (err, createdUser) {
        if (err) return res.json({error: err}, 500);
        res.json(createdUser);
    });
});

/* GET specific user with id. */
router.get('/country/:id', function (req, res) {
    req.models.country.findOne({id: req.params.id}).exec(function (err, user) {
        if (err) return res.json({error: err}, 500);
        res.json(user);
    });
});
/* PUT update specific user with id. */
router.put('/country/:id', function (req, res) {
    // id not updated
    delete req.body.id;

    req.models.country.update({id: req.params.id}, req.body, function (err, updatedUser) {
        if (err) return res.json({error: err}, 500);
        res.json(updatedUser);
    });
});
/* DELETE specific user. */
router.delete('/country/:id', function (req, res) {
    req.models.country.destroy({id: req.params.id}, function (err) {
        if (err) return res.json({error: err}, 500);
        res.json({status: 'ok'});
    });
});

module.exports = router;