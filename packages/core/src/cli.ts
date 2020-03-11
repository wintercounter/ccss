#!/usr/bin/env node

import { getPropTable } from './createProps'
import { camelify } from './utils'

const a = process.argv[3] || process.argv[2] || 'not including this lol'
const table = getPropTable()
    .filter(([short, light, long]) => {
        if (a.length < 3) {
            return short === a
        }
        return (
            short === a ||
            light.includes(a) ||
            camelify(light).includes(a) ||
            long.includes(a) ||
            camelify(long).includes(a)
        )
    })
    .sort(([short, light, long]) => {
        return [short, light, camelify(light), long, camelify(long)].includes(a) ? -1 : 1
    })
    .map(([short, light, long]) => ({ short, light, long }))

console.table(table)
