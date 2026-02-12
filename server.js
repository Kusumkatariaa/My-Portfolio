import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if (!process.env.RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY missing in .env");
    process.exit(1);
}

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/send", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    try {
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: process.env.MY_EMAIL,
            subject: `New message from ${name}`,
            reply_to: email,
            html: `
        <h2>📩 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return res.status(200).json({
            success: true,
            message: "Email sent successfully",
        });

    } catch (error) {
        console.error("❌ Resend error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Failed to send email",
        });
    }
});

app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});
