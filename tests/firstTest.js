module.exports = {
    tags: ["foo"],
    "Our first tests": function (browser) {
        browser.url("https://actionqa.com");
        browser.pause(1000);
        browser.end();
    },

    "Click test": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/click.html");
        browser.pause(1000);
        browser.click("#surprise-button")
        browser.pause(1000);

        browser.assert.visible("#surprise-message")
        browser.end();
    },

    "Fill form": function (browser) {
        browser
            .url("http://tutorials.actionqa.com/nwfree/simple-form.html")
            .assert.visible("#email")
            .assert.visible("#password")
            .assert.visible("#submit")
            .pause(500)
            .setValue("#email", "teste@teste.com.br")
            .pause(500)
            .setValue("#password", "123456")
            .pause(1000)
            .click("#submit")
            .pause(2000)
            .assert.visible("#submitted-email")
            .assert.containsText("#submitted-email", "Your email is teste@teste.com.br")
            .pause(500)
            .end();
    }
}