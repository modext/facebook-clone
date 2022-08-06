import { useSession } from 'next-auth/react'
import Image from 'next/image'
import {EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon }  from "@heroicons/react/solid"
import { useRef, useState } from 'react';
import { db, storage } from "../firebase";
import "firebase/firestore"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';
import { doc, setDoc } from "firebase/firestore"; 



function InputBox() {
    const {data: session}= useSession()

    const inputRef = useRef(null)
    const filepickerRef = useRef(null)
    const [imageToPost, setImageToPost] = useState(null)

    
    const uploadImage=()=>{

        if (imageToPost == null) return;
        const imageRef = ref(storage, `down-images/${imageToPost.name  + v4()}`);
        uploadBytes(imageRef, imageToPost).then(()=>{
            alert("image Uploaded")
        })
    }
    const sendPost = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;
       
        const dbRef = collection(db, "posts");
        const data = {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: serverTimestamp()
        };   
        addDoc(dbRef, data)
        .then((document) => {
            if (imageToPost) {
                const storageRef = ref(storage, `down-images/${imageToPost.name  + v4()}`);
                uploadBytes(storageRef, imageToPost, "data_url").then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((URL) => {
                        setDoc(
                            doc(db, "posts", document.id),
                            { postImage: URL },
                            { merge: true }
                        );
                        console.log("File available at ", URL);
                    });
                    removeImage();
                });
            }
        });

        inputRef.current.value ="";

        
    }

    const addImageToPost = (e)=>{
        const reader = new FileReader();
        if (e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    };

    const removeImage =()=>{
        setImageToPost(null);
    }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500
    font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <Image
                className='rounded-full'
                src={session.user.image}
                width={40}
                height={40}
                layout="fixed"
            />
            <form action="" className='flex flex-1'>
                <input className='rounded-full h-12 bg-gray-100
                flex-grow px-5 focus:outline-none' 
                type="text" 
                ref={inputRef}
                placeholder={`What's on your mind, ${session.user.name} ?`} />
                <button hidden type='submit' onClick={sendPost}>
                    Submit
                </button>
            </form>

            {imageToPost && (                
                
                <div onClick={removeImage} className="flex flex-col filter hover:brightness=110
                transition duration-150 transform hover:scale-105 cursor-pointer">
                    <img className='h-10 object-contain' src={imageToPost} alt=" " />
                </div>

            )}
        </div>

        <div className='flex justify-evenly p-3 border-t'>
            <div className='  inputIcon'>
                <VideoCameraIcon className='h-7 text-red-500' />
                <p className='text-xs sm:text-sm xl:text-base'>
                    Live Video
                </p>
            </div>

            <div onClick={()=> filepickerRef.current.click()} className='inputIcon'>
                <CameraIcon className='h-7 text-green-400' />
                <p className='text-xs sm:text-sm xl:text-base'>
                    Photo/VIdeo
                </p>
                <input ref={filepickerRef} onChange={addImageToPost}type="file" hidden />
            </div>

            <div className=' inputIcon'>
                <EmojiHappyIcon className='h-7 text-yellow-300' />
                <p className='text-xs sm:text-sm xl:text-base'>
                    Feeling/Activity 
                </p>
            </div>
        </div>
        <div>
            <input type="file" onChange={(e)=>{setImageToPost(e.target.files[0])}} />
            <button onClick={uploadImage}>Upload Image</button>
        </div>
    </div>
  )
}

export default InputBox