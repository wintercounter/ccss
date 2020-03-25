#!/usr/bin/env node

import { getPropTable } from './createProps'
import { toCamelCase } from './utils'

const a = process.argv[3] || process.argv[2] || 'not including this lol'
const table = getPropTable()
    .filter(([short, light, long]) => {
        if (a.length < 3) {
            return short === a
        }
        return (
            short === a ||
            light.includes(a) ||
            toCamelCase(light).includes(a) ||
            long.includes(a) ||
            toCamelCase(long).includes(a)
        )
    })
    .sort(([short, light, long]) => {
        return [short, light, toCamelCase(light), long, toCamelCase(long)].includes(a) ? -1 : 1
    })
    .map(([short, light, long]) => ({ short, light, long }))

console.table(table)
