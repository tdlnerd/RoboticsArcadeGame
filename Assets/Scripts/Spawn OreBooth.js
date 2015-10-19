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
var L4YMin = -61;
var L4YMax = -76;
var L5YMin = -80;
var L5YMax = -100;
var L6YMin = -105;
var L6YMax = -115;
var L7YMin = -120;
var L7YMax = -170;
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
	InvokeRepeating("GemL1",0,0.025);
	InvokeRepeating("EnemyL1",0,0.1);
	yield WaitForSeconds(1);
	CancelInvoke("GemL1");
	CancelInvoke("EnemyL1");
	InvokeRepeating("GemL2",0, 0.05);
	InvokeRepeating("EnemyL2",0,0.2);
	yield WaitForSeconds(0.5);
	CancelInvoke("GemL2");
	CancelInvoke("EnemyL2");
	InvokeRepeating("GemL3",0, 0.1);
	InvokeRepeating("EnemyL3",0, 0.3 );
	yield WaitForSeconds(0.25);
	CancelInvoke("GemL3");
	CancelInvoke("EnemyL3");
	InvokeRepeating("GemL4",0, 0.1);
	InvokeRepeating("EnemyL4",0, 0.4);
	yield WaitForSeconds(0.25);
	CancelInvoke("GemL4");
	CancelInvoke("EnemyL4");
	InvokeRepeating("GemL5",0, 0.05);
	InvokeRepeating("EnemyL5",0, 0.2);
	yield WaitForSeconds(0.25);
	CancelInvoke("GemL5");
	CancelInvoke("EnemyL5");
	InvokeRepeating("GemL6",0, 0.025);
	InvokeRepeating("EnemyL6",0, 0.1);
	yield WaitForSeconds(0.25);
	CancelInvoke("GemL6");
	CancelInvoke("EnemyL6");
	InvokeRepeating("EnemyL79",0, 0.02);
	InvokeRepeating("GemL79",0, 0.008);
	yield WaitForSeconds(0.25);
	CancelInvoke("EnemyL79");
	CancelInvoke("GemL79");
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

function GemL4 () {
l4choice = Random.Range(0,Level3Ore.length);
clone = Instantiate(Level3Ore[l4choice]);
clone.transform.position.x = Random.Range(L1XMin, L1XMax);
clone.transform.position.y = Random.Range(L4YMin, L4YMax);
}

function GemL5 () {
l5choice = Random.Range(0,Level3Ore.length);
clone = Instantiate(Level3Ore[l5choice]);
clone.transform.position.x = Random.Range(L1XMin, L1XMax);
clone.transform.position.y = Random.Range(L5YMin, L5YMax);
}

function GemL6 () {
l6choice = Random.Range(0,Level3Ore.length);
clone = Instantiate(Level3Ore[l6choice]);
clone.transform.position.x = Random.Range(L1XMin, L1XMax);
clone.transform.position.y = Random.Range(L6YMin, L6YMax);
}

function GemL79 () {
l79choice = Random.Range(0,Level3Ore.length);
clone = Instantiate(Level3Ore[l79choice]);
clone.transform.position.x = Random.Range(L1XMin, L1XMax);
clone.transform.position.y = Random.Range(L7YMin, L7YMax);
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

function EnemyL4 () {
e4choice = Random.Range(0,L3Enemy.length);
clone = Instantiate(L3Enemy[e4choice]);
clone.transform.position.x = Random.Range(L1XMin, L1XMax);
clone.transform.position.y = Random.Range(L4YMin, L4YMax);
}

function EnemyL5 () {
e5choice = Random.Range(0,L3Enemy.length);
clone = Instantiate(L3Enemy[e5choice]);
clone.transform.position.x = Random.Range(L1XMin, L1XMax);
clone.transform.position.y = Random.Range(L5YMin, L5YMax);
}

function EnemyL6 () {
e6choice = Random.Range(0,L3Enemy.length);
clone = Instantiate(L3Enemy[e6choice]);
clone.transform.position.x = Random.Range(L1XMin, L1XMax);
clone.transform.position.y = Random.Range(L6YMin, L6YMax);
}

function EnemyL79 () {
e79choice = Random.Range(0,L3Enemy.length);
clone = Instantiate(L3Enemy[e79choice]);
clone.transform.position.x = Random.Range(L1XMin, L1XMax);
clone.transform.position.y = Random.Range(L7YMin, L7YMax);
}

