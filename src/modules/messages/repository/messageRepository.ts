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

export default { createMessage };
