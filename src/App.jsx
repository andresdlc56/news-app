import { useState } from "react";
import { Navbar, NewsBoard } from "./components";

const App = () => {

    const [category, setCategory] = useState("general");

    return (
        <div>
            <Navbar setCategory={ setCategory } />
            <NewsBoard category={ category } />
        </div>
    )
}

export default App