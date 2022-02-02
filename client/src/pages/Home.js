import React from "react";
import Nft from '../components/Nft';

const Home = () => {
    return (
        <main>
            <div className='container'>
                <h2 className='row display-3 justify-content-center mb-5'>Which is better?</h2>
                <div className="row">
                    <div className="col">
                        <Nft />
                    </div>
                    <div className="col">
                        <Nft />
                    </div>
                </div>
                <p className='mt-4 new-pair' onClick={() => window.location.reload(false)}>Generate New Pair</p>
            </div>
        </main>
    )
}

export default Home;