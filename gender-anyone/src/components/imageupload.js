import React, { useState } from 'react';
import { Box, Button, Card, CardMedia } from '@mui/material';

const ImageUpload = ({ image, setImage }) => {

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
                <Card>
                    <CardMedia
                        component="img"
                        alt="Uploaded Image"
                        image={image}
                    />
                </Card>
            )}
        </div>
    );
};

export default ImageUpload;
