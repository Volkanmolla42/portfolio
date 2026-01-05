"use server";

import nodemailer from "nodemailer";
import type { EmailResponse, ContactFormData } from "@/lib/types";

// ============================================
// Email Configuration
// ============================================

const EMAIL_CONFIG = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use TLS
} as const;

// ============================================
// Validation Functions
// ============================================

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateFormData(data: ContactFormData): { 
  isValid: boolean; 
  error?: string;
} {
  if (!data.name || data.name.trim().length === 0) {
    return { isValid: false, error: "Name is required." };
  }
  
  if (!data.email || data.email.trim().length === 0) {
    return { isValid: false, error: "Email is required." };
  }
  
  if (!validateEmail(data.email)) {
    return { isValid: false, error: "Please provide a valid email address." };
  }
  
  if (!data.message || data.message.trim().length === 0) {
    return { isValid: false, error: "Message is required." };
  }
  
  if (data.message.trim().length < 10) {
    return { isValid: false, error: "Message must be at least 10 characters." };
  }
  
  return { isValid: true };
}

// ============================================
// Email Transporter
// ============================================

function createTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  
  if (!user || !pass) {
    throw new Error("Email configuration is missing. Please set EMAIL_USER and EMAIL_PASS environment variables.");
  }
  
  return nodemailer.createTransport({
    ...EMAIL_CONFIG,
    auth: { user, pass },
  });
}

// ============================================
// Main Email Function
// ============================================

/**
 * Send an email with the provided form data
 * @param formData - FormData object containing name, email, and message
 * @returns EmailResponse indicating success or failure
 */
export async function sendEmail(formData: FormData): Promise<EmailResponse> {
  // Extract form data
  const contactData: ContactFormData = {
    name: formData.get("name") as string || "",
    email: formData.get("email") as string || "",
    message: formData.get("message") as string || "",
  };
  
  // Validate form data
  const validation = validateFormData(contactData);
  if (!validation.isValid) {
    return { 
      success: false, 
      message: validation.error || "Validation failed." 
    };
  }
  
  try {
    // Create transporter
    const transporter = createTransporter();
    
    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${contactData.name}`,
      text: `
New message from your portfolio website:

Name: ${contactData.name}
Email: ${contactData.email}

Message:
${contactData.message}

---
Sent from portfolio contact form
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ef4444;">New Portfolio Message</h2>
          <div style="background-color: #f4f4f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${contactData.message}</p>
          </div>
          <p style="color: #71717a; font-size: 12px; margin-top: 20px;">
            Sent from portfolio contact form
          </p>
        </div>
      `.trim(),
    };
    
    // Send the email
    await transporter.sendMail(mailOptions);
    
    return { 
      success: true, 
      message: "Email sent successfully! I'll get back to you within 24 hours." 
    };
  } catch (error) {
    // Log error for debugging (server-side only)
    console.error("Error sending email:", error);
    
    // Return user-friendly error message
    return {
      success: false,
      message: "Failed to send email. Please try again later or contact me directly.",
    };
  }
}