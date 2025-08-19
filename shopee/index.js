import { getURLtoSendtoCustomer } from './getURLtoSendToCustomer.js'
import { authShopee } from './authShopee.js'

// getURLtoSendtoCustomer()
authShopee('https://auth.weesu.com.br/?code=584274524f4f615564514e7a66647664&shop_id=1176474648')

// Para utilizar o authenticator, basta retirar a função do comentário, salvar, e utilizar no terminal o comando 'npm run dev-shopee'