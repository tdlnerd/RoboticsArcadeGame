#pragma strict
 
 
 
 //Inspector Variables
 var playerSpeed : float = 10; //speed player moves
 var turnSpeed : float = 100; // speed player turns
 
 function Update () 
 {
 
     MoveForward(); // Player Movement
     TurnRightAndLeft();//Player Turning
 }
 
 function MoveForward()
 {
 
     if(Input.GetKey("up"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.Translate(0,playerSpeed * Time.deltaTime,0);
     }
 
 }
 
 function TurnRightAndLeft()
 {
 
     if(Input.GetKey("right")) //Right arrow key to turn right
     {
         transform.Rotate(-Vector3.forward *turnSpeed* Time.deltaTime);
     }
 
     if(Input.GetKey("left"))//Left arrow key to turn left
     {
         transform.Rotate(Vector3.forward *turnSpeed* Time.deltaTime);
     }
 
 }