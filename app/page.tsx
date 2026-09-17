import AboutSection from "@/components/about-section";
import JobList from "@/components/job-list";
import CommunityAccordion from "@/components/community-accordion";
import LinkTreeSection from "@/components/link-tree-section";
import FacilitiesMarquee from "@/components/facilities-marquee";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <AboutSection />
        <JobList />
        <CommunityAccordion />
        <LinkTreeSection />
        <FacilitiesMarquee />
      </main>

      <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950 py-8 px-6 text-center text-sm text-slate-500 dark:text-slate-400">
        <div className="mx-auto max-w-6xl">
          <p>© {new Date().getFullYear()} Hanra Community. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
