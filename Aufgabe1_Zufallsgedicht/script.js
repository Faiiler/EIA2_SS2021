var subject = ["Haylee", "Julia", "Rence", "Kevin", "Sören", "Lizzy"];
var prediacte = ["haut", "umarmt", "liebt", "küsst", "weint wegen", "lacht wegen"];
var object = ["Geld", "deren Eltern", "Hunde", "Katzen", "Schnabeltiere", "Wasser"];
//console.log(subject, prediacte, object);
for (var i = 6; i >= 1; i--) {
    //console.log(i);
    console.log(getVerse(subject, prediacte, object));
}
function getVerse(_subject, _predicate, _object) {
    var vers = "";
    var randomS = Math.floor(Math.random() * _subject.length);
    var splicedS = _subject.splice(randomS, 1)[0];
    vers = vers + " " + splicedS;
    var randomP = Math.floor(Math.random() * _predicate.length);
    var splicedP = _predicate.splice(randomP, 1)[0];
    vers = vers + " " + splicedP;
    var randomO = Math.floor(Math.random() * _object.length);
    var splicedO = _object.splice(randomO, 1)[0];
    vers = vers + " " + splicedO;
    return vers;
}
//# sourceMappingURL=script.js.map