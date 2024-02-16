const express = require("express");

const router = express.Router();
const QueryController = require("../controller/Query");

router.get('/getAllQuery',QueryController.getAllQuery);
router.post('/postQwuery',QueryController.postQwuery);

module.exports=router;