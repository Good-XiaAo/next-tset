export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <p>这是Blog Layout</p>
      {children}
    </>
  );
}
