'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import Sidebar from '../shared/sidebar/Sidebar';
import { CtfImage } from '../features/contentful';
import { getRecommendations, pushDataToContentful } from '@src/app/helper/utils';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PDFSection from './PDFSection';
import { useRouter } from 'next/navigation';

export default function LoveProfileSection({ quizzes, portfolios }) {
  const [step, setStep] = useState(0);
  const [showCover, setShowCover] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  const router = useRouter();

  const [formData, setFormData] = useState({
    groom: '',
    bride: '',
    whatsapp: '',
  });

  const isFormValid = formData.groom && formData.bride && formData.whatsapp;

  const [answers, setAnswers] = useState({});

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
      className="flex w-full cursor-pointer flex-col justify-between bg-center p-10"
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
          <div key={index} className="flex items-center gap-10">
            <h4 className="w-[300px] text-3xl text-cream-dark">{title}</h4>
            <h4>:</h4>
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
    <div className="flex flex-col gap-10">
      <h4 className="text-right text-3xl text-cream-dark">{quizzes[step].question}</h4>
      <div className="flex items-center justify-center gap-10">
        {quizzes[step].answers.map((answer, index) => (
          <div
            className="relative aspect-[4/5] max-w-[25vw] flex-1 cursor-pointer"
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
          </div>
        ))}
      </div>
    </div>
  );

  const resultPage = (
    <div className="flex items-center justify-center">
      {showLoading ? (
        <h4 className="animate-pulse text-6xl text-cream-dark">calculating your result. . .</h4>
      ) : (
        <div className="flex animate-fade-in flex-col gap-5">
          <h4 className="text-6xl text-cream-dark">thank you</h4>
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
      pushDataToContentful(formData, { ...answers, ['answer_' + step]: answer });
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

  const pages = [formPage, ...quizzes.map((_, index) => questionPage(index)), resultPage];

  if (showCover) {
    return coverPage;
  }

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

  return (
    <div className="flex w-full flex-col justify-between bg-cream-light p-10">
      {headerText}

      {pages[step]}

      <div className="flex flex-col gap-5">
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
              className={`cursor-pointer ${index === step ? 'h-3 bg-cream-dark' : 'h-2 bg-cream'} `}
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
