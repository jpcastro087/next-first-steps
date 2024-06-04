import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Title',
    description: 'About description',
    keywords: ['About Page', 'Juan', 'Informacion']
};

export default function AboutPage() {
    return <>
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">About Page</span>
        </main>
    </>
}