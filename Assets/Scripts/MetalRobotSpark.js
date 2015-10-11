var RobotPlayer : GameObject;
var spark : GameObject;
var Reload = false;
var dist : float;
function Start () {
RobotPlayer = GameObject.Find("RobotBase");
}

function Update () {
dist = Vector2.Distance(RobotPlayer.transform.position, transform.position);
if (dist < 6 && Reload == false) {
Shoot();
}
}

function Shoot () {
Reload = true;
clone = Instantiate(spark, transform.position, transform.rotation);
yield WaitForSeconds (Random.Range(0.1,1));
Reload = false;
}