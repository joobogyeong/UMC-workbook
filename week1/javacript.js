class student{
    constructor(name, school){
        this._name = name;
        this._school = school
    }
    get name(){
        return this._name
    }
    set name(setName){
        this._name=setName
    }
    get school(){
        return this._school
    }
    set school(setSchool){
        this._school=setSchool
    }
    introduce(){
        console.log(this._name, this._school)
    }
}

let jbg = new student("주보경", "hufs");
console.log(jbg.name);
console.log(jbg.school);
jbg.name='lgh';
jbg.school="아주대";
console.log(jbg.name);
console.log(jbg.school);