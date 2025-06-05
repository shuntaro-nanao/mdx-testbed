import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to MDX Testbed</h1>
      <Link href="/sample" className="text-blue-500 hover:text-blue-700">
        Go to MDX Sample Page
      </Link>
    </div>
  );
}
