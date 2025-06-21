import Link from "next/link";
import { Logo } from "../logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-row justify-between gap-8 py-8">
          <Logo />

          <nav className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-muted-foreground">
            <Link href="/termos-de-uso" className="hover:text-primary">Termos de uso</Link>
            <Link href="/politica-de-privacidade" className="hover:text-primary">Política de privacidde</Link>
            <Link href="/feedback" className="hover:text-primary">Feedbck</Link>
          </nav>

        </div>
      </div>
    </footer>
  )
}