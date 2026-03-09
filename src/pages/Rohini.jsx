import { useEffect, useRef, useState } from "react";

const emojis = ["💛", "🌸", "✨", "💖", "🌟", "🌺", "🤍", "💫", "🌼", "💗"];

function useFloaters() {
  const [floaters, setFloaters] = useState([]);

  useEffect(() => {
    let id = 0;
    const spawn = () => {
      const newOne = {
        id: id++,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
        size: 0.75 + Math.random() * 1.4,
        duration: 8 + Math.random() * 9,
        delay: Math.random() * 2,
        dx: (Math.random() - 0.5) * 120,
      };
      setFloaters((prev) => [...prev.slice(-30), newOne]);
    };

    const initial = Array.from({ length: 18 }, (_, i) =>
      setTimeout(spawn, i * 200)
    );
    const interval = setInterval(spawn, 800);

    return () => {
      initial.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return floaters;
}

function StarCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const cx = cv.getContext("2d");
    let animId;
    let stars = [];

    const colors = ["#f0c060", "#f4a8b5", "#c8a8f0", "#ffffff"];

    const resize = () => {
      cv.width = window.innerWidth;
      cv.height = window.innerHeight;
      stars = Array.from({ length: 160 }, () => ({
        x: Math.random() * cv.width,
        y: Math.random() * cv.height,
        r: Math.random() * 1.4 + 0.2,
        o: Math.random(),
        speed: (Math.random() - 0.5) * 0.008,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const draw = () => {
      cx.clearRect(0, 0, cv.width, cv.height);
      stars.forEach((s) => {
        s.o = Math.min(1, Math.max(0, s.o + s.speed));
        if (s.o >= 1 || s.o <= 0) s.speed *= -1;
        cx.globalAlpha = s.o;
        cx.fillStyle = s.color;
        cx.beginPath();
        cx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        cx.fill();
      });
      cx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
    />
  );
}

const pills = [
  { label: "💗 Always Loved",   color: "border-pink-400/40   text-pink-200   bg-pink-500/10"   },
  { label: "✨ Always Shining", color: "border-yellow-400/40 text-yellow-200 bg-yellow-500/10" },
  { label: "🌙 Always Magic",   color: "border-purple-400/40 text-purple-200 bg-purple-500/10" },
  { label: "🌿 Always Blessed", color: "border-emerald-400/40 text-emerald-200 bg-emerald-500/10" },
];

export default function Rohini() {
  const floaters = useFloaters();
  const cardRef = useRef(null);

  /* 3-D tilt */
  useEffect(() => {
    const card = cardRef.current;
    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rx = ((e.clientY - cy) / cy) * 5;
      const ry = ((e.clientX - cx) / cx) * -5;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = () => {
      card.style.transition = "transform 0.8s ease";
      card.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
      setTimeout(() => (card.style.transition = ""), 800);
    };
    const onTouch = (e) => {
      const t = e.touches[0];
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rx = ((t.clientY - cy) / cy) * 4;
      const ry = ((t.clientX - cx) / cx) * -4;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onTouchEnd = () => {
      card.style.transition = "transform 0.6s ease";
      card.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
      setTimeout(() => (card.style.transition = ""), 600);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("touchmove", onTouch, { passive: true });
    document.addEventListener("touchend", onTouchEnd);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("touchmove", onTouch);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <>
      {/* ── inline keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital@1&display=swap');

        .font-script  { font-family: 'Great Vibes', cursive; }
        .font-serif-i { font-family: 'Playfair Display', serif; font-style: italic; }

        @keyframes floatUp {
          0%   { transform:translateY(0) translateX(0) rotate(0deg) scale(.6); opacity:0; }
          12%  { opacity:1; }
          88%  { opacity:.7; }
          100% { transform:translateY(-110vh) translateX(var(--dx)) rotate(360deg) scale(1.1); opacity:0; }
        }
        @keyframes gradFlow {
          0%   { background-position: 0%   50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes nameGlow {
          from { filter: drop-shadow(0 0 28px rgba(232,99,122,.35)); }
          to   { filter: drop-shadow(0 0 64px rgba(240,192,96,.65)) drop-shadow(0 0 100px rgba(200,168,240,.3)); }
        }
        @keyframes shimmerSlide {
          0%   { background-position: 200% 200%; }
          100% { background-position:-200%-200%; }
        }
        @keyframes heartPop {
          0%,100% { transform: scale(1) rotate(-5deg); }
          45%     { transform: scale(1.38) rotate(5deg); }
        }
        @keyframes wrapIn {
          from { opacity:0; transform:translateY(48px) scale(.93); filter:blur(6px); }
          to   { opacity:1; transform:translateY(0)   scale(1);    filter:blur(0); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes driftA { from{transform:translate(0,0) scale(1);} to{transform:translate(4%,6%) scale(1.09);} }
        @keyframes driftB { from{transform:translate(0,0) scale(1);} to{transform:translate(-5%,4%) scale(1.07);} }
        @keyframes driftC { from{transform:translate(0,0) scale(1);} to{transform:translate(3%,-5%) scale(1.06);} }

        .anim-wrap  { animation: wrapIn 1.4s cubic-bezier(.22,1,.36,1) both; }
        .anim-name  { animation: fadeUp 1.1s .8s both, gradFlow 8s 2s linear infinite, nameGlow 6s 2s ease-in-out infinite alternate; }
        .anim-f0    { animation: fadeUp .9s  .4s both; }
        .anim-f1    { animation: fadeUp .9s  .6s both; }
        .anim-f2    { animation: fadeUp .9s  1s  both; }
        .anim-f3    { animation: fadeUp .9s  1.1s both; }
        .anim-f4    { animation: fadeUp 1s   1.2s both; }
        .anim-f5    { animation: fadeUp .9s  1.4s both; }
        .anim-f6    { animation: fadeUp 1s   1.6s both; }
        .anim-f7    { animation: fadeUp 1s   1.9s both; }

        .shimmer-overlay {
          position:absolute; inset:0; pointer-events:none;
          background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,.04) 50%, transparent 60%);
          background-size:200% 200%;
          animation: shimmerSlide 6s ease-in-out infinite;
        }

        .name-gradient {
          background: linear-gradient(140deg, #f9e4a0 0%, #f0c060 20%, #e8637a 50%, #c8a8f0 75%, #f0c060 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* ── Page shell ── */}
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#12061e] px-4 py-10">

        {/* Stars */}
        <StarCanvas />

        {/* Aurora blobs */}
        <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
          <div className="absolute rounded-full pointer-events-none opacity-[0.22]"
            style={{ width:"70vw", height:"70vw", maxWidth:600, maxHeight:600, top:"-20%", left:"-15%",
              background:"radial-gradient(circle,#e8637a,#c03060)", filter:"blur(80px)",
              animation:"driftA 12s ease-in-out infinite alternate" }} />
          <div className="absolute rounded-full pointer-events-none opacity-[0.20]"
            style={{ width:"60vw", height:"60vw", maxWidth:520, maxHeight:520, bottom:"-20%", right:"-15%",
              background:"radial-gradient(circle,#7060e0,#3020a0)", filter:"blur(80px)",
              animation:"driftB 15s ease-in-out infinite alternate" }} />
          <div className="absolute rounded-full pointer-events-none opacity-[0.11]"
            style={{ width:"50vw", height:"50vw", maxWidth:420, maxHeight:420, top:"30%", left:"25%",
              background:"radial-gradient(circle,#f0c060,#d08020)", filter:"blur(80px)",
              animation:"driftC 18s ease-in-out infinite alternate" }} />
        </div>

        {/* Floating emojis */}
        {floaters.map((f) => (
          <div key={f.id} className="fixed pointer-events-none z-[2] select-none"
            style={{
              left:`${f.left}vw`, bottom:"-50px",
              fontSize:`${f.size}rem`,
              "--dx":`${f.dx}px`,
              animation:`floatUp ${f.duration}s ${f.delay}s linear forwards`,
            }}>
            {f.emoji}
          </div>
        ))}

        {/* ── Card ── */}
        <div ref={cardRef}
          className="anim-wrap relative z-10 w-full max-w-[540px] text-center
            px-6 sm:px-10 md:px-16 py-10 sm:py-14
            rounded-[28px] sm:rounded-[36px]
            border border-white/10
            overflow-hidden
            shadow-[0_30px_80px_rgba(0,0,0,.55),0_0_120px_rgba(232,99,122,.12)]"
          style={{ background:"linear-gradient(135deg,rgba(255,255,255,.055) 0%,rgba(255,255,255,.02) 50%,rgba(200,100,130,.04) 100%)",
            backdropFilter:"blur(30px) saturate(1.4)" }}>

          {/* shimmer sweep */}
          <div className="shimmer-overlay rounded-[inherit]" />

          {/* corner ornaments */}
          {["top-3 left-4","top-3 right-4","bottom-3 left-4","bottom-3 right-4"].map((pos,i)=>(
            <span key={i} className={`absolute ${pos} text-yellow-300/20 text-sm anim-f7`}>✦</span>
          ))}

          {/* dots */}
          <div className="anim-f0 flex justify-center gap-2 mb-7">
            {["bg-rose-400","bg-yellow-300","bg-purple-300","bg-pink-300","bg-yellow-200"].map((c,i)=>(
              <span key={i} className={`${c} w-[6px] h-[6px] rounded-full`} />
            ))}
          </div>

          {/* greeting line */}
          <p className="anim-f1 font-[Josefin_Sans,sans-serif] text-[0.62rem] sm:text-[0.72rem]
            tracking-[0.38em] uppercase text-yellow-300/50 mb-3">
            A little wish, just for you
          </p>

          {/* Name */}
          <h1 className="font-script name-gradient anim-name
            text-[5.5rem] sm:text-[7rem] md:text-[8.5rem] leading-[1.05]">
            Rohini
          </h1>

          {/* hearts row */}
          <div className="anim-f2 flex justify-center gap-2 sm:gap-3 text-2xl sm:text-3xl mt-4 mb-4">
            {["🌸","💛","✨","💖","🌟"].map((e,i)=>(
              <span key={i} className="inline-block"
                style={{ animation:`heartPop 1.8s ${i*0.25}s ease-in-out infinite` }}>
                {e}
              </span>
            ))}
          </div>

          {/* divider */}
          <div className="anim-f3 flex items-center gap-3 sm:gap-4 my-5">
            <div className="flex-1 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(240,192,96,.35))"}} />
            <span className="text-xl sm:text-2xl flex-shrink-0">🌺</span>
            <div className="flex-1 h-px" style={{background:"linear-gradient(270deg,transparent,rgba(240,192,96,.35))"}} />
          </div>

          {/* message */}
          <p className="anim-f4 font-serif-i text-base sm:text-lg md:text-xl leading-[1.95] text-white/80">
            <span className="font-[Josefin_Sans,sans-serif] not-italic text-yellow-200 font-light">
              Hey Rohini,
            </span>
            <br/>
            you bring so much{" "}
            <span className="text-pink-300" style={{textShadow:"0 0 20px rgba(232,99,122,.5)"}}>warmth</span>
            {" "}and{" "}
            <span className="text-purple-300" style={{textShadow:"0 0 20px rgba(200,168,240,.45)"}}>light</span>
            {" "}into everyone's life.
            <br/>
            May every single day of yours
            <br/>
            be as beautiful as <em>you are.</em>
          </p>

          {/* pills */}
          <div className="anim-f5 flex flex-wrap justify-center gap-2 sm:gap-2.5 my-6">
            {pills.map((p,i)=>(
              <span key={i}
                className={`${p.color} border rounded-full text-[0.58rem] sm:text-[0.68rem]
                  tracking-[0.12em] uppercase px-3 sm:px-4 py-1.5 sm:py-2
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default`}>
                {p.label}
              </span>
            ))}
          </div>

          {/* sub */}
          <p className="anim-f6 font-serif-i text-sm sm:text-base leading-[1.85] text-white/45">
            Stay happy. Stay wonderful.
            <br/>
            <span className="text-yellow-300/65 not-italic font-normal">
              The world is better with you in it.
            </span>{" "}🌸
          </p>

          {/* signature */}
          <div className="anim-f7 mt-7 pt-5 border-t border-white/[0.07]
            text-[0.58rem] sm:text-[0.64rem] tracking-[0.38em] uppercase text-yellow-300/25
            font-[Josefin_Sans,sans-serif]">
            With love &nbsp;✦&nbsp; always &amp; forever
          </div>
        </div>
      </div>
    </>
  );
}