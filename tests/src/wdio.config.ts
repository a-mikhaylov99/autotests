import {defaultConfigDebug} from './common/config/base'

export const config = {
    ...defaultConfigDebug,
    specs:
        [`./src/test/**/*.test.ts`],
}
