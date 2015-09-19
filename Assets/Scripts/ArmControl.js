var Coll : Collider2D;
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
     if(Input.GetKeyDown("a"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.localPosition.x = -0.01;
         Coll.enabled = false;
     }
	if(Input.GetKeyUp("d"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.localPosition.x = 1;
         Coll.enabled = true;
     }
}