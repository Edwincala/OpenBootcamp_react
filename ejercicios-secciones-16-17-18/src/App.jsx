import "./App.css";
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Tasks from "./Pages/Tasks";
import { Container } from "@mui/material";
import { useCookies } from "react-cookie";

function App() {
    const cookies = useCookies(["credentials"]);
    let loggedIn = false;
    if (cookies[0]["credentials"]) {
        loggedIn = true;
    }
    return (
        <Router>
            <div>
                <NavBar />
                <Container
                    sx={{
                        width: "100vw",
                        marginTop: "80px",
                        overflowY: "scroll"
                    }}
                >
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/login" Component={Login} />
                        <Route path="/about" Component={About} />
                        <Route path="/signup" Component={Register} />
                        <Route
                            path="/tasks"
                            element={
                                loggedIn ? <Tasks /> : <Navigate to="/login" />
                            }
                        ></Route>
                        <Route path="*" Component={NotFound} />
                    </Routes>
                </Container>
            </div>
        </Router>
    );
}

export default App;
