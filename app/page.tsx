import Link from "next/link";

export default function Home() {
  console.log("Home123");
  return (
    <>
      <h1>Home</h1>
      <Link href="/about">导航到About</Link>
    </>
  );
}
