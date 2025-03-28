const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/analyze-load", (req, res) => {
    const { weight, radius } = req.body;

    if (!weight || !radius || isNaN(weight) || isNaN(radius)) {
        return res.status(400).json({ error: "Invalid input values" });
    }

    const loadMoment = weight * radius;
    res.json({ loadMoment, message: `Load Moment: ${loadMoment} kg·m` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
