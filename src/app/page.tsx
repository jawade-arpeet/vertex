import Link from "next/link";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";

const metadata: Metadata = {
  title: "Vertex",
};

const Page = () => {
  return (
    <main className="mx-auto px-4 md:px-6 2xl:max-w-screen-xl">
      <header className="mx-auto max-w-screen-xl py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            vertex
          </Link>
          <div className="flex items-center gap-x-4">
            <Button variant={"ghost"}>Login</Button>
            <Button>Get Started</Button>
          </div>
        </nav>
      </header>
      <section className="mt-8">
        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl md:text-8xl">
          Bringing communities together
        </h1>
        <p className="mt-2 max-w-2xl text-sm  text-muted-foreground">
          Vertex is a community platform. You can discover communities or create
          your own. Some are free, some paid. People earn full-time incomes
          building on Vertex.
        </p>
      </section>
    </main>
  );
};

export { metadata };

export default Page;
