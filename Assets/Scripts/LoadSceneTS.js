var lname : String;
var bname : String;
var Trig : UI.Toggle;
function OnMouseDown () {
	if (Trig.isOn == true) {
Application.LoadLevel(bname);
}
	if (Trig.isOn == false) {
Application.LoadLevel(lname);
}
}