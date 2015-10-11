var SparkSFX : AudioClip;
function Start () {
GetComponent.<Rigidbody2D>().AddForce(Vector2(Random.Range(-200,300),Random.Range(200,300)));
	if (SparkSFX == null) {
	return;
	}
GetComponent.<AudioSource>().PlayOneShot(SparkSFX);
}
 function OnCollisionEnter2D (hit : Collision2D) {
 	if (hit.gameObject.tag == "EnemyRobot") {
 	return;
 	}
 	if (hit.gameObject.tag == "DigDirt") {
	 hit.gameObject.SetActive(false);
	 Destroy(gameObject);
}
Destroy(gameObject);
}

function Update () {

}