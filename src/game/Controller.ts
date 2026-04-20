/*Problem 11:  This class will be graded manually by the TAs

This class is the main driver of the game. It will interact with
the game elements, actions and the web page to capture user input.

11.1 Define a class named Controller. 

It should have the following members:
- member field to represnt the game - GameS26 object
- member field abilityOptions ActionType array - already given - 
    which represents the description of the abilities
    that can go into the backpacks - for now we have only 
    defined ActionSpawn so that is the only ability that will
    go in the backpacks - Part C we will update this to include
    the rest of the abilities.
Define a constructor with two parameters:
    - number of rows for the gameboard
    - number of columns for the gameboard
The constructor will call createGame 
and assigns it’s return value to the GameS26 member field
        (you will define createGame method in next step)

11.2 A method named createGame has two parameters: 
    number of rows and number of columns
    and returns a GameS26 object
    This method should create an instance of GameS26 with the following:
    - the GameBoard property should have the number of rows and columns passed in
    - the teamA object:
        - the color of the team is your choice (don't choose black or white) 
        - it should have 3 Piece objects: 
            a PieceBluehen, a PieceMinion, a PieceGhost
            - each Piece should have a backpack
            - each backpack should be created with a random number 
                of abilities - between [0-3] (inclusive)
                - in the next assignment the abilities 
                will  be randomly selected from the
                abilityOptions member field - as of now - we only have the option
                to add ActionSpawn so for now a random number of spawn abilities
                will be added to each backpack
    - the teamB object:
        - should be created the same way as teamA - choose a different color than teamA
          
    - the turn should be set to TeamA

    Note: you can create helper functions as you see fit
    - I strongly recommend you define a createABackpack method that
        creates an instance of a Backpack and loads it with the random number
        of randomly selected abilities.

11.3 Acccessor methods:
    - getGame 

11.4 An accessor method getTurn 
    has no parameters and returns a string indicating the Team whose turn it is.
    Format is not being tested but it should be similar to:
    "It is blue team's turn.

11.5 A method carryOutAction that three parameters in this order:
        - an ActionType to represent the Action the player wants to make
        - a start square location
        - an end square location
    - this method should TRY to create the appropriate action based on action type:      
    
        ActionType.Move -> ActionMove
        ActionType.Spawn -> ActionSpawn        
        ActionType.Attack -> ActionAttack
        ActionType.Recruit -> ActionRecruit
        
        (next Assignment we will add:)
        ActionType.Swap -> ActionSwapBP
        ActionType.Renew -> ActionRenew
        ActionType.Revive -> ActionRevive 

    If calling the perform action of the Action instance
    throws an error - this method should catch it 
    and log the error to the console and return false

    Otherwise this method should return true 

Once you have finished this method, you should be able to use: 
    npm run start 
to play your game with a text based interface.
Play your game to check if it is behaving as described in class.
*/

/*
import { GameS26 } from "./elements/GameS26";
import { Action } from "./actions/Action";
import { ActionMove } from "./actions/ActionMove";
import { ActionAttack } from "./actions/ActionAttack";
import { ActionSpawn } from "./actions/ActionSpawn";
import { ActionRecruit } from "./actions/ActionRecruit";
import { Team } from "./elements/Team";
import { PieceBlueHen } from "./elements/PieceBlueHen";
import { PieceMinion } from "./elements/PieceMinion";
import { Piece } from "./elements/Piece";
import { GameBoard } from "./elements/GameBoard";
import { Ability } from "./elements/Ability";
import { Backpack } from "./elements/Backpack";
import { BoardLocation } from "./elements/Utilities";
import { ActionType } from "./elements/Utilities";
//import { ActionSwapBP } from "./actions/ActionSwapBP";
//import { ActionRenew } from "./actions/ActionRenew";
//import { ActionRevive } from "./actions/ActionRevive";
import { PieceGhost } from "./elements/PieceGhost";
*/

export class Controller {
   
}

