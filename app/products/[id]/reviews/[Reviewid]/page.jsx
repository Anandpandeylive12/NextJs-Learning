export default function ReviewPage({ params }) {
  const { id, reviewId } = params;

  return (
    <div>
      <h1>Review Page</h1>
      <p>Product ID: {id}</p>
      <p>Review ID: {reviewId}</p>
    </div>
  );
}
