var MusicSource : GameObject;

function Start () {
MusicSource = GameObject.Find("Audio");
}

function OnMouseDown () {
Destroy(MusicSource);
}