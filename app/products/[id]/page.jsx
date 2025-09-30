import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  // check if reviewId is too large
  if (Number(params.reviewId) > 100) {
    notFound(); // this renders the 404 page
  }

  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

  if (!res.ok) {
    notFound(); // fallback if product doesn't exist
  }

  let product;
  try {
    product = await res.json();
  } catch (e) {
    notFound(); // invalid JSON response → show 404
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Review ID: {params.reviewId}</p>
    </div>
  );
}
