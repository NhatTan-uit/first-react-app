import React from 'react'
import { useState, useRef } from "react"

import axios from 'axios'

import { useNavigate } from 'react-router-dom';

import storage from "../../../../firebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

function UserImageModify() {
    const [file, setFile] = useState("");

    const uploadBtn = useRef();

    const navigate = useNavigate();

    function handleUpload() {
        if (!file) {
            alert("Please choose a file first!");
            return;
        }

        uploadBtn.current.setAttribute("disabled", "disabled");

        const storageRef = ref(storage, `/user-image/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log("day la url", url);
                    const checkIfLoggedUser = localStorage.getItem('user');

                    if (checkIfLoggedUser != null) {
                        const userinfo = {
                            UserImage: url,
                        };

                        axios.post(`http://localhost:4000/userinfo/changeuserimage/${checkIfLoggedUser}`, userinfo)
                        .then(res => {
                            alert(res.data);
                            navigate('/trang1');
                            
                            window.location.reload();
                        })
                        .catch(err => {
                            console.log(err);
                        });
                    }
                    else {
                        alert("Fatal Error!!");
                    }
                });
            }
        );
    }

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button ref={uploadBtn} onClick={handleUpload}>Upload to Firebase</button>
        </div>
    );
}

export default UserImageModify