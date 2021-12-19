import { rest } from 'msw'

const data = [
    {
        "id": 1,
        "name": "adib",
        "age": 18,
        "address": "depok"
    },
    {
        "id": 2,
        "name": "fairuz",
        "age": 20,
        "address": "jakarta"
    },
    {
        "id": 3,
        "name": "ikbar",
        "age": 24,
        "address": "bekasi"
    }
]

export const handlers = [
    rest.get('https://adib.com/users', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.delay(500),
            ctx.json({ results: data })
        )
    }),

    rest.get('https://adib.com/users/:id', (req, res, ctx) => {
        const { id } = req.params;
        return res(
            ctx.status(200),
            ctx.delay(500),
            ctx.json({ results: data.find(item => item.id == id) })
        )
    }),

    rest.post('https://adib.com/users', (req, res, ctx) => {
        const { id, name, age, address } = req.body.data;
        console.log(req.body)
        data.push({
            id,
            name,
            age,
            address
        })
        return res(
            ctx.status(200),
            ctx.delay(500),
            ctx.json({ ok: true })
        )
    }),
]

