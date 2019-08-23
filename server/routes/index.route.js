import visitedUrl from '../endpoints/visitedUrl.endpoint';
import express from 'express';

const router = express.Router();
router.post('/addVisitedUrl', visitedUrl.addVisitedUrl);
router.get('/getVisitedUrls', visitedUrl.getVisitedUrls);

export default router;