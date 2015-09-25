

function OnTriggerExit2D (hit : Collider2D) {
	if (hit.gameObject.tag == "DigDirt") {
	return;
	}
	if (hit.gameObject.tag == "Player") {
	return;
	}
	if (hit.gameObject.tag == "EnemyRobot") {
	return;
	}
Destroy(gameObject);
}
