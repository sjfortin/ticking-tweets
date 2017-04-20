var LatestTweets = {
    init: function() {
        twitterFetcher.fetch({
            id: '713444486051799040',
            domId: 'webticker'
        });
    }
};

LatestTweets.init();
