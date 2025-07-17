import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

app.post("/api/send", async (req, res) => {
    const { name, email, message } = req.body;

    console.log("Form Data Received:", { name, email, message });


    const mailOptions = {
        from: process.env.GMAIL_USER, // always your authenticated email
        to: process.env.GMAIL_USER,   // send to yourself
        subject: `New message from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Message: ${message}
  `,
        replyTo: email, // ✅ this allows you to reply directly to the user's email
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully.");
        res.status(200).json({ success: true });
    } catch (err) {
        console.error("❌ Email sending failed:", err);
        res.status(500).json({ success: false, error: err.toString() });
    }
});

app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});
