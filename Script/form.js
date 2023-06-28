function validationUser() {
    let uservalue = document.getElementById('phone').value;
    // مقدار ورودی تگ اینپوت شماره موبایل را در یک متغیر ریختیم
    let isUserValid = uservalue.length == 11;
    // تعیین طول رشته ی فیلد موبایل
    let numValid = false;
      // ایجاد یک متغیر با مقدار بولین برای استفاده در شرط ها
      // if (Number('phone') && phone[0] == 0 && phone[1] == 9) {
      // برای اینکه مقدار داخل فیلد موبایل حتما عدد باشد از این شرط استفاده میکنیم و اینم میگیم که حتما با 09 شروع شود
      for (let i = 0 ; i < 11 ; i++) {
        // استفاده از حلقه برای پیمایش بر روی کارکتر های ورودی برای اعتبارسنجی شماره موبایل
        if (uservalue[i] <= 9 && uservalue[i] >= 0) numValid = true;
        // ایجاد شرط برای درست وارد شدن اعداد
        // مقدار بولین را در این حالت درست قرارمیدهیم 
      }
      if (isUserValid) {
        // اگر کاربر شماره خود را درست وارد کرده باشد میتواند که فیلد بعدی را پر کند
          document.getElementById('usererror').innerHTML = "";
      } else {
        // و اگر شماره نادرست باشد پیغام خطا میاد که شماره خود را درست وارد کند 
          document.getElementById('usererror').innerHTML = "شماره خود را ویرایش و درست وارد کنید ";
        };
   
  };
// }
function validationPass() {
  let passvalue = document.getElementById('pass').value;
  let isPassValid = passvalue.length >= 8;

  if (!isPassValid) {
    document.getElementById('passerror').innerHTML = "رمز عبور نباید کمتر از 8 رقم باشد";
    return false;
  }else{
    document.getElementById('passerror').innerHTML = ""
  }
};
 
function validationRePass() {
    let RePassvalue = document.getElementById('RePass').value;
    let passvalue = document.getElementById('pass').value;
    if ( RePassvalue != passvalue ) {
      document.getElementById('rePasserror').innerHTML = " مقدار تکرار رمز عبور را عینا مثل فیلد رمز عبور وارد کنید"
      return false
    }else{
      return true;
    }
};
