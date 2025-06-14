import React from "react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-gold font-[Times_New_Roman] p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold">Ugwu Patrick Ifechukwu</h1>
        <p className="text-xl mt-2">Frontend Developer and Web3 Enthusiast</p>
        <p className="text-md mt-1 text-zinc-400">Enugu, Nigeria</p>
      </header>

      <section className="max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg">
          A Web3 enthusiast,A Community manager, still learning and aspiring to be a Web3 Dev.
        </p>
      </section>

      <section className="max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-4">Project</h2>
        <div className="bg-zinc-800 border border-gold p-4 rounded-xl">
          <h3 className="text-2xl font-bold">Citrea Nigeria Threads</h3>
          <p className="mt-2 text-lg">
            Explaining different angles why Developers should build on Bitcoin.
          </p>
          <p className="mt-1 text-sm text-zinc-400">Role: Community Manager - CITREA Nigeria</p>
          <a
            href="https://x.com/Dollars_367dev?t=JlRk5XpiBT8FCfACvbAmHg&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-gold underline hover:text-white"
          >
            View on X
          </a>
        </div>
        <li> I educate devs on why to build on bitcoin (Citrea threads)</li>
        <li>I represent the Web3 communities actively </li>
        <li> I create contents, and spark conversation</li>
        <li> I am a very good reply guy</li>
        <li>I'm focused on onboarding africans into Web3 the right way and my project on that</li>
      </section>

      <section className="max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-lg">
          <li>HTML and CSS</li>
          <li>Learning Smart Contracts</li>
        </ul>
      </section>

      <section className="max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:patrickugwu367@gmail.com" className="underline text-gold">patrickugwu367@gmail.com</a></p>
        <p>X: <a href="https://x.com/Dollars_367dev" target="_blank" rel="noopener noreferrer" className="underline text-gold">@Dollars_367dev</a></p>
      </section>
    </main>
  );
}
