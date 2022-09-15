import { assertEquals } from "https://deno.land/std@0.151.0/testing/asserts.ts"
import { writeEffectLog } from './mod.ts'

Deno.test('writeEffectLog', async () => {
    const a = await writeEffectLog('s\n', 1)

    assertEquals(a, '')
})