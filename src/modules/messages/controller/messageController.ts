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
    res.status(500).json({ success: false, message: "An error occured" });
  }
};

// Delete message
const deleteBrandMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const isDeleted = await messageRepository.deleteMessageFx(id);
    if (isDeleted) {
      res.status(200).json({ success: true, message: "Message deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "Message not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error occurred" });
  }
};

export default { postMessage, getBrandMessages, deleteBrandMessage };
