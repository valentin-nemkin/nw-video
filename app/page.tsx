export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="p-6 rounded-lg bg-card border border-border shadow-md text-center">
        <h1 className="text-2xl font-bold mb-2 text-primary">
          Палитра Natural Warm работает ✅
        </h1>
        <p className="text-secondary">
          Если видишь светлый фон и контрастный текст — всё подключено правильно!
        </p>
        <button className="mt-4 px-4 py-2 rounded-md bg-primary text-background hover:bg-secondary transition">
          Проверить CTA
        </button>
      </div>
    </main>
  );
}
