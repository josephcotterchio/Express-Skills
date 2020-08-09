const skillsDb = require('../models/skills');

function index(req, res, next) {
    res.render('./skills/index', {
        skills: skillsDb.getAll()
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: skillsDb.getOne(req.params.id)
    });
}

function create(req, res) {
    skillsDb.create(req.body);
    res.redirect("/skills");
}

function newskill(req, res) {
    res.render("skills/newskill.ejs")
}

module.exports ={
    index: index,
    show: show,
    create: create,
    newskill: newskill
}