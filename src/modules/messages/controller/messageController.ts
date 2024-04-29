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

    // Define the main function
    // const main = async () => {
    //   const transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 587,
    //     secure: false, // Use `true` for port 465, `false` for all other ports
    //     auth: {
    //       user: "ndahimana154@gmail.com",
    //       pass: "8259 8873",
    //     },
    //   });

    //   // send mail with defined transport object
    //   const info = await transporter.sendMail({
    //     from: '"Ndahimana Bonheur" <ndahimana154@gmail.com>', // sender address
    //     to: email, // list of receivers
    //     subject: "Thank you", // Subject line
    //     text: `Hello ${firstname} thank you for contacting us.`, // plain text body
    //     // html: "<b>Hello world?</b>", // html body
    //   });

    //   console.log("Message sent: %s", info.messageId);
      // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    // };

    // Call the main function
    // await main();

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
