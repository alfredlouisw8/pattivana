import MobileList from '../shared/mobile-list/MobileList';
import DraggableSlider from '../shared/slider/Slider';

export default function DealsSection({ deals }) {
  return (
    <div className="flex w-full flex-col justify-between lg:p-10">
      <div className="hidden justify-end lg:flex">
        <div className="flex flex-col gap-5">
          <h1 className="text-primary text-right text-7xl">
            Special
            <br />
            Deals
          </h1>
        </div>
      </div>
      <div className="sticky top-0  flex h-[75px] items-center border-b border-b-cream bg-cream-light pl-[5%] lg:hidden">
        <h1 className="text-primary text-3xl">Special Deals</h1>
      </div>
      <DraggableSlider items={deals} />

      {/* @ts-ignore */}
      <MobileList items={deals} />
    </div>
  );
}
