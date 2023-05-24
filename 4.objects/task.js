function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

new Student("Ivan", "мужской", 17);
new Student("Fedor", "мужской", 20);
new Student("Oleg", "мужской", 16);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  if (!this.marks) {
    return 0;
  }
  return this.marks.reduce(
    (acc, mark, item, arr) => acc + mark / arr.length,
    0
  );
};

Student.prototype.exclude = function (reason) {
  delete this.marks, this.subject;
  this.excluded = reason;
};
