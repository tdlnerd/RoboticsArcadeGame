var Control : String[];
var IsMoving = false;
var Direction : String;
var genrobotspeed : float;
var WTMin = 2;
var WTMax = 5;

function AIMove () {
IsMoving = true;
Choice = Random.Range(0,Control.Length);
Direction = Control[Choice];
	if (Direction == "Left") {
         yield WaitForSeconds (Random.Range(WTMin,WTMax));
         IsMoving = false;
	}
	if (Direction == "Right") {
	yield WaitForSeconds (Random.Range(WTMin,WTMax));
    IsMoving = false;
    }
    if (Direction == "Null") {
    yield WaitForSeconds (Random.Range(WTMin,WTMax));
      IsMoving = false;
     }
}

function Update () {
	if (IsMoving == false) {
	AIMove();
	}
	transform.Translate(Vector2.right * Time.deltaTime * genrobotspeed);
}