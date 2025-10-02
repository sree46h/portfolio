export default function Footer() {
  return (
    <footer className="mt-12 py-10 border-t border-white/10 text-center text-sm text-zinc-400">
      <div className="max-w-6xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Sreeharinaidu. Built with React + Tailwind.</p>
      </div>
    </footer>
  );
}
