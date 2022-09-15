/**
 * A function that console logs like you were typing
 * @param text the string you want to console log
 * @param seconds the time you want in each character
 * @param limitSeconds creates a random time between seconds and limitSeconds
*/
export async function writeEffectLog(text: string, seconds: number, limitSeconds?: number) {
    for (const letter of text.split('')) {
        const bufferLetter = new TextEncoder().encode(letter)
        await sleep(seconds, limitSeconds ? limitSeconds : undefined)
        await Deno.stdout.write(bufferLetter)
    }

    return ''
}

function sleep(seconds: number, limitSeconds?: number) {
    if (limitSeconds) {
        const secondsOfSleep = getRandomArbitrary(seconds, limitSeconds)
        return new Promise((resolve) => setTimeout(resolve, secondsOfSleep * 1000))
    }

    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min
}
