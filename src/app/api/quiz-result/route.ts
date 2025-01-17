import { createClient } from 'contentful-management';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json(); // Parse incoming request body

  const { groom, bride, whatsapp, answers, title } = body;

  // Initialize Contentful Management API client
  const client = createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_TOKEN!, // Use environment variable for token
  });

  try {
    // Get the space and environment
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID!); // Replace with your space ID
    const environment = await space.getEnvironment('master'); // Replace with your environment ID

    // Create a new entry in the `quizResult` content type
    const newEntry = await environment.createEntry('quizResult', {
      fields: {
        groom: { 'en-US': groom },
        bride: { 'en-US': bride },
        whatsapp: { 'en-US': whatsapp },
        answers: { 'en-US': answers },
        title: { 'en-US': title },
      },
    });

    // Publish the new entry
    await newEntry.publish();

    return NextResponse.json({ success: true, id: newEntry.sys.id });
  } catch (error: any) {
    console.error('Error creating entry:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
