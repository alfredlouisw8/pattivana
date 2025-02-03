import Template from '@src/app/Template';
import MobileList from '../shared/mobile-list/MobileList';
import DraggableSlider from '../shared/slider/Slider';
import Image from 'next/image';
import { CtfRichText } from '../features/contentful';

export default function PriceListSection({ priceList }) {
  return (
    <Template className="flex h-screen w-full flex-col bg-cream lg:p-10">
      <div className="flex w-full justify-center pt-[5vh]">
        <div className="relative h-[15vh] w-[25vh]">
          <Image src="/assets/images/logo_white.png" fill alt="Pattivana" sizes="25vh" />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid w-full max-w-[60vw] grid-cols-2 gap-10 p-5">
          {priceList.map((item, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <h2 className="text-lg">{item.title}</h2>
              <CtfRichText
                json={item.description?.json}
                links={item.description?.links}
                className="text-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </Template>
  );
}
