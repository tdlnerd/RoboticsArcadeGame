 var ScoreBox : UI.Text;
 var PS : GameObject;
 var Score = 000;
 function OnCollisionEnter2D (hit : Collision2D) {
 	if (hit.gameObject.tag == "DigDirt") {
	 hit.gameObject.active = false;
	 clone = Instantiate(PS, hit.transform.position, hit.transform.rotation);
	 }
	 if (hit.gameObject.tag == "Ore") {
	 Calculations = hit.transform.localScale.x * 200;
	 FinalScore = Score + Calculations;
	 ScoreBox.text = FinalScore.ToString();
	 Destroy(hit.gameObject);
	 }
}
 function Start () {
Calculations = "000";
ScoreBox.text = Calculations;
}