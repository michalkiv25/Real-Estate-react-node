// Business and Costomer Validation

const getElemVal = (id) => document.getElementById(id).value;

export default function validateSimpleRegistration(idName, idLast, idEmail, idPassword) {
   let error = '';
   let data = {
      name: getElemVal(idName),
      last: getElemVal(idLast),
      email: getElemVal(idEmail),
      password: getElemVal(idPassword),
      biz: false,
   };

   if (!data.password || data.password.length < 6) {
      error = `*Password must hace 6 letters*`;
   }

   if (data.email) {
      let reges = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let res = reges.test(data.email);
      if (!res) {
         error += '*Must enter valid email *';
      }
   } else {
      error += '*Must enter  valid email*';
   }

   if (!data.name || data.name.length < 2) {
      error += '*Name must have at leat two letters*';
   }

   if (!data.last || data.last.length < 2) {
      error += '*last must have at leat two letters*';
   }


   return error || data;
}