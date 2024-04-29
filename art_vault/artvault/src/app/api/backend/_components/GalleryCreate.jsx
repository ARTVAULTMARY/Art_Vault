"use client";

import { useState } from "react";
import FormGenerator from "./FormGenerator";

export default function GalleryCreate() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [userID, setUserID] = useState("");

    const inputData = [["Gallery Title", title, setTitle, "Input gallery title"], ["Gallery Description", description, setDescription, "Input gallery description"], ["User userID", userID, setUserID, "Input userID"]];

    async function formSubmit() {
        try {
            await fetch("/api/backend/create-gallery", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    userID: userID,
                }),
            });
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div>
            <p className="text-xl">Create Gallery</p>
            <FormGenerator inputData={inputData} />
            <button
                className="mt-6 p-1.5 rounded-lg bg-[#dddddd] hover:text-[#ce2e54] duration-200"
                onClick={formSubmit}
            >
                Create Gallery
            </button>
        </div>
    );
}