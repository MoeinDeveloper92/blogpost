import Link from 'next/link';
import { ModeToggle } from './ToggleTheme';
//Next - > it uses client side navigatiom and pre fetching
export default function Navbar() {
  return (
    <nav className="relative w-full flex items-center justify-between">
      <div className="container mx-auto flex justify-between py-7">
        <Link className="text-4xl max-sm:text-xl font-bold" href={'/'}>
          Moein Samani<span className="text-primary"> Blog</span>
        </Link>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
