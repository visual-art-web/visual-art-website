export default function HeroVideoLayer() {
  return (
    <video
      className="va-hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src="/visual-art-hero-video.mp4" type="video/mp4" />
    </video>
  );
}
