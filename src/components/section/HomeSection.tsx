import Image from 'next/image';

export default function HomeSection() {
  const bgImage = '/assets/images/intimate.png';

  return (
    <section
      style={{ backgroundImage: `url('${bgImage}')` }}
      className="h-screen w-screen bg-cover bg-center grayscale"
    >
      <div className="flex w-full justify-center pt-20">
        <Image src="/assets/images/logo_white.png" width={400} height={200} alt="Pattivana" />
      </div>
      {/* Centered text */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <h1 className="text-2xl text-white md:text-4xl">
          Real memories were made from real experiences
        </h1>
      </div>
    </section>
  );
}
