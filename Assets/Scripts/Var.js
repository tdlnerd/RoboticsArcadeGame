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
var CheckName : UI.InputField;
var RandomName : String[];
var ULMessage : UI.Text;

function Awake () {
DontDestroyOnLoad (gameObject);
	if (FindObjectsOfType(GetType()).Length > 1)
         {
             Destroy(gameObject);
         }
}	

function Update () {
	if (Application.loadedLevelName == "BoothEnd") {
	Destroy(gameObject);
	return;
	}
ScoreBox.text = Score.ToString();
if (Application.loadedLevelName == "BoothArcade") {
	RoundBox.text = "Booth";
	}
	else {
RoundBox.text = Round.ToString();
}
DamageBar.value = Damage;
LiveBox.text = Live.ToString();
	if (Live < 1 &&  NoMore == false) {	
		Upload();
		return;
		}
	}

function Start () {
ULMessage.text = "";
Round = 1;
if (Application.loadedLevelName == "BoothArcade") {
Live = 1;
}
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
	if (CheckName.text == "") {
	CheckName.text = RandomName[Random.Range(0,RandomName.length)] + Random.Range(10,99).ToString();
	Debug.Log(CheckName.text);
	}
ULMessage.text = Name.text + " , your score is uploading";
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
    yield WaitForSeconds (2);
    Destroy(gameObject);
Application.LoadLevel("GameOver");
} else {
    // something wrong!
    yield WaitForSeconds (2);
    Debug.Log("WWW Error: "+ www.error);
Destroy(gameObject);
Application.LoadLevel("BoothEnd");
}
}