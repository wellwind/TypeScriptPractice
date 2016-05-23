enum Gender{
    Male = 0,
    Female = 1
};

console.log(Gender);
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);

var gender: Gender = Gender.Male;
if(gender === Gender.Male){
    console.log("Male");
} else if(gender === Gender.Female){
    console.log("Female");
}