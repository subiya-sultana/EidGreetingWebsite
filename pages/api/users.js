import connectDB from "@/lib/db";
import UserInfo from "@/models/UserInfo";

export default async function handler(req, res) {
    try {
        await connectDB(); // Ensure DB is connected

        if (req.method !== "POST") {
            return res.status(405).json({ message: "Method Not Allowed" });
        }

        const { email, username } = req.body;

        if (!email || !username) {
            return res.status(400).json({ message: "Email and username are required" });
        }

        const normalizedEmail = email.toLowerCase();

        const updatedUser = await UserInfo.findOneAndUpdate(
            { email: normalizedEmail },
            {
                $addToSet: { usernames: username }, // Ensures username isn't duplicated
                $inc: { visitCount: 1 }, // Increment visit count
                $set: { lastVisit: new Date() } // Update last visit time
            },
            { new: true, upsert: true } // Create user if not exists
        );

        return res.status(updatedUser.visitCount === 1 ? 201 : 200).json({
            message: updatedUser.visitCount === 1 ? "User created" : "User updated",
            user: updatedUser
        });

    } catch (error) {
        console.error("Error in /api/users:", error);
        return res.status(500).json({ message: "Internal Server Error", error });
    }
}
