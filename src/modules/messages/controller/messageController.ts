import { Request, Response } from "express";
import nodemailer from "nodemailer";
import messageRepository from "../repository/messageRepository";

const postMessage = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, message } = req.body;

    // Create a new message
    const newMessage = await messageRepository.createMessage({
      firstname,
      lastname,
      email,
      message,
    });

    // Create transporter for sending email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "ndahimana154@gmail.com",
        pass: "mjkp fkrs exei tgsq",
      },
    });

    // Configure email options
    const mailOptions = {
      from: '"Ndahimana Bonheur" <ndahimana154@gmail.com>', // Sender address
      to: email, // Recipient
      subject: "Thank you for contacting Ndahimana Bonheur", // Subject line
      text: `Hello ${firstname} ${lastname},\n\nThank you for reaching out. We have received your message and will get back to you as soon as possible.\n\nBest regards,\nNdahimana Bonheur`, // Plain text body
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send response
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      newMessage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while sending the message",
    });
  }
};

const getBrandMessages = async (req: Request, res: Response) => {
  try {
    const messagesData = await messageRepository.getMessages();
    if (!messagesData) {
      return res
        .status(404)
        .json({ success: false, message: "No messages found!" });
    }
    res
      .status(200)
      .json({ success: true, message: "Messages fetched", messagesData });
  } catch (error) {
    console.error("Error getting messages", error);
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};

// Delete message
const deleteBrandMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const isDeleted = await messageRepository.deleteMessageFx(id);
    if (isDeleted) {
      res
        .status(200)
        .json({ success: true, message: "Message deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "Message not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error occurred" });
  }
};

export default { postMessage, getBrandMessages, deleteBrandMessage };
