var visitedSites = [];

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('opt').addEventListener('click', optOut, false)
    document.getElementById('whitelist').addEventListener('click', whitelist, false)

    function optOut() {
      chrome.runtime.sendMessage({optOut: "yes"});


    }

    function whitelist() {
      visitedSites.push(window.location.href);
      ccpaClose();
    }

}, false)
