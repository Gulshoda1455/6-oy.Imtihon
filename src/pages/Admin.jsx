import axios from 'axios';
import React, { useState } from 'react';
import { backendUrl } from './BackendUrl';
import { useNavigate } from 'react-router-dom';
import { useMobile } from '../hooks/useMobile';

function Admin() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const navigate = useNavigate();


   
    const isMobile = useMobile();

    const handleSubmit = async () => {
        console.log(title, image, subtitle, description, rate, price, color, size);
        if (!title || !image || !subtitle || !description || !rate || !price || !color || !size) {
            alert("Maydonlarni barchasini to'ldiring");
            return;
        }

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("Foydalanuvchi tokeni topilmadi, iltimos qayta kiriting.");
                return;
            }

            const headers = {
                "Content-Type": "application/json",
                Authorization: token,
            };
            const data = {
                title,
                image,
                subtitle,
                description,
                rate,
                price,
                color,
                size,
            };
            const response = await axios.post(`${backendUrl}/products`, data, {
                headers: headers,
            });
            if (response.data) {
                navigate("/");
            }
        } catch (err) {
            console.error("Xatolik yuz berdi", err);
            alert("Ma'lumot yuborishda xatolik yuz berdi, iltimos qayta urinib ko'ring.");
        }
    }

    return (
        <div className='h-screen w-screen bg-gray-200 flex justify-center items-center  py-[500px] '>
            <div className='p-4 shadow-xl bg-white w-[40%] rounded-md'>
                <h1 className='text-center mb-2'>
                    Products card 
                    </h1>
                    <h2 className='mb-3'>{isMobile ? "From Mobile device" :"From Desktop"}</h2>
                <div className='mb-3'>
                    <label htmlFor="product-name">Product name</label>
                    <br />
                    <input
                        id="product-name"
                        type="text"
                        className='bg-gray-200 p-3 w-full rounded-md'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="image-address">Images address:</label>
                    <br />
                    <input
                        id="image-address"
                        type="text"
                        className='bg-gray-200 p-3 w-full rounded-md'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="subtitle">Subtitle:</label>
                    <br />
                    <input
                        id="subtitle"
                        type="text"
                        className='bg-gray-200 p-3 w-full rounded-md'
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="description">Description:</label>
                    <br />
                    <input
                        id="description"
                        type="text"
                        className='bg-gray-200 p-3 w-full rounded-md'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="rate">Rate:</label>
                    <br />
                    <input
                        id="rate"
                        type="number"
                        className='bg-gray-200 p-3 w-full rounded-md'
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="price">Price:</label>
                    <br />
                    <input
                        id="price"
                        type="number"
                        className='bg-gray-200 p-3 w-full rounded-md'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="color">Color:</label>
                    <br />
                    <input
                        id="color"
                        type="text"
                        className='bg-gray-200 p-3 w-full rounded-md'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="size">Size:</label>
                    <br />
                    <input
                        id="size"
                        type="text"
                        className='bg-gray-200 p-3 w-full rounded-md'
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    />
                </div>
                <div className='mb-3 text-center'>
                    <button onClick={handleSubmit} className='bg-gray-500 text-white py-2 px-6 rounded-md w-[50%]'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Admin;
