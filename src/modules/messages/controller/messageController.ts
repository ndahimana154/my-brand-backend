import { Request, Response } from "express";
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

export default { postMessage };
