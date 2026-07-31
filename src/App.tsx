import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Menu, X, Users, Heart, BookOpen, Award, Sparkles } from "lucide-react";

const CHURCH_LOGO = "https://i.imgur.com/4i3YiDX.jpeg";

const THEME_2026 = "https://i.imgur.com/MYRGq3r.jpeg";

const UPCOMING_EVENTS = [
  {
    title: "Rev. Macharia's Confirmation of Ordination Ceremony",
    tag: "Special Ceremony",
    description:
      "Join us as we honor and celebrate the confirmation of ordination of our beloved founder, Rev. Macharia. A moment of thanksgiving, worship, and prayer as we witness God's faithfulness over his ministry.",
    image: "https://i.imgur.com/ZRFzyZx.jpeg",
    highlight: true,
    date: "2026-09-05T09:00:00+03:00",
    dateLabel: "Saturday, 5th September 2026",
  },
];

function getTimeRemaining(target: string) {
  const total = new Date(target).getTime() - Date.now();
  if (total <= 0) return null;
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

function Countdown({ target }: { target: string }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(target));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeRemaining(target)), 1000);
    return () => clearInterval(timer);
  }, [target]);

  if (!timeLeft) {
    return (
      <div className="mb-8 rounded-2xl border border-red-500/30 bg-red-500/10 px-6 py-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
          This day has arrived — To God be the glory!
        </p>
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="mb-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
        Countdown to the ceremony
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-2 py-4 text-center backdrop-blur-sm"
          >
            <div className="text-2xl sm:text-3xl font-bold tabular-nums text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/35">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const MINISTRY_FLYERS = [
  {
    name: "Men's Ministry",
    label: "Men",
    description: "Building men of faith, responsibility, service, and spiritual strength.",
    image:
      "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/710745561_1308824958117718_4140504249445027142_n.jpg?stp=dst-jpg_tt6&cstp=mx972x1331&ctp=s972x1331&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OAynXgOBiIoQ7kNvwE1Btlz&_nc_oc=AdrFMvQPT2IWAESvAjStz4wTBVxcACiOnQIj__F_2fVRGzG_tDJdw9f6yAU_jDVMvgU&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=HhNnSj73Ms1U5cP74lSGYA&_nc_ss=7e289&oh=00_AQDp9wcWXwJ0VirZMQ3Ya2_SaOfUJvwmwwyw5_zLyAdf3Q&oe=6A6E7C0E",
  },
  {
    name: "Women's Ministry",
    label: "Women",
    description: "Empowering women to grow in prayer, love, wisdom, and service.",
    image:
      "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/495339291_1002986932034857_406555893303792653_n.jpg?stp=dst-jpg_tt6&cstp=mx1500x1500&ctp=s1500x1500&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zGFPd97u75YQ7kNvwGMoHxE&_nc_oc=AdqWDKB4E8TrcG2fcVfKeEW7cIH2NaULtVZWDC0dT0hUHPHirU3zpGQhnumi_hXGjMU&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=Z9WI1WLbubns_SXjBH0KDw&_nc_ss=7e289&oh=00_AQDoRS7OX88QCf37tuEE3CEzWZvKlFDk3Ko4Bc_dAAWnog&oe=6A6EB158",
  },
  {
    name: "Youth Ministry",
    label: "Youth",
    description: "Raising a bold generation grounded in faith, purpose, and excellence.",
    image:
      "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/524734178_1062000619466821_1985556317933545260_n.jpg?stp=dst-jpg_tt6&cstp=mx2040x918&ctp=s2040x918&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=opVYGiIfHL4Q7kNvwEvMEJw&_nc_oc=AdqoHMqjDXx1cv-QeWyWsjdNsXFoitth6NMyCMbwP4gPS33hwUKnoEpb-A3AE9xUGQg&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=P8jRWynS9_KROX_ONV41BA&_nc_ss=7e289&oh=00_AQC054uqS2OtmEDlnl4ayLGkO8NUytHOOjrVLMqTww2lNA&oe=6A6E8ED4",
  },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-[#f5f7fa] font-sans selection:bg-red-500/30">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#1a1f3c] to-[#0a0f1c]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        {/* Accent glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-6">
          <a href="#" className="flex items-center gap-3 text-white hover:text-red-400 transition-colors">
            <img
              src={CHURCH_LOGO}
              alt="Family Worship Center Nairutia Logo"
              className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover border-2 border-white/20 shadow-lg"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-wide">FWC NAIRUTIA</span>
              <span className="text-[10px] uppercase tracking-widest text-red-400 font-semibold">Family Worship Center</span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/70">
            <a href="#about" className="hover:text-red-400 transition-colors">About</a>
            <a href="#services" className="hover:text-red-400 transition-colors">Services</a>
            <a href="#vision" className="hover:text-red-400 transition-colors">Vision</a>
            <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
          </div>
          
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-20 right-6 md:hidden z-40 bg-[#0a0f1c]/95 border border-white/10 rounded-xl px-6 py-6 shadow-2xl flex flex-col gap-4 text-sm font-medium text-white/90 backdrop-blur-md">
            <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
            <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
            <a href="#vision" onClick={() => setMobileOpen(false)}>Vision</a>
            <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/30 blur-2xl rounded-full" />
              <img
                src={CHURCH_LOGO}
                alt="Family Worship Center Nairutia Official Logo"
                className="relative h-32 w-32 md:h-40 md:w-40 object-contain rounded-full border-4 border-white/20 shadow-2xl bg-white/5 backdrop-blur-sm"
              />
            </div>
          </div>
          
          <p className="text-red-400 tracking-[0.3em] text-xs uppercase mb-4 font-semibold">Family Worship Center</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Welcome to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-blue-400">
              FWC Nairutia
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light italic mb-8">
            "An Altar Of High Praises Unto The Lord"
          </p>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Join the Family {`{Church}`}. A Christ-centered ministry committed to raising a family of believers who walk in excellence in every area of life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full hover:from-red-500 hover:to-red-400 transition-all shadow-lg shadow-red-600/25">
              Service Times
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all backdrop-blur-sm">
              Visit Us
            </a>
          </div>
        </div>
      </header>

      {/* 2026 Theme */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[#0d1321]">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-red-600/10 blur-[140px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-14 md:py-20">
          <div className="text-left">
            <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-300">
              <Sparkles size={15} />
              FWC Nairutia 2026
            </div>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">Our theme for 2026</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/65">
              One message to guide our worship, our families, and our walk with God throughout the year.
            </p>
            <button
              onClick={() => setLightboxImage(THEME_2026)}
              className="mt-8 inline-flex items-center rounded-full border border-white/25 bg-red-600/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-400 hover:bg-red-600/40 shadow-lg shadow-red-600/10 cursor-pointer"
            >
              View Full Theme Flyer
            </button>
          </div>

          <div 
            onClick={() => setLightboxImage(THEME_2026)}
            className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/40 cursor-pointer group transition-transform hover:scale-[1.01]"
          >
            <img
              src={THEME_2026}
              alt="Family Worship Center Nairutia official 2026 church theme"
              className="block h-auto w-full object-contain"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-5 py-2.5 bg-black/80 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/25 shadow-xl">
                Click to expand flyer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-14 bg-[#0d1321]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-400 tracking-[0.2em] text-xs uppercase mb-4 font-semibold">About Us</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">A Christ-Centered Ministry</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Family Worship Church is a Christ-centered ministry committed to raising a family of believers who walk in excellence in every area of life — spiritually, socially, and economically.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                Rooted in <span className="text-red-400 font-semibold">Psalm 149</span>, our vision is to be an altar of high praises unto the Lord. With a strong foundation in worship, integrity, service, and love, we are a growing community that embraces modern methods while upholding godly principles.
              </p>
              <p className="text-white/60 text-sm mt-6">
                We currently have vibrant branches across Kenya, each led by passionate leaders dedicated to building God's Kingdom.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-blue-600/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-[#1a1f3c] to-[#0d1321] border border-white/10 rounded-3xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="text-red-400" size={24} />
                  Core Values
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Honesty", desc: "In actions, tithing, and offerings" },
                    { title: "Teamwork", desc: "Working together while maintaining individual responsibilities" },
                    { title: "Service", desc: "Volunteering and standing in the gap" },
                    { title: "Hard Work", desc: "Going beyond normal expectations" },
                    { title: "Transparency", desc: "Being open and responsible in all matters" },
                    { title: "Relevancy", desc: "Embracing modern methods while upholding godly principles" },
                    { title: "Compassion", desc: "Demonstrating love and care towards one another" },
                  ].map((value) => (
                    <div key={value.title} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-red-500/30 transition-colors">
                      <h4 className="font-semibold text-red-400 mb-1">{value.title}</h4>
                      <p className="text-xs text-white/50">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 md:py-32 px-6 md:px-14 bg-[#0d1321] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-semibold uppercase tracking-[0.25em] mb-5">
              <Sparkles size={14} />
              Save The Date
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-white/55 max-w-2xl mx-auto">
              Special gatherings, celebrations, and moments of worship you don't want to miss.
            </p>
          </div>

          <div className="space-y-8">
            {UPCOMING_EVENTS.map((event) => (
              <div
                key={event.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1f3c] to-[#0d1321] shadow-2xl shadow-black/20 hover:border-red-500/30 transition-all"
              >
                <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
                  {/* Event Image */}
                  <button
                    onClick={() => setLightboxImage(event.image)}
                    className="relative overflow-hidden bg-black min-h-[320px] md:min-h-[500px] cursor-pointer"
                    aria-label={`View ${event.title} flyer`}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    
                    {event.highlight && (
                      <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        Featured
                      </div>
                    )}

                    <div className="absolute bottom-5 right-5 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-medium border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to view flyer
                    </div>
                  </button>

                  {/* Event Details */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400 mb-4">
                      {event.tag}
                    </p>
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                      {event.title}
                    </h3>

                    <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80">
                      <Clock size={16} className="text-red-400" />
                      {event.dateLabel}
                    </div>

                    <p className="text-white/60 leading-relaxed mb-8">
                      {event.description}
                    </p>

                    <Countdown target={event.date} />
                    
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setLightboxImage(event.image)}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-sm font-semibold text-white hover:from-red-500 hover:to-red-400 transition-all shadow-lg shadow-red-600/25 cursor-pointer"
                      >
                        View Event Flyer
                      </button>
                      <a
                        href="whatsapp://send?phone=254115716601&text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20the%20upcoming%20event"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-green-400 hover:bg-green-500/10 transition-all"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Ask a Question
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Branches */}
      <section className="py-24 md:py-32 px-6 md:px-14 bg-[#0a0f1c] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-red-400 tracking-[0.2em] text-xs uppercase mb-4 font-semibold">Expanding the Kingdom</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Branches</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              FWC is growing! We have vibrant branches across Kenya, each led by passionate leaders dedicated to building God's Kingdom.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "FWC Nairutia",
                location: "Nairutia Shopping Center",
                county: "Nyeri, Kenya",
                note: "Main / Mother Church",
                detail: "Opp Nairutia Polytechnic",
                color: "red",
                badge: "HQ",
              },
              {
                name: "FWC Nyeri",
                location: "Gichira",
                county: "Nyeri, Kenya",
                note: "Nyeri Branch",
                detail: "Serving the Nyeri community",
                color: "purple",
                badge: "Branch",
              },
              {
                name: "FWC Nanyuki",
                location: "Nanyuki Town",
                county: "Laikipia, Kenya",
                note: "Nanyuki Branch",
                detail: "Serving the Nanyuki community",
                color: "blue",
                badge: "Branch",
              },
              {
                name: "FWC Rundung'uru",
                location: "Rundung'uru",
                county: "Kenya",
                note: "Rundung'uru Branch",
                detail: "Serving the Rundung'uru community",
                color: "green",
                badge: "Branch",
              },
            ].map((branch) => (
              <div
                key={branch.name}
                className={`relative group bg-gradient-to-br from-[#1a1f3c] to-[#0d1321] border border-white/10 rounded-3xl p-8 hover:border-${branch.color}-500/40 transition-all duration-300`}
              >
                <div className={`absolute top-5 right-5 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full
                  ${branch.badge === "HQ"
                    ? "bg-red-500/20 text-red-300 border border-red-500/30"
                    : "bg-white/5 text-white/40 border border-white/10"}`}
                >
                  {branch.badge}
                </div>

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                  ${branch.color === "red" ? "bg-red-500/10 group-hover:bg-red-500/20" :
                    branch.color === "purple" ? "bg-purple-500/10 group-hover:bg-purple-500/20" :
                    branch.color === "blue" ? "bg-blue-500/10 group-hover:bg-blue-500/20" :
                    "bg-green-500/10 group-hover:bg-green-500/20"} transition-colors`}
                >
                  <MapPin className={`
                    ${branch.color === "red" ? "text-red-400" :
                      branch.color === "purple" ? "text-purple-400" :
                      branch.color === "blue" ? "text-blue-400" :
                      "text-green-400"}`}
                    size={26}
                  />
                </div>

                <h3 className="text-xl font-bold mb-1">{branch.name}</h3>
                <p className={`text-sm font-semibold mb-3
                  ${branch.color === "red" ? "text-red-400" :
                    branch.color === "purple" ? "text-purple-400" :
                    branch.color === "blue" ? "text-blue-400" :
                    "text-green-400"}`}
                >
                  {branch.note}
                </p>
                <div className="flex items-start gap-2 text-white/50 text-sm">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <div>
                    <p>{branch.location}</p>
                    <p>{branch.county}</p>
                    <p className="text-white/30 text-xs mt-1">{branch.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-24 md:py-32 px-6 md:px-14 bg-[#0a0f1c] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-red-400 tracking-[0.2em] text-xs uppercase mb-4 font-semibold">Our Purpose</p>
            <h2 className="text-4xl md:text-5xl font-bold">Vision & Mission</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-[#1a1f3c] to-[#0d1321] border border-white/10 rounded-3xl p-8 md:p-10 hover:border-red-500/30 transition-all group">
              <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                <BookOpen className="text-red-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-xl text-white/90 italic mb-4">
                "To be an altar of proclaiming high praises unto the Lord."
              </p>
              <p className="text-white/50 text-sm">
                Vision derived from Psalms 149
              </p>
            </div>
            
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#1a1f3c] to-[#0d1321] border border-white/10 rounded-3xl p-8 md:p-10 hover:border-blue-500/30 transition-all group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Users className="text-blue-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                "To create a family of believers with a spirit of excellence in all aspects of life: in business, farming, family, church, and personal walk with God."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="py-24 md:py-32 px-6 md:px-14 bg-[#0a0f1c] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-purple-600/5 rounded-full blur-[150px]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-red-400 tracking-[0.2em] text-xs uppercase mb-4 font-semibold">Belong & Grow</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Ministries</h2>
            <p className="text-white/55 max-w-2xl mx-auto">
              FWC is a family for every generation. Explore our ministry groups and see where you can connect, serve, and grow.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {MINISTRY_FLYERS.map((ministry) => (
              <div
                key={ministry.name}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1f3c] to-[#0d1321] shadow-xl shadow-black/10 transition-all hover:border-red-500/30"
              >
                <button
                  onClick={() => setLightboxImage(ministry.image)}
                  className="relative block w-full overflow-hidden bg-white/5 cursor-pointer"
                  aria-label={`View ${ministry.name} flyer`}
                >
                  <img
                    src={ministry.image}
                    alt={`${ministry.name} flyer`}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1321]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md border border-white/10">
                    {ministry.label}
                  </div>
                </button>
                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-3">{ministry.name}</h3>
                  <p className="text-white/55 leading-relaxed text-sm mb-6">{ministry.description}</p>
                  <button
                    onClick={() => setLightboxImage(ministry.image)}
                    className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/90 transition hover:border-red-400 hover:bg-red-500/10 cursor-pointer"
                  >
                    View Flyer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-14 bg-[#0d1321]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-400 tracking-[0.2em] text-xs uppercase mb-4 font-semibold">Join Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Service Times</h2>
            <p className="text-white/60">Come worship with us and experience the presence of God</p>
          </div>
          
          <div className="space-y-6">
            {/* Sunday Service */}
            <div className="bg-gradient-to-r from-[#1a1f3c] to-[#0d1321] border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center">
                    <Clock className="text-red-400" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Sunday Service</h3>
                    <p className="text-white/50">Weekly Worship</p>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-2xl font-bold text-red-400">9:00 AM - 12:30 PM</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-1">9:00 - 9:30 AM</p>
                  <p className="font-medium">Morning Devotion</p>
                </div>
                <div className="text-center">
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-1">9:30 - 11:00 AM</p>
                  <p className="font-medium">Praise & Worship</p>
                </div>
                <div className="text-center">
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-1">11:00 - 11:30 AM</p>
                  <p className="font-medium">Announcements</p>
                </div>
                <div className="text-center">
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-1">11:30 - 12:30 PM</p>
                  <p className="font-medium">Giving & Sermon</p>
                </div>
              </div>
            </div>
            
            {/* Friday Night */}
            <div className="overflow-hidden bg-gradient-to-r from-[#1a1f3c] to-[#0d1321] border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all">
              <div className="grid md:grid-cols-[minmax(0,1fr)_1.1fr]">
                <div className="relative min-h-[220px] md:min-h-full">
                  <img
                    src="https://i.imgur.com/YSC5Xc9.png"
                    alt="FWC Nairutia praise and worship night"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0d1321]/50 via-[#0d1321]/20 to-[#0d1321]/90" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-purple-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200 backdrop-blur-sm">
                    Monthly
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 shrink-0 bg-purple-500/10 rounded-2xl flex items-center justify-center">
                        <Heart className="text-purple-400" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Praise & Worship Night</h3>
                        <p className="text-white/50">Last Friday of Every Month</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-2xl font-bold text-purple-400">7:00 PM - 10:00 PM</p>
                  <p className="mt-4 text-white/60">
                    A moment of praise and worship — come experience the power of corporate worship and encounter God's presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 md:py-32 px-6 md:px-14 bg-[#0a0f1c]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-red-400 tracking-[0.2em] text-xs uppercase mb-4 font-semibold">Leadership</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Founder</h2>
          
          <div className="bg-gradient-to-br from-[#1a1f3c] to-[#0d1321] border border-white/10 rounded-[2rem] p-4 md:p-6 shadow-2xl shadow-black/20">
            <div className="grid items-center gap-8 lg:gap-12 md:grid-cols-[minmax(320px,420px)_1fr] md:text-left">
              <div className="relative mx-auto w-full max-w-[390px]">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-red-500/20 via-purple-500/10 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#f6f7fb] to-white p-3 md:p-4 shadow-2xl shadow-black/30">
                  <div className="rounded-[1.5rem] bg-[#f7f7f7] px-2 pt-3">
                    <img
                      src="https://i.imgur.com/uprIHLz.jpeg"
                      alt="Rev. Macharia"
                      className="mx-auto block h-auto w-full max-h-[680px] object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 md:p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">Founder</p>
                <h3 className="text-3xl font-bold mb-2">Rev. Macharia</h3>
                <p className="text-red-400 font-medium mb-6">Founder & Overseer · Family Worship Center</p>
                <p className="text-white/70 leading-relaxed max-w-2xl md:max-w-none">
                  Rev. Macharia is the beloved founder and overseer of Family Worship Church. A true man of God, full of divine wisdom and deeply filled with the Holy Spirit. Known for his humility, passion for the Gospel, and unwavering commitment to the flock, he leads with both grace and strength. Through his spiritual guidance and vision, many lives have been transformed, and the church continues to grow across its branches. Rev. Macharia is not only a pastor but also a spiritual father, a mentor, and a servant leader devoted to seeing the Body of Christ walk in truth, power, and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-14 bg-[#0d1321]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-400 tracking-[0.2em] text-xs uppercase mb-4 font-semibold">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us</h2>
            <p className="text-white/60">We'd love to see you this Sunday!</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="bg-gradient-to-br from-[#1a1f3c] to-[#0d1321] border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all">
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="text-red-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p className="text-white/70 leading-relaxed">
                Nairutia Shopping Center<br />
                Nyeri, Kenya<br />
                <span className="text-white/50 text-sm">(Opp Nairutia Polytechnic)</span>
              </p>
            </div>
            
            {/* Phone */}
            <div className="bg-gradient-to-br from-[#1a1f3c] to-[#0d1321] border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all">
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                <Phone className="text-red-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Phone</h3>
              <a href="tel:+254115716601" className="text-white/70 hover:text-red-400 transition-colors text-lg">
                +254 115 716 601
              </a>
            </div>
            
            {/* Email */}
            <div className="bg-gradient-to-br from-[#1a1f3c] to-[#0d1321] border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all">
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                <Mail className="text-red-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <a href="mailto:familyworshipcenter@gmail.com" className="text-white/70 hover:text-red-400 transition-colors">
                familyworshipcenter@gmail.com
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 grid lg:grid-cols-[1fr_1.6fr] gap-8 items-stretch">
            <div className="bg-gradient-to-br from-[#1a1f3c] to-[#0d1321] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-center">
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="text-red-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Find Us Here</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                We are located at Nairutia Shopping Center, opposite Nairutia Polytechnic in Nyeri, Kenya. Come worship with us!
              </p>
              <a
                href="https://maps.app.goo.gl/b91rzGC2bLeLv2yd7""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-sm font-semibold text-white hover:from-red-500 hover:to-red-400 transition-all shadow-lg shadow-red-600/25"
              >
                <MapPin size={16} />
                Get Directions
              </a>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/30 min-h-[340px] lg:min-h-0">
              <iframe
                title="FWC Nairutia Location Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127673.7702916908!2d36.5699161!3d-0.1462553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182831001a2feb2b%3A0x4cf843399d90ddc8!2sFamily%20Worship%20Church!5e0!3m2!1sen!2ske!4v1785489407953!5m2!1sen!2ske"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              {/* Custom label overlay */}
              <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-[#0d1321]/90 px-4 py-3 shadow-xl backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/20">
                  <MapPin className="text-red-400" size={18} />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-white">Family Worship Center Nairutia</p>
                  <p className="text-[11px] text-white/50">Nairutia Shopping Center · Nyeri</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social CTAs */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://www.facebook.com/FWCNairutia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1877F2] text-white font-semibold rounded-full hover:bg-[#166fe5] transition-all shadow-lg shadow-blue-600/25"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow us on Facebook
              </a>

              <a
                href="whatsapp://send?phone=254115716601&text=Hello%20Family%20Worship%20Center%20Nairutia"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-600/25"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
            <p className="text-white/40 text-sm mt-4">Family Worship Center Nairutia</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050810] border-t border-white/5 py-12 px-6 md:px-14">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src={CHURCH_LOGO}
                alt="Family Worship Center Nairutia Logo"
                className="h-10 w-10 rounded-full object-cover border border-white/20"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold tracking-wide">FWC NAIRUTIA</span>
                <span className="text-[9px] uppercase tracking-widest text-red-400">Family Worship Center</span>
              </div>
            </div>
            
            <p className="text-white/40 text-sm text-center">
              An Altar Of High Praises Unto The Lord
            </p>
            
            <div className="flex items-center gap-2 text-white/30 text-sm">
              <span>© {new Date().getFullYear()} Family Worship Center</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 md:-right-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-black shadow-2xl max-h-[82vh] w-full flex items-center justify-center">
              <img
                src={lightboxImage}
                alt="Enlarged theme flyer"
                className="max-h-[82vh] w-auto max-w-full object-contain"
              />
            </div>
            <p className="text-white/60 text-xs mt-4">Click anywhere outside or press close to exit</p>
          </div>
        </div>
      )}
    </div>
  );
}
