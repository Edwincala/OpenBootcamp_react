import { useEffect, useState } from "react";
import Joke from "./components/Joke";
import { Button, Container, Typography } from "@mui/material";
import {
    getCategories,
    getJokeByCategory,
    getRandomJoke
} from "./services/axiosService";

function App() {
    const [joke, setJoke] = useState(null);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [likedOrNot, setLikedOrNot] = useState();
    const [likedJokes, setLikedJokes] = useState([]);
    const [dislikedJokes, setDislikedJokes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const generateJoke = () => {
        getRandomJoke().then((response) => {
            if (response.status === 200) {
                setJoke(response.data);
                setLikedOrNot(false);
            }
        });
    };

    useEffect(() => {
        getCategories().then((response) => {
            if (response.status === 200) {
                setCategories(response.data);
            }
        });
    }, [categories]);

    const handleCategorySelect = (id) => {
        setSelectedCategory(categories[id]);
    };

    const getCategoryJoke = (category) => {
        getJokeByCategory(category).then((response) => {
            if (response.status === 200) {
                setJoke(response.data);
                setLikedOrNot(false);
            }
        });
    };

    const handleLike = (id) => {
        if (joke.id === id && !likedOrNot) {
            const liked = [...likedJokes];
            liked.push(joke.id);
            setLikedJokes(liked);
            setLikes(likes + 1);
            setLikedOrNot(true);
            if (dislikedJokes.find((id) => joke.id === id)) {
                setDislikes(dislikes - 1);
                setDislikedJokes(dislikedJokes.filter((id) => id !== joke.id));
            }
        }
    };

    const handleDislike = (id) => {
        if (joke.id === id && likedOrNot) {
            const disliked = [...dislikedJokes];
            disliked.push(joke.id);
            setDislikedJokes(disliked);
            setDislikes(dislikes + 1);
            setLikedOrNot(false);

            if (likedJokes.find((id) => id === joke.id)) {
                setLikes(likes - 1);
                setLikedJokes(likedJokes.filter((id) => id !== joke.id));
            }
        }
    };

    return (
        <>
            {categories && (
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        left: "0px",
                        top: "20px"
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{ marginLeft: "-20px", marginTop: "-20px" }}
                    >
                        Categories
                    </Typography>
                    <aside
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "120px",
                            marginLeft: "-30px"
                        }}
                    >
                        {categories.map((category, index) => (
                            <Button
                                key={index}
                                sx={
                                    selectedCategory === categories[index]
                                        ? {
                                              backgroundColor: "blue",
                                              color: "white",
                                              fontWeight: "bold"
                                          }
                                        : {
                                              backgroundColor: "black",
                                              color: "white",
                                              fontWeight: "normal"
                                          }
                                }
                                onClick={() => handleCategorySelect(index)}
                            >
                                {category}
                            </Button>
                        ))}
                    </aside>
                </Container>
            )}
            <Container
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    justifyContent: "center",
                    marginLeft: "80px"
                }}
            >
                <Typography marginLeft={5} variant="h1">
                    Chuck Norris Jokes
                </Typography>
                <Joke
                    joke={joke}
                    liked={likedOrNot}
                    generateJoke={
                        selectedCategory
                            ? () => getCategoryJoke(selectedCategory)
                            : generateJoke
                    }
                />
                <Container
                    sx={{
                        display: "flex",
                        gap: "5px",
                        margin: "30px"
                    }}
                >
                    <Button
                        onClick={() => handleLike(joke.id)}
                        variant="contained"
                    >
                        Like {likes}
                    </Button>
                    <Button
                        onClick={() => handleDislike(joke.id)}
                        variant="contained"
                        style={{ backgroundColor: "red" }}
                    >
                        Dislike {dislikes}
                    </Button>
                </Container>
            </Container>
        </>
    );
}

export default App;
