import Image from "next/image";

interface PhotoDetailProps {
    params: { id: string };
}

export default async function PhotoDetailPage(props: PhotoDetailProps) {
    const params = await props.params;
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${params.id}`
    );
    const photo = await res.json();

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8">
            <Image
                src={"https://placehold.co/1000x1000"}
                alt={photo.title}
                width={600}
                height={600}
                className="rounded shadow mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{photo.title}</h2>
            <p className="text-gray-500">Photo ID: {photo.id}</p>
        </main>
    );
}
