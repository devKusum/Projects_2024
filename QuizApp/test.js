const questions = [
    {
    'que':'which is the following is a markup language?',
    'a': 'html',
    'b' : 'css',
    'c' : 'js',
    'd' : 'java',
    'correct':'a',
    },
    {
        'que':'which Year Javascript was launched?',
        'a': '1998',
        'b' : '1995',
        'c' : '2000',
        'd' : '1999',
        'correct':'b',
    },
    {
        'que':'what does Css stands for',
        'a': 'Hypertext markup language',
        'b' : 'Cascading stylesheet',
        'c' : 'js',
        'd' : 'java',
        'correct':'b',
     },
     {
        'que':'What does js stands for?',
        'a': 'Hypertext markup language',
        'b' : 'Cascading stylesheet',
        'c' : 'javascript',
        'd' : 'java',
        'correct':'c',
        }

]


let index = 0;
let total = questions.length;
let right = 0,
      wrong = 0;
const Qbox = document.getElementById("Qbox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = () =>{
    if(index===total){
        return endQuiz();
    }else{
        reset();
    }
   
    const data = questions[index]
    // console.log(data);
   Qbox.innerText =`${index+1})${ data.que}`;
   optionInputs[0].nextElementSibling.innerText = data.a ;
   optionInputs[1].nextElementSibling.innerText = data.b ;
   optionInputs[2].nextElementSibling.innerText = data.c ;
   optionInputs[3].nextElementSibling.innerText = data.d ;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
      right++;
    }else{
        wrong++;
    }

    index++;
    loadQuestion();
    return;
}
 const getAnswer = () =>{
    let answer ;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
              answer= input.value ;
              
            }
        }
    )
    return answer;
 }

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}


const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <div style.text-align:center>
    
    <h4>Thankyou for playing the 
    Quiz</h4>
    
    <h4>${right}/${total} are correct </h4>
    </div>
    
    `
}



loadQuestion();