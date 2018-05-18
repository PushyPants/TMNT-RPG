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

function updateMainDefender (){
    $('#left-hp').text('Health Points: '+mainPlayer.HealthPoints);
    $('#left-player-name').text(mainPlayer.name);
    $('#left-player-img').attr('src',mainPlayer.imgSrc);
}

// Character row populates with the four characters (random order possibly)
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
})


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
                    updateMainDefender();

                    //else if 
                } else if(mainDefender === undefined) {
                    
                }       
            };
        });     
        //defender var === '' then var defender = this.CharacterName (object?)
        //moves that character from fighter area to main "defender" position
        //set player variable to character values
        //update DOM to reflect those values
        //else
        // either nothing happens or notification that players have already been chosen and must fight
        
        //other characters move to be centered in the selection area
        
    });        
        
    
            //The stage is now set to start the fight. 
    
//Player will "attack" by clicking the attack button
    // create on click event for the attack button
        //.on('click') event 
            //Deacrease mainDefender's health points by mainPLayer's current attack value
                //Modify DOM to current value
            //Deacrease mainPlayer's heathPoints by the defender's counterAttack value
                //Modify DOM to current value
            //update mainPlayer's attack value to add 6 (mainPlayer.attackValue += 6 perhaps)
            
            //if mainPlayer healthPoints > 0 && mainDefender.healthPoints <= 0
                //Player Wins
                //remove defender element from defender area
                    //clear all defender DOM values 
                //Clear defender variable (set back to '')
            //else if
                //mainDefender HP > 0 && mainPLayer HP <= 0 
                    //Player loses
        








});