export default function DocsPage({ params }) {
  const { slug } = params;

  return (
    <div>
      <h1>Docs Page</h1>
      <p>Slug array: {JSON.stringify(slug)}</p>

      {slug?.length >= 1 && <p>Feature: {slug[0]}</p>}
      {slug?.length >= 2 && <p>Concept: {slug[1]}</p>}
      {slug?.length >= 3 && <p>Example: {slug[2]}</p>}
    </div>
  );
}
