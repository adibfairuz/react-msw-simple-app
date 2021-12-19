// ini digunakan untuk fetch dari server (SSR)

import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)