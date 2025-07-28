// We are given array of marks of students. Filter out the marks of students that scored 90+.

let marks = [90,59,25,87,98,97,96,39]

let newMarks = marks.filter((val) => {
    return val >= 90;
})
console.log(newMarks);