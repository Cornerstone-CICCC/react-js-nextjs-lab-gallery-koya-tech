import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export default async function GalleryPage() {
    // Fetch photos from the API
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=30"
    );
    const photos: Photo[] = await res.json();
    // console.log("Fetched photos:", photos);

    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <h1 className="text-4xl font-bold mb-8">Gallery</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-6xl">
                {photos.map((photo) => (
                    <Link
                        key={photo.id}
                        href={{
                            pathname: `/gallery/${photo.id}`,
                            query: { modal: "true" },
                        }}
                        scroll={false}
                        className="bg-white rounded shadow p-2 flex flex-col items-center hover:scale-105 transition-transform"
                    >
                        <Image
                            src={"https://placehold.co/300x300"}
                            alt={photo.title}
                            width={150}
                            height={150}
                            className="rounded mb-2"
                        />
                        <span className="text-xs text-center line-clamp-2">
                            {photo.title}
                        </span>
                    </Link>
                ))}
            </div>
        </main>
    );
}
