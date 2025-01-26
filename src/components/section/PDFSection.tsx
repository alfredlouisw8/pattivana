'use client';

import Image from 'next/image';
import { format } from 'date-fns';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { CtfRichText } from '../features/contentful';

export default function PDFSection({ answers, formData, recommendations }) {
  return (
    <div id="pdf-content" className="fixed top-[2000px] flex w-full flex-col gap-12 px-20 py-10">
      <div className="flex flex-col">
        <div className="flex w-full justify-end">
          <img src={'/assets/images/logo_gray.png'} alt="Pattivana" style={{ width: '250px' }} />
        </div>
        <div className="border-b-4 border-b-black" />
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-6xl font-bold">
          {formData.groom} & {formData.bride}
        </h1>

        <p className="text-right text-xl">
          Submitted on {format(new Date(), 'Pp')} <br />
          Couple Test: FUN <br />
          091234567890
        </p>
      </div>
      <div className="border-b-2 border-b-black" />

      <h2 className="text-3xl">Here is what we think about you as a couple:</h2>

      {Object.values(answers).map((answer: any, i) => (
        <>
          <div className="flex items-start justify-between gap-20">
            <CtfRichText json={answer.pdfText.json} className="flex-1 text-3xl" />
            <p className="flex-1 text-xl">{answer.pdfLongText}</p>
          </div>
          {i !== 4 && <div className="border-b-2 border-b-black" />}
        </>
      ))}

      <h2 className="mt-10 text-3xl">Scan the QRs below to find some videos you might like</h2>
      <div className="qrcode-container flex items-start gap-20">
        {recommendations.map((portfolio, i) => (
          <div key={i} className="flex flex-1 flex-col gap-5">
            <QRCodeSVG value={portfolio.youtube} />
            <p className="text-xl">{portfolio.shortDescription}</p>
          </div>
        ))}
      </div>

      <div className="mt- flex w-full justify-end">
        <p className="text-right text-xl">
          This test is not a scientific procedure. <br />
          100% curated by PATTIVANA team - 2023 <br />
          Get to know us by visiting pattivana.com <br />
          instagram @pattivana.film <br />
          or call us at +628113339132
        </p>
      </div>
    </div>
  );
}
