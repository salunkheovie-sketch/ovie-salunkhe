import { ThemeToggle } from "./ui/ThemeToggle";
import { Camera, MessageSquare, Mail, PlaySquare } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-[var(--color-panel-border)] pt-20 pb-10 px-4 sm:px-6 lg:px-8 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        <div className="md:col-span-5">
          <h2 className="text-4xl font-black mb-4 tracking-tight text-foreground">
            Ovie <span className="text-gradient">Salunkhe</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-8 leading-relaxed">
            Passion. Precision. Power. Following the journey of Mumbai's rising cricket prodigy on her path to greatness.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-[var(--color-panel-bg)] border border-[var(--color-panel-border)] flex items-center justify-center text-foreground hover:text-[var(--color-brand-orange)] hover:border-[var(--color-brand-orange)] transition-all hover:-translate-y-1">
              <Camera size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[var(--color-panel-bg)] border border-[var(--color-panel-border)] flex items-center justify-center text-foreground hover:text-blue-400 hover:border-blue-400 transition-all hover:-translate-y-1">
              <MessageSquare size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[var(--color-panel-bg)] border border-[var(--color-panel-border)] flex items-center justify-center text-foreground hover:text-red-500 hover:border-red-500 transition-all hover:-translate-y-1">
              <PlaySquare size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[var(--color-panel-bg)] border border-[var(--color-panel-border)] flex items-center justify-center text-foreground hover:text-[var(--color-neon-green)] hover:border-[var(--color-neon-green)] transition-all hover:-translate-y-1">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col justify-center items-start md:items-center">
           <div className="flex flex-col items-center gap-4">
             <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Appearance</p>
             <ThemeToggle />
           </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[var(--color-panel-border)] text-center md:text-left flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>&copy; {currentYear} Ovie Salunkhe. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Developed by <a href="https://apxteck.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-foreground transition-colors font-semibold tracking-wide">APX Teck</a></p>
      </div>
    </footer>
  );
}
