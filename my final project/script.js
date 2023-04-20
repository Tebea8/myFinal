let body = document.querySelector("body");
let header = document.querySelector("header");

let darkModeInput = document.querySelector(".switch-input");

darkModeInput.addEventListener("click", () => {
	document.querySelector("body").classList.toggle("dark-mode");
});



let form = document.getElementById('Form');

let name = document.getElementById('fullname');
let email = document.getElementById('email');
let number = document.getElementById('idNumber');
let password = document.getElementById('password');
let date = document.getElementById('birthdate');
let phone = document.getElementById('phone'); 

    
   

    form.addEventListener("submit", (e) => {

        let messages= []
       
      if (name.value === "" || name.value == null, email.value === "" || email.value == null, number.value === "" || number.value == null, date.value === "" || date.value == null ,phone.value === "" || phone.value == null ) {
          alert("Fill out all fields");
        } 
        if (password.value.length<=6){
            alert("Password must be longer than 6 haracters")
        }
        if (password.value.length >= 20){
          alert("Password must be shorter than 20 haracters")
      }

        if (messages.length > 0 ){
         e.preventDefault()
         errorElement.innerText= messages.join (', ')
        } 
        
    
    
    }
      );

     







// let form = document.getElementById("VerificationForm");

// const formFunctions = {
//     start() {
//       formFunctions.addListeners();
//     },
  
//     addListeners() {
//         let form = document.sampleForm;
//         let fullName = document.getElementById("fullname");
//         let email = document.getElementById("email");
//         let ID = document.getElementById("ID");
//         let password = document.getElementById("pass");
//         let date = document.getElementById("birth");
//         let phone = document.getElementById("phone"); 

  
//       fullName.addEventListener("change", formFunctions.nameCheck);
//       ID.addEventListener("change", formFunctions.userCheck);
//       email.addEventListener("change", formFunctions.emailCheck);
//       phone.addEventListener("change", formFunctions.phoneCheck);
//       password.addEventListener("change", formFunctions.cnPassCheck);
    
  
     
//       form.addEventListener("submit", formFunctions.validate);
//     },
  

  
//     passCheck(e) {
//       let req = [
//         {
//           id: "lower",
//           regex: /(?=.*[a-z])/,
//           message: "Please include at least one lowercase letter",
//         },
//         {
//           id: "upper",
//           regex: /(?=.*[A-Z])/,
//           message: "Please include at least one uppercase letter",
//         },
//         {
//           id: "length",
//           regex: /(?=.{10,})/,
//           message: "Please write down at least 10 characters ",
//         },
//       ];
  
//       let password = e.target;
//       password.setCustomValidity("");
//       let current = password.checkValidity();
  
//       if (current) {
//         req.forEach(({ id, regex, message }) => {
//           let element = document.getElementById(id);
//           if (regex.test(password.value)) {
//             element.classList.add("valid");
//           } else {
//             element.classList.remove("valid");
//             password.setCustomValidity(message);
//             password.reportValidity();
//             return;
//           }
//         });
//       } else if (current || password.validity.valueMissing) {
//         req.forEach(({ id, regex, message }) => {
//           let element = document.getElementById(id);
//           element.classList.remove("valid");
//           password.setCustomValidity(message);
//           password.reportValidity();
//           return;
//         });
//       }
//     },
  
//     cnPassCheck(e) {
//       let password = document.getElementById("password");
//       let cnfPass = e.target;
//       cnfPass.classList.add("err");
//       cnfPass.setCustomValidity("");
  
//       if (password.value !== cnfPass.value) {
//         cnfPass.setCustomValidity("Passwords do not match");
//         cnfPass.reportValidity();
//       } else {
//         cnfPass.classList.remove("err");
//       }
//     },
  
//     phoneCheck(e) {
//       let phone = e.target;
//       phone.setCustomValidity("");
//       phone.classList.add("err");
//       let current = phone.checkValidity();
  
//       if (current) {
//         let myRegex = /^\+995\d{9}$/;
//         if (myRegex.test(phone.value) === false) {
//           phone.setCustomValidity(
//             "Please enter your phone number starting with +995 followed by your 6 digit number without any space (e.g +995xxxxxx)"
//           );
//           phone.reportValidity();
//         } else {
//           phone.classList.remove("err");
//         }
//       }
//     },
  
//     validate(e) {
//       let inputs = document.querySelectorAll("input");
//       for (let input of inputs) {
//         if (!input.checkValidity()) {
//           e.preventDefault();
//           input.classList.add("err");
//         }
//       }
//     },
//   };
  

    