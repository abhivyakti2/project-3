//static page
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg">
        This is the About page. You can describe your project, team, or
        anything else here.
      </p>
    </main>
  );
}
