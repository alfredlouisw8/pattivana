import PDFSection from '@src/components/section/PDFSection';

export default function PDFPage() {
  return (
    <PDFSection
      answers={{}}
      formData={{
        groom: 'John',
        bride: 'Jane',
        whatsapp: '1234567890',
      }}
      recommendations={[]}
    />
  );
}
