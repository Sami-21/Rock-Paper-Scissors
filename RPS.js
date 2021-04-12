var player_score = 0;
/* transiton to Rules page Start*/
const rules_btn = document.querySelector("#rules_btn");
const reset_btn = document.querySelector("#reset_btn");
const rules = document.querySelector(".rules");
const rules_exit = document.querySelector('.rules_exit');

rules_btn.addEventListener('click',()=>{
  rules.classList.toggle("rules_fadeIn");
  rules_btn.classList.toggle("disabled")
  });



  rules_exit.addEventListener('click',()=>{
    rules.classList.toggle("rules_fadeIn");
    rules_btn.classList.toggle("disabled")
    });

    reset_btn.addEventListener('click',() => {
      player_score=0;
      score.textContent = player_score;
    })

/* transiton to Rules page End*/
    var score = document.querySelector("#score_display");
    const paper = document.querySelector(" #paper");
    const scissors = document.querySelector(" #scissors");
    const rock = document.querySelector(" #rock");
    const player_choice_displayed = document.querySelector(".player_choice");
    const house_choice_displayed = document.querySelector(".house_choice");
    const house_options = [ "rock","paper","scissors"];
    var player_choice,house_choice;

  

    paper.addEventListener('click',function(){
      console.log(this);
    const house_number = Math.floor(Math.random()*3);
    console.log(house_options[house_number]);
      player_choice="paper";
      house_choice = house_options[house_number] ;
      hands_displayed_player(player_choice);
      hands_displayed_house(house_choice);
      compare_Hands(player_choice,house_choice);
      display_playground();
      update_score();
    });



     scissors.addEventListener('click',function(){
      console.log(this);
      const house_number = Math.floor(Math.random()*3);
      console.log(house_options[house_number]);
      player_choice="scissors";
      house_choice = house_options[house_number] ;
      hands_displayed_player(player_choice);
      hands_displayed_house(house_choice);
      compare_Hands(player_choice,house_choice);
      display_playground();
      update_score();
    });



     rock.addEventListener('click',function(){
      console.log(this);
      const house_number = Math.floor(Math.random()*3);
      console.log(house_options[house_number]);
      player_choice="rock";
      house_choice = house_options[house_number] ;
       hands_displayed_player(player_choice);
      hands_displayed_house(house_choice);
      compare_Hands(player_choice,house_choice);
      display_playground();
       update_score();
    });
   
    const choices_page = document.querySelector(".options_container");
    const playground = document.querySelector(".playground")
    const choices_text = document.querySelector(".choices_text");
    const result = document.querySelector(".result");
    const play_again_btn = document.querySelector(".P_again")


    //functions
    function compare_Hands  (player_choice,house_choice){
      const  output = document.querySelector(".game_output");
      if(player_choice === house_choice){
        output.textContent="It's a Tie";
        console.log("It's a Tie");
        console.log(player_score);
      }
      if(player_choice ==="paper" && house_choice==="scissors"||player_choice ==="scissors" && house_choice==="rock"||player_choice ==="rock" && house_choice==="paper"){
        output.textContent="You Lose";
        console.log("You Lose");
        console.log(player_score);
      }
      if(player_choice ==="paper" && house_choice==="rock"||player_choice ==="scissors" && house_choice==="paper"||player_choice ==="rock" && house_choice==="scissors"){
        output.textContent="You Win";
        player_score++;
        console.log("You Win");
        console.log(player_score);
      }
    }
    
    function hands_displayed_player(player_choice){
      setTimeout(function() { if(player_choice==="paper"){
        player_choice_displayed.innerHTML = paper.innerHTML;
        player_choice_displayed.style.boxShadow = "inset  0 -10px 0 rgba( 0,0,0,0.25)";
        player_choice_displayed.style.background = "linear-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%)) ";

      }
      if(player_choice==="scissors"){
        player_choice_displayed.innerHTML = scissors.innerHTML;
        player_choice_displayed.style.boxShadow = "inset  0 -10px 0 rgba( 0,0,0,0.25)";
        player_choice_displayed.style.background = "linear-gradient(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))";
      }
      if(player_choice==="rock"){
        player_choice_displayed.innerHTML = rock.innerHTML;
        player_choice_displayed.style.boxShadow = "inset  0 -10px 0 rgba( 0,0,0,0.25)";
        player_choice_displayed.style.background = "linear-gradient(hsl(349, 71%, 52%) , hsl(349, 70%, 56%))";

      }},1500);
     
      
    }

    function hands_displayed_house(house_choice){
      setTimeout(function(){if(house_choice==="paper"){
        house_choice_displayed.innerHTML = paper.innerHTML;
        house_choice_displayed.style.boxShadow = "inset  0 -10px 0 rgba( 0,0,0,0.25)";
        house_choice_displayed.style.background = "linear-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%)) ";
      }
      if(house_choice==="scissors"){
        house_choice_displayed.innerHTML = scissors.innerHTML;
        house_choice_displayed.style.background = "linear-gradient(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))"; 
        house_choice_displayed.style.boxShadow = "inset  0 -10px 0 rgba( 0,0,0,0.25)";
      }
      if(house_choice==="rock"){
        house_choice_displayed.innerHTML = rock.innerHTML;
        house_choice_displayed.style.boxShadow = "inset  0 -10px 0 rgba( 0,0,0,0.25)";
        house_choice_displayed.style.background = "linear-gradient(hsl(349, 71%, 52%) , hsl(349, 70%, 56%))";
      }},3000);
      
      
    }

    function display_playground() {
      playground.classList.toggle("fadeIn");
      playground.classList.toggle("disabled");
      choices_page.classList.toggle("disabled");
      choices_text.classList.toggle("fadeIn");
      choices_text.classList.toggle("disabled");
      result.classList.toggle("delayed_fadeIn");
      result.classList.toggle("disabled");
      play_again_btn.classList.toggle("disabled");
      play_again_btn.classList.toggle("delayed_fadeIn");
    } 

    function play_again(){
      playground.classList.toggle("fadeIn");
      playground.classList.toggle("disabled");
      choices_page.classList.toggle("disabled");
      choices_text.classList.toggle("fadeIn");
      choices_text.classList.toggle("disabled");
      result.classList.toggle("delayed_fadeIn");
      result.classList.toggle("disabled");
      play_again_btn.classList.toggle("disabled");
      play_again_btn.classList.toggle("delayed_fadeIn");
      house_choice_displayed.innerHTML="";
      player_choice_displayed.innerHTML = "";
      player_choice_displayed.style.background = "rgba(0, 0, 0, 0.25)";
      house_choice_displayed.style.background = "rgba(0, 0, 0, 0.25) ";
    }

    function update_score(){
      setTimeout(function(){ score.textContent = player_score;},4000);
     
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 