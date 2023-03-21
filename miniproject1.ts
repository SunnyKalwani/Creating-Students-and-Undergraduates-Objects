
// New parent class name - students
class Students{
    name:string;
    age:number;
    gender:string;
    nationality:string;

    // Constructor for the class such that all students are females
    constructor(studName, studAge, studNationality){
        this.name = studName;
        this.age = studAge;
        this.gender = "female";
        this.nationality = studNationality;
    }
    // Method that logs in the console the nationality of the students.
    getNationality(){
        return `nationality of the student -  ${this.name}, who is of age ${this.age} and gender ${this.gender} is ${this.nationality};`
    }
}

// Interface named - Iundergrad
interface Iundergrad{
    name: string;
    age: number;
    nationality: string;
    batch: number;
    gender: string;
    gpa: number;
}

// child class named - Undergrad
class UnderGraduate extends Students implements Iundergrad{
    batch;
    gpa;

    constructor(studName, studAge, studGender, studNationality, studBatch, studGpa){
        super(studName, studAge, studNationality); //Student Class constructor
        this.gender = studGender;
        this.batch = studBatch;
        this.gpa = studGpa;
    }
    getNationality(): string {
        return `nationality of the student -  ${this.name}, who is of age ${this.age} and gender ${this.gender} of batch ${this.batch} and gpa ${this.gpa} is ${this.nationality};`

    }
}





// Instance to test if parent class works
let student1 = new Students("Sunny Kalwani", 28, "Indian");
console.log(student1.getNationality());

// Instance to test if child class works
let under1 = new UnderGraduate("Sunny Kalwani", 28, "male", "indian", 7, 3.5);
console.log(under1.getNationality());