function validationUser() {
    var uservalue = document.getElementById('phone').value;
    // مقدار ورودی تگ اینپوت شماره موبایل را در یک متغیر ریختیم
    let isUserValid = uservalue.length == 11;
    // تعیین طول رشته ی فیلد موبایل
    let numValid = false;
      // ایجاد یک متغیر با مقدار بولین برای استفاده در شرط ها
      if (!isNaN(parseInt(uservalue)) && uservalue.startsWith('09')) {
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
 }
function validationPass() {
  // یک تابع درست میکنیم برای اعتبارسنجی رمزعبور
  var passvalue = document.getElementById('pass').value;
  // مقدار رمزعبور را در یک متغیر میریزیم که از آن در شرط استفاده کنیم
  let isPassValid = passvalue.length >= 8;
  //  طول رشته ی رمزعبور را مشخص و در متغیر ریختم بازم برای استفاده در شرط

  if (!isPassValid) {
    // در شرط گفتیم که طول رشته ی رمزعبور از 8 کارکتر نباید کمتر باشد
    document.getElementById('passerror').innerHTML = "رمز عبور نباید کمتر از 8 رقم باشد";
    // با استفاده از ایدی تگ اسپن در آن پیام اخطارمون رو میریزیم و نمایش میدهیم
    return false;
  }else{
    document.getElementById('passerror').innerHTML = ""
  }
};
////////////////////////////!

function validationRePass() {
    //  یک تابع درست میکنیم برای اعتبارسنجی اینکه مقدار تکراررمزعبور با مقدار رمز عبور برابر باشد
  var passvalue = document.getElementById('pass').value;
    // مقدار رمزعبور را در یک متغیر میریزیم که از آن در شرط استفاده کنیم
  var repass = document.getElementById('pass2').value;
    // مقدار تکراررمزعبور را در یک متغیر میریزیم که از آن در شرط استفاده کنیم
    if (passvalue != repass) { 
      // اگر مقدار رمزعبور و تکرار رمزعبور باهم برابر نباشد پیام اخطار نمایش داده میشود
      document.getElementById('rePasserror').innerHTML = " مقدار تکرار رمز عبور را عینا مثل فیلد رمز عبور وارد کنید"
    }else {
      document.getElementById('rePasserror').innerHTML = ""
    }
};


// registeryButton
function myButton1() {
  // این تابع برای کنترل اکشن دکمه ثبت نام است و تا وقتی که تمام فیلد ها پر نشده باشد غیرفعال است
  var uservalue = document.getElementById('phone').value;
  var passvalue = document.getElementById('pass').value;
  var repass = document.getElementById('pass2').value;

  if (uservalue === '' || passvalue === '' || repass === '') {
    // در این حالت اگر یک یا همگی فیلد ها خالی باشد دکمه ثبت نام غیرفعال بوده و کاربر نمیتواند بدون واردکردن اطلاعاتش وارد صفحه بعدی شود
    document.getElementById('myBtn1').disabled = true
  } else {
    // اگر اطلاعات به درستی و کامل وارد شده باشد دکمه ثبت نام فعال میشود
    document.getElementById('myBtn1').disabled = false;
  }

  farawin.testRegister(
    (username = uservalue),
    (password = passvalue),
    (name = "SamaneGhazanfari"),
    (response) => {
      const success = response.code == "200";

      if (success) console.log("result from api -> ", response);
      else console.error("error from api -> ", response);

      alert(response.message);
    }
  );
}




// loginButton
function myButton2() {
    // این تابع برای کنترل اکشن دکمه ثبت نام است و تا وقتی که تمام فیلد ها پر نشده باشد غیرفعال است
  var uservalue = document.getElementById('phone').value;
  var passvalue = document.getElementById('pass').value;

  let isValidBtn2 = uservalue && passvalue;
  // در اینجا وجود داشتن  مقدار دو فیلد را بررسی میکنیم

  if (!isValidBtn2) {
    // اگر فیلد ها کامل پر نشده باشد دکمه ورود غیرفعال است
    document.getElementById('myBtn2').disabled = true;
  } else {
    // ولی اگر کامل و درست پر شده باشد دکمه فعال و میتواند وارد شود
    document.getElementById('myBtn2').disabled = false;
  }

  farawin.testLogin(
    (username = uservalue),
    (password = passvalue),
    (response) => {
      const success = response.code == "200";

      if (success) console.log("result from api -> ", response);
      else console.error("error from api -> ", response);

      alert(response.message);
    }
  );
}
