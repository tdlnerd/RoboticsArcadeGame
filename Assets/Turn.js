var previous: Vector3;
var velocity: float;
function Update () {
velocity = ((transform.position - previous).magnitude) / Time.deltaTime;
transform.Rotate(Vector3(0,0,(velocity * Time.deltaTime)*20));
Adjust();
}

function Adjust () {
yield WaitForSeconds (Time.deltaTime);
previous = transform.position;
}