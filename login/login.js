function validationUser() {
    let uservalue = document.getElementById('phone').value;
    // مقدار ورودی تگ اینپوت شماره موبایل را در یک متغیر ریختیم
    let isUserValid = uservalue.length == 11;
    // تعیین طول رشته ی فیلد موبایل
    let numValid = false;
      // ایجاد یک متغیر با مقدار بولین برای استفاده در شرط ها
      for (let i = 0 ; i < 11 ; i++) {
        // استفاده از حلقه برای پیمایش بر روی کارکتر های ورودی برای اعتبارسنجی شماره موبایل
        if (uservalue[i] <= 9 && uservalue[i] >= 0) numValid = true;
        // ایجاد شرط برای درست وارد شدن اعداد
        // مقدار بولین را در این حالت درست قرارمیدهیم 
      }
      if (isUserValid) {
        // اگر کاربر شماره خود را درست وارد کرده باشد پیغام میاد که فیلد بعدی را پر کند
          document.getElementById('usererror').innerHTML = "لطفا رمز عبور خود را وارد کنید";
      } else {
        // و اگر شماره نادرست باشد پیغام خطا میاد که شماره خود را درست وارد کند 
          document.getElementById('usererror').innerHTML = "شماره خود را ویرایش و درست وارد کنید ";
      };
  };

function validationPass() {
  let passvalue = document.getElementById('pass').value;
  let isPassValid = passvalue.length >= 8;

  if (!isPassValid) {
    document.getElementById('passerror').innerHTML = "رمز عبور نباید کمتر از 8 رقم باشد";
    return false;
  };
};
