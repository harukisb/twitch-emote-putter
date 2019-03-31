(function(){
    const PUT_TEXT = "honmaniyoMonster1 < ";
    const CHATBOX_SELECTOR = 'textarea[data-a-target="chat-input"]';

    const URLs = ["https://www.twitch.tv/harukisb",
        "https://www.twitch.tv/osushiek",
        "https://www.twitch.tv/kirbis_044",
        "https://www.twitch.tv/lovegorilla39",
        "https://www.twitch.tv/ke_sapphire"
    ];

    $(document).on("ready", CHATBOX_SELECTOR, function(e) {
        let $ta = $(CHATBOX_SELECTOR);
        if ($ta.val() === "") {
            putText($ta);
        }
    });

    $(document).on("click", CHATBOX_SELECTOR, function(e) {
        let $ta = $(CHATBOX_SELECTOR);
        if ($ta.val() === "") {
            putText($ta);
        }
    });

    $(document).on("keydown", CHATBOX_SELECTOR, function(e) {
        if (e.keyCode === 13) { // Enterが押された
            if (e.shiftKey) { // Shiftキーも押された
                $.noop();
            } else {
                setTimeout(function() {
                    let $ta = $(CHATBOX_SELECTOR);
                    putText($ta);
                }, 10);
            }
        } else {
            $.noop();
        }
    });

    let lastCheckedUrl = location.href;
    function putText(textArea) {
        for (const url of URLs) {
            if (location.href.startsWith(url)) {
                textArea.val(PUT_TEXT);
                lastCheckedUrl = location.href;
                return;
            }
        }
    }
}());
