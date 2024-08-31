"use client";
import style from "./style.module.scss";
import { reviews } from "./data";
import { useReviews } from "./hooks";

const Reviews = ( ) => {
    const {
        handleReviewTransition,
        reviewsCategory,
        setReviewsCategory,
    } = useReviews(); 

    return (
        <section className={`flex-column spacing-3x ${style.reviews}`}>
            <div className="flex-column spacing-2x">
                <span>
                    <h2>See some reviews over us</h2>
                    *reviews by Indeed
                </span>

                <span className="flex spacing-2x">
                    <button 
                        className={reviewsCategory === "candidates" ? style.active : ""}
                        onClick={() => setReviewsCategory("candidates")}
                    >
                        Candidates
                    </button>
                    <button 
                        className={reviewsCategory === "employers" ? style.active : ""}
                        onClick={() => setReviewsCategory("employers")}
                    >
                        Clients
                    </button>
                </span>
            </div>

            <div className={`flex spacing-2x ${style.contentWrapper}`}>
                <span onClick={() => handleReviewTransition("left")}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 32 32" > <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-29c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3z"></path> <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"></path> </svg></span>
                <div>
                    {reviews[reviewsCategory].map((review, i) => {
                        return (
                            <div key={i} className="flex-column spacing-2x review">
                                <span className="flex-column spacing-1x">
                                    <p>{review.source}</p>
                                    <p className="flex align-center spacing-1x">
                                        {review.score.padEnd(3, ".0")}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" > <path d="M32 12.408l-11.056-1.607L16 .783l-4.944 10.018L0 12.408l8 7.798-1.889 11.011L16 26.018l9.889 5.199L24 20.206l8-7.798z"></path> </svg>
                                    </p>
                                </span>

                                <p>{review.content}</p>
                            </div>
                        )
                    })}
                </div>
                <span onClick={() => handleReviewTransition("right")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 32 32" > <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 29C8.82 29 3 23.18 3 16S8.82 3 16 3s13 5.82 13 13-5.82 13-13 13z"></path> <path d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z"></path> </svg>
                </span>
            </div>
        </section>
    )
};

export default Reviews;