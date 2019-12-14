import * as React from 'react';

const Home = () => {
    const list = [1,2,3,4,5];
    return (
    <div>
        {
            list.map(m => <h1 key={m}>{m}</h1>)
        }
    </div>
    )
}

export default Home;