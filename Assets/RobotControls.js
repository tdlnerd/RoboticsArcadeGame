
 
 
 
 //Inspector Variables
 var playerSpeed : float = 10; //speed player moves
 var turnSpeed : float = 100; // speed player turns
 
 function Update () 
 {
 
     MoveForward(); // Player Movement
 }
 
 function MoveForward()
 {
     if(Input.GetKey("down"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.Translate(Vector2.right * Time.deltaTime * playerSpeed);
         transform.rotation = Quaternion.Euler(0,0,-90);
     }
     if(Input.GetKey("left"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.Translate(Vector2.right * Time.deltaTime * playerSpeed);
         transform.rotation = Quaternion.Euler(180,0,180);
     }
     if(Input.GetKey("right"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.Translate(Vector2.right * Time.deltaTime * playerSpeed);
         transform.rotation = Quaternion.Euler(0,0,0);
     }
 
 }
 
 