import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Expertise } from "@/components/sections/Expertise";
import { FeaturedPortfolio } from "@/components/sections/FeaturedPortfolio";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Expertise />
      <FeaturedPortfolio />
      <ServicesPreview />
      <FeaturedCourses />
      <Testimonials />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
