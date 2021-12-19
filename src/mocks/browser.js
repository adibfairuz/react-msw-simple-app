// ini digunakan untuk fetch dari client (CSR)

import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)