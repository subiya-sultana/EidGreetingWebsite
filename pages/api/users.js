import connectDB from "@/lib/db";
import User from "@/models/UserInfo";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try{
            await connectDB();
            const { username, email } = req.body;

            if (!username || !email) {
                return res.status(400).json({ error: "Enter Username and email." });
              }

            // Check if user already exists
            let user = await User.findOne({ email });
            if (!user) {
                user = new User({ username, email });
                await user.save();
            }
            return res.status(201).json({ message: "User processed", user });
        }
        catch (error) {
            console.error("Error processing user:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    else{
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}




