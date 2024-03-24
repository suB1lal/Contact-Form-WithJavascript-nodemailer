const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/contactForm.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "alıcıexample@gmail.com",
      pass: "google_appsecurity_key",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "alıcıexample@gmail.com",
    subject: `Message from ${req.body.email}: ${req.body.message}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email send: " + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} numaralı porttan ayaklandı`);
});
