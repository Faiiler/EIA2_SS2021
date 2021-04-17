"use strict";
const subject = ["Haylee", "Julia", "Rence", "Kevin", "Sören", "Lizzy"];
const prediacte = ["haut", "umarmt", "liebt", "küsst", "weint wegen", "lacht wegen"];
const object = ["Geld", "deren Eltern", "Hunde", "Katzen", "Schnabeltieren", "Wasser"];
//console.log(subject, prediacte, object);
for (let i = 6; i >= 1; i--) {
    //console.log(i);
    console.log(getVerse(subject, prediacte, object));
}
function getVerse(_subject, _predicate, _object) {
    let vers = "";
    let randomS = Math.floor(Math.random() * _subject.length);
    let splicedS = _subject.splice(randomS, 1)[0];
    vers = vers + " " + splicedS;
    let randomP = Math.floor(Math.random() * _predicate.length);
    let splicedP = _predicate.splice(randomP, 1)[0];
    vers = vers + " " + splicedP;
    let randomO = Math.floor(Math.random() * _object.length);
    let splicedO = _object.splice(randomO, 1)[0];
    vers = vers + " " + splicedO;
    return vers;
}
//# sourceMappingURL=script.js.map