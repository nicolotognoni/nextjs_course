// Esempio di tutti i possibili parametri per una pagina Next.js
export default async function ExamplePage({
  params,
  searchParams,
}: {
  // Per pagine dinamiche: /invoices/[id]/[action]/page.tsx
  params?: Promise<{
    id: string;
    action?: string;
    slug?: string[];
  }>;
  
  // Per parametri di query: /invoices?id=123&query=mario&page=2
  searchParams?: Promise<{
    id?: string;
    query?: string;
    page?: string;
    sort?: string;
    filter?: string | string[];
    [key: string]: string | string[] | undefined;
  }>;
}) {
  // Estrai i parametri
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  console.log('Params:', resolvedParams);
  console.log('Search Params:', resolvedSearchParams);
  
  return (
    <div>
      <h1>Esempio Parametri</h1>
      <pre>
        {JSON.stringify({ params: resolvedParams, searchParams: resolvedSearchParams }, null, 2)}
      </pre>
    </div>
  );
} 