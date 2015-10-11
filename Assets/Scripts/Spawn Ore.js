var Level1Ore : GameObject[];
var Level2Ore : GameObject[];
var Level3Ore : GameObject[];
var L1Enemy : GameObject[];
var L2Enemy : GameObject[];
var L3Enemy : GameObject[];
var L1XMin = -25;
var L1XMax = 60;
var L1YMin = -18;
var L1YMax = -7;
var L2YMin = -21;
var L2YMax = -46;
var L3YMin = -48;
var L3YMax = -60;
var C1 : Material;
var C2 : Material;
var C3 : Material;
var C4 : Material;
var RoundChecker : Var;
function Start () {
Man = GameObject.Find("Varsystem");
RoundChecker = Man.GetComponent(Var);
	if  (RoundChecker.Round < 6) {
	RenderSettings.skybox = C1;
	}
	if  (RoundChecker.Round < 11 && RoundChecker.Round > 5) {
	RenderSettings.skybox = C2;
	}
	if  (RoundChecker.Round < 16 && RoundChecker.Round > 12) {
	RenderSettings.skybox = C3;
	}
	if  (RoundChecker.Round > 17) {
	RenderSettings.skybox = C4;
	}
	if (RoundChecker.Round < 10) {
	InvokeRepeating("GemL1",0,(0.125 / RoundChecker.Round));
	InvokeRepeating("EnemyL1",0,(0.25 / RoundChecker.Round));
	yield WaitForSeconds(1);
	CancelInvoke("GemL1");
	CancelInvoke("EnemyL1");
	InvokeRepeating("GemL2",0,(0.25 / RoundChecker.Round));
	InvokeRepeating("EnemyL2",0,(0.5 / RoundChecker.Round));
	yield WaitForSeconds(0.5);
	CancelInvoke("GemL2");
	CancelInvoke("EnemyL2");
	InvokeRepeating("GemL3",0, (0.5 / RoundChecker.Round));
	InvokeRepeating("EnemyL3",0,(0.75 / RoundChecker.Round));
	yield WaitForSeconds(0.25);
	CancelInvoke("GemL3");
	CancelInvoke("EnemyL3");
	}
	if (RoundChecker.Round > 9) {
	InvokeRepeating("GemL1",0,0.05);
	InvokeRepeating("EnemyL1",0,(2 / 20));
	yield WaitForSeconds(1);
	CancelInvoke("GemL1");
	CancelInvoke("EnemyL1");
	InvokeRepeating("GemL2",0,0.1);
	InvokeRepeating("EnemyL2",0,(1 / 20));
	yield WaitForSeconds(0.5);
	CancelInvoke("GemL2");
	CancelInvoke("EnemyL2");
	InvokeRepeating("GemL3",0,0.2);
	InvokeRepeating("EnemyL3",0,(0.5 / 20));
	yield WaitForSeconds(0.25);
	CancelInvoke("GemL3");
	CancelInvoke("EnemyL3");
	}
}


function GemL1 () {
l1choice = Random.Range(0,Level1Ore.length);
clone = Instantiate(Level1Ore[l1choice]);
clone.transform.position.x = Random.Range(L1XMin, L1XMax);
clone.transform.position.y = Random.Range(L1YMin, L1YMax);
}

function GemL2 () {
l2choice = Random.Range(0,Level2Ore.length);
clone = Instantiate(Level2Ore[l2choice]);
clone.transform.position.x = Random.Range(L1XMin, L1XMax);
clone.transform.position.y = Random.Range(L2YMin, L2YMax);
}
function GemL3 () {
l3choice = Random.Range(0,Level3Ore.length);
clone = Instantiate(Level3Ore[l3choice]);
clone.transform.position.x = Random.Range(L1XMin, L1XMax);
clone.transform.position.y = Random.Range(L3YMin, L3YMax);
}

function EnemyL1 () {
e1choice = Random.Range(0,L1Enemy.length);
clone = Instantiate(L1Enemy[e1choice]);
clone.transform.position.x = Random.Range(L1XMin, L1XMax);
clone.transform.position.y = Random.Range(L1YMin, L1YMax);
}

function EnemyL2 () {
e2choice = Random.Range(0,L2Enemy.length);
clone = Instantiate(L2Enemy[e2choice]);
clone.transform.position.x = Random.Range(L1XMin, L1XMax);
clone.transform.position.y = Random.Range(L2YMin, L2YMax);
}

function EnemyL3 () {
e3choice = Random.Range(0,L3Enemy.length);
clone = Instantiate(L3Enemy[e3choice]);
clone.transform.position.x = Random.Range(L1XMin, L1XMax);
clone.transform.position.y = Random.Range(L3YMin, L3YMax);
}