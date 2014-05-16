"use strict";
// The following hides the actual html elements until after the subimt button is licked:

document.getElementById("retweet").style.visibility = 'hidden';
document.getElementById("follow").style.visibility = 'hidden';
document.getElementById("searchPeople").style.visibility = 'hidden';
document.getElementById("messageInput").style.visibility = 'hidden';
document.getElementById("nameSearch").style.visibility = 'hidden';
document.getElementById("postNow").style.visibility = "hidden";
document.getElementById("container").style.visibility = "hidden";
document.getElementById("logOut").style.visibility = "hidden";
document.getElementById("othername").style.visibility = "hidden";
document.getElementById("otherPic").style.visibility = "hidden";
document.getElementById("othercontainer").style.visibility = "hidden";
document.getElementById("seeme").style.visibility = "hidden";


//var ourDefaultimage = "<img src =/'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oWvCrkzPjX9VBkJavc48RfBP1mSLPYMUIe8FpSaNzpgWWEL55A'";

//firebase https://twitterapplogin.firebaseio.com/#-JMvHdakPVVLxquAmtep|7d7cb2dd47477e8433723554b385339e

//var referencceobject = {
  ///  "addedPic" : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oWvCrkzPjX9VBkJavc48RfBP1mSLPYMUIe8FpSaNzpgWWEL55A'
//};
// This is the function that creates the profile information
var newProfileConstructor = function (name, image, userid) {
    this.addedName = name,
   this.addedPic = image,
    this.userNum = userid

};
//This links the profile creator to the reference object, but I'm not using it at this time.
//newProfileConstructor.prototype = referencceobject;
//https://twitterapplogin.firebaseio.com/#


var request = new XMLHttpRequest();
request.open("POST", "https://twitterapplogin.firebaseio.com/.json", false);
request.onload = function () {
    if (this.status >= 200 && this.status < 4000) {
        var data = JSON.parse(this.response);
        console.log(data);
    }
    else {
        console.log(this.response);
    }
}
request.onerror = function () {
    console.log("Whoops, our connection failed");
};

var request = new XMLHttpRequest



var userNum;


var addNewUser = function () {
    if (document.getElementById("newPic").value ==+ " ") {
        document.getElementById("newPic").value = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oWvCrkzPjX9VBkJavc48RfBP1mSLPYMUIe8FpSaNzpgWWEL55A';

    }
 var users =  new newProfileConstructor(document.getElementById("newName").value, document.getElementById("newPic").value, userNum = userNum + 1);



 var request = new XMLHttpRequest();
 request.open("POST", "https://twitterapplogin.firebaseio.com/.json", false);
 request.onload = function () {
     if (this.status >= 200 && this.status < 4000) {
         var data = JSON.parse(this.response);
         console.log(data);
         alert("You are now a user for our app!! Hurray!");

         document.getElementById("nameprofile").innerHTML = document.getElementById("newName").value;
         document.getElementById("picPro").innerHTML = '<img src=' + '"' + document.getElementById("newPic").value + '"' + "/>";


         document.getElementById("newName").style.visibility = "hidden";
         document.getElementById("newPic").style.visibility = "hidden";
         document.getElementById("newUser").style.visibility = "hidden";
         document.getElementById("password").style.visibility = "hidden";
         document.getElementById("password2").style.visibility = "hidden";
         document.getElementById("hiddenhtml").style.visibility = "hidden";
         document.getElementById("text1").style.visibility = "hidden";
         document.getElementById("text2").style.visibility = "hidden";
         document.getElementById("retweet").style.visibility = 'visible';
         document.getElementById("searchPeople").style.visibility = 'visible';
         document.getElementById("messageInput").style.visibility = 'visible';
         document.getElementById("nameSearch").style.visibility = 'visible';
         document.getElementById("postNow").style.visibility = "visible";
         document.getElementById("container").style.visibility = "visible";
         document.getElementById("logOut").style.visibility = "visible";
     }
     else {
         console.log(this.response);
     }
 }
 request.onerror = function () {
     console.log("Whoops, our connection failed");
 };
    request.send(JSON.stringify(users));
   
};

//This is where when a person logs in the log in is checked and the profile will be returned:


var signin = function () {
    var request = new XMLHttpRequest();
    request.open("Get","https://twitterapplogin.firebaseio.com/.json", true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            var data = JSON.parse(this.response);
            for (var i in data) {
                if (document.getElementById("password").value === data[i]["addedName"]) {

                    var userprofile = data[i];
                    var getpic = userprofile["addedPic"];
                    
                    document.getElementById("nameprofile").innerHTML = userprofile["addedName"];
                    document.getElementById("picPro").innerHTML ='<img src=' + '"' + getpic + '"' + "/>";
                    document.getElementById("newName").style.visibility = "hidden";
                    document.getElementById("text1").style.visibility = "hidden";
                    document.getElementById("newPic").style.visibility = "hidden";
                    document.getElementById("text2").style.visibility = "hidden";
                    document.getElementById("newUser").style.visibility = "hidden";
                    document.getElementById("password").style.visibility = "hidden";
                    document.getElementById("password2").style.visibility = "hidden";
                    document.getElementById("hiddenhtml").style.visibility = "hidden";
                    document.getElementById("logOut").style.visibility = "visible";
                    document.getElementById("retweet").style.visibility = 'visible';
                    document.getElementById("searchPeople").style.visibility = 'visible';
                    document.getElementById("messageInput").style.visibility = 'visible';
                    document.getElementById("nameSearch").style.visibility = 'visible';
                    document.getElementById("postNow").style.visibility = "visible";
                    document.getElementById("container").style.visibility = "visible";
                    

                }
                else {
                    document.getElementById("password").innerHTML = " ";

                }
                
            }
        }

        else { 
            console.log(this.response);
            alert("no go")
        }
    }
        
    request.send();
    
};

//badly named.  This is where we go back to the log in screen

var gohome = function () {
    
    
    document.getElementById("newName").style.visibility = "visible";
    document.getElementById("text1").style.visibility = "visible";
    document.getElementById("newPic").style.visibility = "visible";
    document.getElementById("text2").style.visibility = "visible";
    document.getElementById("newUser").style.visibility = "visible";
    document.getElementById("password").style.visibility = "visible";
    document.getElementById("password2").style.visibility = "visible";
    document.getElementById("hiddenhtml").style.visibility = "visible";
    document.getElementById("logOut").style.visibility = "hidden";
    document.getElementById("retweet").style.visibility = 'hidden';
    document.getElementById("follow").style.visibility = 'hidden';
    document.getElementById("searchPeople").style.visibility = 'hidden';
    document.getElementById("messageInput").style.visibility = 'hidden';
    document.getElementById("nameSearch").style.visibility = 'hidden';
    document.getElementById("postNow").style.visibility = "hidden";
    document.getElementById("container").style.visibility = "hidden";
    document.getElementById("nameprofile").innerHTML = " ";
    document.getElementById("picPro").innerHTML = " ";
    
};
//step 2.1 when the sign up button is clicked make sure that the sign in button is gone.
//step2.2 make sure that when the log in button is pressed that the input fields for the sign up as well as sign up all go invisible "hidden"
//step three: taking those variables and plugging them into the constructor/creator
//step four: sending the information shoved into an object to firebase as one item string
//step five: upon log in checking that user input matches the user log in information, if loop that loops through the names.  Only use first names,kiss.









