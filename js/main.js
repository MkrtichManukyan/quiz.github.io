// var className,questions,random,points,questionsCopy
// questions = ["one","two","three","four"]
// points = 0
// function randomQuestion() {
//     if (questions.length!=0) {
//         random = questions[Math.floor((Math.random() * questions.length))]
//         className = `question${random}`
//         for (let i=0;i<4;i++) {
//             document.querySelector(".main").children[i].style.display = "none"
//         }
//         document.getElementById(className).style.display = "block"
//         console.log(className,questions)
//         answers = ["one","two","three","four"]
//         item = answers.indexOf(random)
//         for (let i=0; i<4;i++) {
//             let randomtwo,button,text 
//             randomtwo = answers[Math.floor((Math.random() * answers.length))]
//             button = document.createElement("button")
//             text = document.createTextNode(randomtwo)
//             button.append(text)
//             if (randomtwo == "one") {
//                 button.setAttribute("id",`answer${random}one`)
//                 button.setAttribute("onclick",`correct('answer${random}one')`)
//             }else {
//                 button.setAttribute("id",`noanswer${random+randomtwo}`)
//                 button.setAttribute("onclick",`incorrect('noanswer${random+randomtwo}')`)
//             }
//             document.querySelectorAll(".answers")[item].appendChild(button)
//             answers.splice(answers.indexOf(randomtwo),1)
//             console.log(answers)
//             console.log(questions.indexOf(random))
//         }
//         questions.splice(questions.indexOf(random),1)
//     }
//     else {
//         document.getElementById("points").innerHTML = points
//     }
// }
function  correct() {
    console.log("answer is correct");
    document.getElementById("correct").style.background = "green";
    document.getElementById("correct").style.color = "white";
    points +=1
}


function  incorrect(value) {
    console.log("answer is incorrect");
    document.getElementById("incorrect").style.background = "red";
    document.getElementById("incorrect").style.color = "white";
}

function skip() {
        document.getElementById("result").innerHTML = `Սա փորձություն էր, որը դուք հաջողությամբ անցաք: <br> Առաջին Կանոն։ Երբեք մի վստահիր անծանոթ կայքերին`   
        document.getElementById("quizBox").style.display = "none"
        document.getElementById("main").style.display = "block"
}
function submit() {
        document.getElementById("result").innerHTML = `Սա փորձություն էր, որը դուք դժբախտաբար չանցաք: <br> Առաջին Կանոն։ Երբեք մի վստահիր անծանոթ կայքերին`
        document.getElementById("quizBox").style.display = "none"
        document.getElementById("main").style.display = "block"
}

// function fakeToTrue() {
//     document.getElementById("fake").innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, eum recusandae aliquam odit dolorem molestias."
// }

// function reverse() {
//     document.getElementById("fake").innerHTML = "Harum debitis repellat provident amet omnis, et neque, officiis eum rem doloribus est eius soluta?"
// } 