const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");

const app = express();

app.use(cors(
    {
        origin: ["https://login-signup-frontend-one.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.use(express.json());

mongoose.connect("mongodb+srv://loginSignUpdata:Shakti@96446@cluster0.gxgqcm6.mongodb.net/Customers?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  console.log("MongoDB connected successfully");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});


app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("incorrect");
      }
    } else {
      res.json("No_record");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running");
});
