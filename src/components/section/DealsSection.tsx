import DraggableSlider from '../shared/slider/Slider';

export default function DealsSection({ deals }) {
  return (
    <div className="flex w-full flex-col justify-between p-10">
      <div className="flex justify-end">
        <h1 className="text-primary text-right text-7xl">
          Special
          <br />
          Deals
        </h1>
      </div>

      <DraggableSlider items={deals} />
    </div>
  );
}
