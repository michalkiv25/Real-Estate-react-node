const getElemVal = (id) => document.getElementById(id).value;

export default function validateCard(_bizName, _bizPhone, _bizAddress, _bizPrice, _bizDescription, _bizImage) {
   let error = '';
   let data = {
      bizName: getElemVal(_bizName),
      bizPhone: getElemVal(_bizPhone),
      bizAddress: getElemVal(_bizAddress),
      bizPrice: getElemVal(_bizPrice),
      bizDescription: getElemVal(_bizDescription),
      bizImage: getElemVal(_bizImage)

   };

   if (!data.bizName || data.bizName.length < 4) {
      error = `*bizName*`;
   }

   if (!data.bizDescription || data.bizDescription.length < 2) {
      error += '*bizDescription*';
   }

   if (!data.bizAddress || data.bizAddress.length < 2) {
      error += '*bizAddress*';
   }

   if (data.bizPhone) {
      var reges = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/;
      var res = reges.test(data.bizPhone);
      if (!res) {
         error += "Must enter  valid phone *";
      }
   } else {
      error += "Must enter  valid phone *";
   }

   return error || data;
}