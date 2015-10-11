import SimpleJSON;
var Score : float;
var Damage : float;
var Round : float;
var Live : float;
var ScoreBox : UI.Text;
var RoundBox : UI.Text;
var DamageBar : UI.Slider;
var LiveBox : UI.Text;
var HSBox : UI.Text;
var highscore : String;
var url = "http://files.helloben.co/cashdirt_server/insert";
var HA : String;
var UploadT = false;
var NoMore = false;
var Name : UI.Text;
var highscoreUrl= "http://files.helloben.co/cashdirt_server/insert";

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
	if (Live < 1 &&  NoMore == false) {	
		Upload();
		return;
		}
	}

function Start () {
Round = 1;
Live = 3;
Damage = 100;
Siteurl = WWW("http://files.helloben.co/cashdirt_server/view");
yield Siteurl;
a = JSON.Parse(Siteurl.text);
	if (Siteurl.error == null) {
Debug.Log(a[0]["name"]);
tscore = a[0]["score"];
tname = a[0]["name"];
Debug.Log(tscore);
highscore = tscore;
HSBox.text = tname + "  " + tscore;
}
	else {
	HSBox.text = " ";
	}
}

function Upload() {
NoMore = true;
UploadT = true;
var form = new WWWForm();
form.AddField( "name", Name.text);
form.AddField( "score", Score.ToString());
var www = new WWW( url, form );

// wait for request to complete
yield www;
if (www.error == null)
{
    Debug.Log("No Error");
    Destroy(gameObject);
Application.LoadLevel("GameOver");
} else {
    // something wrong!
    Debug.Log("WWW Error: "+ www.error);
Destroy(gameObject);
Application.LoadLevel("GameOver");
}
}