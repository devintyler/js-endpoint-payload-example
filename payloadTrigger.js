// Dancing Potato Example -
// http://docs.syncano.io/docs/webhooks#section-step-3-run-a-webhook-with-payload-args
var Syncano = require('syncano');

var account = Syncano({accountKey: 'ACCOUNNTKEY'});

account.instance('INSTANCE').webhook('WEBHOOK').run({"user_search":"dancing"})
    .then(function(res){
        console.log(res.result.stdout);
    })
    .catch(function(err){
        console.log(err);
    });