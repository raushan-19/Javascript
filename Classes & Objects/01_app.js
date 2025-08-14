const student = {
    fullName : "Raushan Tiwari",
    marks : 94.,
    printMarks : function () {
        console.log("marks = ",this.marks); // using "this" to so that compiler can understand that i am talking about only "student" object
    },
};