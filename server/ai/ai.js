const express = require("express");
const router = express.Router();

router.post("/analyze", async (req, res) => {

  const { code } = req.body;

  const feedback = `
Time Complexity: O(n)

Suggestions:
• Consider using a hashmap
• Handle edge cases
• Reduce nested loops if possible
`;

  res.json({ feedback });
});

module.exports = router;
