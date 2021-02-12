/**
 * Background script: updates extension icon if opt-out link is detected.
 */

// Listen for search results
chrome.runtime.onMessage.addListener(updateIcon);

// Update icon based on search result
function updateIcon(response){
    if(response.linkDetected == "yes"){
        chrome.browserAction.setIcon({path: "icons/icon_active.png"});
    } else if(response.linkDetected == "bad") {
        chrome.browserAction.setIcon({path: "icons/icon_warning.png"});
    } else {
        chrome.browserAction.setIcon({path: "icons/icon_inactive.png"});
    }
}
