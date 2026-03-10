import { useState } from "react";
import './review.css';

const Reviews = () => {

    const [products, setProducts] = useState([
        { id: 1, name: "Product1", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 299, reviews: [] },
        { id: 2, name: "Product2", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 199, reviews: [] },
        { id: 3, name: "Product3", image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 299, reviews: [] },
        { id: 4, name: "Product4", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 499, reviews: [] },
        { id: 5, name: "Product5", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 799, reviews: [] },
    ])

    // const [review, setReview] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState("");


    const [selected, setSelected] = useState(null);
    // console.log(selected);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = products.map((p) => {
            if (p.id === selected) {
                const newReview = {
                    id: Date.now(),
                    name,
                    message,
                    rating
                }
                return {
                    ...p,
                    reviews: [...p.reviews, newReview]
                }

            }
            return p;
        })
        setProducts(updatedProduct);
        setName("");
        setMessage("");
        setRating("");
        setSelected(null);
    }

    return (
        <>
            <h1 className="title">Product Review System</h1>

            <div className="product-container">
                {
                    products.map((p) => (
                        <div className="card" key={p.id}>
                            <img src={p.image} alt="" />
                            <h3>{p.name}</h3>
                            <p>Price : ₹{p.price}</p>
                            <button onClick={() => setSelected(p.id)}>Give Review</button>
                        </div>
                    ))
                }
            </div>
            <div className="main-container">
                <div className="form-container">
                    {
                        selected && <form onSubmit={handleSubmit}>
                            <h2>Give review on Product</h2>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter review message"></textarea>
                            <select value={rating} onChange={(e) => setRating(e.target.value)} >
                                <option value="1">⭐</option>
                                <option value="2">⭐⭐</option>
                                <option value="3">⭐⭐⭐</option>
                                <option value="4">⭐⭐⭐⭐</option>
                                <option value="5">⭐⭐⭐⭐⭐</option>
                            </select>
                            <button>Submit</button>
                            <button className="btn2" onClick={() => setSelected(null)}>cancel</button>
                        </form>
                    }
                </div>
                <div className="review-container">
                    {products.map((product)=>(
                        <div className="review-card" key={product.id}>
                            {product.reviews.map((r)=>(
                                <div className="review-content">
                                    <h3>{r.name}</h3>
                                    <p>{r.message}</p>
                                    <p>{r.rating}⭐</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>



        </>
    )
}

export default Reviews;