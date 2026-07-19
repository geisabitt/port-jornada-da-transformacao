// src/client/home/HomePage.tsx
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/core/lib/prisma";
import { siteConfig } from "@/client/config/site.config"; // ← import que faltava
import Hero from "./sections/Hero";
import Problems from "./sections/Problems";
import Transformation from "./sections/Transformation";
import AboutJourney from "./sections/AboutJourney";
import AboutRafael from "./sections/AboutRafael";
import Experience from "./sections/Experience";
import Audience from "./sections/Audience";
import Testimonials from "./sections/Testimonials";
import EventDetails from "./sections/EventDetails";
import Registration from "./sections/Registration";
import FAQ from "./sections/FAQ";
import GoldenWaves from "@/core/components/GoldenWaves";

export default async function HomePage() {
  const categories = await prisma.blogCategory.findMany({
    where: { showOnHome: true },
    orderBy: { order: "asc" },
    take: 3,
  });

  return (
    <main className="w-full" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}>

      {/* HERO */}
      <Hero />
      <Problems />
      <Transformation />
      <AboutJourney />
      <AboutRafael />
      <Experience />
      <Audience />
      <Testimonials />
      <EventDetails />
      <Registration />
      <FAQ />

    </main>
  );
}