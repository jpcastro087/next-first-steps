import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">hola che!</span>
      <Link href={'/about'}>About Page</Link>
    </main>
   
  );
}
