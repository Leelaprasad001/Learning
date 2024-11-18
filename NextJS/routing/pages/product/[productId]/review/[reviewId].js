//used for Dynamic routing
import { useRouter } from "next/router";

function Review(){
    const router = useRouter();
    const { productId, reviewId } = router.query;

    return (
        <h1>Review {reviewId} for Product {productId}</h1>
    )
}
export default Review