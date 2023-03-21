var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// New parent class name - students
var Students = /** @class */ (function () {
    // Constructor for the class such that all students are females
    function Students(studName, studAge, studNationality) {
        this.name = studName;
        this.age = studAge;
        this.gender = "female";
        this.nationality = studNationality;
    }
    // Method that logs in the console the nationality of the students.
    Students.prototype.getNationality = function () {
        return "nationality of the student -  ".concat(this.name, ", who is of age ").concat(this.age, " and gender ").concat(this.gender, " is ").concat(this.nationality, ";");
    };
    return Students;
}());
// child class named - Undergrad
var UnderGraduate = /** @class */ (function (_super) {
    __extends(UnderGraduate, _super);
    function UnderGraduate(studName, studAge, studGender, studNationality, studBatch, studGpa) {
        var _this = _super.call(this, studName, studAge, studNationality) || this;
        _this.gender = studGender;
        _this.batch = studBatch;
        _this.gpa = studGpa;
        return _this;
    }
    UnderGraduate.prototype.getNationality = function () {
        return "nationality of the student -  ".concat(this.name, ", who is of age ").concat(this.age, " and gender ").concat(this.gender, " of batch ").concat(this.batch, " and gpa ").concat(this.gpa, " is ").concat(this.nationality, ";");
    };
    return UnderGraduate;
}(Students));
var student1 = new Students("Sunny Kalwani", 28, "Indian");
console.log(student1.getNationality());
var under1 = new UnderGraduate("Sunny Kalwani", 28, "male", "indian", 7, 3.5);
console.log(under1.getNationality());
