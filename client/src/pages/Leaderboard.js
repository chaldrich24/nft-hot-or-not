import React from "react";
import List from "./components/List";

const Leaderboard= () => {
    return (
        <main>
            <div className='container'>
                <h2 className='row display-3 justify-content-center mb-5'>Leaderboard</h2>
                <div className="row">
                    <div className="col">
                        <List />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Leaderboard;