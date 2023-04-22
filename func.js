function card(){
    let CardNumber = document.getElementById("card-no");
    if(CardNumber.value == ""){
        document.getElementById("no-det").innerHTML =
        "0000 0000 0000 0000";
    } else{
       let NumValue = CardNumber.value;
       let path = /\d{0,4}/g;
       let Pattern = NumValue.match(path);
       let SpacIng = Pattern.join(" ").replace(/,/g," ")
       let CardValue =  document.getElementById("no-det");
       CardValue.innerHTML = SpacIng;
    }
    if(isNaN(CardNumber.value)){
        CardNumber.nextElementSibling.innerHTML = "wrong format, , number only";
        document.getElementById("no-det").innerHTML =
        "0000 0000 0000 0000";
    }else{
        CardNumber.nextElementSibling.innerHTML = "";
    }
}
function UserName(){
    let Name = document.getElementById("name");
if( Name.value === ''){
    document.getElementById("username").innerHTML = "Jane Appleseed";
}else{
    document.getElementById("username").innerHTML = Name.value;
}
if( typeof Name.value !== "string"){
    Name.nextElementSibling.innerHTML = "wrong format";
}else{
    Name.nextElementSibling.innerHTML = "";
}
}
function  Expmonth(){
    let  Expmonth= document.getElementById("month");
    if(Expmonth.value === ""){
        document.getElementById("exp-month").innerHTML = "00 /";
    }else{
        document.getElementById("exp-month").innerHTML = Expmonth.value + " " + "/";
    }
}
function Expyear() {
    let Expyear = document.getElementById("year");
    if(Expyear.value === ""){
        document.getElementById("exp-year").innerHTML = "00";
    }else{
        document.getElementById("exp-year").innerHTML = Expyear.value;
    }
}
function CardCode() {
    let Cardcode = document.getElementById("card-code");
    if(Cardcode.value === ""){
        document.getElementById("card-code-no").innerHTML = "000";
    }else{
        document.getElementById("card-code-no").innerHTML = Cardcode.value;
    }
}
    
//  function feedback(){
//     let InputValidation = document.getElementsByTagName("input");
//     for( i = 0; i< InputValidation.length; i++ ){
//         InputValidation[i].addEventListener("blur", function AlertMsg() {
//             let MessageAlert = this.nextElementSibling;
//             if(this.value == ""){
//                 MessageAlert.innerHTML = "Can't be empty";
//             }else{
//                MessageAlert.innerHTML = "";
//             }
//         })
//     }
// }

// function feedback2(){
//     let CardNumber = document.getElementById("card-no");
//     let Name = document.getElementById("name");
//     let  Expmonth= document.getElementById("month");
//     let Expyear = document.getElementById("year");
//     let Cardcode = document.getElementById("card-code");
//     let AllAlert = document.getElementsByTagName("small");
//     let isFormEmpty = Name.value === "" && CardNumber.value === "" && Expmonth.value === "" && Expyear.value === "" && Cardcode.value === "";
//     for (let j = 0; j < AllAlert.length; j++) {
//       if (isFormEmpty) {
//            AllAlert[j].innerHTML = "cant be empty";
//            document.getElementById("form").style.display = "block";
//             AllAlert[j].innerHTML = "";
//             document.getElementById("feedback").style.display= "none";
//         }else{
//             document.getElementById("form").style.display = "none";
//             AllAlert[j].innerHTML = "";
//             document.getElementById("feedback").style.display= "block";
//        }
//     }
  
// }
// function feedback2() {
//     let cardNumber = document.getElementById("card-no");
//     let name = document.getElementById("name");
//     let expMonth = document.getElementById("month");
//     let expYear = document.getElementById("year");
//     let cardCode = document.getElementById("card-code");
//     let allAlerts = document.getElementsByTagName("small");
//     let isFormEmpty = name.value === "" && cardNumber.value === "" && expMonth.value === "" && expYear.value === "" && cardCode.value === "";
//     for (let j = 0; j < allAlerts.length; j++) {
//       if (isFormEmpty) {
//         allAlerts[j].innerHTML = "Can't be empty";
//         document.getElementById("form").style.display = "block";
//         document.getElementById("feedback").style.display = "none";
//       } else {
//         allAlerts[j].innerHTML = "";
//         document.getElementById("form").style.display = "none";
//         document.getElementById("feedback").style.display = "block";
//       }
//     }
//   }
function feedback2() {
    let cardNumber = document.getElementById("card-no");
    let name = document.getElementById("name");
    let expMonth = document.getElementById("month");
    let expYear = document.getElementById("year");
    let cardCode = document.getElementById("card-code");
    let allAlerts = document.getElementsByTagName("small");
    let isFormEmpty = name.value === "" && cardNumber.value === "" && expMonth.value === "" && expYear.value === "" && cardCode.value === "";
    if (isFormEmpty) {
      for (let j = 0; j < allAlerts.length; j++) {
        allAlerts[j].innerHTML = "Can't be empty";
      }
      document.getElementById("form").style.display = "block";
      document.getElementById("feedback").style.display = "none";
    } else {
      for (let j = 0; j < allAlerts.length; j++) {
        allAlerts[j].innerHTML = "";
      }
      document.getElementById("form").style.display = "none";
      document.getElementById("feedback").style.display = "block";
    }
  }
  