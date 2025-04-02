'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function DogPage() {
    const [dogUrl, setDogUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchRandomDog = async () => {
            try {
                const response = await fetch('/api/dog');
                const data = await response.json();
                setDogUrl(data.url);
            } catch (error) {
                console.error('Error fetching dog:', error);
            }
        };

        fetchRandomDog();
    }, []);

    if (!dogUrl) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="relative">
                <Image
                    src={dogUrl}
                    alt="Random dog"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    priority
                />
            </div>
        </div>
    );
} 