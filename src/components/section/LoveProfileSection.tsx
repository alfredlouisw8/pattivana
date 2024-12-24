'use client';

import { useState } from 'react';
import Sidebar from '../shared/sidebar/Sidebar';
import Image from 'next/image';

export default function LoveProfileSection() {
  const [step, setStep] = useState(0);
  const [showCover, setShowCover] = useState(true);

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
      placeholder: '(please insert your name)',
    },
    {
      title: 'The happy bride',
      placeholder: '(please insert your name)',
    },
    {
      title: 'Whatsapp number',
      placeholder: '(please insert your number)',
    },
  ];

  const quizzes = [
    {
      question: 'How do you describe the style of your relationship?',
      options: [
        {
          image: '/assets/images/intimate.png',
          value: '1',
        },
        {
          image: '/assets/images/intimate.png',
          value: '1',
        },
        {
          image: '/assets/images/intimate.png',
          value: '1',
        },
      ],
    },
    {
      question: 'How do you describe the style of your relationship 2?',
      options: [
        {
          image: '/assets/images/intimate.png',
          value: '1',
        },
        {
          image: '/assets/images/intimate.png',
          value: '1',
        },
        {
          image: '/assets/images/intimate.png',
          value: '1',
        },
      ],
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
      {form.map(({ title, placeholder }, index) => (
        <div key={index} className="flex items-center gap-10">
          <h4 className="w-[300px] text-3xl text-cream-dark">{title}</h4>
          <h4>:</h4>
          <input
            type="text"
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
        {quizzes[step].options.map((option, index) => (
          <div className="relative aspect-square flex-1" key={index} onClick={handleOptionClick}>
            <Image src={option.image} alt="Pattivana" layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );

  function handleOptionClick() {
    if (step === pages.length - 1) {
      console.log('asd');
    } else {
      setStep(prevStep => prevStep + 1);
    }
  }

  const indicatorsLength = quizzes.length + 1;

  const handleIndicatorClick = index => {
    setStep(index);
  };

  const pages = [formPage, ...quizzes.map((_, index) => questionPage(index))];

  return (
    <section className="flex">
      <Sidebar />

      {showCover ? (
        coverPage
      ) : (
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
      )}
    </section>
  );
}
