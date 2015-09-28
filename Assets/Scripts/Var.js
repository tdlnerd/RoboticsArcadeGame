var Score : float;
var Damage : float;
var Round : float;
var Live : float;
var ScoreBox : UI.Text;
var RoundBox : UI.Text;
var DamageBar : UI.Slider;
var LiveBox : UI.Text;
var highscore : float;
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
		if (highscore < Score) {
	PlayerPrefs.SetInt("High Score", Score);
	}
	Destroy(gameObject);
	}
}

function Start () {
highscore = PlayerPrefs.GetInt("High Score");
Round = 1;
Live = 3;
Damage = 100;
}