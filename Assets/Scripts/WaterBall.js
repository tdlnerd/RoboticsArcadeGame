

function OnCollisionEnter2D (hit : Collision2D) {
	if (hit.gameObject.tag == "EnemyRobot") {
	return;
	}
Destroy(gameObject);
}
