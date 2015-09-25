var Score : float;
var Damage : float;
var Round : float;
var Live : float;
var ScoreBox : UI.Text;
var RoundBox : UI.Text;
var DamageBar : UI.Slider;
var LiveBox : UI.Text;
function Awake () {
DontDestroyOnLoad (gameObject);
	if (FindObjectsOfType(GetType()).Length > 1)
         {
             Destroy(gameObject);
         }
}	

function Update () {
ScoreBox.text = Score.ToString();
RoundBox.text = Round.ToString();
DamageBar.value = Damage;
LiveBox.text = Live.ToString();
	if (Live < 1) {
	Destroy(gameObject);
	}
}

function Start () {
Round = 1;
Live = 3;
Damage = 100;
}