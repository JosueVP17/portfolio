import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Notes from "@/components/Notes";
import Skills from "@/components/Skills";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <FadeIn><Experience /></FadeIn>
      <FadeIn><Projects /></FadeIn>
      <FadeIn><Education /></FadeIn>
      <FadeIn><Notes /></FadeIn>
      <FadeIn><Skills /></FadeIn>
      <footer className="py-8 text-center text-xs text-muted-dim border-t border-border">
        &copy; {new Date().getFullYear()} Josue Valenzuela. Built with Next.js &amp; Tailwind CSS.
      </footer>
    </>
  );
}
