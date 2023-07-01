import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-white rounded-xl p-5 flex flex-col items-center">
        <p className="text-3xl text-red-600 font-bold mb-1">404</p>
        <h1 className="text-3xl font-bold mb-3">Page not found</h1>
        <div>
          <Link href="/">
            <p className="text-wd-blue underline">Go back to Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
