import DraggableSlider from '../shared/slider/Slider';

export default function PackagesSection({ packages }) {
  return (
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
  );
}
