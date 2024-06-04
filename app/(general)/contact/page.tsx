import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Title',
    description: 'Contact description',
    keywords: ['Contact Page', 'Juan', 'Informacion']
};

export default function ContactPage() {
    return <>
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">Contact Page</span>
        </main>
    </>
}