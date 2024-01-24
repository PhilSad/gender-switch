import { Box, Button, Card, CardMedia, Grid, TextField } from "@mui/material";
import { useState } from "react";
import ImageUpload from "../components/imageupload";

export default function Home() {

    const [prompt, setPrompt] = useState('')
    const [image, setImage] = useState(null);


    function handleGenerate() {
        console.log('handleGenerate')

    }

    return (
        <div className="Home">
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <ImageUpload
                        image={image}
                        setImage={setImage}
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
                    <Button variant="contained"
                        disabled={!image || !prompt}
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