// get the document ready for the scripts to run (I'm using the shorthand version of $(document).ready(function(){}) )
$(function(){

// Create players (objects --> [perhaps array of objects?]) with their own values {name:, image:, healthPoint:, attackPower: '6', counterAttackPower:, }
// create (empty?) player variable

var mainPlayer = {name:'', imgSrc:'', healthPoints:''}
// create (empty?) defender variable

//Game starts

// Character row populates with the four characters (random order possibly)

//Click on character element selects the players character choice
    //create on click event for the "character" element .class
        //if player var === '' then var player = this.characterName (object?)
            //moves that character from the fighter area to the main player area
            //set player variable to character values (Main Player attackPower will be set to 6) -- I think everything else will be 'this.value'
                //update DOM to reflect those values
        //else if 
        //defender var === '' then var defender = this.CharacterName (object?)
            //moves that character from fighter area to main "defender" position
            //set player variable to character values
                //update DOM to reflect those values
        //else
        // either nothing happens or notification that players have already been chosen and must fight

    //other characters move to be centered in the selection area

                    
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