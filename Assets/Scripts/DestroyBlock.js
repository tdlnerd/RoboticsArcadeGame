 var ScoreBox : UI.Text;
 var PS : GameObject;
 var Scorevar : Var;
 function OnCollisionEnter2D (hit : Collision2D) {
 	if (hit.gameObject.tag == "DigDirt") {
	 hit.gameObject.SetActive(false);
	 clone = Instantiate(PS, hit.transform.position, hit.transform.rotation);
	 }
	 if (hit.gameObject.tag == "Ore") {
	 Calculations = hit.transform.localScale.x * 200;
	 Scorevar.Score = Scorevar.Score + Calculations;
	 Destroy(hit.gameObject);
	 }
}