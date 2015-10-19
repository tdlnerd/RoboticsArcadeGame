var Trig : UI.Toggle;
function Update () {
	if (Trig.isOn == true) {
GetComponent(TextMesh).text = "Booth Version";
}
	if (Trig.isOn == false) {
GetComponent(TextMesh).text = "Web Version";
}
}