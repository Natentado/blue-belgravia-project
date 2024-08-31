import { useState } from "react";

export const useReviews = () => {
    const [ reviewsCategory, setReviewsCategory ] = useState<"candidates" | "employers">("candidates");
    const [ selectedReview, setSelectedReview ] = useState(1);

    const handleReviewTransition = (position: "left" | "right") => {
        const reviews = document.querySelectorAll(".review") as NodeListOf<HTMLDivElement>;
        
        if((selectedReview === 1 && position === "left")) return;
        setSelectedReview(prev => position === "left" ? prev - 1 : prev + 1);
        let qtyMoved = position === "left" ? `-${((selectedReview - 1) * 100) - 100}` : `-${selectedReview * 100}`;

        reviews.forEach((review) => {
            if((selectedReview) === reviews.length && position === "right"){
                setSelectedReview(1);
                return review.style.transform = `translateX(0%)`;
            };
            
            review.style.transform = `translateX(${qtyMoved}%)`;
        });
    };

    return {
        reviewsCategory,
        setReviewsCategory,
        handleReviewTransition,
    };
};