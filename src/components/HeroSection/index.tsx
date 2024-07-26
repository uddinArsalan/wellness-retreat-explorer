function HeroSection() {
  return (
    <div className="m-6 bg-secondary rounded-md p-8 shadow-md">
      <div className="flex flex-col gap-2">
        <img
          src="https://cdn.midjourney.com/a287f9bc-d0fb-4e78-a0fa-e8136d3c408a/0_0.jpeg"
          alt="hero section image"
          className="object-cover h-96"
        />
        <div className="text-2xl">Discover Your Inner Peace</div>
        <div className="text-sm ">Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation</div>
      </div>
    </div>
  );
}

export default HeroSection;
