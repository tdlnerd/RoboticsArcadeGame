var Check : Var;
function Awake () {
DontDestroyOnLoad (gameObject);
	if (FindObjectsOfType(GetType()).Length > 1)
         {
             Destroy(gameObject);
         }
}	
function Update () {
	if (Check.Live < 1) {
	Destroy(gameObject);
	}
}