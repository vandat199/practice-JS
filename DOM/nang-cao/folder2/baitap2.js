const dangNhap = document.querySelector(".left");
const dangKi = document.querySelector(".right");

const signIn = document.querySelector(".sign-in");
const signUp = document.querySelector(".sign-up");
const signInTkInp = document.querySelector("#taikhoan");
const signInMkInp = document.querySelector("#matkhau");

const account = [
  { tk: "duc12345", mk: "duc12345" },
  { tk: "tuan12345", mk: "tuan1234" },
];
const btnDangNhap = document.querySelector(".btn-signin");

dangNhap.addEventListener("click", function (e) {
  signIn.classList.remove("hidden");
  signUp.classList.add("hidden");
  signUp.style.display = "none";
});

dangKi.addEventListener("click", function (e) {
  signIn.classList.add("hidden");
  signUp.classList.remove("hidden");
  signUp.style.display = "flex";
});

// btnDangNhap.addEventListener("click", function (e) {
//   const signInTkvalue = signInTkInp.value;
//   const signInMkvalue = signInMkInp.value;
//   // console.log(signInTkvalue);
//   // console.log(signInMkvalue);
//   for (let item of account) {
//     const isUserCorrect = false;

//     if (signInTkvalue == item.tk && signInMkvalue == item.mk) {
//       alert("dang nhap thanh cong");
//       isUserCorrect = false;
//     }

//     if (!isUserCorrect && index === account.length) {
//       if (signInTkvalue !== item.tk) {
//         alert("tai khoan ko ton tai");
//         return;
//       }
//       alert("sai mat khau");
//     }
//   }
// });

let check = false;
let checkUser = false;

btnDangNhap.addEventListener("click", function (e) {
  // console.log(1);
  const signInTkvalue = signInTkInp.value;
  const signInMkvalue = signInMkInp.value;
  // console.log(signInTkvalue);
  // console.log(signInMkvalue);

  if (signInTkvalue == "" || signInMkvalue == "") {
    alert("ko dc de trong tai khoan hoac mat khau");
  } else {
    for (let item of account) {
      if (item.tk === signInTkvalue) {
        console.log(1);
        if (item.mk === signInMkvalue) {
          console.log(2);
          check = true;
          break;
        } else {
          checkUser = true;
        }
      }
    }
    if (check) {
      alert("dang nhap thanh cong");
    } else if (checkUser) {
      alert("sai mat khau");
    } else {
      alert("tai khoan ko ton tai");
    }
  }
});
