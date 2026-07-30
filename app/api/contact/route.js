import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { firstName, lastName, phone, email, message } = await request.json();

    if (!firstName || !lastName || !phone || !email) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const name = `${firstName} ${lastName}`;

    await resend.emails.send({
      from: 'OSO ATM Website <contact@mail.osoatm.com>',
      to: 'sales@osoatm.com',
      replyTo: email,
      subject: `Website Contact Form — ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message ? message.replace(/\n/g, '<br>') : '(none provided)'}</p>
        <hr>
        <p style="color:#888;font-size:12px;">Sent from the contact form on osoatm.com</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
