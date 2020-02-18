//Check for Session

function checkSession() {
    eel.checkSessionpy()(function(res) {
        if (res == 0) {
            window.location = "login.html"
        }
    })
}

// Login Page

function loginjs() {
    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    eel.loginpy(username, pass)(function(res) {
        if (res == 1) {
            window.location = "public/index.html";
        } else {
            alert("Sorry Wrong Username or password!");
            window.location = "login.html";
        }
    });
}

//Logout

function logoutjs() {
    eel.logoutpy();
    window.location = "login.html";
}

// Index Page

function trainingjs() {
    var loading = document.getElementById('loading');
    loading.style.display = 'block';
    var mainpage = document.getElementById('mainpage');
    mainpage.style.opacity = '0.25';
    eel.trainingpy()(function(res) {
        if (res == "completed" &&
            loading.style.display === 'block') {
            loading.style.display = 'none';
            mainpage.style.opacity = '1';
            alert("Training Completed!");
        }
    })
}

function facerecogjs() {
    eel.facerecogpy();
}

// Information Page

function timestampjs() {
    var timeStamp = document.getElementById("timestamp").value;
    eel.timestamppy(timeStamp);
}

function photojs() {
    var photoSearch = document.getElementById("photo").value;
    eel.photopy(photoSearch);
}

// Dataset Page

function datasettrainjs() {
    var userId = document.getElementById("userid").value;
    var name = document.getElementById("username").value;
    var loading = document.getElementById('loading');
    loading.style.display = 'block';
    var mainpage = document.getElementById('mainpage');
    mainpage.style.opacity = '0.25';
    eel.datasettrainpy(userId, name)(function(res) {
        if (res == "completed" &&
            loading.style.display === 'block') {
            loading.style.display = 'none';
            mainpage.style.opacity = '1';
            alert("Dataset has been trained Successfully!");
        }
    })
}