import React, { useState } from 'react';

const Rating = ({ ratings }) => {
    const [userRating, setUserRating] = useState('');
    const [averageRating, setAverageRating] = useState(0);

    const handleRatingChange = (event) => {
        const rating = parseFloat(event.target.value);
        if (rating >= 1 && rating <= 5) {
            setUserRating(rating);
        } else {
            alert("Please enter a rating between 1 and 5");
        }
    };

    const handleSubmitRating = () => {
        if (userRating) {
            if (!Array.isArray(ratings)) {

                setRatings([]);
            }
            const newAverageRating = (
                ratings.reduce((acc, cur) => acc + cur, 0) + userRating
            ) / (ratings.length + 1);
            setRatings([...ratings, userRating]);
            setAverageRating(newAverageRating);
        }
    };

    return (
        <div>
            {ratings.length === 0 ? (
                <p>No ratings yet</p>
            ) : (
                <p>Average rating: {averageRating.toFixed(2)}</p>
            )}
            <input
                type="number"
                min="1"
                max="5"
                step="0.1"
                value={userRating}
                onChange={handleRatingChange}
            />
            <button onClick={handleSubmitRating}>Submit Rating</button>
        </div>
    );
};

export default Rating;
