import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer w-full p-6 text-center mt-10">
      <p>&copy; 2025 MevTrading. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <Link href="#" className="hover:underline">Privacy Policy</Link>
        <Link href="#" className="hover:underline">Terms of Service</Link>
      </div>
    </footer>
  );
};