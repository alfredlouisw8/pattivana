import { CtfRichText } from '@src/components/features/contentful';
import Image from 'next/image';

export default function MobileList({ items, showImage = false, filter = null }) {
  return (
    <div
      className="flex flex-col gap-10 overflow-auto py-5 px-[5%] lg:hidden"
      style={{ height: 'calc(100vh - 75px)' }}>
      <div className="flex justify-end gap-3 p-3">{filter}</div>
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            {showImage && (
              <div className="relative aspect-video w-full">
                <Image src={item.image?.url} alt={item.title} fill style={{ objectFit: 'cover' }} />
              </div>
            )}

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl">{item.title}</h2>
              <CtfRichText json={item.description?.json} links={item.description?.links} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
