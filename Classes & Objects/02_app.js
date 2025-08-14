const employee = {
    caltax(){
        console.log(`tax rate is 10%`);
    }
};

const karanArjun = {
    salary : 50000,
};

const karanArjun2 = {
    salary : 50000,
};

const karanArjun3 = {
    salary : 50000,
};

const karanArjun4 = {
    salary : 50000,
};

const karanArjun5 = {
    salary : 50000,
};

karanArjun.__proto__ = employee;        // it is use to set prototype, means we can use the function of "employee" in "karanArjun".
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
karanArjun5.__proto__ = employee;