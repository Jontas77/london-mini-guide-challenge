const express = require("express");
const cors = require("cors");

// Load cities data
const stratford = require("./data/Stratford.json");
const heathrow = require("./data/Heathrow.json");
const harrow = require("./data/Harrow.json");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) =>
  res.send(
    "Welcome to London city guide. Search for /pharmacies, /doctors, /colleges, /hospitals"
  )
);

app.get("/:city/:category", (req, res) => {
  const { city, category } = req.params;

  if (city === "stratford" && category === "pharmacies") {
    res.send(stratford.pharmacies);
  } else if (city === "stratford" && category === "doctors") {
    res.send(stratford.doctors);
  } else if (city === "stratford" && category === "colleges") {
    res.send(stratford.colleges);
  } else if (city === "stratford" && category === "hospitals") {
    res.send(stratford.hospitals);
  } else if (city === "harrow" && category === "pharmacies") {
    res.send(harrow.pharmacies);
  } else if (city === "harrow" && category === "doctors") {
    res.send(harrow.doctors);
  } else if (city === "harrow" && category === "colleges") {
    res.send(harrow.colleges);
  } else if (city === "harrow" && category === "hospitals") {
    res.send(harrow.hospitals);
  } else if (city === "heathrow" && category === "pharmacies") {
    res.send(heathrow.pharmacies);
  } else if (city === "heathrow" && category === "doctors") {
    res.send(heathrow.doctors);
  } else if (city === "heathrow" && category === "colleges") {
    res.send(heathrow.colleges);
  } else if (city === "heathrow" && category === "hospitals") {
    res.send(heathrow.hospitals);
  } else {
    res.status(404).send("City not found");
  }
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
