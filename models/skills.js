const skills = [
    { id: 125223, skill: 'HTML5', done: true },
    { id: 127904, skill: 'Node JS', done: false },
    { id: 139608, skill: 'Javascript', done: false },
    { id: 125227, skill: 'CSS3', done: true },
    { id: 127908, skill: 'Node Express', done: false },
    { id: 139609, skill: 'JQuery', done: false }
];

function getAll() {
    return skills;
}

function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
}
function create(newSkill) {
    // Add the id
    newskill.id = skills.length;
    newskill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skills.push(newskill);
}

function deleteSkill(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

module.exports = {
    getAll: getAll,
    getOne: getOne,
    create:create,
    deleteSkill: deleteSkill,
    skills:skills
};
