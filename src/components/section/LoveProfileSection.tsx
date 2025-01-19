'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import Sidebar from '../shared/sidebar/Sidebar';
import { CtfImage } from '../features/contentful';
import { getRecommendations, pushDataToContentful } from '@src/app/helper/utils';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PDFSection from './PDFSection';
import { useRouter } from 'next/navigation';
import { pdf } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';
import QRCode from 'qrcode';
import { generate } from '@graphql-codegen/cli';
import ReactDOM from 'react-dom';

export default function LoveProfileSection({ quizzes, portfolios }) {
  const [step, setStep] = useState(0);
  const [showCover, setShowCover] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  const [formData, setFormData] = useState({
    groom: 'asd',
    bride: 'qwe',
    whatsapp: '123',
  });

  const isFormValid = formData.groom && formData.bride && formData.whatsapp;

  const [answers, setAnswers] = useState({});

  const isMobile = window.innerWidth < 1024;
  const divHeight = isMobile ? `calc(100vh - (76px + ${step === 0 ? '152px' : '92px'}))` : 'auto';

  // Create a function to update heights

  const headerText = (
    <>
      <div className="hidden justify-end lg:flex">
        <h1 className="text-right text-7xl text-primary">
          Love Profile
          <br />
          Check
        </h1>
      </div>
      <div
        className={`sticky top-0  flex h-[76px] items-center border-b border-b-cream-dark pl-[5%] lg:hidden ${
          !showCover && 'bg-cream-light'
        } `}>
        <h1 className="text-3xl text-primary">Love Profile Check</h1>
      </div>
    </>
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

  const onFormSubmit = e => {
    e.preventDefault();
    if (isFormValid) {
      setStep(1);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const onArrowClick = () => {
    if (isFormValid) {
      setStep(1);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const coverPage = (
    <div
      className="relative flex h-screen w-full cursor-pointer flex-col justify-between bg-center lg:p-10"
      onClick={() => setShowCover(false)}
      style={{ backgroundImage: `url('/assets/images/intimate.png')` }}>
      {headerText}

      <div className="absolute inset-0 mt-[10vh] flex items-center justify-center lg:static lg:mt-0 lg:justify-end ">
        <h1 className=" text-2xl text-white opacity-75 lg:mb-[5vh]">
          Find out what type of couple are you?
        </h1>
      </div>
    </div>
  );

  const formPage = (
    <div
      className="flex flex-col gap-10 py-10 px-20 lg:px-10"
      style={{
        height: divHeight,
      }}>
      <form
        className="flex flex-col gap-10"
        onSubmit={onFormSubmit}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default "Enter" key behavior
            onFormSubmit(e); // Trigger your custom submit handler
          }
        }}>
        {form.map(({ title, name, placeholder }, index) => (
          <div key={index} className="flex flex-col gap-5 lg:flex-row">
            <div className="flex items-center gap-5">
              <h4 className="w-[300px] text-3xl text-cream-dark">{title}</h4>
              <h4>:</h4>
            </div>
            <input
              type="text"
              name={name}
              onChange={e => setFormData(prev => ({ ...prev, [name]: e.target.value }))}
              className="w-full border-0 bg-transparent text-3xl outline-none autofill:bg-transparent"
              required
              placeholder={placeholder}
            />
          </div>
        ))}
      </form>
    </div>
  );

  const questionPage = step => (
    <div
      className="flex flex-col gap-10 p-10"
      style={{
        height: divHeight,
      }}>
      <h4 className=" text-center text-2xl text-cream-dark lg:text-right lg:text-3xl">
        {quizzes[step].question}
      </h4>
      <div className="flex flex-1 flex-col items-center justify-center gap-10 lg:flex-row">
        {quizzes[step].answers.map((answer, index) => (
          <div
            className="relative aspect-video flex-1 cursor-pointer lg:aspect-[4/5] lg:max-w-[25vw]"
            key={index}
            onClick={() => handleOptionClick(answer)}>
            <CtfImage
              nextImageProps={{
                className: 'object-cover',
                fill: true,
                alt: answer.text,
              }}
              {...answer.image}
            />

            <p className="absolute left-[50%] bottom-[20%] max-w-[50%] translate-x-[-50%] text-center text-xs text-white opacity-75 lg:text-sm">
              {answer.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const resultPage = (
    <div
      className="flex items-center justify-center p-10"
      style={{
        height: divHeight,
      }}>
      {showLoading ? (
        <h4 className="animate-pulse text-3xl text-cream-dark lg:text-6xl">
          calculating your result. . .
        </h4>
      ) : (
        <div className="flex animate-fade-in flex-col gap-5">
          <h4 className="text-3xl text-cream-dark lg:text-6xl">thank you</h4>
          <div className="flex items-center gap-10">
            <div className="button bg-cream-dark" onClick={() => generatePDF()}>
              Download PDF
            </div>
            <div className="button bg-cream-dark" onClick={() => window.location.reload()}>
              Retake Quiz
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const startTimer = () => {
    setTimeout(function () {
      setShowLoading(false);
      generatePDF();
    }, 1500);
  };

  function handleOptionClick(answer) {
    if (step === pages.length - 2) {
      // @ts-ignore
      setRecommendations(getRecommendations(answers, portfolios));
      if (process.env.NODE_ENV !== 'development') {
        pushDataToContentful(formData, { ...answers, ['answer_' + step]: answer });
      }
      startTimer();
    }
    setStep(prevStep => prevStep + 1);
    setAnswers(prev => ({ ...prev, ['answer_' + step]: answer }));
  }

  const indicatorsLength = quizzes.length + 1;

  const handleIndicatorClick = index => {
    if (index < step) {
      setStep(index);
    }
  };

  function generatePDF() {
    const content = document.getElementById('pdf-content'); // Target your div

    if (!content) {
      return;
    }

    html2canvas(content, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${formData.groom} and ${formData.bride}.pdf`);

      // Open the PDF in a new tab
      const pdfBlob = pdf.output('blob'); // Get the PDF as a Blob
      const pdfURL = URL.createObjectURL(pdfBlob); // Create a Blob URL
      window.open(pdfURL, '_blank'); // Open the Blob URL in a new tab
    });
  }

  const pages = [formPage, ...quizzes.map((_, index) => questionPage(index)), resultPage];

  if (showCover) {
    return coverPage;
  }

  return (
    <div className="flex w-full flex-col justify-between bg-cream-light lg:p-10">
      {headerText}

      {pages[step]}

      <div className="flex flex-col gap-5 px-20 pb-20 lg:p-10">
        {step === 0 && (
          <div className="flex justify-end">
            <div
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white"
              onClick={onArrowClick}>
              {'>'}
            </div>
          </div>
        )}

        <div className={`flex w-full items-center ${step === pages.length - 1 && 'invisible'}`}>
          {[...Array(indicatorsLength)].map((_, index) => (
            <div
              key={index}
              style={{ flex: 1 / indicatorsLength }}
              className={`cursor-pointer ${index === step ? 'h-3 bg-cream' : 'h-2 bg-gray-300'} `}
              onClick={() => handleIndicatorClick(index)}>
              &nbsp;
            </div>
          ))}
        </div>
      </div>

      <PDFSection answers={answers} recommendations={recommendations} formData={formData} />
    </div>
  );
}
