import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="w-full flex justify-center gap-8 py-6 bg-gray-100 mb-8 shadow">
            <Link
                href="/"
                className="text-lg font-semibold hover:text-blue-600 transition-colors"
            >
                Home
            </Link>
            <Link
                href="/gallery"
                className="text-lg font-semibold hover:text-blue-600 transition-colors"
            >
                Gallery
            </Link>
        </nav>
    );
}
