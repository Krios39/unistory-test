let lastIdNumber = 0

export const createId = (prefix: string = 'prefix')=>{
    return `${prefix}-${++lastIdNumber}`
}