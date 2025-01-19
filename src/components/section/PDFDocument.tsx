//@ts-nocheck
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { format } from 'date-fns';
import QRCode from 'qrcode';
import React from 'react';
import { CtfRichText } from '../features/contentful';

// Register fonts
Font.register({
  family: 'Gotham',
  fonts: [
    { src: '/assets/fonts/Gotham-Bold.otf', fontWeight: 700 },
    { src: '/assets/fonts/GothamMedium.ttf', fontWeight: 400 },
    { src: '/assets/fonts/GothamLight.ttf', fontWeight: 300 },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Gotham',
    fontSize: 12,
    lineHeight: 1.5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 50,
  },
  divider: {
    borderBottom: 1,
    borderBottomColor: '#000',
    marginVertical: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 700,
    marginVertical: 15,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  questionSection: {
    marginVertical: 15,
  },
  questionTitle: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 5,
  },
  questionText: {
    fontSize: 12,
    marginBottom: 10,
  },
  qrContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  qrSection: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 20,
  },
  qrImage: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  footer: {
    marginTop: 20,
    alignItems: 'flex-end',
    textAlign: 'right',
  },
});

const PDFDocument = ({ answers, formData, recommendations }) => {
  console.log('qrCodes', recommendations);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            {formData.groom} & {formData.bride}
          </Text>
          <View>
            <Text style={styles.text}>Submitted on {format(new Date(), 'Pp')}</Text>
            <Text style={styles.text}>Bridesday Market, ICE BSD</Text>
            <Text style={styles.text}>Couple Test: FUN</Text>
            <Text style={styles.text}>{formData.whatsapp}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Description */}
        <Text style={styles.subtitle}>Here&apos;s what we think about you as a couple:</Text>
        {Object.values(answers).map((answer, index) => (
          <View key={index} style={styles.questionSection}>
            <CtfRichText json={answer.pdfText.json} style={styles.questionTitle} />
            <Text style={styles.questionText}>{answer.pdfLongText}</Text>
          </View>
        ))}

        <View style={styles.divider} />

        {/* QR Section */}
        <Text style={styles.subtitle}>Scan the QRs below to find some videos you might like:</Text>
        <View style={styles.qrContainer}>
          {recommendations.map(portfolio => (
            <View key={portfolio.id} style={styles.qrSection}>
              {portfolio.qrCode && <Image src={portfolio.qrCode} style={styles.qrImage} />}
              <Text style={styles.text}>{portfolio.shortDescription}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.text}>This test is not a scientific procedure.</Text>
          <Text style={styles.text}>100% curated by PATTIVANA team - 2023</Text>
          <Text style={styles.text}>Get to know us by visiting pattivana.com</Text>
          <Text style={styles.text}>Instagram: @pattivana.film</Text>
          <Text style={styles.text}>Contact: +628113339132</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
