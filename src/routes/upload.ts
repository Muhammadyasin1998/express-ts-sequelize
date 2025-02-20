import { Application, Request, Response } from "express";




const admin = require("firebase-admin");
const multer = require("multer");
const path = require("path");

var serviceAccount = require("./rhsite-web-firebase-adminsdk-ds235-6b597b7ee3.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
storageBucket: "rhsite-web.appspot.com"// Replace with your Firebase Storage bucket name
});






const bucket = admin.storage().bucket();


const storage = multer.memoryStorage();
const upload = multer({ storage });


const uploadRoutes   = (app:Application) => {
    app.post("/api/v1/upload/file", upload.single("file"), async (req:Request, res:Response) :Promise<void>=> {
        try {
            if (!req.file) {
                 res.status(400).json({
                    success: false,
                    error: "Please upload an image.",
                });
                return;
            }

            // Generate unique filename
            const fileExt = req.file.mimetype.split("/")[1] || "png";
            const filename = `image-${Date.now()}.${fileExt}`;

            // Upload to Firebase Storage
            const file = bucket.file(`images/${filename}`);
            await file.save(req.file.buffer, {
                metadata: {
                    contentType: req.file.mimetype,
                },
            });

            // Make the file publicly accessible
            await file.makePublic();

            // Get the public URL
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${file.name}`;

            res.json({
                success: true,
                message: "File uploaded successfully",
                url: publicUrl,
            });
        } catch (error) {
            console.error("Upload error:", error);
            res.status(500).json({
                success: false,
                error: "Something went wrong while uploading the file.",
            });
        }
    });
};

 export default uploadRoutes;
