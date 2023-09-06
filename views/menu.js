import { getSigninHtml } from "./signin.js";
import getSignupHtml  from "./signup.js";


window.addEventListener("click",(event) =>{
  const option = event.target.childNodes[0].data;

  switch(option) {
    case "Try for free":
      getSignupHtml();
      break;
    case "Sign in":
      getSigninHtml();
      break;
  }
})

