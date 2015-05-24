var PageView = require('./base');
var jobDetails = require('../templates/job-details.hbs');


module.exports = PageView.extend({
    pageTitle: 'Job details',
    template: jobDetails
});
