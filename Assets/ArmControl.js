
function Update () {
 if(Input.GetKeyDown("w"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.localRotation = Quaternion.Euler(0,0,50);
     }
	if(Input.GetKeyUp("w"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.localRotation = Quaternion.Euler(0,0,0);
     }
      if(Input.GetKeyDown("s"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.localRotation = Quaternion.Euler(0,0,-50);
     }
	if(Input.GetKeyUp("s"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.localRotation = Quaternion.Euler(0,0,0);
     }
}