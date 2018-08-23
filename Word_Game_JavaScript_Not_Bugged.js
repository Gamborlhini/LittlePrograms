var validAdminNameArray = ["Nikhil"];
var validAdminPassArray = ["nikiboy"];
function game() {
  var start = prompt("In order to play this game your answer must be a word that has quotes around it. Are you ready to play, if so, please enter your age.");
  if (start >= 9 && start < 115) {
    alert("You are on a train to Washington D.C., you sneaked on the train in order to get away from some cops that were trailing you. The train attendants are coming around asking for tickets, but you don't have one.");
    var hideorSteal = prompt("Do you 'hide' or do you try to 'steal' somebody's ticket?");
    if (hideorSteal === "hide") {
      alert("You hide under the large seat and place your backpack in front of you in order to hide your body.");
      alert("The officer kicks your the backpack just for the fun of it, you let out a muffled grunt, the officer doesn't seem to notice and continues down the train");
      alert("A man kicks you in the back and says that you can get up now. He says that he also was a stowaway on the train and that he managed to steal a ticket.");
      var friendorAttackorIgnore = prompt("Do you want to 'befriend' the man, 'attack' the man, or do you want to 'ignore' him?");
      if (friendorAttackorIgnore === "befriend") {
        alert("You ask him if he wants to travel with you, he says he's got a place he's got to be, and can't travel with you. You ask him if he minds if you tag along. He puffs on his cigar and says that you can tag along as long as you follow his lead.");
        var travelorAlone = prompt("Do you want to 'travel' with him, or do you want to stay 'alone'?");
        if (travelorAlone === "travel") {
          alert("He pulls the emergency brake and jumps off the train. He starts heading to the barn.");
          var followorAbandon = prompt("Do you 'follow' him or do you 'leave' him and go to the city.");
        }
        else if (travelorAlone === "alone") {
          alert("You sit back down in your seat and you wait until the cart with food on it comes around. You buy a little sandwich and start eating away. A police officer starts running down the train towards you.");
          prompt("Do you 'remain' in your seat, or do you 'get' out of your se");
        }
        else {
          alert("That is an invalid answer");
        }
      }
      else if (friendorAttackorIgnore === "attack") {
        alert("You punch the man in the stomach. You feel a popping sensation in your knuckles and sharp pain. He hits you over the head with an official looking suitcase. You black out and start dreaming about money.");
        var fightorListen = prompt("You wake up in a musty smelling sack do you start 'fighting' out or 'listen'");
      }
      else if (friendorAttackorIgnore === "ignore") {
        alert("You take your backpack and walk to the back of the train. You notice an open door to the outside and an emergency brake.");
        var jumporLeave = prompt("Do you want to 'jump' off the train, or 'go' back to a seat");
      }
      else {
        alert("That is an invalid answer");
      }
    }
    else if (hideorSteal === "steal") {
      alert("You head to the back of the train and go towards the bathroom, you see that there is a door open, and you see the ground rushing past you. A man comes into the waiting area for the bathroom. You notice that he has a ticket in his hand. You also see a small city outside of the window. You notice that there is an emergency brake right next to you.");
      var hitorJump = prompt("Do you 'hit' the man and grab his ticket, or do you pull the emergency brake and 'jump' off the train.");
      if (hitorJump === "hit") {
        alert("You hit the man, and grab his ticket, he draws breath to yell but you throw him off the train. His phone falls out of his pocket along with his wallet.");
        var pretendorRunorTake = prompt("You hear a man coming back to the bathroom area, do you 'take' the phone and wallet, do you 'pretend' you don't know what happened, or do you 'run'?")
      }
      else if (hitorJump === "jump") {
        alert("You pull the emergency brake and you jump off the train once it has slowed down a little, you hit the ground and you feel extreme pain in your right arm. You see a small city about a mile away, you also see a small farm about ten miles away.");
        var barnorCity = prompt("Do you go to the 'city' or do you go to the 'barn'?");
        if (barnorCity === "city") {
          alert("You run into the steet of the city. Suddenly, you see a Taab Surbo speeding down the street. It's too late, the Taab hits you and roll onto the ground. You try to crawl to the sidewalk, suddenly, you hear a loud thunk, and you fall on the cold, hard, asphalt.");
          alert("Game Over. Please reload your browser in order to restart the game.");
        }
        else if (barnorCity === "barn") {
          alert("You start off to the barn, after about two hours your muscles start to ache and you feel tired.");
          var restorNot = prompt("Do you lie down and 'rest' or do you 'continue'?");
        }
        else {
          alert("That is an invalid answer");

        }
      }
      else {
        alert("That is an invalid answer");
      }
    }
    else if (hideorSteal === "admin") {
      alert("You have entered the secret room");
      var Username = prompt("Please enter your username.");
      var Password = prompt("Please enter your password.");
      for (var j = 0; j < validAdminNameArray.length; j++) {
        console.log(validAdminNameArray[j]);
        if (Username == validAdminNameArray[j] /*|| Username == "Nikhil"*/) {
          for (var i = 0; i < validAdminPassArray.length; i++) {
            console.log(validAdminPassArray[i]);
            if (Password == validAdminPassArray[i] /*|| Password == "nikiboy"*/) {
              alert("You have been admitted");
              window.location.href = "Secert_Room.html";
            }
            else {
              alert("Wrong Username/Password");
            }
          }
        }
        else {
          alert("Wrong Username/Password");
        }
      }
    }
    else {
      alert("That is an invalid answer, please reload your browser in order to restart the game.")
    }
  }
  else {
    alert("Sorry, you cannot play this game due to teen content")
  }
}
