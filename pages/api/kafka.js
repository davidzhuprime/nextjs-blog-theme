// pages/api/kafka.js
import { Kafka } from 'kafkajs';

export default async function handler(req, res) {
  // Your 'kafkajs' logic goes here

  res.status(200).json({ message: 'Your response data' });
}
