'use client';

export default function Footer() {
  return (
    <footer className="section-padding bg-foreground text-background text-center">
      <p className="font-primary text-sm">
        © {new Date().getFullYear()} NW Video Landing — все права защищены.
      </p>
    </footer>
  );
}
