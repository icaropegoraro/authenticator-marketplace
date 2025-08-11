import crypto from 'crypto'

export const hmacGenerator = (path, secretKey) => {
    const hmac = crypto.createHmac('sha256', secretKey)
    hmac.update(path)
    const signature = hmac.digest('hex')
    return signature
}