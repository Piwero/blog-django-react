import React from "react";
import {Header} from "../components/Header/Header";

const Homepage =() =>(
    <div>
        <Header onLogin={true} onLogout={false} onCreateAccount={false} />
    </div>
)
export default Homepage;