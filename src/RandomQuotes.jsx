import { useEffect, useState } from 'react'
import './RandomQuotes.css'
import axios from 'axios';

const RandomQuotes = () => {
    // const [counter, setCounter] = useState(0);

    const [quote, setQuote] = useState({
        content: '',
        author: ''
    })

    const getData = async () => {
        const url = 'https://api.quotable.io/random';
        const res = await axios.get(url);
        return res.data;
    }

    useEffect(() => {
        let response = getData();
        response.then(res => {
            setQuote({
                author: res.author,
                content: res.content
            })
        })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div className='container'>
            <div className="quotes">
                <div className="quote">{quote.content}</div>
                <div className="author"> - {quote.author}</div>
            </div>
        </div>
        // <div className='container'>
        //     <div className="quotes">
        //         <div className="quote" onClick={() => setCounter(counter + 1)}>{counter}</div>
        //         <div className="author"> - Ernest Hemingway</div>
        //     </div>
        // </div>....
    )
}

export default RandomQuotes
