console.log(this);

class Person {
    constructor (id, name) {//id - is a local variable
        this.id = id; //this.id - is a class field
        this.name = name;
        console.log(this);
        //this.move(x, y)
    }

    get Id() {
        return this.id;
      }
    
    set Id(value) {
        if (value < 10000 || value > 99999) {
          alert("id should be 5 digits.");
          return;
        }
        this.id = value;
    }

    show () { // class methods
        return this.name + " id is " + this.Id;
    }

    func1(){
        let arr = [1,2,3];
        arr.map(function(val){
            console.log(this); //this - undefined!!!
            return val+2;
        });
    }

    func2=()=>{
        let arr = [1,2,3];
        arr.map(val => {
            console.log(this); //this - defined using arrow function!!!
            val+2;
        });
    }
}

p1 = new Person(12345,"ana");
alert(p1.show());
p1.Id=77777
alert(p1.show());
//p1.Id(88888) //ERROR!
//alert(p1.show());
p1.func1();
p1.func2();
alert('this');

// *** Inheritance ***
class Teacher extends Person {
    constructor (id,name,title) {
        super(id, name) // call the parent constructor
        this.title = title;
    }

    show () { // override the parent show method
        return this.title + " " + this.name + " id is " + this.Id;
    }

    show1 () { // use the parent method
        return this.title + " " + super.show();
    } 

    static Year=2020

    static show_school(){
        alert('Ruppin:)');
    }
}

t1 = new Teacher(23456,"Dizza","dr");
alert(t1.show());
alert(t1.show1());
Teacher.show_school();
alert(Teacher.Year);

class Student extends Person {
    constructor (id,name,year) {
        super(id, name) // call the parent constructor
        this.year = year;
    }
    static sort(sArr){ // define a static method
        return sArr.sort(compareStudent);
    }

}

// this method is used to sort the students by year
function  compareStudent(s1,s2) {
    if (s1.year < s2.year)
      return -1;
    if (s1.year > s2.year)
      return 1;
    return 0;
  }

studentArr = [
    new Student(11111,"david",1),
    new Student(22222,"rina",3),
    new Student(33333,"rona",2)
]

alert(studentArr[1].show());
sorted = Student.sort(studentArr);
alert(sorted[1].show());