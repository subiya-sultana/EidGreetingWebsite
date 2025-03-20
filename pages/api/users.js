import connectDB from "@/lib/db";
import User from "@/models/UserInfo";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            await connectDB();
            const { username, email } = req.body;

            if (!username || !email) {
                return res.status(400).json({ error: "Enter Username and email." });
            }

            let user = await User.findOne({ email });

            if (user) {
                // If `username` is a string (due to old data), convert it to an array
                if (typeof user.username === "string") {
                    user.username = [user.username]; 
                }

                // Push new username, allowing duplicates
                user.username.push(username);
                await user.save();
            } else {
                // Create new user with username as an array
                user = new User({ username: [username], email });
                await user.save();
            }

            return res.status(201).json({ message: "User processed", user });
        } catch (error) {
            console.error("Error processing user:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
