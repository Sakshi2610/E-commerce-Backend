const review = (req, res) => {
  res.send("List of reviews");
};

const reviewByID = (req, res) => {
  const userId= req.params.id
  res.send(`User ID: ${userId}`);
};

const addReview = (req, res) => {
  res.send("Create multiple reviews");
};

const addReviewByID = (req, res) => {
  res.send("Create particular review");
};

// const updateReviews = (req, res) => {
//     res.send("update multiple products")
// }

const updateReviewByID = (req, res) => {
  res.send("update particular product");
};

// const deleteReviews = (req, res) => {
//     res.send("delete multiple reviews")
// }

const deleteReviewByID = (req, res) => {
  res.send("delete particular review");
};

module.exports = {
  review,
  reviewByID,
  addReview,
  addReviewByID,
  updateReviewByID,
  deleteReviewByID,
};
