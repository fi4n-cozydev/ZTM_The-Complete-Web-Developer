//! default argument

function sayHi(name='', age=24, job='dentist') {
    return `Hi, ${name} you seem to be younger ${age+1}. as a ${job}`;
}
sayHi();        // 'Hi,  you seem to be younger 25. as a dentist'
sayHi("Sam");   // 'Hi, Sam you seem to be younger 25. as a dentist'
sayHi("Anna", 15, "student"); // 'Hi, Anna you seem to be younger 16. as a student'