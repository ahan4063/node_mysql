var mongoose = require('mongoose');

var regionsSchema = mongoose.Schema({
    RegionID: { Type: Number },
    RegionDescription: { Type: String }
});
regionsSchema.set('collection', 'region');
module.exports = mongoose.model('Region', regionsSchema);