"use client";

import { useState, useEffect } from "react";
import FormGenerator from "./FormGenerator";

export default function PrivateGallery() {
    const [file, setFile] = useState(null);
    const [previewURL, setPreviewURL] = useState(
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    );

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [userID, setUserID] = useState('')
    const [galleryID, setGalleryID] = useState('')
    const inputData = [
        ['Image Title', title, setTitle, 'Input image title'],
        [
            'Image Description',
            description,
            setDescription,
            'Input image description',
        ],
        ['User userID', userID, setUserID, 'Input userID'],
        ['User galleryID', galleryID, setGalleryID, 'Input galleryID'],
    ]
    

    function onChangePicture(e) {
        setFile(e.currentTarget.files && e.currentTarget.files[0]);
    }

    useEffect(() => {
        if (file) {
            setPreviewURL(URL.createObjectURL(file));
        }
    }, [file]);

    async function onSubmit() {

        try {
            if (file) {
                const result = await fetch("/api/backend/create-image?title=" + title.replaceAll(" ", "_") + "&description=" + description.replaceAll(" ", "_") + "&userID=" + userID + "&galleryID=" + galleryID , {
                    method: "POST",
                    headers: {
                        "content-type": file?.type || "application/octet-stream",
                    },
                    body: file,
                });
                const data = await result.json();
                setStatus(data.returnMsg);
            }
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div>
            <p className="text-xl">Image Upload</p>
            <p className="mt-4">Artwork Title</p>
            <FormGenerator inputData={inputData} />
            <button
                className="mt-6 p-1.5 rounded-lg bg-[#dddddd] hover:text-[#ce2e54] duration-200 mr-4"
                onClick={onSubmit}
            >
                Submit Picture
            </button>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => onChangePicture(e)}
            ></input>
            <img src={previewURL} alt="anti warn" className="mt-2"></img>
        </div>
    );
}
