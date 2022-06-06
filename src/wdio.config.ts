import {defaultConfigDebug} from './common/config/base'

export const config = {
    ...defaultConfigDebug,
    specs:
        [`./src/common/test/**/*.test.ts`],
}
