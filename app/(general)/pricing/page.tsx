import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Title',
    description: 'Pricing description',
    keywords: ['Pricing Page', 'Juan', 'Informacion']
};

export default function PricingPage() {
    return <>
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">Pricing Page</span>
        </main>
    </>
}