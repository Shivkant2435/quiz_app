// test
function getColor(){
    const randomNumber= Math.floor(Math.random()*16777215);
    
    const randomcode="#"+randomNumber.toString(16);
    
    document.body.style.backgroundColor=randomcode;
    
    
}
setInterval(getColor,2000);
const questions= [{
    question : "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
let index=0;
const quesBox = document.getElementById("quesbox");
 const loadques = () =>{
 const data = questions[index];
 console.log(data);
 quesBox.innerText = '${index+1} ${data.question}';
 
}
loadques();