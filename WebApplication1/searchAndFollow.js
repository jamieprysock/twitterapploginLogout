"usestrict";
// this is the function that will search through the information stored on both of our firebases to find the username and the messages.  This will display the other person's "profile"
//I set this up so our username never goes away.  It also has a seeme button that will alow people to go back and forth from the other page to their page.
var getname = function () {

    var request = new XMLHttpRequest();
    request.open("Get","https://twitterapplogin.firebaseio.com/.json", true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            var data = JSON.parse(this.response);
            for (var i in data) {
                if (document.getElementById("namesearch").value === data[i]["addname"]) {
                    var newsearch = data[i];
                    document.getElementById("othername").innerHTML = newsearch[addname];
                    document.getElementById("otherpic").innerHTML = newsearch[addpic];

                    ////this is where I need your Fire Base    
                    var request = new XMLHttpRequest();
                    request.open("Get", "IG's FB.json", true);
                    request.onload = function () {
                        for (var xx in Isiahdata)
                            if (newsearch[addname] === isiahdata[pothholder]["message"])
                                var postoldmessages = isiahdata["message"]
                        document.getElementById("othercontainer").innerHTML = postoldmessages["message"];
                    }

                    request.send();
                }


                request.send();

            }
        }
    }
    
    document.getElementById("follow").style.visibility = 'visible';
    document.getElementById("messageInput").style.visibility = 'hidden';
    document.getElementById("nameSearch").style.visibility = 'hidden';
    document.getElementById("postNow").style.visibility = "hidden";
    document.getElementById("container").style.visibility = "hidden";
    document.getElementById("logOut").style.visibility = "visible";
    document.getElementById("othername").style.visibility = "visible";
    document.getElementById("otherPic").style.visibility = "visible";
    document.getElementById("othercontainer").style.visibility = "visible";
    document.getElementById("seeme").style.visibility = "visible";

};

/// this is the button click seeme that takes a person back to their own page and tweets.

var seeMe = function () {

    document.getElementById("follow").style.visibility = 'hidden';
    document.getElementById("messageInput").style.visibility = 'visible';
    document.getElementById("nameSearch").style.visibility = 'visible';
    document.getElementById("postNow").style.visibility = "visible";
    document.getElementById("container").style.visibility = "visible";
    document.getElementById("logOut").style.visibility = "visible";
    document.getElementById("othername").style.visibility = "hidden";
    document.getElementById("otherPic").style.visibility = "hidden";
    document.getElementById("othercontainer").style.visibility = "hidden";
    document.getElementById("seeme").style.visibility = "hidden";

};









