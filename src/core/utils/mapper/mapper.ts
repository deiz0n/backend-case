export function entidadeToResponse<T, R> (entidade: T, schema: { parse: (input: any) => R }) {
    return schema.parse(entidade);
}