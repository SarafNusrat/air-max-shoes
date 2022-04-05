import { useEffect, useState } from "react"

const useShowReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('../../public/reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, []);

    return [reviews, setReviews]
}

export default useShowReviews;