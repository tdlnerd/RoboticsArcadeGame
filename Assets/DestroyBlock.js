 var PS : GameObject;
 function OnCollisionEnter2D (hit : Collision2D) {
 	if (hit.gameObject.tag == "DigDirt") {
	 hit.gameObject.active = false;
	 clone = Instantiate(PS, hit.transform.position, hit.transform.rotation);
	 }
	 if (hit.gameObject.tag == "Ore") {
	 Destroy(hit.gameObject);
	 }
}