var Controls : RobotControls; 
  function OnCollisionEnter2D (hit : Collision2D) {
 	Controls.jump = true;
 }
function OnCollisionExit2D (hit : Collision2D) {
 	Controls.jump = false;
 }