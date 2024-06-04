import React from 'react'

function FetchData() {
    const [fetchData, setFetchData] = React.useState('');
    const [postBody, setPostBody] = React.useState('');

    const getData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json();
        const number = Math.floor(Math.random() * 100)
        const postTitle = data[number].title;
        const postBody = data[number].body;
        setFetchData(postTitle)
        setPostBody(postBody)
    }
    return (
        <>
            <h1>Fetch Data</h1>
            <button onClick={getData}>Get Data</button>
            <h2>Title : {fetchData}</h2>
            <p>Body : {postBody}</p>
            {console.log(fetchData)}
        </>
    )
}
export default FetchData;