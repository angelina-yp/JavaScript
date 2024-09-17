class Person {
  constructor (first, last, age, gender, interests)
{
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;

}
greeting(){

  console.log("Hi! I'm" + this.name.first + ".");
}



}