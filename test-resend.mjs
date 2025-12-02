import { Resend } from 'resend';
import { config } from 'dotenv';

// Ladda miljövariabler från .env.local
config({ path: '.env.local' });

const apiKey = process.env.RESEND_API_KEY;
console.log('API Key finns:', !!apiKey);
console.log('API Key börjar med:', apiKey?.substring(0, 10) + '...');

// Trimma CONTACT_EMAIL precis som i koden
const contactEmail = 'info@kvkonsult.com';
console.log('CONTACT_EMAIL:', JSON.stringify(contactEmail));

const resend = new Resend(apiKey);

async function test() {
  try {
    console.log('\nFörsöker skicka test-email...');
    
    const { data, error } = await resend.emails.send({
      from: 'KV Konsult <noreply@kvkonsult.com>',
      to: contactEmail,
      subject: 'Test från script',
      text: 'Detta är ett test-meddelande.',
    });

    if (error) {
      console.error('FEL från Resend:', JSON.stringify(error, null, 2));
    } else {
      console.log('LYCKAT! Email ID:', data?.id);
    }
  } catch (err) {
    console.error('Exception:', err.message);
    console.error('Full error:', err);
  }
}

test();
