import { useState } from "react";

const Reviews = ()=>{

    const [review,setReview] = useState([]);
    const [name,setName] = useState("");
    const [message,setMessage] = useState("");
    const [rating,setRating] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newReview = {
            id:Date.now(),
            name,
            message,
            rating
        }

        setReview([...review,newReview]);

        setName("");
        setMessage("");
        setRating("");

    }

    return (
        <>
            <h1>Product Review System</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" /> 
                <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Enter review message"></textarea>    
                <select value={rating} onChange={(e)=>setRating(e.target.value)} >
                    <option value="1">⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                </select>    
                <button>Submit</button>       
            </form>


            {
                review.length === 0 ? 
                <h2>No Reviews</h2>:
                <>
                    {review.map((r)=>(
                        <div key={r.id} className="review-card">
                            <p>{r.id}</p>
                            <h3>{r.name}</h3>
                            <p>{r.message}</p>
                            <p>{r.rating}⭐</p>
                        </div>
                    ))}
                </>
            }
        </>
    )
}

export default Reviews;