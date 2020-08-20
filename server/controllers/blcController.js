const blc = require('broken-link-checker');
const options = {
    acceptedSchemes: ["http", "https"],
    cacheExpiryTime: 3600000,
    filterLevel: 1,
    honorRobotExclusions: true,
    requestMethod: "head", // "head", "get"
    retry405Head: true,
    userAgent: "broken-link-checker/0.7.0 Node.js/5.5.0 (OS X El Capitan; x64)",
    excludedKeywords: [],
    excludedSchemes: ["data", "geo", "javascript", "mailto", "sms", "tel"],
    excludeExternalLinks: false,
    excludeInternalLinks: false
};

module.exports = {
    async singlePageBLC(url) {
        console.log('single page checking started... ');
        var brokenLinks = [];
        return await new Promise((resolve, reject) => {
            var urlChecker = new blc.UrlChecker(options, {
                link: function (result, customData) {
                    if (result.broken) {
                        brokenLinks.push('|----broken link---- ' + result.url.original);
                        console.log('single page broken link ===> ', result.url.original);
                    }
                },
                end: function () {
                    resolve(brokenLinks);
                    console.log("--------- Single Page Checking is Completed -----------");
                }
            });
            urlChecker.enqueue(url);
        });
    },

    async websiteBLC(url) {
        console.log('website checking started... ');
        var brokenLinks = [];
        return await new Promise((resolve, reject) => {
            var siteChecker = new blc.SiteChecker(options, {
                robots: function (robots, customData) { },
                html: function (tree, robots, response, pageUrl, customData) { },
                junk: function (result, customData) {
                    if (result.broken && blc[result.brokenReason] === "Not Found (404)") {
                        brokenLinks.push('|----broken link---- ' + result.url.original);
                        console.log("website junk >> broken link: " + result.url.original)
                    }
                },
                link: function (result, customData) {
                    if (result.broken && blc[result.brokenReason] === "Not Found (404)") {
                        brokenLinks.push('|----broken link---- ' + result.url.original);
                        console.log("website link >> broken link: " + result.url.original)
                    }
                },
                page: function (error, pageUrl, customData) { },
                site: function (error, siteUrl, customData) { },
                end: function () {
                    console.log("--------- Website checking is Completed -----------");
                    resolve(brokenLinks);
                }
            });
            siteChecker.enqueue(url);
        });
    }
}