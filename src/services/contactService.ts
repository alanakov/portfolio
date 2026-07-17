import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/constants";

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

export async function sendContactMessage(message: ContactMessage): Promise<void> {
  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    {
      name: message.name,
      email: message.email,
      phone: message.phone,
      message: message.subject,
      time: new Date().toLocaleString(),
    },
    EMAILJS_CONFIG.publicKey
  );
}
