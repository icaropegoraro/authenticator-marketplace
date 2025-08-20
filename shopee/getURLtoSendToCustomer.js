import dotenv from 'dotenv'
dotenv.config()
import { hmacGenerator } from '../util/hmacGenerator.js'

const partnerId = process.env.PARTNER_ID
const secretKey = process.env.KEY_AUTHENTICATOR_SHOPEE
const urlRedirect = process.env.URL_REDIRECT
const urlShopeeAPI = process.env.URL_SHOPEE_API

export const getURLtoSendtoCustomer = () => {
        const currentTimestamp = Math.floor(Date.now() / 1000)

        const path = `${partnerId}/api/v2/shop/auth_partner${currentTimestamp}`
        const sign = hmacGenerator(path, secretKey)

        const URLtoSendtoCustomer = `${urlShopeeAPI}/api/v2/shop/auth_partner?partner_id=${partnerId}&redirect=${urlRedirect}&timestamp=${currentTimestamp}&sign=${sign}`

        console.log(URLtoSendtoCustomer)

        return URLtoSendtoCustomer
}