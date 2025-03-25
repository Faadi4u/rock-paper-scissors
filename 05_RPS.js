const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const Result = document.querySelector(".Result")
const computer = document.querySelector(".comp")
const your = document.querySelector(".you")
const reload = document.querySelector(".reload")

let choices = (["Rock","Paper","Scissor"]);
let choice = ()=>{

    let compTurn =Math.floor( Math.random()*choices.length);
    return (choices[compTurn]);
}


reload.hidden = true

rock.addEventListener('click',(e)=>{
    let computerChoice = choice()
    console.log(computerChoice);
       
    if(computerChoice == rock.textContent){
        Result.textContent = "Tie"  ;
        computer.textContent = "Computer choose: Rock"
        your.textContent = "You choose: Rock"
        rock.hidden = true;
        paper.hidden = true;
        scissor.hidden = true;
        reload.hidden = false
        reload.addEventListener("click",function(e){
            window.location.href = window.location.href;
         })
    }else if(computerChoice == paper.textContent){
        Result.textContent = "You Loose";
        computer.textContent = "Computer choose: Paper"
        your.textContent = "You choose: Rock"
        rock.hidden = true;
        paper.hidden = true;
        scissor.hidden = true;        reload.hidden = false
        reload.addEventListener("click",function(e){
            window.location.href = window.location.href;
         })
    }else{
        Result.textContent= "You Win"
        computer.textContent = "Computer choose: Scissor"
        your.textContent = "You choose: Rock"
        rock.hidden = true;
        paper.hidden = true;
        scissor.hidden = true;        reload.hidden = false
        reload.addEventListener("click",function(e){
            window.location.href = window.location.href;
         })
    }
})


paper.addEventListener('click',(e)=>{    
    let computerChoice = choice()
    console.log(computerChoice);
    if(computerChoice == rock.textContent){
        Result.textContent = "You Win"  ;
        computer.textContent = "Computer choose: Rock";
        your.textContent = "You choose: Paper"
        rock.hidden = true;
        paper.hidden = true;
        scissor.hidden = true;
        reload.hidden = false
        reload.addEventListener("click",function(e){
            window.location.href = window.location.href;
         })
        
    }else if(computerChoice == paper.textContent){
        Result.textContent = "Tie";
        computer.textContent = "Computer choose: Paper"
        your.textContent = "You choose: Paper"
        rock.hidden = true;
        paper.hidden = true;
        scissor.hidden = true;        reload.hidden = false
        reload.addEventListener("click",function(e){
            window.location.href = window.location.href;
         })
    }else{
        Result.textContent= "You Loose"
        computer.textContent = "Computer choose: Scissor";
        your.textContent = "You choose: Paper"
        rock.hidden = true;
        paper.hidden = true;
        scissor.hidden = true;        reload.hidden = false
        reload.addEventListener("click",function(e){
            window.location.href = window.location.href;
         })
    }
})
scissor.addEventListener('click',(e)=>{
    let computerChoice = choice()
    console.log(computerChoice);
    if(computerChoice == rock.textContent){
        Result.textContent = "You Loose"  ;
        computer.textContent = "Computer choose: Rock";
        your.textContent = "You choose: Scissor"
        rock.hidden = true;
        paper.hidden = true;
        scissor.hidden = true;        reload.hidden = false
        reload.addEventListener("click",function(e){
            window.location.href = window.location.href;
         })
       
    }else if(computerChoice == paper.textContent){
        Result.textContent = "You Win";
        computer.textContent = "Computer choose: Paper";
        your.textContent = "You choose: Scissor"
        rock.hidden = true;
        paper.hidden = true;
        scissor.hidden = true;        reload.hidden = false
        reload.addEventListener("click",function(e){
            window.location.href = window.location.href;
         })

    }else{
        Result.textContent= "Tie"
        computer.textContent = "Computer choose: Scissor";
        your.textContent = "You choose: Scissor"
        rock.hidden = true;
        paper.hidden = true;
        scissor.hidden = true;        reload.hidden = false
        reload.addEventListener("click",function(e){
            window.location.href = window.location.href;
         })

    }
})


