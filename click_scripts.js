/**
 * Contains functions triggered by clicks, to be inserted into page.
 */
visitedSites = [];

 document.addEventListener('DOMContentLoaded', function () {
     document.getElementById('CCPAButton').addEventListener('click', ccpaButtonClick, false)
     document.getElementById('CCPADontShow').addEventListener('click', ccpaDontShow, false)


    /**
     * Close notification when 'X' button is clicked.
    */

   chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {id: "check"}, updatePopup)
    })

    function updatePopup(res){{
        if(res.check === 1)
        {
            var div = document.createElement('div');
            div.textContent = `This website sells your data. Click above to opt out.`;
            document.body.appendChild(div);
        } else {
            var div = document.createElement('div');
            div.textContent = `This website does not appear to sell your data. Check the privacy policy for more information`;
            document.body.appendChild(div);
        }
    }}

    function ccpaClose(){
        var popup = document.getElementById('CCPAPopup');
        var close = document.getElementById('CCPAClose');
        var moreInfo = document.getElementById('CCPAMoreInfo');
        var button = document.getElementById('CCPAButton');
        popup.style.display = 'none';
        close.style.display = 'none';
        moreInfo.style.display = 'none';
        button.style.display = 'none';
    }

    /**
     * Find and click CCPA opt-out link
     */
    function ccpaButtonClick(){
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {id: "optout"})
        })
    }

    /**
     * Find and click CCPA opt-out link
     */
    function ccpaDontShow(){
        visitedSites.push(window.location.href);

        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {id: "dontshow"})
        })
    }

}, false)
