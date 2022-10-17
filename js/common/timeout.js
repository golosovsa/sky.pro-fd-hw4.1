/**
 * function timeout
 */

export function timeout(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
