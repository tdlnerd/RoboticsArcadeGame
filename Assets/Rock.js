var Rock : GameObject;
var RockSFX : AudioClip;
function OnCollisionEnter2D (hit: Collision2D) {
	if (hit.gameObject.tag == "Player") {
	RockFX = Instantiate(Rock, transform.position, transform.rotation);
	GetComponent.<AudioSource>().PlayOneShot(RockSFX);
	yield WaitForSeconds (0.1);
	Destroy(gameObject);
	}
}