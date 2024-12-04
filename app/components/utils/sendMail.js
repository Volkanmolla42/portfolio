"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { success: false, message: "Tüm alanlar gereklidir" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Gönderenin e-posta adresi
      to: process.env.EMAIL_USER, // Alıcı adresi
      subject: `${name} adlı kişiden yeni mesaj`,
      text: `Mesaj Gönderenin E-posta Adresi: ${email}\n\n${message}`, // E-posta adresini burada belirtin
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: "E-posta başarıyla gönderildi!" };
  } catch (error) {
    console.error("E-posta gönderme hatası:", error);
    return {
      success: false,
      message: "E-posta gönderilirken bir hata oluştu.",
    };
  }
}
