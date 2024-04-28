import Message from "../../../database/models/MessagesModel";

const createMessage = async (messageData: {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}) => {
  // Create a new message
  const newMessage = new Message(messageData);

  // Save the message to the database
  await newMessage.save();

  return newMessage;
};
// Delete message
const deleteMessageFx = async (id: string): Promise<boolean> => {
  try {
    const result = await Message.findByIdAndDelete(id);
    return result !== null; // If result is not null, the message was found and deleted
  } catch (error) {
    console.error(error);
    return false; // Return false if an error occurs during deletion
  }
};

const getMessages = async () => {
  return Message.find();
};

export default { createMessage, getMessages, deleteMessageFx };
