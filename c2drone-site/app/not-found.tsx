import Link from 'next/link';
import { FaHelicopter } from 'react-icons/fa';

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-c2black text-white px-4 text-center">
      <div className="text-c2blue text-9xl mb-4 animate-bounce">
        <FaHelicopter />
      </div>
      <h1 className="text-6xl font-bold font-heading mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-6">Lost in Airspace?</h2>
      <p className="text-gray-400 max-w-md mb-10">
        The page you are looking for has flown off the radar. Let's get you back to solid ground.
      </p>
      <Link 
        href="/"
        className="bg-c2blue px-8 py-3 rounded-full font-bold hover:bg-white hover:text-c2blue transition-colors"
      >
        Return to Base
      </Link>
    </main>
  );
}
