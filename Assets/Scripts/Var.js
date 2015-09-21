var Score : float;
var Damage : float;
var Round : float;
var ScoreBox : UI.Text;
var RoundBox : UI.Text;
var DamageBar : UI.Slider;
function Awake () {
DontDestroyOnLoad (gameObject);
}	

function Update () {
ScoreBox.text = Score.ToString();
RoundBox.text = Round.ToString();
DamageBar.value = Damage;
}

