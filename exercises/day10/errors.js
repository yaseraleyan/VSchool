/*

This code contains only syntax and code style problems. The logic of the code works,

so DO NOT change the functionality of anything in here. For example, the `while` loop

at the end has syntax problems, not logic problems. It shouldn't be an infinite loop,

but the way to fix that is not to change the structure of the while loop.



In short, you shouldn't need to add your own statements anywhere,

just fix the existing ones.

*/





// Written by Kent, Clark



var Enemies=["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];
    
funtion Who_Wins (is-there-kryptonite,enemy_name)

{

if (!is-there-kryptonite)

{

    return "Superman beats " +enemyName+ ", of course";

}



else{

    return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyName +" could possibly win this one.";

}

    }



for (var i=0;i<enemies.length;i++)

{

    var is_there_kryptonite=(i%2=0);

    console.log(Who_Wins(is_there_kryptonite,enemies[i]));

}



function HowAttractedIsLoisLaneToMe ()

{

    // 1 is not at all attracted, 10 is "super" attracted...

    return Math.floor((Mat.random()*10)+1);

}



consol.log( HowAttractedIsLoisLaneToMe ()) ;



var clarkKent =true;

var superman false;



while (clarkKent){

    console.log("I'm just a nerdy columnist");

    var phoneBoothQuickChange =Math.random();

    if (phoneBoothQuickChange>= 0.5) {

        clarkKent===false;

        superman=true;

        console.log("Now I'm Superman!");}}