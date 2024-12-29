import DraggableSlider from '../shared/slider/Slider';

export default function PackagesSection({ packages }) {
  const multipliedPackages = [...Array(10)].map((_, index) => {
    return {
      image: packages[0]?.image,
      title: packages[0]?.title,
      description: packages[0]?.description,
      slug: packages[0]?.slug + index,
    };
  });

  return (
    <div className="flex w-full flex-col justify-between p-10">
      <div className="flex justify-end">
        <h1 className="text-primary text-right text-7xl">
          The
          <br />
          Packages
        </h1>
      </div>

      <DraggableSlider items={multipliedPackages} />
    </div>
  );
}
