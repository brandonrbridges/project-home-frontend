const HOST = process.env.NEXT_PUBLIC_API_URI

const handleResponse = async (response: Response) => {
  const data = await response.json()

  if (!response.ok) {
    throw data
  }

  return data
}

const GET = (url: string, opts?: object) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...opts,
  }

  return new Promise((resolve, reject) => {
    fetch(HOST + url, options)
      .then(handleResponse)
      .then(resolve)
      .catch(reject)
  })
}

const POST = (url: string, body: object) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }

  return new Promise((resolve, reject) => {
    fetch(HOST + url, options)
      .then(handleResponse)
      .then(resolve)
      .catch(reject)
  })
}

const fetcher = {
  GET,
  POST,
}

export default fetcher
