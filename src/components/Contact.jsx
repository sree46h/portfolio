import Section from "./Section.jsx";
import profile from "../data/profile.json";

export default function Contact() {
  return (
    <Section id="contact" title="Get in Touch" badge="Contact form">
      {/* Replace `your@email` with your email to enable formsubmit */}
      <form
        action="https://formsubmit.co/your@email.com"
        method="POST"
        className="rounded-2xl p-5 bg-white/5 ring-1 ring-white/10 grid md:grid-cols-2 gap-4"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={window.location.href} />
        <label className="flex flex-col gap-1">
          <span className="text-sm text-zinc-300">Name</span>
          <input required name="name" className="px-3 py-2 rounded-lg bg-white/10 ring-1 ring-white/10 outline-none focus:ring-white/30" placeholder="Your name" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm text-zinc-300">Email</span>
          <input required name="email" type="email" className="px-3 py-2 rounded-lg bg-white/10 ring-1 ring-white/10 outline-none focus:ring-white/30" placeholder="you@example.com" />
        </label>
        <label className="md:col-span-2 flex flex-col gap-1">
          <span className="text-sm text-zinc-300">Message</span>
          <textarea required name="message" rows="5" className="px-3 py-2 rounded-lg bg-white/10 ring-1 ring-white/10 outline-none focus:ring-white/30" placeholder="How can I help?" />
        </label>
        <div className="md:col-span-2 flex items-center gap-3">
          <button className="px-5 py-2 rounded-xl bg-white text-slate-900 font-medium hover:bg-white/90">Send</button>
          <a className="px-4 py-2 rounded-xl bg-white/10 ring-1 ring-white/10 hover:bg-white/15 hover:no-underline" href={`mailto:${profile.email}`}>Email me directly</a>
        </div>
      </form>
    </Section>
  );
}
