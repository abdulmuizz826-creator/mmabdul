import { connectToDatabase } from '../../lib/mongodb';
import mongoose from 'mongoose';

// Define the Schema inside the handler or outside to ensure it's registered
const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

// Use the existing model if it exists, otherwise create it
const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // 1. Wait for database connection
    await connectToDatabase();

    // 2. Create the message from the request body
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newMessage = await Message.create({ name, email, message });

    // 3. Send SUCCESS response
    return res.status(201).json({ success: true, data: newMessage });

  } catch (error) {
    console.error('API Error:', error);
    // 4. Send ERROR response
    return res.status(500).json({ success: false, error: 'Server Error' });
  }
}