import Image from "next/image";
import bgImage from "@/Images/bgImage.jpg";
import Link from "next/link";

export default function Frontpage() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src={bgImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold animate-bounceIn mb-8">
          Welcome to the Age Calculator
        </h1>
        <Link href="/calculator">
        <button className="animate-bounceIn bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg sm:text-xl">
          Get Started
        </button>
        </Link>
      </div>
    </section>
  );
}
