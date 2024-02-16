const express = require("express");

const router = express.Router();
const OfferController = require("../controller/Offer");

router.get("/getAllOffers", OfferController.getAllOffers);
router.get("/getSingleOffer", OfferController.getSingleOffer);
router.post("/postOffer", OfferController.postOffer);
router.get("/updateOffers", OfferController.updateOffers);

module.exports=router;
