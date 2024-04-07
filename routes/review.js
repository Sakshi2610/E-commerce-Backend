let express = require("express");

let router = express.Router();
let {
  review,
  reviewByID,
  addReview,
  addReviewByID,
  updateReviewByID,
  deleteReviewByID,
} = require("../controller/reviewController");

router.get("/reviews", review);

router.get("/review/:id", reviewByID);

router.post("/addReview", addReview);

router.post("/addReview/:id", addReviewByID);

router.put("/update", updateReviewByID);

// router.put("/update/:id", updateProductByID)

// router.delete("/delete", deleteReviews)

router.delete("/delete/:id", deleteReviewByID);
module.exports = router;
