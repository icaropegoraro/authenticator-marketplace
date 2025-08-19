import dotenv from 'dotenv'
dotenv.config()

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const redirectUri = process.env.URL_REDIRECT_MELI
const urlMeliAPI = process.env.URL_MELI_API

export const authMeli = async (url) => {

    const customersURLString = url
    const customersURL = new URL (customersURLString)

    const params = customersURL.searchParams

    const code = params.get('code')

    if(!code || !clientId || !clientId || !redirectUri || !urlMeliAPI) {
        throw new Error('Sua requisição está faltando algum recurso')
    }

    const urlGetToken = `${urlMeliAPI}/oauth/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${code}&redirect_uri=${redirectUri}`
    
    try {    
        const res = await fetch(urlGetToken, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!res.ok) {
            throw new Error(`Erro HTTP ${res.status}`)
        }

        const data = await res.json()

        console.log(data)
        return data

    } catch (err) {
        console.log(`Erro ao buscar token do Mercado Livre: ${err.message}`)
    }
}