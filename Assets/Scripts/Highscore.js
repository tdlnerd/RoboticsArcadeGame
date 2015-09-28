var UIbox : UI.Text;
function Start () {
highscore = PlayerPrefs.GetInt("High Score");
UIbox.text = highscore.ToString();
}