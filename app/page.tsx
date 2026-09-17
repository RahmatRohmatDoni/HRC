import Hero from "@/components/hero";
import JobList from "@/components/job-list";
import CommunityAccordion from "@/components/community-accordion";
import FacilitiesMarquee from "@/components/facilities-marquee";
import LinkTreeSection from "@/components/link-tree-section";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Hero />

      {/* 12+ Job Opportunities */}
      <JobList />

      {/* Community Groups */}
      <CommunityAccordion />

      {/* Quick Links (Linktree-style) */}
      <LinkTreeSection />

      {/* Facilities Marquee */}
      <FacilitiesMarquee />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-8 px-6 text-center text-sm text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} Hanra Community. Semua hak
          dilindungi.
        </p>
      </footer>
    </main>
  );
}
