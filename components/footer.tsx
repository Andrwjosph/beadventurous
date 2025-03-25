import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl mb-6">Connect with be.adventurous</h3>

        <div className="flex flex-col gap-4 items-center mb-8">
          <a href="mailto:info@be-adventurous.com" className="hover:text-gray-300 transition-colors">
            <Mail className="inline-block mr-2" size={20} />
            info@be-adventurous.com
          </a>
          <a
            href="https://facebook.com/be.adventurous"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <Facebook className="inline-block mr-2" size={20} />
            be.adventurous
          </a>
          <a
            href="https://instagram.com/be.adventurous"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <Instagram className="inline-block mr-2" size={20} />
            @be.adventurous
          </a>
        </div>

        <div className="text-sm text-gray-400">
          <p>© {new Date().getFullYear()} be.adventurous. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

