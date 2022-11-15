// document.addEventListener("load", load());

function activeState(objectByID) {
    const object = document.getElementById(objectByID)
    const window = document.getElementById(objectByID + '-window')
    if (object.className === "appIcon inactive") {
        object.className = 'appIcon active'
        window.className = 'window'
    } else if (object.className === "appIcon idle") {
        object.className = 'appIcon active'
        window.className = 'window'
    } else if (object.className === "appIcon active") {
        object.className = 'appIcon idle'
        window.className = 'windowHidden'
    } else {
        object.className = 'appIcon idle'
        window.className = 'windowHidden'
    } 
    console.log(objectByID + ' changed to ' + object.className)
}

function inactiveState(objectByID) {
    const object = document.getElementById(objectByID)
    const window = document.getElementById(objectByID + '-window')
    object.className = 'appIcon inactive'
    window.className = 'windowHidden'
    console.log(objectByID + ' changed to ' + object.className)
    return false
}

// Window Related Function

function closeWindow(objectByID) {
    const object = document.getElementById(objectByID)
    const window = document.getElementById(objectByID + '-window')
    object.className = 'appIcon inactive'
    window.className = 'windowHidden'
}

function largeWindow(object1Name, object2Name) {
    const object1 = document.getElementById(object1Name)
    const object2 = document.getElementById(object2Name)
    if (object1.className === 'visibleWindowContent') {
        object1.className = "invisibleWindowContent"
        object2.className = "visibleWindowContent"
    } else {
        object2.className = "invisibleWindowContent"
        object1.className = "visibleWindowContent"
    }
}

// System Related Function

function showSettings() {
    console.log('showSettings triggeered')
    const object = document.getElementById('customization')
    const settingsObject = document.getElementById('settings-icon-container')
    const settingsIcon = document.getElementById('settings-icon')
    if (settingsObject.className === "dockIconContainer") {
        settingsObject.className = "dockIconContainerActive"
        settingsIcon.src = "src/svg/dark/settings-active.svg"
        object.className = "customization"
    } else {
        settingsObject.className = "dockIconContainer"
        settingsIcon.src = "src/svg/dark/settings.svg"
        object.className = "customizationHidden"
    }
    return false;
}

function changeWallpaper(wallpaper) {
    document.cookie = "wallpaper=" + wallpaper + "";
    const html = document.getElementById('html')
    html.style = 'background-image: url(src/wallpaper/' + wallpaper + '.jpg)'
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function load() {
    if (document.cookie === "") {
        document.cookie = "wallpaper=default;";
    }

    const html = document.getElementById('html')
    html.style = 'background-image: url(src/wallpaper/' + getCookie('wallpaper') + '.jpg)'
}