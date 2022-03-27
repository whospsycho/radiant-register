import axios from 'axios'

export default async function register(email: string, password: string, invite: string, domain: string) {
    const res = await axios.post('https://api.radiant.cool/register', {
        email,
        password,
        invite,

    })
    return res.data
}