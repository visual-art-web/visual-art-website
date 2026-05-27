export default function HeroVideoLayer() {
  return (
    <>
      <video
        className="va-hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/visual-art-hero-fallback.jpg"
        aria-hidden="true"
      >
        <source src="/visual-art-hero-video.mp4" type="video/mp4" />
      </video>

      <div className="va-video-badge">Cinematic story in motion</div>
    </>
  );
}
