import jokeRequest from "../utils/config/axios.config";
export function getRandomJoke() {
    return jokeRequest.get("/random", {
        validateStatus: function (status) {
            return status < 500;
        }
    });
}

export function getCategories() {
    return jokeRequest.get("/categories", {
        validateStatus: function (status) {
            return status < 500;
        }
    });
}

export function getJokeByCategory(category) {
    return jokeRequest.get(`/random?category=${category}`, {
        validateStatus: function (status) {
            return status < 500;
        }
    });
}
