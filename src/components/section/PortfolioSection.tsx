import { PortfoliosFieldsFragment } from '@src/lib/__generated/sdk';

import DraggableSlider from '../shared/slider/Slider';

export default function PortfolioSection({ portfolios }) {
  return (
    <div className="flex w-full flex-col justify-between p-10">
      <div className="flex justify-end">
        <h1 className="text-primary text-right text-7xl">
          Our
          <br />
          Portfolios
        </h1>
      </div>

      <DraggableSlider items={portfolios} />
    </div>
  );
}
