var Controls : RobotControls; 
  function OnCollisionStay2D (hit : Collision2D) {
  	if (hit.gameObject.tag == "DigDirt" && Controls.jump == false) {
 	Controls.jump = true;
 	}
 	if (hit.gameObject.tag == "Bottom" && Controls.jump == false) {
 	Controls.jump = true;
 	}
 }
function OnCollisionExit2D (hit : Collision2D) {
 	Controls.jump = false;
 	}