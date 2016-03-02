var express = require('express');
var router = express.Router();

/* GET user-profiles listing. */
router.get('/', function (req, res, next) {
    req.models.profile.find().exec(function (err, allProfiles) {
        if (err) return res.json({error: err}, 500);
        res.json(allProfiles);
    });
});

/* POST create new user-profile. */
router.post('/', function (req, res) {
    req.models.profile.create(req.body, function (err, createdProfile) {
        if (err) return res.json({error: err}, 500);
        res.json(createdProfile);
    });
});

/* GET specific user-profile with id. */
router.get('/:id', function (req, res) {
    req.models.profile.findOne({id: req.params.id}).exec(function (err, profile) {
        if (err) return res.json({error: err}, 500);
        res.json(profile);
    });
});
/* PUT update specific user-profile with id. */
router.put('/:id', function (req, res) {
    // id not updated
    delete req.body.id;

    req.models.profile.update({id: req.params.id}, req.body, function (err, updatedUser) {
        if (err) return res.json({error: err}, 500);
        res.json(updatedUser);
    });
});
/* DELETE specific user-profile. */
router.delete('/:id', function (req, res) {
    req.models.profile.destroy({id: req.params.id}, function (err) {
        if (err) return res.json({error: err}, 500);
        res.json({status: 'ok'});
    });
});

module.exports = router;