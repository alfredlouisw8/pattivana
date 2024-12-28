'use client';

import Image from 'next/image';
import { useState } from 'react';

import Sidebar from '../shared/sidebar/Sidebar';
import { CtfImage } from '../features/contentful';

export default function LoveProfileSection({ quizzes }) {
  const [step, setStep] = useState(0);
  const [showCover, setShowCover] = useState(true);

  const [formData, setFormData] = useState({
    groom: '',
    bride: '',
    whatsapp: '',
    answer_1: '',
    answer_2: '',
    answer_3: '',
    answer_4: '',
    answer_5: '',
  });

  const headerText = (
    <div className="flex justify-end">
      <h1 className="text-primary text-right text-7xl">
        Love Profile
        <br />
        Check
      </h1>
    </div>
  );

  const form = [
    {
      title: 'The lucky groom',
      name: 'groom',
      placeholder: '(please insert your name)',
    },
    {
      title: 'The happy bride',
      name: 'bride',
      placeholder: '(please insert your name)',
    },
    {
      title: 'Whatsapp number',
      name: 'whatsapp',
      placeholder: '(please insert your number)',
    },
  ];

  const coverPage = (
    <div
      className="flex w-full flex-col justify-between bg-center p-10"
      onClick={() => setShowCover(false)}
      style={{ backgroundImage: `url('/assets/images/intimate.png')` }}>
      {headerText}

      <div className="flex justify-end">
        <h1 className="mb-[5vh] text-right text-xl text-white">
          Find out what type of couple are you?
        </h1>
      </div>
    </div>
  );

  const formPage = (
    <div className="flex flex-col gap-10">
      {form.map(({ title, name, placeholder }, index) => (
        <div key={index} className="flex items-center gap-10">
          <h4 className="w-[300px] text-3xl text-cream-dark">{title}</h4>
          <h4>:</h4>
          <input
            type="text"
            name={name}
            onChange={e => setFormData(prev => ({ ...prev, [name]: e.target.value }))}
            className="w-full border-0 bg-transparent text-3xl outline-none"
            placeholder={placeholder}
          />
        </div>
      ))}
    </div>
  );

  const questionPage = step => (
    <div className="flex flex-col gap-10">
      <h4 className="text-right text-3xl text-cream-dark">{quizzes[step].question}</h4>
      <div className="flex items-center gap-10">
        {quizzes[step].answers.map(({ image, value, text }, index) => (
          <div
            className="relative aspect-square flex-1"
            key={index}
            onClick={() => handleOptionClick(value)}>
            <CtfImage
              nextImageProps={{
                className: 'object-cover',
                fill: true,
                alt: text,
              }}
              {...image}
            />
          </div>
        ))}
      </div>
    </div>
  );

  function handleOptionClick(value) {
    if (step === pages.length - 1) {
      console.log('asd');
    } else {
      setStep(prevStep => prevStep + 1);
    }
    setFormData(prev => ({ ...prev, ['answer_' + step]: value }));
  }

  const indicatorsLength = quizzes.length + 1;

  const handleIndicatorClick = index => {
    setStep(index);
  };

  const pages = [formPage, ...quizzes.map((_, index) => questionPage(index))];

  if (showCover) {
    return coverPage;
  }

  return (
    <div className="flex w-full flex-col justify-between bg-cream-light p-10">
      {headerText}

      {pages[step]}

      <div className="flex flex-col gap-5">
        {step === 0 && (
          <div className="flex justify-end">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
              onClick={() => setStep(1)}>
              {'>'}
            </div>
          </div>
        )}

        <div className="flex w-full items-center">
          {[...Array(indicatorsLength)].map((_, index) => (
            <div
              key={index}
              style={{ flex: 1 / indicatorsLength }}
              className={`${index === step ? 'h-3 bg-cream-dark' : 'h-2 bg-cream'} `}
              onClick={() => handleIndicatorClick(index)}>
              &nbsp;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
