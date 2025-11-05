// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full mt-12 bg-white/60 backdrop-blur-md border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} CuraLink — Built with ♥ for healthcare innovation.
      </div>
    </footer>
  );
}
