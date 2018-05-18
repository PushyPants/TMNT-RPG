// get the document ready for the scripts to run (I'm using the shorthand version of $(document).ready(function(){}) )
$(function(){

// Create players (objects --> [perhaps array of objects?]) with their own values {name:, image:, healthPoint:, attackPower: '6', counterAttackPower:, }

var playerArr = [
    { name: 'Splinter',
      id: 'splinter',
      imgSrc: 'https://pixelatedpop.com/sites/default/files/u4/tmntSplinter.JPG',
      HealthPoints: '180',
      attackPower: '6',
      counterAttackPower: '35',  
    },
    { name: 'Donatello',
      id: 'donatello',
      imgSrc: 'https://i.pinimg.com/originals/5f/fb/a3/5ffba397e55ef633ea78bb157e8e2b58.jpg',
      HealthPoints: '110',
      attackPower: '6',
      counterAttackPower: '18',  
    },
    { name: 'Shredder',
      id:'shredder',  
      imgSrc: 'https://res.cloudinary.com/jpress/image/fetch/ar_3:2,c_fill,f_auto,h_400,w_599/http://www.wow247.co.uk/wp-content/uploads/2014/09/Shredder-TMNT.jpg',
      HealthPoints: '190',
      attackPower: '6',
      counterAttackPower: '30',  
    },
    { name: "April O'Neil",
      id: 'april',
      imgSrc: 'http://thathashtagshow.com/wp-content/uploads/2017/11/tmnt-classics-april-oneil-300x226.jpeg',
      HealthPoints: '80',
      attackPower: '6',
      counterAttackPower: '10',  
    },

]

// create (empty?) player variable
var mainPlayer;

// create (empty?) defender variable
var mainDefender;

//Game starts

//create the newElement variables we are going to use
var parentDiv = $('#character-row');

function updateMainPlayer (){
    var lftHP = $('#left-hp').text(mainPlayer.HealthPoints);
    var lftPlayer = $('#left-player-name').text(mainPlayer.name);
    var lftImg = $('#left-player-img').attr('src',mainPlayer.imgSrc);
    //$('#left-hp').fadeOut();
    (lftHP).fadeIn();
    //$('#left-player-name').fadeOut();
    (lftPlayer).fadeIn();
    //$('#left-player-img').fadeOut();
    (lftImg).fadeIn();
    
}
function updateMainDefender (){
    $('#right-hp').text(mainDefender.HealthPoints);
    $('#right-player-name').text(mainDefender.name);
    $('#right-player-img').attr('src',mainDefender.imgSrc);
}

//function to reset Player 2
function resetPlayer2() {
    $('#right-hp').text('???');
    $('#right-player-name').text('Player 2');
    $('#right-player-img').attr('src', 'assets/images/placeholder.png');
    mainDefender = undefined;
    }

//funtion to reset mainDefender
function resetPlayer1(){
    $('#left-hp').text('???');
    $('#left-player-name').text('Player 1');
    $('#left-player-img').attr('src', 'assets/images/placeholder.png');
    mainPlayer = undefined;
    }
//create funtion to populate the characters row
    function populateCharacters(){
        playerArr.forEach(function(value, index){
            var newHTML = `
            <div id ="`+value.id+`"class="col-md-3 text-center mx-auto character-choice"> 
            <div class="card">
            <div class="card-header">
            <h3 class="card-title">`+value.name+`</h3>
            </div>
            <div class="card-body text-center">
            <img src="`+value.imgSrc+`" class="rounded img-fluid">
            </div>
            </div>             
            </div>
            `
            console.log(value.name+" @ index "+index)
            $(parentDiv).append(newHTML);
        });
    };
    
// Character row populates with the four characters (random order possibly)
populateCharacters();


//Click on character element selects the players character choice
    //create on click event for the "character" element .class
    $(document).on('click', '.character-choice', function(){
        var matchName = $(this).find('.card-title').text();
        var matchIndex;
        playerArr.forEach(function(value, index) {
            if (matchName === value.name ) {
                //get index of matched character to send to fighter area
                console.log('character is: '+value.name+' at index: '+index);
                
                               
                //Player var === '' then var player = this.characterName (object?)
                if (mainPlayer === undefined) {
                    //set player variable to character values 
                    mainPlayer = {
                        name:value.name, 
                        id:value.id,
                        imgSrc:value.imgSrc, 
                        HealthPoints:value.HealthPoints, 
                        attackPower:value.attackPower, 
                        counterAttackPower:value.counterAttackPower
                    }
                    //remove character from character pen
                    $('#'+value.id).fadeOut();
                    console.log(mainPlayer.name) //works! 
                    //moves that character from the fighter area to the main player area
                    updateMainPlayer();

                    //else if 
                } else if(mainDefender === undefined) {
                    //defender var === '' then var defender = this.CharacterName (object?)
                    //set player variable to character values 
                    mainDefender = {
                        name:value.name, 
                        id:value.id,
                        imgSrc:value.imgSrc, 
                        HealthPoints:value.HealthPoints, 
                        attackPower:value.attackPower, 
                        counterAttackPower:value.counterAttackPower
                    }
                    //remove character from character pen
                    $('#'+value.id).fadeOut();
                    console.log(mainDefender.name) //works! 
                    //moves that character from character pen to main "defender" position
                    //set player variable to character values
                    //update DOM to reflect those values
                    updateMainDefender();
                }       
            };
        });     
                
    });        
        
    
            //The stage is now set to start the fight. 
    
//Player will "attack" by clicking the attack button
// create on click event for the attack button
$(document).on('click','#attack-btn', function () {
    //check to see if all players have been selected
    if (mainDefender === undefined) {
        //Send message that all players must be chosed before you can fight
        console.log('Not all players chosen')
    } else {
        //Deacrease mainDefender's health points by mainPLayer's current attack value
        mainDefender.HealthPoints -= mainPlayer.attackPower;
        //Deacrease mainPlayer's heathPoints by the defender's counterAttack value
        mainPlayer.HealthPoints -= mainDefender.counterAttackPower;
        //update mainPlayer's attack value to add 6 
        mainPlayer.attackPower = parseInt(mainPlayer.attackPower) + 6;
        //Modify DOM to current value
        updateMainDefender();
        updateMainPlayer();

        //if mainPlayer healthPoints > 0 && mainDefender.healthPoints <= 0
        if (mainPlayer.HealthPoints > 0 && mainDefender.HealthPoints <=0) {
            //Player Wins
            $('#right-hp').text("0");
            $('.modal-body').empty();
            $('.modal-body').html('Righteous dude! You totally won!!! <br> Click the button to go again!');
            $('#modalBox').modal('show');
            $('.modal-footer').on('click','.btn',function(){
                $('#modalBox').modal('hide');
                resetPlayer2();
            })
            
            
            //remove defender element from defender area
                
                   //mainDefender HP > 0 && mainPLayer HP <= 0 
        } else if (mainDefender.HealthPoints > 0 && mainPlayer.HealthPoints <= 0) {
                //Player loses
                $('#left-hp').text('0');
                $('.modal-body').empty();
                $('.modal-body').html('Bogus dude! You totally lost!!! <br> Click the button to go again!');
                $('#modalBox').modal('show');
                $('.modal-footer').on('click','.btn',function(){
                    $('#modalBox').modal('hide');   
                    resetPlayer1();
                    resetPlayer2();
                    $('#character-row').empty();
                    populateCharacters();        
            })
            }
        
    }
});

                
            
            
    //ToDo: 
        //Alert for needing to pick a character
        //modals for win & lose
        


    //Possible additions
        //additional stats on current players

        //Sound effects, theme song, mute sounds button
        //shuffle additional players into the main deck
        //additional styling






});