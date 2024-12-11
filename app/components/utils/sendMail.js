"use server";

import nodemailer from "nodemailer";

// Function to send an email with the provided form data
export async function sendEmail(formData) {
  // Extracting form data fields
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Validate if all required fields are provided
  if (!name || !email || !message) {
    return { success: false, message: "All fields are required." };
  }

  try {
    // Configure the nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // SMTP server host
      port: 587, // SMTP port for TLS
      secure: false, // Use TLS (not SSL)
      auth: {
        user: process.env.EMAIL_USER, // Email address from environment variable
        pass: process.env.EMAIL_PASS, // Email password from environment variable
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email address
      to: process.env.EMAIL_USER, // Recipient's email address (can be different)
      subject: `New message from ${name}`, // Email subject
      text: `Sender's Email: ${email}

Message:
${message}`, // Email content
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    // Log the error for debugging
    console.error("Error while sending email:", error);

    // Return error response
    return {
      success: false,
      message:
        "An error occurred while sending the email. Please try again later.",
    };
  }
}
