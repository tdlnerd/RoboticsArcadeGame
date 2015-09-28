var Gem : GameObject[];
function Start () {
choice = Random.Range(0,Gem.length);
clone = Instantiate(Gem[choice]);
clone.GetComponent.<Collider>().enabled = false;
clone.GetComponent.<Rigidbody2D>().isKinematic = true;
clone.transform.parent = gameObject.transform;
clone.transform.position = Vector2(0.72,0);
}