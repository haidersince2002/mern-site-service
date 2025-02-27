import { Contact } from "../models/contact.model.js";

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res
      .status(200)
      .json({ message: "Contact message sent succesfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Message not deleivered: Something went wrong" });
  }
};

export default contactForm;
