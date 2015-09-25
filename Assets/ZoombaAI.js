var RobotPlayer : GameObject;
var LSprite : Sprite;
var RSprite : Sprite;
var robotSpeed = 10;
var projectile : GameObject;
var Reload = false;
var ZoombaDam = 5;
var ZoombaSFX : AudioClip;
function Start () {
RobotPlayer = GameObject.Find("RobotBase");
}


function Update () {
dist = Vector2.Distance(RobotPlayer.transform.position, transform.position);
var relativePoint = transform.InverseTransformPoint(RobotPlayer.transform.position);
if (relativePoint.x < 0.0) {
 	 gameObject.GetComponent.<SpriteRenderer>().sprite = LSprite;
 	 if (dist < 6) {
 	 transform.Translate(Vector2.left * Time.deltaTime * robotSpeed);
 	 	if (dist < 3 && Reload == false) {
 	 	ShootL();
		}
	}
}
 	if (relativePoint.x > 0.0) {
        gameObject.GetComponent.<SpriteRenderer>().sprite = RSprite;
        if (dist < 6) {
        transform.Translate(Vector2.right * Time.deltaTime * robotSpeed);
        	if (dist < 3 && Reload == false) {
 	 		ShootR();
		}
	}
}
}

function ShootR() {
Reload = true;
GetComponent.<AudioSource>().PlayOneShot(ZoombaSFX);
clone = Instantiate(projectile, transform.position, transform.rotation);
			clone.GetComponent.<Rigidbody2D>().velocity = transform.TransformDirection (Vector2.right * 10);
yield WaitForSeconds (Random.Range(0.5,2));
Reload = false;
}

function ShootL() {
Reload = true;
GetComponent.<AudioSource>().PlayOneShot(ZoombaSFX);
clone = Instantiate(projectile, transform.position, transform.rotation);
			clone.GetComponent.<Rigidbody2D>().velocity = transform.TransformDirection (Vector2.left * 10);
yield WaitForSeconds (Random.Range(0.5,2));
Reload = false;
}


