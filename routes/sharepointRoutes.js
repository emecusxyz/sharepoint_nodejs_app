// routes/sharepointRoutes.js
const express = require('express');
const router = express.Router();
const { getSharePointSites, getSharePointLists,gs } = require('../controllers/sharepointController');

 
router.get('/sis', gs);  // Get lists from a specific site
router.get('/sites', getSharePointSites);  // Get all SharePoint sites
router.get('/sites/:siteId/lists', getSharePointLists);  // Get lists from a specific site

 
module.exports = router;