import { Button, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Joke = ({ joke, liked, generateJoke }) => {
    return (
        <Container sx={{ margin: "30px" }}>
            {joke ? (
                <Container
                    sx={
                        liked
                            ? {
                                  backgroundColor: "lightgreen",
                                  padding: "20px",
                                  border: "3px solid blue",
                                  borderRadius: "30px"
                              }
                            : {
                                  backgroundColor: "red",
                                  color: "white",
                                  padding: "20px",
                                  border: "3px solid gray",
                                  borderRadius: "30px"
                              }
                    }
                >
                    <Typography variant="h3">{joke.value}</Typography>
                </Container>
            ) : (
                <Typography variant="h5">
                    Click the button &quot;GENERATE JOKE&quot; to start!
                </Typography>
            )}

            <Button
                variant="contained"
                sx={{ backgroundColor: "green", marginTop: "20px" }}
                onClick={generateJoke}
            >
                Generate Joke
            </Button>
        </Container>
    );
};

Joke.propTypes = {
    joke: PropTypes.object,
    liked: PropTypes.bool,
    generateJoke: PropTypes.func.isRequired
};

export default Joke;
