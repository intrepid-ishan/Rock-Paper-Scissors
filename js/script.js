//GAME
    //startGame
    //playMatch
    //compareHand
    //updateScore

const game = () =>{ //covers whole game
    let pScore=0;
    let cScore=0;
    
    const startGame = () =>{ //for fadein fadeout
        const playBtn = document.querySelector('.intro button');//subpart2(1) btn fetch
        const introScreen = document.querySelector('.intro');//subpart2(1) fetch
        const match = document.querySelector('.match');//subpart2(2) fetch
    
        playBtn.addEventListener('click',function(){//onclick btn
            introScreen.classList.add("fadeOut");
            match.classList.remove("fadeOut");
            match.classList.add("fadeIn");
        });

    };//end startGame()


    //subpart2(2)
    const playMatch = () =>{
        const options = document.querySelectorAll('.options button');
        const computerHand = document.querySelector('.computer-hand');
        const playerHand = document.querySelector('.player-hand');
        const hands = document.querySelectorAll('.hands img');


        hands.forEach(hand=>{
            hand.addEventListener('animationend',function(){
                this.style.animation='';
            });
        });//otherwise animation works only once


        //Computer options
        const computerOptions = ['rock','paper','scissors'];

        options.forEach((option)=>{//loop through buttons
                
                option.addEventListener("click", function(){
                    
                    //Computer choice
                    const computerNumber = Math.floor(Math.random()*3);//(0-1)*3
                    const computerChoice = computerOptions[computerNumber];
                 
                    //Here is where we call compare hands
                    setTimeout(()=>{
                    compareHands(this.textContent,computerChoice);
                    //Update Images
                     playerHand.src=`img/${this.textContent}.png`; //super
                     computerHand.src=`img/${computerChoice}.png`;

                    },2000);
                     playerHand.src=`img/rock.png`; //super
                     computerHand.src=`img/rock.png`;
                     playerHand.style.animation = "shakePlayer 2s ease";
                     computerHand.style.animation = "shakeComputer 2s ease";
                    // console.log(this);// it doesnt work in arrow function it refers to left option
                    //value <button class="paper">paper</button>
                });
        });//option loop ends
    };//end subpart2(2) playmatch


    const compareHands = (playerChoice,computerChoice) => {
        //Update Text
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }

        //check for rock
        if(playerChoice === 'rock' ){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if(playerChoice === 'scissors' ){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if(playerChoice === 'paper' ){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    };//end compare hands
    

    const updateScore = () =>{
        const playerScore =document.querySelector('.player-score p');
        const computerScore =document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    
    startGame();
    playMatch();
};//end game()


game();