import {
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaDumbbell,
  FaRunning,
  FaUserTie,
  FaAppleAlt,
  FaTrophy,
  FaBullseye,
  FaFire,
  FaBolt,
  FaWeightHanging,
  FaHeart,
  FaClock,
  FaLock,
} from "react-icons/fa";
import { GiWeightLiftingUp, GiMuscleUp } from "react-icons/gi";
import { MdFitnessCenter, MdDirectionsRun } from "react-icons/md";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import gymBg from "./assets/gym-bg.jpg";
import trainer1 from "./assets/trainer1.jpg";
import trainer2 from "./assets/trainer2.jpg";
import trainer3 from "./assets/trainer3.jpg";
import gallery1 from "./assets/gallery1.jpg";
import gallery2 from "./assets/gallery2.jpg";
import gallery3 from "./assets/gallery3.jpg";
import gallery4 from "./assets/gallery4.jpg";
import gallery5 from "./assets/gallery5.jpg";
import gallery6 from "./assets/gallery6.jpg";
import logo from "./assets/logo.png";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/917376449121";
  const [activeSection, setActiveSection] = useState("home");
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const heroRef = useRef(null);
  const [members, setMembers] = useState(0);
  const [trainersCount, setTrainersCount] = useState(0);
  const [years, setYears] = useState(0);
  const [heroOffset, setHeroOffset] = useState(0);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [bmiHeight, setBmiHeight] = useState("");
  const [bmiWeight, setBmiWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);

  const [openFaq, setOpenFaq] = useState(null);

  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formGoal, setFormGoal] = useState("");

  const plans = [
    {
      id: 1,
      name: "Monthly",
      duration: "1 Month",
      price: "₹999",
      tag: "Get Started",
      popular: false,
      features: ["Full Gym Access", "Trainer Guidance", "Locker Facility"],
    },
    {
      id: 2,
      name: "Quarterly",
      duration: "3 Months",
      price: "₹2,499",
      tag: "Save 16%",
      popular: true,
      offer: "Best Value",
      features: [
        "Full Gym Access",
        "Trainer Guidance",
        "Locker Facility",
        "Diet Consultation",
      ],
    },
    {
      id: 3,
      name: "Half-Yearly",
      duration: "6 Months",
      price: "₹4,499",
      tag: "Save 25%",
      popular: false,
      offer: "Save More",
      features: [
        "Full Gym Access",
        "Trainer Guidance",
        "Locker Facility",
        "Personal Training Session",
      ],
    },
    {
      id: 4,
      name: "Yearly",
      duration: "12 Months",
      price: "₹7,999",
      tag: "Save 33%",
      popular: false,
      offer: "Max Gains",
      features: [
        "Full Gym Access",
        "Trainer Guidance",
        "Locker Facility",
        "Personal Training Session",
      ],
    },
  ];

  const trainingPrograms = [
    {
      id: 1,
      icon: <FaFire />,
      title: "Weight Loss",
      desc: "Fat burning workouts and nutrition guidance to help you shed weight effectively.",
    },
    {
      id: 2,
      icon: <GiMuscleUp />,
      title: "Muscle Gain",
      desc: "Structured hypertrophy and strength training for maximum muscle growth.",
    },
    {
      id: 3,
      icon: <GiWeightLiftingUp />,
      title: "Strength Training",
      desc: "Build strength and improve overall performance with progressive overload.",
    },
    {
      id: 4,
      icon: <MdDirectionsRun />,
      title: "HIIT Training",
      desc: "High intensity workouts for maximum calorie burn in minimum time.",
    },
    {
      id: 5,
      icon: <FaUserTie />,
      title: "Personal Training",
      desc: "One-on-one coaching with fully customized workout and diet plans.",
    },
    {
      id: 6,
      icon: <FaHeart />,
      title: "General Fitness",
      desc: "Improve overall health, stamina and flexibility for a balanced lifestyle.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      initials: "R",
      rating: 5,
      review:
        "Best gym in Barhalganj. Trainers are very supportive and always motivating. Gained 6kg muscle in 4 months!",
      tag: "Muscle Gain",
    },
    {
      id: 2,
      name: "Aman Gupta",
      initials: "A",
      rating: 5,
      review:
        "Lost 12kg and gained confidence within a few months. Life-changing experience. Highly recommend!",
      tag: "Weight Loss",
    },
    {
      id: 3,
      name: "Priya Singh",
      initials: "P",
      rating: 5,
      review:
        "Clean environment and motivating atmosphere. Feel at home here. Best investment I made for my health.",
      tag: "Fitness",
    },
  ];

  const trainers = [
    {
      id: 1,
      image: trainer1,
      name: "Pradum Masih",
      role: "Fitness Coach",
      exp: "4+ Years Experience",
      specialty: "Strength & Conditioning",
      whatsapp: "https://wa.me/917376449121",
      instagram: "https://instagram.com/thepowergym8",
    },
    {
      id: 2,
      image: trainer2,
      name: "Pradeep Valmiki",
      role: "Owner & Bodybuilder",
      exp: "10+ Years Experience",
      specialty: "Bodybuilding & Nutrition",
      whatsapp: "https://wa.me/917376449121",
      instagram: "https://instagram.com/thepowergym8",
    },
    {
      id: 3,
      image: trainer3,
      name: "Coming Soon",
      role: "Certified Trainer",
      exp: "Details Coming Soon",
      specialty: "Joining The Team",
      whatsapp: null,
      instagram: null,
    },
  ];

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  // Updated features — react-icons replacing emojis
  const features = [
    {
      id: 1,
      icon: <FaDumbbell />,
      title: "Modern Equipment",
      desc: "Latest machines and quality workout equipment for effective training.",
    },
    {
      id: 2,
      icon: <FaTrophy />,
      title: "Certified Trainers",
      desc: "Experienced trainers to guide your fitness journey safely.",
    },
    {
      id: 3,
      icon: <FaBullseye />,
      title: "Personal Guidance",
      desc: "Customized workout plans according to your fitness goals.",
    },
    {
      id: 4,
      icon: <FaBolt />,
      title: "Friendly Environment",
      desc: "Motivating and supportive atmosphere for everyone.",
    },
  ];

  const faqs = [
    {
      q: "What membership plans are available?",
      a: "We offer Monthly (₹999), Quarterly (₹2,499), Half-Yearly (₹4,499), and Yearly (₹7,999) plans. Each plan includes full gym access, trainer guidance, and locker facility. Contact us on WhatsApp for the latest offers.",
    },
    {
      q: "Do you offer personal training sessions?",
      a: "Yes! Our certified trainers provide personalized training plans tailored to your specific goals — whether it's weight loss, muscle gain, or general fitness. Personal training sessions can be booked separately or bundled with membership.",
    },
    {
      q: "What are your gym timings?",
      a: "The Power Gym is open every day from 5:00 AM to 10:00 PM. We are open 7 days a week including Sunday and public holidays so you never miss a workout.",
    },
    {
      q: "Can I get guidance for weight loss?",
      a: "Absolutely! Our trainers specialize in weight loss programs combining customized workout routines with basic diet and nutrition advice. Many of our members have achieved amazing transformations under expert guidance.",
    },
    {
      q: "Is there a free trial available?",
      a: "Yes! We offer a free trial session for new members. Simply contact us on WhatsApp or walk in to The Power Gym in Barhalganj, Gorakhpur, and our team will get you started.",
    },
  ];

  // ── Energy Grid Canvas ────────────────────────────────────────────
  useEffect(() => {
    if (loading) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NODE_COUNT = 40;
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.8,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.02,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        const pulseAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        const pulseR = p.r * (1 + 0.3 * Math.sin(p.pulse));
        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          pulseR * 4,
        );
        grad.addColorStop(0, `rgba(255, 122, 0, ${pulseAlpha})`);
        grad.addColorStop(1, `rgba(255, 122, 0, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseR * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 160, 50, ${pulseAlpha})`;
        ctx.fill();
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.15;
            const gradient = ctx.createLinearGradient(
              nodes[i].x,
              nodes[i].y,
              nodes[j].x,
              nodes[j].y,
            );
            gradient.addColorStop(0, `rgba(255, 122, 0, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(255, 180, 50, ${alpha * 1.5})`);
            gradient.addColorStop(1, `rgba(255, 122, 0, ${alpha})`);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [loading]);

  useEffect(() => {
    if (loading) return;
    const handleParallax = () => {
      if (heroRef.current) setHeroOffset(window.scrollY * 0.35);
    };
    window.addEventListener("scroll", handleParallax, { passive: true });
    return () => window.removeEventListener("scroll", handleParallax);
  }, [loading]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (loading) return;
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add("active");
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            const cards = entry.target.querySelectorAll(
              ".card, .plan-card, .testimonial-card, .trainer-card, .feature-card, .gallery-item, .program-card",
            );
            cards.forEach((card, i) => {
              card.style.setProperty("--stagger-delay", `${i * 0.1}s`);
              card.classList.add("stagger-child");
            });
          }
        });
      },
      { threshold: 0.05 },
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    const sections = document.querySelectorAll("[id]");
    const handleScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (!e.target.closest(".navbar") && !e.target.closest(".mobile-menu")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [menuOpen]);

  useEffect(() => {
    if (loading) return;
    const targets = { members: 250, trainers: 4, years: 3 };
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - (1 - progress) * (1 - progress);
      setMembers(Math.round(targets.members * ease));
      setTrainersCount(Math.round(targets.trainers * ease));
      setYears(Math.round(targets.years * ease));
      if (step >= steps) {
        setMembers(targets.members);
        setTrainersCount(targets.trainers);
        setYears(targets.years);
        clearInterval(timer);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [loading]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i + 1) % galleryImages.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex(
          (i) => (i - 1 + galleryImages.length) % galleryImages.length,
        );
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, galleryImages.length]);

  const calculateBMI = () => {
    const h = parseFloat(bmiHeight);
    const w = parseFloat(bmiWeight);
    if (!h || !w || h <= 0 || w <= 0) return;
    const heightM = h / 100;
    const bmi = w / (heightM * heightM);
    let category, color, tip;
    if (bmi < 18.5) {
      category = "Underweight";
      color = "#60a5fa";
      tip = "Focus on strength training and a calorie-surplus diet.";
    } else if (bmi < 25) {
      category = "Normal Weight";
      color = "#4ade80";
      tip = "Great! Maintain your fitness with regular workouts.";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "#fbbf24";
      tip = "Cardio + strength training will help you reach your goal.";
    } else {
      category = "Obese";
      color = "#f87171";
      tip = "Our trainers can build a personalized plan for you.";
    }
    setBmiResult({ bmi: bmi.toFixed(1), category, color, tip });
  };

  const handleFormSubmit = () => {
    if (!formName || !formPhone) return;
    const msg = `Hi! I'm ${formName}. My phone: ${formPhone}. My fitness goal: ${formGoal || "General Fitness"}. I'd like to join The Power Gym.`;
    window.open(
      `https://wa.me/917376449121?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-inner">
          <img src={logo} alt="Power Gym" className="loader-logo" />
          <h1 className="loader-text">THE POWER GYM</h1>
          <p className="loader-sub">Barhalganj · Gorakhpur</p>
          <div className="loader-bar-wrap">
            <div className="loader-bar" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="site-wrapper">
      {/* ── NAVBAR ── */}
      <nav
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="logo-container">
          <img src={logo} alt="The Power Gym" className="logo-img" />
          <div className="logo-text">THE POWER GYM</div>
        </div>
        <ul className="nav-links" role="list">
          {["home", "about", "plans", "bmi", "contact"].map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={activeSection === sec ? "active-link" : ""}
                aria-current={activeSection === sec ? "page" : undefined}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="nav-btn"
          aria-label="Book a free trial on WhatsApp"
        >
          Book Trial
        </a>
        <button
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "menu-open" : ""}`}
        role="menu"
      >
        {["home", "about", "plans", "bmi", "contact"].map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            onClick={() => setMenuOpen(false)}
            className={activeSection === sec ? "active-link" : ""}
            role="menuitem"
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mobile-trial-btn"
          onClick={() => setMenuOpen(false)}
          role="menuitem"
        >
          Book Free Trial
        </a>
      </div>

      {/* ── HERO ── */}
      <div
        id="home"
        className="hero"
        ref={heroRef}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.72)), url(${gymBg})`,
          backgroundPositionY: `${heroOffset}px`,
        }}
        role="banner"
      >
        <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
        <div className="glow-orb orb-1" aria-hidden="true" />
        <div className="glow-orb orb-2" aria-hidden="true" />
        <div className="glow-orb orb-3" aria-hidden="true" />
        <div className="hero-scanlines" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-ring" aria-hidden="true" />
          <span className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            Barhalganj, Gorakhpur
          </span>
          <h1 className="hero-title">
            <span className="hero-title-line">THE</span>
            <span className="hero-title-main">POWER GYM</span>
          </h1>
          <p className="hero-tagline">
            Transform Your Body,
            <br />
            <em>Transform Your Life</em>
          </p>
          <div className="hero-actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="hero-btn"
              aria-label="Book a free trial session"
            >
              Book Free Trial
            </a>
            <a href="#about" className="hero-btn-ghost">
              Explore More ↓
            </a>
          </div>
          <div className="hero-stats" role="region" aria-label="Gym statistics">
            <div className="stat">
              <h3>
                {members}
                <span className="stat-plus">+</span>
              </h3>
              <p>Members</p>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat">
              <h3>
                {trainersCount}
                <span className="stat-plus">+</span>
              </h3>
              <p>Trainers</p>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat">
              <h3>
                {years}
                <span className="stat-plus">+</span>
              </h3>
              <p>Years</p>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint" aria-hidden="true">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <section className="stats-bar reveal" aria-label="Key statistics">
        <div className="stats-bar-inner">
          {[
            { num: "200+", label: "Active Members" },
            { num: "3+", label: "Years Running" },
            { num: "20+", label: "Machines" },
            { num: "100+", label: "Transformations" },
          ].map((s, i) => (
            <div className="stats-bar-item" key={i}>
              <h2>{s.num}</h2>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about reveal">
        <div className="section-label">WHO WE ARE</div>
        <h2 className="section-title">
          Why Choose <span className="accent">The Power Gym?</span>
        </h2>
        <p className="about-text">
          The Power Gym helps students, working professionals, and fitness
          enthusiasts achieve their goals through expert guidance, modern
          equipment, and a motivating training environment.
        </p>
      </section>

      {/* ── AUDIENCE (Built For Everyone) ── */}
      <section id="audience" className="audience reveal">
        <div className="section-label">WHO WE TRAIN</div>
        <h2 className="section-title">
          Built For <span className="accent">Everyone</span>
        </h2>
        <div className="audience-cards">
          {[
            {
              title: "Students",
              desc: "Build strength, confidence, and discipline while balancing studies.",
              icon: <MdFitnessCenter />,
            },
            {
              title: "Working Professionals",
              desc: "Stay fit, reduce stress, and maintain an active lifestyle.",
              icon: <FaBullseye />,
            },
            {
              title: "Weight Loss Clients",
              desc: "Personalized workouts and guidance to achieve your fitness goals.",
              icon: <FaFire />,
            },
          ].map((item, i) => (
            <div className="card" key={i}>
              <div className="card-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PLANS ── */}
      <section id="plans" className="plans reveal">
        <div className="section-label">MEMBERSHIP</div>
        <h2 className="section-title">
          Choose Your <span className="accent">Plan</span>
        </h2>
        <p className="plans-sub">
          Flexible memberships built for your goals. Contact us for the latest
          offers.
        </p>
        <div className="plan-cards">
          {plans.map((plan) => (
            <div
              className={`plan-card ${plan.popular ? "popular" : ""}`}
              key={plan.id}
              role="article"
              aria-label={`${plan.name} plan`}
            >
              <div className="plan-card-top">
                {plan.offer && (
                  <span className="plan-offer-badge">{plan.offer}</span>
                )}
                {plan.popular && (
                  <span className="popular-badge">
                    <FaTrophy style={{ fontSize: "0.7rem" }} /> Most Popular
                  </span>
                )}
                <div className="plan-duration-badge">{plan.duration}</div>
                <h3>{plan.name}</h3>
                <div className="plan-price">{plan.price}</div>
                <p className="plan-tag">{plan.tag}</p>
              </div>
              <ul className="plan-features-list" aria-label="Plan features">
                {plan.features.map((f, idx) => (
                  <li key={idx}>
                    <span className="plan-check" aria-hidden="true">
                      ✓
                    </span>{" "}
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="plan-btn"
                aria-label={`Enquire about ${plan.name} plan`}
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRAINING PROGRAMS ── */}
      <section className="programs reveal" aria-label="Training programs">
        <div className="section-label">WHAT WE OFFER</div>
        <h2 className="section-title">
          Training <span className="accent">Programs</span>
        </h2>
        <p className="programs-sub">
          Specialized fitness programs designed for every fitness goal.
        </p>
        <div className="program-cards">
          {trainingPrograms.map((prog) => (
            <div className="program-card" key={prog.id}>
              <div className="program-icon" aria-hidden="true">
                {prog.icon}
              </div>
              <h3>{prog.title}</h3>
              <p>{prog.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials reveal" aria-label="Member testimonials">
        <div className="section-label">TESTIMONIALS</div>
        <h2 className="section-title">
          What Our <span className="accent">Members Say</span>
        </h2>
        <div className="testimonial-cards">
          {testimonials.map((t) => (
            <div
              className="testimonial-card"
              key={t.id}
              role="article"
              aria-label={`Review by ${t.name}`}
            >
              <div className="testimonial-tag">{t.tag}</div>
              <div
                className="testimonial-stars"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>
              <p className="testimonial-text">"{t.review}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <h4>{t.name}</h4>
                  <span className="testimonial-member-label">
                    Verified Member
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRAINERS ── */}
      <section className="trainers reveal" aria-label="Our trainer team">
        <div className="section-label">THE TEAM</div>
        <h2 className="section-title">
          Meet Our <span className="accent">Trainers</span>
        </h2>
        <div className="trainer-cards">
          {trainers.map((trainer) => (
            <div
              className="trainer-card"
              key={trainer.id}
              role="article"
              aria-label={`Trainer ${trainer.name}`}
            >
              <div className="trainer-img-wrap">
                <img
                  src={trainer.image}
                  alt={`Trainer ${trainer.name}`}
                  className="trainer-img"
                />
                <div className="trainer-img-ring" aria-hidden="true" />
              </div>
              <h3>{trainer.name}</h3>
              <p className="trainer-role">{trainer.role}</p>
              <span className="trainer-specialty">{trainer.specialty}</span>
              <div className="trainer-exp-badge">{trainer.exp}</div>
              {(trainer.whatsapp || trainer.instagram) && (
                <div className="trainer-social">
                  {trainer.whatsapp && (
                    <a
                      href={trainer.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="trainer-social-btn trainer-wa"
                      aria-label={`Chat with ${trainer.name} on WhatsApp`}
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>
                  )}
                  {trainer.instagram && (
                    <a
                      href={trainer.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="trainer-social-btn trainer-ig"
                      aria-label={`Follow ${trainer.name} on Instagram`}
                    >
                      <FaInstagram /> Instagram
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="gallery reveal" aria-label="Gym gallery">
        <div className="section-label">GYM GALLERY</div>
        <h2 className="section-title">
          Our <span className="accent">Space</span>
        </h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              className={`gallery-item ${index === 0 ? "gallery-item-wide" : ""}`}
              key={index}
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
              role="button"
              tabIndex={0}
              aria-label={`View gallery image ${index + 1}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }
              }}
            >
              <img
                src={image}
                alt={`The Power Gym gallery image ${index + 1}`}
                loading="lazy"
              />
              <div className="gallery-overlay" aria-hidden="true">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close image viewer"
          >
            ✕
          </button>
          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (i) => (i - 1 + galleryImages.length) % galleryImages.length,
              );
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div
            className="lightbox-img-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex]}
              alt={`Gallery image ${lightboxIndex + 1}`}
              className="lightbox-img"
            />
            <div className="lightbox-counter">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </div>
          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i + 1) % galleryImages.length);
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}

      {/* ── FEATURES / OUR FACILITIES ── */}
      <section className="features reveal" aria-label="Gym facilities">
        <div className="section-label">WHAT WE OFFER</div>
        <h2 className="section-title">
          Our <span className="accent">Facilities</span>
        </h2>
        <div className="feature-cards">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BMI CALCULATOR ── */}
      <section
        className="bmi-section reveal"
        id="bmi"
        aria-label="BMI Calculator"
      >
        <div className="section-label">FITNESS TOOL</div>
        <h2 className="section-title">
          BMI <span className="accent">Calculator</span>
        </h2>
        <p className="bmi-sub">
          Check your Body Mass Index and get personalized guidance from our
          trainers.
        </p>
        <div className="bmi-card">
          <div className="bmi-inputs">
            <div className="bmi-field">
              <label htmlFor="bmi-height">Height (cm)</label>
              <input
                id="bmi-height"
                type="number"
                placeholder="e.g. 175"
                value={bmiHeight}
                onChange={(e) => setBmiHeight(e.target.value)}
                className="bmi-input"
                min="100"
                max="250"
                aria-label="Your height in centimeters"
              />
            </div>
            <div className="bmi-field">
              <label htmlFor="bmi-weight">Weight (kg)</label>
              <input
                id="bmi-weight"
                type="number"
                placeholder="e.g. 70"
                value={bmiWeight}
                onChange={(e) => setBmiWeight(e.target.value)}
                className="bmi-input"
                min="30"
                max="300"
                aria-label="Your weight in kilograms"
              />
            </div>
          </div>
          <button
            className="bmi-btn"
            onClick={calculateBMI}
            aria-label="Calculate BMI"
          >
            Calculate BMI
          </button>
          {bmiResult && (
            <div
              className="bmi-result"
              role="region"
              aria-live="polite"
              aria-label="BMI result"
            >
              <div className="bmi-score" style={{ color: bmiResult.color }}>
                {bmiResult.bmi}
              </div>
              <div className="bmi-category" style={{ color: bmiResult.color }}>
                {bmiResult.category}
              </div>
              <div className="bmi-scale">
                <div className="bmi-scale-bar">
                  <div
                    className="bmi-scale-fill"
                    style={{
                      left: `${Math.min(Math.max(((parseFloat(bmiResult.bmi) - 15) / 25) * 100, 0), 100)}%`,
                    }}
                  />
                  <span className="bmi-scale-label" style={{ left: "0%" }}>
                    15
                  </span>
                  <span
                    className="bmi-scale-label bmi-scale-label-mid"
                    style={{ left: "28%", color: "#60a5fa" }}
                  >
                    18.5
                  </span>
                  <span
                    className="bmi-scale-label bmi-scale-label-mid"
                    style={{ left: "56%", color: "#4ade80" }}
                  >
                    25
                  </span>
                  <span
                    className="bmi-scale-label bmi-scale-label-mid"
                    style={{ left: "76%", color: "#fbbf24" }}
                  >
                    30
                  </span>
                  <span className="bmi-scale-label" style={{ right: "0%" }}>
                    40
                  </span>
                </div>
              </div>
              <p className="bmi-tip">{bmiResult.tip}</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bmi-cta-btn"
              >
                Get a Free Consultation
              </a>
            </div>
          )}
          <div className="bmi-categories">
            {[
              { label: "Underweight", range: "< 18.5", color: "#60a5fa" },
              { label: "Normal", range: "18.5 – 24.9", color: "#4ade80" },
              { label: "Overweight", range: "25 – 29.9", color: "#fbbf24" },
              { label: "Obese", range: "≥ 30", color: "#f87171" },
            ].map((cat) => (
              <div className="bmi-cat-item" key={cat.label}>
                <span
                  className="bmi-cat-dot"
                  style={{ background: cat.color }}
                  aria-hidden="true"
                />
                <span className="bmi-cat-label">{cat.label}</span>
                <span className="bmi-cat-range">{cat.range}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATION ── */}
      <section className="transformation reveal" aria-label="Success stories">
        <div className="section-label">SUCCESS STORIES</div>
        <h2 className="section-title">
          Real <span className="accent">Transformations</span>
        </h2>
        <p className="transformation-sub">
          Our members achieve incredible results with dedication and expert
          guidance.
        </p>
        <div className="transformation-cards">
          {[
            {
              name: "Aman G.",
              duration: "4 Months",
              lost: "-12 kg",
              goal: "Weight Loss",
              before: "92 kg",
              after: "80 kg",
            },
            {
              name: "Rahul S.",
              duration: "6 Months",
              lost: "+8 kg muscle",
              goal: "Muscle Gain",
              before: "62 kg",
              after: "70 kg",
            },
            {
              name: "Vikas T.",
              duration: "3 Months",
              lost: "-8 kg",
              goal: "Body Toning",
              before: "85 kg",
              after: "77 kg",
            },
          ].map((t, i) => (
            <div
              className="transformation-card"
              key={i}
              role="article"
              aria-label={`${t.name} transformation story`}
            >
              <div className="transformation-before-after">
                <div className="transformation-side">
                  <div
                    className="transformation-placeholder before-placeholder"
                    aria-label="Before photo placeholder"
                  >
                    <span>BEFORE</span>
                    <div className="placeholder-figure" />
                    <strong>{t.before}</strong>
                  </div>
                </div>
                <div className="transformation-arrow" aria-hidden="true">
                  →
                </div>
                <div className="transformation-side">
                  <div
                    className="transformation-placeholder after-placeholder"
                    aria-label="After photo placeholder"
                  >
                    <span>AFTER</span>
                    <div className="placeholder-figure after-figure" />
                    <strong>{t.after}</strong>
                  </div>
                </div>
              </div>
              <div className="transformation-info">
                <h4>{t.name}</h4>
                <span className="transformation-result">{t.lost}</span>
                <div className="transformation-meta">
                  <span className="transformation-meta-item">
                    <FaClock style={{ fontSize: "0.72rem" }} /> {t.duration}
                  </span>
                  <span className="transformation-meta-item">
                    <FaBullseye style={{ fontSize: "0.72rem" }} /> {t.goal}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq reveal" aria-label="Frequently asked questions">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">
          Frequently <span className="accent">Asked Questions</span>
        </h2>
        <div className="faq-list" role="list">
          {faqs.map((item, i) => (
            <div
              className={`faq-item ${openFaq === i ? "faq-open" : ""}`}
              key={i}
              role="listitem"
            >
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                className="faq-answer"
                role="region"
                aria-hidden={openFaq !== i}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta reveal">
        <div className="cta-inner">
          <div className="cta-glow" aria-hidden="true" />
          <div
            className="section-label"
            style={{ color: "rgba(255,122,0,0.8)" }}
          >
            START TODAY
          </div>
          <h2>
            Ready To <span className="accent">Transform</span> Your Body?
          </h2>
          <p>
            Join The Power Gym and start your fitness journey with expert
            guidance and a community that pushes you forward.
          </p>
          <div className="cta-buttons">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="cta-btn"
              aria-label="Book free trial on WhatsApp"
            >
              Book Free Trial
            </a>
            <a
              href="https://wa.me/917376449121"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-cta"
              aria-label="Message us on WhatsApp"
            >
              <FaWhatsapp style={{ fontSize: "1.1rem" }} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section
        id="contact"
        className="contact-form-section reveal"
        aria-label="Contact form"
      >
        <div className="section-label">GET IN TOUCH</div>
        <h2 className="section-title">
          Start Your <span className="accent">Journey</span>
        </h2>
        <p className="contact-form-sub">
          Fill in your details and we'll reach out to you directly on WhatsApp.
        </p>
        <div className="contact-form-card">
          <div className="form-field">
            <label htmlFor="form-name">Full Name *</label>
            <input
              id="form-name"
              type="text"
              placeholder="Your full name"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              className="form-input"
              aria-required="true"
            />
          </div>
          <div className="form-field">
            <label htmlFor="form-phone">Phone Number *</label>
            <input
              id="form-phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={formPhone}
              onChange={(e) => setFormPhone(e.target.value)}
              className="form-input"
              aria-required="true"
            />
          </div>
          <div className="form-field">
            <label htmlFor="form-goal">Fitness Goal</label>
            <select
              id="form-goal"
              value={formGoal}
              onChange={(e) => setFormGoal(e.target.value)}
              className="form-input form-select"
              aria-label="Select your fitness goal"
            >
              <option value="">Select your goal</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="Body Toning">Body Toning</option>
              <option value="General Fitness">General Fitness</option>
              <option value="Strength Training">Strength Training</option>
            </select>
          </div>
          <button
            className="form-submit-btn"
            onClick={handleFormSubmit}
            disabled={!formName || !formPhone}
            aria-label="Submit form and open WhatsApp"
          >
            <FaWhatsapp /> Send via WhatsApp
          </button>
          <p className="form-note">
            Your message will be sent directly to our team on WhatsApp.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section className="contact reveal">
        <div className="section-label">FIND US</div>
        <h2 className="section-title">
          Contact <span className="accent">Us</span>
        </h2>
        <div className="contact-card">
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">
              <FaMapMarkerAlt />
            </span>
            <div>
              <strong>Address</strong>
              <p>Barhalganj, Gorakhpur</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">
              <FaPhone />
            </span>
            <div>
              <strong>Phone</strong>
              <p>
                <a
                  href="tel:+917376449121"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  +91 7376449121
                </a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">
              <FaClock />
            </span>
            <div>
              <strong>Timing</strong>
              <p>5:00 AM – 10:00 PM · Every Day</p>
            </div>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
            aria-label="Join The Power Gym on WhatsApp"
          >
            Join Now
          </a>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="map-section">
        <h2 className="section-title">
          FIND <span className="highlight-text">US</span>
        </h2>
        <p className="section-subtitle">
          Visit The Power Gym, Barhalganj, Gorakhpur
        </p>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.1982633582284!2d83.50160787520176!3d26.28767197702531!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x39917916f08d4b59%3A0x7b76920c30c2d740!2sThe%20Power%20Gym%20-%20Barhalganj!5e0!3m2!1sen!2sin!4v1781280771728!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Power Gym Location"
          />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer" role="contentinfo">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="The Power Gym" className="footer-logo" />
            <div>
              <h3>THE POWER GYM</h3>
              <p>Transform Your Body, Transform Your Life.</p>
              <p
                style={{
                  marginTop: "8px",
                  fontSize: "0.78rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <FaMapMarkerAlt
                  style={{ color: "var(--primary)", fontSize: "0.8rem" }}
                />
                Barhalganj, Gorakhpur
              </p>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#plans">Plans</a>
              <a href="#bmi">BMI Calculator</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <FaMapMarkerAlt
                  style={{ color: "var(--primary)", flexShrink: 0 }}
                />{" "}
                Barhalganj, Gorakhpur
              </p>
              <a
                href="tel:+917376449121"
                style={{
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <FaPhone style={{ color: "var(--primary)", flexShrink: 0 }} />{" "}
                +91 7376449121
              </a>
              <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <FaClock style={{ color: "var(--primary)", flexShrink: 0 }} />{" "}
                5:00 AM – 10:00 PM
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <FaBullseye
                  style={{ color: "var(--primary)", flexShrink: 0 }}
                />{" "}
                Open Every Day
              </p>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <a
                href="https://instagram.com/thepowergym8"
                target="_blank"
                rel="noreferrer"
                className="instagram-link"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram />
                <span>@thepowergym8</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-footer-link"
                aria-label="Message us on WhatsApp"
              >
                <FaWhatsapp />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <span>© 2026 The Power Gym. All Rights Reserved.</span>
          <span className="footer-made">
            Barhalganj, Gorakhpur{" "}
            <FaFire
              style={{ color: "var(--primary)", verticalAlign: "middle" }}
            />
          </span>
        </div>
      </footer>

      {/* ── SCROLL TO TOP ── */}
      {showTopBtn && (
        <button
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top of page"
        >
          ↑
        </button>
      )}

      {/* ── WHATSAPP FLOAT ── */}
      <a
        href="https://wa.me/917376449121"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* ── MOBILE QUICK ACTION BAR ── */}
      <div
        className="mobile-quick-bar"
        role="toolbar"
        aria-label="Quick actions"
      >
        <a
          href="tel:+917376449121"
          className="quick-action-btn"
          aria-label="Call us"
        >
          <FaPhone />
          <span>Call</span>
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="quick-action-btn quick-action-wa"
          aria-label="WhatsApp us"
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>
        <a
          href="#contact"
          className="quick-action-btn"
          aria-label="Find our location"
        >
          <FaMapMarkerAlt />
          <span>Location</span>
        </a>
      </div>
    </div>
  );
}

export default App;
