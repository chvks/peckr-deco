import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = ["Home", "About", "Collections", "Projects", "Journal", "Contact"];

export default function PeckrDeco() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md fixed w-full bg-white z-50">
        <h1 className="text-2xl font-bold">PECKr DÉCO</h1>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a key={item} href="#" className="hover:underline">
              {item}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-16 left-0 w-full bg-white shadow-md p-6 z-40"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.nav>
      )}

      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-center"
          >
            <h2 className="text-4xl md:text-6xl font-semibold mb-4">
              Luxury Interior Masterpieces
            </h2>
            <p className="text-lg md:text-2xl mb-6 max-w-xl mx-auto">
              Crafted with excellence. Designed to inspire.
            </p>
            <Button className="bg-black text-white px-6 py-2 rounded-full">
              Discover Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-16 px-6 md:px-20">
        <h3 className="text-3xl font-semibold mb-10 text-center">
          Our Collections
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <Card key={num} className="overflow-hidden">
              <img
                src={`/collection${num}.jpg`}
                alt={`Collection ${num}`}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h4 className="text-xl font-bold">Collection {num}</h4>
                <p className="text-sm text-gray-500">
                  Explore exquisite pieces and timeless designs.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Test Case Section (for debugging verification) */}
      <section className="py-10 px-6 md:px-20">
        <h3 className="text-2xl font-semibold mb-4">Debug Test Section</h3>
        <div className="text-sm text-gray-600">
          <p>If this renders without breaking, your layout structure is correct.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-bold text-lg mb-2">About PECKr</h5>
            <p className="text-sm text-gray-400">
              PECKr DÉCO is a premium luxury interior design studio dedicated to
              crafting bespoke living spaces that reflect elegance and
              innovation.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-2">Quick Links</h5>
            <ul className="text-sm text-gray-400 space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-2">Contact</h5>
            <p className="text-sm text-gray-400">hello@peckrdeco.com</p>
            <p className="text-sm text-gray-400">+234 800 000 0000</p>
            <p className="text-sm text-gray-400">Ikoyi, Lagos, Nigeria</p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-600 mt-10">
          © 2025 PECKr DÉCO. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
