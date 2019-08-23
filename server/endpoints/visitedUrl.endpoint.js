
import VisitedUrlModel from '../models/visitedUrls.model';

async function addVisitedUrl(req, res) {
    const body = req.body;
    if (body && body.name && body.url) {
        const doc = new VisitedUrlModel({name: body.name, url: body.url});
        await doc.save();
    }
    res.json({'ok':1});
}

async function getVisitedUrls(req, res){
    const maxResults = 10;
    const data = await VisitedUrlModel.find({}).limit(maxResults).sort({$natural:1});
    res.json(data);
}

export default {addVisitedUrl, getVisitedUrls};