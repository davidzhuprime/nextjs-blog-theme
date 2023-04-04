const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})

const consumer = kafka.consumer({ groupId: 'test-group' })

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'my-topic', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const messageContent = message.value.toString()
      // Process the message here
    },
  })
}
export default async function handler(req, res) {
    // Your 'kafkajs' logic goes here
  
    res.status(200).json({ message: 'Your response data' });
  }
  
run().catch(console.error)
