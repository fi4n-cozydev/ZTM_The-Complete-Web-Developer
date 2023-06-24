//! Destructuring

const user = {
    uid: '001',
    passwd: "test11",
    email: "jamnet@gmail.com",
    isIdentify: false 
};

// const uid = obj.uid;
// const passwd = obj.passwd;
// const email = obj.email;
const { uid, passwd, email } = obj;

// let isIdentify = obj.isIdentify;
let { isIdentify } = obj;