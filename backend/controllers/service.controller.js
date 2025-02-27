import Service from "../models/service.model.js";

const services = async (req, res) => {
  try {
    const data = await Service.find();
    if (!data) {
      res.status(404).json({ msg: "No service found" });
      return;
    }
    res.status(200).json({ msg: data });
  } catch (error) {
    console.log(`services: `, error);
  }
};

export default services;
