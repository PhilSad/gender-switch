import { Box, Button, Card, CardMedia, Grid, TextField } from "@mui/material";
import { useState } from "react";
import ImageUpload from "../components/imageupload";
import ImageCropper from "../components/imageCropper";

export default function Home() {

    const [prompt, setPrompt] = useState('')
    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState()


    function handleGenerate() {
        console.log('handleGenerate')
        console.log('prompt', prompt)
        console.log('image', image)
        console.log('crop', crop)

    }

    return (
        <div className="Home">
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    Step 1 - Upload Image and Crop the face
                    <ImageUpload
                        image={image}
                        setImage={setImage}
                        crop={crop}
                        setCrop={setCrop}
                    />
                </Grid>

                <Grid item xs={12} md={3}>
                    <TextField
                        id="outlined-basic"
                        fullWidth
                        label="Prompt"
                        variant="outlined"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                </Grid>


                <Grid item xs={12} md={3}>
                    {/* red text for if there is no crop or prompt */}
                    {(!crop || (crop.width === 0)) && <p style={{ color: 'red' }}>Please crop the image (select on the uploaded image)</p>}
                    {!prompt && <p style={{ color: 'red' }}>Please enter a prompt</p>}

                    <Button variant="contained"
                        disabled={!crop || (crop.width === 0) || !prompt}
                        fullWidth
                        onClick={handleGenerate}
                    >
                        Generate
                    </Button>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Generated Image"
                            image={image}
                        />
                    </Card>
                </Grid>
            </Grid>



        </div>
    );
}