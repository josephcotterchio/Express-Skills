const skillsDb = require('../models/skills');
const router = require('../routes/skills');
const skills = require('../models/skills');
const skillsExports = require('../models/skills');

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

function add(req, res) {
    let skillnew = {
        id: Date.now() % 1000000,
        done: true,
        skill: req.body.add
    }
    skillsExports.skills.push(skillnew)
    res.redirect("/skills")
}

module.exports ={
    index: index,
    show: show,
    create: create,
    newskill: newskill,
    add:add
}