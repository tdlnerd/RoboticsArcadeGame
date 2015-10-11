var Player : Transform;
 var MoveSpeed = 4;
 var MaxDist = 10;
 var MinDist = 5;
 
 
 
 
 function Start () 
 {
PlayerVar = GameObject.Find("RobotBase");
Player = PlayerVar.transform;
 }
 
 function Update () 
 {
     var relativePoint = transform.InverseTransformPoint(Player.transform.position);
     
     if(Vector2.Distance(transform.position,Player.position) >= MinDist){
     
          transform.Translate(Vector2.right* MoveSpeed* Time.deltaTime);
 }
           
           
          if(Vector2.Distance(transform.position,Player.position) <= MaxDist) 
              {
                
    } 
    
    }