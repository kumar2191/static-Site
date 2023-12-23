// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).send('api is disabled...!')
}
