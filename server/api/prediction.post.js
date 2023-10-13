import Replicate from 'replicate'

const replicate = new Replicate({
  auth: useRuntimeConfig().replicateApiToken
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { ws_key, image } = JSON.parse(body)

  // https://replicate.com/yorickvp/llava-13b
  const prediction = await replicate.predictions.create({
    version: '6bc1c7bb0d2a34e413301fee8f7cc728d2d4e75bfab186aa995f63292bda92fc',
    input: {
      image,
      prompt:
        'Give me interior improvement tips using this room as reference. Use markdown and use a relevant emoji for each point.',
      temperature: 0.4
    },
    webhook: `https://r3swiuknhh.execute-api.eu-west-1.amazonaws.com/prod/webhook?key=${ws_key}&type=event`,
    webhook_events_filter: ['start', 'output', 'logs', 'completed']
  })

  return prediction
})
