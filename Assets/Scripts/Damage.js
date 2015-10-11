var Sparks : GameObject;
var DamageBar : UI.Slider;
var Damagevar : Var;
var Die : AudioClip;
var GenSound : AudioClip;
function Start () {
Systemvar = GameObject.Find("Varsystem");
Damagevar = Systemvar.GetComponent(Var);
}
function OnTriggerEnter2D (hit : Collider2D) {
 	if (hit.gameObject.tag == "Water") {
 	sparkingfx = Instantiate(Sparks, transform.position, transform.rotation);
 	sparkingfx.transform.parent = gameObject.transform;
 	InvokeRepeating("TakeDamageWater",0,0.2);
 	}
}

function OnCollisionEnter2D (hitcol: Collision2D) {
if (hitcol.gameObject.tag == "Rock") {
 	Damagevar.Damage -= 10;
 	transform.localScale.y = 0.1;
 	yield WaitForSeconds (0.1);
 	transform.localScale.y = 0.5;
 	}
if (hitcol.gameObject.tag == "Spark") {
	Damagevar.Damage -= 5;
 }
 if (hitcol.gameObject.tag == "GenericDamage") {
	Damagevar.Damage -= 8;
	GetComponent.<AudioSource>().PlayOneShot(GenSound);
 }
 if (hitcol.gameObject.tag == "WB") {
	Damagevar.Damage -= 10;
 }
}
function Update () {
	if (Damagevar.Damage < 1) {
	Damagevar.Live -= 1;
	GetComponent.<AudioSource>().PlayOneShot(Die);
	Damagevar.Damage = 100;
	transform.position = Vector2(25.14001,-3.5);
	}
	if (Damagevar.Live < 1) {
	Destroy(gameObject);
	}
}

function TakeDamageWater () {
Damagevar.Damage -= 3;
}

function OnTriggerExit2D (hit: Collider2D) {
	if (hit.gameObject.tag == "Water") {
	CancelInvoke("TakeDamageWater");
	}
}