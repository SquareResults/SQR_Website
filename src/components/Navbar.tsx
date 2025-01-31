import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
          >
            SquareResults
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" active={isActive("/")}>Home</NavLink>
            <NavLink href="/about" active={isActive("/about")}>About</NavLink>
            <NavLink href="/services" active={isActive("/services")}>Services</NavLink>
            <NavLink href="/resources" active={isActive("/resources")}>Resources</NavLink>
            <NavLink href="/contact" active={isActive("/contact")}>Contact</NavLink>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-secondary" />
            ) : (
              <Menu className="h-6 w-6 text-secondary" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/" active={isActive("/")}>Home</MobileNavLink>
              <MobileNavLink href="/about" active={isActive("/about")}>About</MobileNavLink>
              <MobileNavLink href="/services" active={isActive("/services")}>Services</MobileNavLink>
              <MobileNavLink href="/resources" active={isActive("/resources")}>Resources</MobileNavLink>
              <MobileNavLink href="/contact" active={isActive("/contact")}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) => (
  <Link
    to={href}
    className={`${
      active
        ? "text-primary font-medium"
        : "text-secondary hover:text-primary"
    } transition-colors duration-200`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) => (
  <Link
    to={href}
    className={`${
      active
        ? "text-primary font-medium"
        : "text-secondary hover:text-primary"
    } block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200`}
  >
    {children}
  </Link>
);

export default Navbar;