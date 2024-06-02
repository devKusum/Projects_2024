const GetColor = () => {
    //Hex code
    const randomNumber = Math.floor(Math.random()*  16777215);
    const  randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerHTML = randomCode;

    navigator.clipboard.writeText (randomCode);


}
//Event Call
document.getElementById("btn").addEventListener(
    "click",
    GetColor
)

//initial Call
GetColor()