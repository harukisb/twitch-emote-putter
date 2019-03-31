(function(){
    const PUT_TEXT = "honmaniyoMonster1 < ";
    const CHATBOX_SELECTOR = 'textarea[data-a-target="chat-input"]';

    $(document).on("ready", CHATBOX_SELECTOR, function(e) {
        let $ta = $(CHATBOX_SELECTOR);
        if ($ta.val() === "") {
            $ta.val(PUT_TEXT);
        }
    });

    $(document).on("click", CHATBOX_SELECTOR, function(e) {
        let $ta = $(CHATBOX_SELECTOR);
        if ($ta.val() === "") {
            $ta.val(PUT_TEXT);
        }
    });

    $(document).on("keydown", CHATBOX_SELECTOR, function(e) {
        if (e.keyCode === 13) { // Enterが押された
            if (e.shiftKey) { // Shiftキーも押された
                $.noop();
            } else {
                setTimeout(function() {
                    let $ta = $(CHATBOX_SELECTOR);
                    $ta.val(PUT_TEXT);
                }, 10);
            }
        } else {
            $.noop();
        }
    });
}());
