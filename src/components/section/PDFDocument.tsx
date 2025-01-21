//@ts-nocheck

import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { format } from 'date-fns';
import QRCode from 'qrcode';
import React from 'react';
import { contentfulRichTextToPlainText } from '@src/app/helper/utils';

// Register fonts
Font.register({
  family: 'Gotham',
  fonts: [
    { src: '/assets/fonts/Gotham-Bold.otf', fontWeight: 700 },
    { src: '/assets/fonts/GothamMedium.ttf', fontWeight: 400 },
    { src: '/assets/fonts/GothamLight.otf', fontWeight: 300 },
  ],
});

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    fontFamily: 'Gotham',
    lineHeight: 1.5, // Add line height for better readability
  },
  topDivider: {
    borderBottom: 2,
    borderBottomColor: '#000',
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 75,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 10,
    textAlign: 'right',
    lineHeight: 1.5,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 120,
  },
  divider: {
    borderBottom: 1,
    borderBottomColor: '#000',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
    wordBreak: 'break-word', // Ensure long words wrap properly
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  questionText: {
    width: '45%', // Set widths to ensure wrapping for both columns
    fontSize: 14,
    lineHeight: 1.5,
  },
  answerText: {
    width: '45%',
    fontSize: 10,
    wordBreak: 'break-word',
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
    textAlign: 'right',
  },
});

const PDFDocument = ({ answers, formData, recommendations }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image src="/assets/images/logo_gray.png" style={styles.logo} />
      </View>

      <View style={styles.topDivider} />

      <View style={styles.header}>
        {/* Title */}
        <Text style={styles.title}>
          {formData.groom} & {formData.bride}
        </Text>
        <View style={{ textAlign: 'right' }}>
          <Text style={styles.headerText}>Submitted on {format(new Date(), 'Pp')}</Text>
          <Text style={styles.headerText}>Bridesday Market, ICE BSD</Text>
          <Text style={styles.headerText}>Couple Test: FUN</Text>
          <Text style={styles.headerText}>{formData.whatsapp}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Description */}
      <Text style={styles.subtitle}>Here&apos;s what we think about you as a couple:</Text>
      {Object.values(answers).map((answer, index) => (
        <>
          {index > 0 && <View style={styles.divider} />}
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.questionText}>
              {contentfulRichTextToPlainText(answer.pdfText.json)}
            </Text>
            <Text style={styles.answerText}>{answer.pdfLongText}</Text>
          </View>
        </>
      ))}

      {/* QR Section */}
      <Text style={styles.subtitle}>Scan the QRs below to find some videos you might like:</Text>
      <View style={styles.qrContainer}>
        {recommendations.map((portfolio, index) => (
          <View key={index} style={styles.qrSection}>
            <Image src={QRCode.toDataURL(portfolio.youtube)} style={styles.qrImage} />
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

export default PDFDocument;
