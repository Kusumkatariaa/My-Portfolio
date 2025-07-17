import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const resend = new Resend("re_gikoYoaH_AoV8BuK3rA8isZ55pJtixUnM");

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.post("/api/send", async (req, res) => {
    const { email, message } = req.body;

    try {
        const data = await resend.emails.send({
            from: "your-verified-email@example.com",
            to: "kusumkataria899@gmail.com",
            subject: "New Message from Portfolio",
            html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
        });

        console.log("Email sent successfully:", data);
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, error: error.message || error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
