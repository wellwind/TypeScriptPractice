var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
;
console.log(Gender);
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);
var gender = Gender.Male;
if (gender === Gender.Male) {
    console.log("Male");
}
else if (gender === Gender.Female) {
    console.log("Female");
}
//# sourceMappingURL=Enum.js.map