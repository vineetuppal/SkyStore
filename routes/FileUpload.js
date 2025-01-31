const express = require("express");
const router = express.Router();

const {localFileUpload, imageUpload, videoUpload, imageReducerUpload} = require("../controllers/fileUpload");

router.post("/imageUpload", imageUpload);
router.post("/localFileUpload", localFileUpload);
router.post("/videoUpload", videoUpload);
router.post("/imageReducerUpload", imageReducerUpload);

module.exports = router;