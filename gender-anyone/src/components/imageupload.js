import React, { useState } from 'react';
import { Box, Button, Card, CardMedia } from '@mui/material';
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

const ImageUpload = ({ image, setImage, crop, setCrop }) => {


    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(URL.createObjectURL(img));
        }
    };

    return (
        <div>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={handleImageChange}
            />
            <label htmlFor="raised-button-file">
                <Button variant="raised" component="span">
                    Upload
                </Button>
            </label>

            {image && (
                <ReactCrop crop={crop} onChange={c => setCrop(c)}
                    aspect={1 / 1}
                >
                    <img src={image} />
                </ReactCrop>

            )}
        </div>
    );
};

export default ImageUpload;
