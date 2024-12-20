import Image from 'next/image';
import Sidebar from '../shared/sidebar/Sidebar';
import DraggableSlider from '../shared/slider/Slider';

export default function PackagesSection() {
  const packages = [...Array(4)].flatMap((_, i) => [
    {
      title: 'Couple Documentary',
      image: '/assets/images/intimate.png',
      description: 'asdasd',
      id: 'couple' + i,
    },
    {
      title: 'Engagement Package',
      image: '/assets/images/intimate.png',
      description: 'asdasd',
      id: 'engagement' + i,
    },
  ]);

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

        <DraggableSlider items={packages} />
      </div>
    </section>
  );
}
