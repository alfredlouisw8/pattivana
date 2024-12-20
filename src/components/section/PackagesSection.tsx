import Image from 'next/image';
import Sidebar from '../shared/sidebar/Sidebar';
import CustomSlider from '../shared/slider/Slider';

export default function PackagesSection() {
  const packages = [
    {
      title: 'Couple Documentary',
      image: '/assets/images/intimate.png',
      description: 'asdasd',
    },
    {
      title: 'Engagement Package',
      image: '/assets/images/intimate.png',
      description: 'asdasd',
    },
  ];

  return (
    <section className="flex bg-cream-light ">
      <Sidebar />

      <div className="flex w-full flex-col justify-between p-10">
        <div className="flex justify-end">
          <h1 className="text-primary text-right text-7xl">
            The
            <br />
            Packages
          </h1>
        </div>

        <div className="flex items-start gap-5">
          {packages.map(({ image, title, description }, index) => (
            <div className="flex flex-col gap-5" key={index}>
              <h2 className="text-primary text-2xl">{title}</h2>
              <div className="relative aspect-video">
                <Image
                  src={image}
                  alt={title}
                  fill
                  objectFit="cover"
                  className="grayscale transition hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>

        {/* <div className="w-full">
          <CustomSlider>
            <div>h1</div>
            <div>h2</div>
            <div>h3</div>
          </CustomSlider>
        </div> */}
      </div>
    </section>
  );
}
