// establish vars so they are global
var duplicity = {
    phone: false,
    tablet: false,
    desktop: false
};

// checks if screen size change has changed enough to qualify a new view
function detectScreenSizeChange(forceUpdate){
    // set default value
    if (forceUpdate === undefined){
        forceUpdate = false;
    }
    // get old screen size
    var oldDevice;
    if (duplicity.phone){
        oldDevice = "phone";
    }
    else if (duplicity.tablet){
        oldDevice = "tablet";
    }
    else if (duplicity.desktop){
        oldDevice = "desktop";
    }
    else {
        // first time defining device, so no previous definition
        oldDevice = null;
    }
    // get new screen size
    var screenSize = $(window).width();
    var newDevice;
    if (screenSize < 640){
        newDevice = "phone";
    }
    else if (screenSize >= 640 && screenSize <= 1024){
        newDevice = "tablet";
    }
    else {
        newDevice = "desktop";
    }
    // if they are not the same call the affect function to change document to respond to new device
    if ((oldDevice != newDevice) || forceUpdate){
        affectScreenSizeChange(oldDevice, newDevice);
    }
    // if there was a legitamate change of device (and this wasn't being called for the first time), alert custom user function if exists
    try{
        if (oldDevice != null && oldDevice != newDevice){
            screenSizeChanged(oldDevice, newDevice);
        }
    }
    catch(err){
        // do nothing
    }
}

// changes document to repond to change in screen size
function affectScreenSizeChange(from, to){
    // reset document class
    $("body").removeClass("phone tablet desktop");
    // reset HTML elements
    $("[data-display]").css("display", "none");
    // reset JS vars
    duplicity.phone = false;
    duplicity.tablet = false;
    duplicity.desktop = false;
    // change document
    if (to == "phone"){
        // js vars
        duplicity.phone = true;
        // add css class
        $("body").addClass("phone");
        // show html elements
        $("[data-display~='phone']").css("display", "");
    }
    else if (to == "tablet"){
        // js vars
        duplicity.tablet = true;
        // add css class
        $("body").addClass("tablet");
        // show html elements
        $("[data-display~='tablet']").css("display", "");
    }
    else {
        // js vars
        duplicity.desktop = true;
        // add css class
        $("body").addClass("desktop");
        // show html elements
        $("[data-display~='desktop']").css("display", "");
    }
}
// call function
detectScreenSizeChange();
// on full load, call function
$(document).ready(function(){
    detectScreenSizeChange(true);
});
// call function whenever user resizes
$(window).resize(detectScreenSizeChange);