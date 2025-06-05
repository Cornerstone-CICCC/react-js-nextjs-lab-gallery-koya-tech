import React from "react";
import Image from "next/image";

interface PhotoModalProps {
    params: { id: string };
}

export default async function PhotoModal(props: PhotoModalProps) {
    const params = await props.params;
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${params.id}`
    );
    const photo = await res.json();

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
                <Image
                    src={"https://placehold.co/1000x1000"}
                    alt={photo.title}
                    width={400}
                    height={400}
                    className="rounded mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{photo.title}</h2>
                <p className="text-gray-500 mb-4">Photo ID: {photo.id}</p>
                <a
                    href="/gallery"
                    className="absolute top-2 right-2 text-gray-400 hover:text-black text-2xl"
                >
                    &times;
                </a>
            </div>
        </div>
    );
}
