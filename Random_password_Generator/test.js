const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqurstuvwxyz"
const numberSet = "1234567890"
const symbolset = "!@#$%^&*()_+/"


//selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");


const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}

const generatePassowrd = (password = "") =>{
   if(upperInput.checked){
    password += getRandomData(upperSet);
   }
   if(lowerInput.checked){
    password += getRandomData(lowerSet);
   }
   if(numberInput.checked){
    password += getRandomData(numberSet);
   }
   if(symbolInput.checked){
    password += getRandomData(symbolset);
   }

   if(password.length < totalChar.value){
    return generatePassowrd(password)
   }




   passBox.innerText=  truncateString(password,totalChar.value);
  
}
generatePassowrd();









document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassowrd();
    }
)


function truncateString(str,num){
    if(str.length > num){
        let subStr = str.substring(0,num);
        return subStr;

    }else{
        return str;
    }
}