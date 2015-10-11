var Player : GameObject;
var previous: Vector3;
var velocity: float;
var MainAudio : AudioSource;

function Start() {
Player = GameObject.Find("RobotBase");
GetComponent.<AudioSource>().volume = 0;
yield WaitForSeconds (3);
GetComponent.<AudioSource>().volume = 0.4;
}

function Update () {
velocity = ((Player.transform.position - previous).magnitude) / Time.deltaTime;
	if (velocity > 0.1) {
	MainAudio.volume = 0.4;
	}
	if (velocity < 0.1) {
	MainAudio.volume = 0;
	}
PlayCheck();
}

function PlayCheck () {
previous = Player.transform.position;
}