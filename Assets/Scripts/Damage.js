var Sparks : GameObject;
var DamageBar : UI.Slider;
var Damagevar : Var;

function Start () {
Damagevar.Damage = 100;
}
function OnTriggerEnter2D (hit : Collider2D) {
 	if (hit.gameObject.tag == "Water") {
 	sparkingfx = Instantiate(Sparks, transform.position, transform.rotation);
 	sparkingfx.transform.parent = gameObject.transform;
 	InvokeRepeating("TakeDamageWater",0,0.2);
 	}
}

function Update () {
	if (DamageBar.value == 0) {
	Destroy(gameObject);
}
}

function TakeDamageWater () {
Damagevar.Damage -= 2;
}

function OnTriggerExit2D (hit: Collider2D) {
	if (hit.gameObject.tag == "Water") {
	CancelInvoke("TakeDamageWater");
	}
}