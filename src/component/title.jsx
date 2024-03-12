export default function Title({ text, children }) {
  return (
    <header className="mb-4 flex items-center justify-between">
      <h4 className="text-3xl font-bold tracking-tight">{text}</h4>
      {children}
    </header>
  );
}
