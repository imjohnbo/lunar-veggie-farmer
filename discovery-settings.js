/*******************************************
 discovery defaults/settings file
********************************************/

// create node
var settings = {}

// general settings
settings.verbose = true;
settings.registryID = null;
settings.renewTTL = 30000;
settings.contentType = "application/x-www-form-urlencoded";
settings.acceptType = "application/json";

// your service identifiers
settings.serviceName = "an even better lunar veggie farmer";
settings.serviceURL = "https://lunar-veggie-farmer.glitch.me/";
settings.tags = "imjohnbo veggies free";

// the registry service endpoints
settings.registerURL = "https://open-disco-imjohnbo.glitch.me/reg/";
settings.renewURL = "https://open-disco-imjohnbo.glitch.me/renew/";
settings.unregisterURL = "https://open-disco-imjohnbo.glitch.me/unreg/";
settings.findURL = "https://open-disco-imjohnbo.glitch.me/find/";
settings.bindURL = "https://open-disco-imjohnbo.glitch.me/bind/";

// publish node
module.exports = settings;
