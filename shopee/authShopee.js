import dotenv from 'dotenv'
import { hmacGenerator } from '../util/hmacGenerator.js'
dotenv.config()

const partnerId = process.env.PARTNER_ID
const secretKey = process.env.KEY_AUTHENTICATOR_SHOPEE

const urlShopeeAPI = process.env.URL_SHOPEE_API

export const authShopee = async (url) => {
    const currentTimestamp = Math.floor(Date.now() / 1000)

    const urlToSign = `${partnerId}/api/v2/auth/token/get${currentTimestamp}`
    const sign = hmacGenerator(urlToSign, secretKey)

    const customersURLString = url
    const customersURL = new URL (customersURLString)

    const params = customersURL.searchParams

    const code = params.get('code')
    const shopId = parseInt(params.get('shop_id'))
    let partnerIdNumbered = parseInt(partnerId)

    const payload = {
        code: code,
        shop_id: shopId,
        partner_id: partnerIdNumbered
    }
    try {
        const res = await fetch(`${urlShopeeAPI}/api/v2/auth/token/get?sign=${sign}&partner_id=${partnerId}&timestamp=${currentTimestamp}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        if (!res.ok) {
            throw new Error(`Erro HTTP ${res.status}`)
        }

        const data = await res.json()

        let responseShopee = {
            accessToken: data.access_token, 
            refreshToken: data.refresh_token, 
            expireIn: data.expire_in
        }

        console.log(responseShopee)
        return responseShopee

    } catch(err) {
        console.log(`Erro ao buscar token da Shopee: ${err.message}`)
    }
}