var Sparks : GameObject;
var DamageBar : UI.Slider;
function OnTriggerEnter2D (hit : Collider2D) {
 	if (hit.gameObject.tag == "Water") {
 	sparkingfx = Instantiate(Sparks, transform.position, transform.rotation);
 	DamageBar.value -= (5 * Time.deltaTime);
 	}
}
 	