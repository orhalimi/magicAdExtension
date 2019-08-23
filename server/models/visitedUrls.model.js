import mongoose from 'mongoose';

const visitedUrlsSchema = new mongoose.Schema({
    name: String,
    url: String
});

const visitedUrls = mongoose.model('visitedUrls', visitedUrlsSchema);

export default visitedUrls;