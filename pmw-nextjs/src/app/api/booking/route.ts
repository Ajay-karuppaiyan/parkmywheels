import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    console.log('Booking Enquiry Received:', data);

    // In a real application, you would use nodemailer or a service like Resend here.
    // For now, we simulate success and redirect back to the home page or a success page.
    
    // We redirect to a success state or just back home with a query param
    return NextResponse.redirect(new URL('/?status=success', request.url));
  } catch (error) {
    console.error('Booking Error:', error);
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 });
  }
}
