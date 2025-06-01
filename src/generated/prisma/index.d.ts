
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model AtivoFinanceiro
 * 
 */
export type AtivoFinanceiro = $Result.DefaultSelection<Prisma.$AtivoFinanceiroPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  ATIVO: 'ATIVO',
  INATIVO: 'INATIVO'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ativoFinanceiro`: Exposes CRUD operations for the **AtivoFinanceiro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtivoFinanceiros
    * const ativoFinanceiros = await prisma.ativoFinanceiro.findMany()
    * ```
    */
  get ativoFinanceiro(): Prisma.AtivoFinanceiroDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    AtivoFinanceiro: 'AtivoFinanceiro'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "ativoFinanceiro"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      AtivoFinanceiro: {
        payload: Prisma.$AtivoFinanceiroPayload<ExtArgs>
        fields: Prisma.AtivoFinanceiroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtivoFinanceiroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoFinanceiroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtivoFinanceiroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoFinanceiroPayload>
          }
          findFirst: {
            args: Prisma.AtivoFinanceiroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoFinanceiroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtivoFinanceiroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoFinanceiroPayload>
          }
          findMany: {
            args: Prisma.AtivoFinanceiroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoFinanceiroPayload>[]
          }
          create: {
            args: Prisma.AtivoFinanceiroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoFinanceiroPayload>
          }
          createMany: {
            args: Prisma.AtivoFinanceiroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AtivoFinanceiroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoFinanceiroPayload>
          }
          update: {
            args: Prisma.AtivoFinanceiroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoFinanceiroPayload>
          }
          deleteMany: {
            args: Prisma.AtivoFinanceiroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtivoFinanceiroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AtivoFinanceiroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoFinanceiroPayload>
          }
          aggregate: {
            args: Prisma.AtivoFinanceiroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtivoFinanceiro>
          }
          groupBy: {
            args: Prisma.AtivoFinanceiroGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtivoFinanceiroGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtivoFinanceiroCountArgs<ExtArgs>
            result: $Utils.Optional<AtivoFinanceiroCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    ativoFinanceiro?: AtivoFinanceiroOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    ativos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ativos?: boolean | ClienteCountOutputTypeCountAtivosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountAtivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtivoFinanceiroWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    status: $Enums.Status | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    status: $Enums.Status | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    status: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    status?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    status?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    status?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nome: string
    email: string
    status: $Enums.Status
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    status?: boolean
    ativos?: boolean | Cliente$ativosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    status?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "status", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ativos?: boolean | Cliente$ativosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      ativos: Prisma.$AtivoFinanceiroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      status: $Enums.Status
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ativos<T extends Cliente$ativosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$ativosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtivoFinanceiroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly status: FieldRef<"Cliente", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.ativos
   */
  export type Cliente$ativosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtivoFinanceiro
     */
    select?: AtivoFinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtivoFinanceiro
     */
    omit?: AtivoFinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoFinanceiroInclude<ExtArgs> | null
    where?: AtivoFinanceiroWhereInput
    orderBy?: AtivoFinanceiroOrderByWithRelationInput | AtivoFinanceiroOrderByWithRelationInput[]
    cursor?: AtivoFinanceiroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtivoFinanceiroScalarFieldEnum | AtivoFinanceiroScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model AtivoFinanceiro
   */

  export type AggregateAtivoFinanceiro = {
    _count: AtivoFinanceiroCountAggregateOutputType | null
    _avg: AtivoFinanceiroAvgAggregateOutputType | null
    _sum: AtivoFinanceiroSumAggregateOutputType | null
    _min: AtivoFinanceiroMinAggregateOutputType | null
    _max: AtivoFinanceiroMaxAggregateOutputType | null
  }

  export type AtivoFinanceiroAvgAggregateOutputType = {
    valorAtual: Decimal | null
  }

  export type AtivoFinanceiroSumAggregateOutputType = {
    valorAtual: Decimal | null
  }

  export type AtivoFinanceiroMinAggregateOutputType = {
    id: string | null
    nome: string | null
    valorAtual: Decimal | null
    clienteId: string | null
  }

  export type AtivoFinanceiroMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    valorAtual: Decimal | null
    clienteId: string | null
  }

  export type AtivoFinanceiroCountAggregateOutputType = {
    id: number
    nome: number
    valorAtual: number
    clienteId: number
    _all: number
  }


  export type AtivoFinanceiroAvgAggregateInputType = {
    valorAtual?: true
  }

  export type AtivoFinanceiroSumAggregateInputType = {
    valorAtual?: true
  }

  export type AtivoFinanceiroMinAggregateInputType = {
    id?: true
    nome?: true
    valorAtual?: true
    clienteId?: true
  }

  export type AtivoFinanceiroMaxAggregateInputType = {
    id?: true
    nome?: true
    valorAtual?: true
    clienteId?: true
  }

  export type AtivoFinanceiroCountAggregateInputType = {
    id?: true
    nome?: true
    valorAtual?: true
    clienteId?: true
    _all?: true
  }

  export type AtivoFinanceiroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtivoFinanceiro to aggregate.
     */
    where?: AtivoFinanceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtivoFinanceiros to fetch.
     */
    orderBy?: AtivoFinanceiroOrderByWithRelationInput | AtivoFinanceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtivoFinanceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtivoFinanceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtivoFinanceiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AtivoFinanceiros
    **/
    _count?: true | AtivoFinanceiroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtivoFinanceiroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtivoFinanceiroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtivoFinanceiroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtivoFinanceiroMaxAggregateInputType
  }

  export type GetAtivoFinanceiroAggregateType<T extends AtivoFinanceiroAggregateArgs> = {
        [P in keyof T & keyof AggregateAtivoFinanceiro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtivoFinanceiro[P]>
      : GetScalarType<T[P], AggregateAtivoFinanceiro[P]>
  }




  export type AtivoFinanceiroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtivoFinanceiroWhereInput
    orderBy?: AtivoFinanceiroOrderByWithAggregationInput | AtivoFinanceiroOrderByWithAggregationInput[]
    by: AtivoFinanceiroScalarFieldEnum[] | AtivoFinanceiroScalarFieldEnum
    having?: AtivoFinanceiroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtivoFinanceiroCountAggregateInputType | true
    _avg?: AtivoFinanceiroAvgAggregateInputType
    _sum?: AtivoFinanceiroSumAggregateInputType
    _min?: AtivoFinanceiroMinAggregateInputType
    _max?: AtivoFinanceiroMaxAggregateInputType
  }

  export type AtivoFinanceiroGroupByOutputType = {
    id: string
    nome: string
    valorAtual: Decimal
    clienteId: string
    _count: AtivoFinanceiroCountAggregateOutputType | null
    _avg: AtivoFinanceiroAvgAggregateOutputType | null
    _sum: AtivoFinanceiroSumAggregateOutputType | null
    _min: AtivoFinanceiroMinAggregateOutputType | null
    _max: AtivoFinanceiroMaxAggregateOutputType | null
  }

  type GetAtivoFinanceiroGroupByPayload<T extends AtivoFinanceiroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtivoFinanceiroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtivoFinanceiroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtivoFinanceiroGroupByOutputType[P]>
            : GetScalarType<T[P], AtivoFinanceiroGroupByOutputType[P]>
        }
      >
    >


  export type AtivoFinanceiroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    valorAtual?: boolean
    clienteId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ativoFinanceiro"]>



  export type AtivoFinanceiroSelectScalar = {
    id?: boolean
    nome?: boolean
    valorAtual?: boolean
    clienteId?: boolean
  }

  export type AtivoFinanceiroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "valorAtual" | "clienteId", ExtArgs["result"]["ativoFinanceiro"]>
  export type AtivoFinanceiroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $AtivoFinanceiroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AtivoFinanceiro"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      valorAtual: Prisma.Decimal
      clienteId: string
    }, ExtArgs["result"]["ativoFinanceiro"]>
    composites: {}
  }

  type AtivoFinanceiroGetPayload<S extends boolean | null | undefined | AtivoFinanceiroDefaultArgs> = $Result.GetResult<Prisma.$AtivoFinanceiroPayload, S>

  type AtivoFinanceiroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtivoFinanceiroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtivoFinanceiroCountAggregateInputType | true
    }

  export interface AtivoFinanceiroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AtivoFinanceiro'], meta: { name: 'AtivoFinanceiro' } }
    /**
     * Find zero or one AtivoFinanceiro that matches the filter.
     * @param {AtivoFinanceiroFindUniqueArgs} args - Arguments to find a AtivoFinanceiro
     * @example
     * // Get one AtivoFinanceiro
     * const ativoFinanceiro = await prisma.ativoFinanceiro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtivoFinanceiroFindUniqueArgs>(args: SelectSubset<T, AtivoFinanceiroFindUniqueArgs<ExtArgs>>): Prisma__AtivoFinanceiroClient<$Result.GetResult<Prisma.$AtivoFinanceiroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AtivoFinanceiro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtivoFinanceiroFindUniqueOrThrowArgs} args - Arguments to find a AtivoFinanceiro
     * @example
     * // Get one AtivoFinanceiro
     * const ativoFinanceiro = await prisma.ativoFinanceiro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtivoFinanceiroFindUniqueOrThrowArgs>(args: SelectSubset<T, AtivoFinanceiroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtivoFinanceiroClient<$Result.GetResult<Prisma.$AtivoFinanceiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtivoFinanceiro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFinanceiroFindFirstArgs} args - Arguments to find a AtivoFinanceiro
     * @example
     * // Get one AtivoFinanceiro
     * const ativoFinanceiro = await prisma.ativoFinanceiro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtivoFinanceiroFindFirstArgs>(args?: SelectSubset<T, AtivoFinanceiroFindFirstArgs<ExtArgs>>): Prisma__AtivoFinanceiroClient<$Result.GetResult<Prisma.$AtivoFinanceiroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtivoFinanceiro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFinanceiroFindFirstOrThrowArgs} args - Arguments to find a AtivoFinanceiro
     * @example
     * // Get one AtivoFinanceiro
     * const ativoFinanceiro = await prisma.ativoFinanceiro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtivoFinanceiroFindFirstOrThrowArgs>(args?: SelectSubset<T, AtivoFinanceiroFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtivoFinanceiroClient<$Result.GetResult<Prisma.$AtivoFinanceiroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AtivoFinanceiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFinanceiroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtivoFinanceiros
     * const ativoFinanceiros = await prisma.ativoFinanceiro.findMany()
     * 
     * // Get first 10 AtivoFinanceiros
     * const ativoFinanceiros = await prisma.ativoFinanceiro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ativoFinanceiroWithIdOnly = await prisma.ativoFinanceiro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtivoFinanceiroFindManyArgs>(args?: SelectSubset<T, AtivoFinanceiroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtivoFinanceiroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AtivoFinanceiro.
     * @param {AtivoFinanceiroCreateArgs} args - Arguments to create a AtivoFinanceiro.
     * @example
     * // Create one AtivoFinanceiro
     * const AtivoFinanceiro = await prisma.ativoFinanceiro.create({
     *   data: {
     *     // ... data to create a AtivoFinanceiro
     *   }
     * })
     * 
     */
    create<T extends AtivoFinanceiroCreateArgs>(args: SelectSubset<T, AtivoFinanceiroCreateArgs<ExtArgs>>): Prisma__AtivoFinanceiroClient<$Result.GetResult<Prisma.$AtivoFinanceiroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AtivoFinanceiros.
     * @param {AtivoFinanceiroCreateManyArgs} args - Arguments to create many AtivoFinanceiros.
     * @example
     * // Create many AtivoFinanceiros
     * const ativoFinanceiro = await prisma.ativoFinanceiro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtivoFinanceiroCreateManyArgs>(args?: SelectSubset<T, AtivoFinanceiroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AtivoFinanceiro.
     * @param {AtivoFinanceiroDeleteArgs} args - Arguments to delete one AtivoFinanceiro.
     * @example
     * // Delete one AtivoFinanceiro
     * const AtivoFinanceiro = await prisma.ativoFinanceiro.delete({
     *   where: {
     *     // ... filter to delete one AtivoFinanceiro
     *   }
     * })
     * 
     */
    delete<T extends AtivoFinanceiroDeleteArgs>(args: SelectSubset<T, AtivoFinanceiroDeleteArgs<ExtArgs>>): Prisma__AtivoFinanceiroClient<$Result.GetResult<Prisma.$AtivoFinanceiroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AtivoFinanceiro.
     * @param {AtivoFinanceiroUpdateArgs} args - Arguments to update one AtivoFinanceiro.
     * @example
     * // Update one AtivoFinanceiro
     * const ativoFinanceiro = await prisma.ativoFinanceiro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtivoFinanceiroUpdateArgs>(args: SelectSubset<T, AtivoFinanceiroUpdateArgs<ExtArgs>>): Prisma__AtivoFinanceiroClient<$Result.GetResult<Prisma.$AtivoFinanceiroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AtivoFinanceiros.
     * @param {AtivoFinanceiroDeleteManyArgs} args - Arguments to filter AtivoFinanceiros to delete.
     * @example
     * // Delete a few AtivoFinanceiros
     * const { count } = await prisma.ativoFinanceiro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtivoFinanceiroDeleteManyArgs>(args?: SelectSubset<T, AtivoFinanceiroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtivoFinanceiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFinanceiroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtivoFinanceiros
     * const ativoFinanceiro = await prisma.ativoFinanceiro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtivoFinanceiroUpdateManyArgs>(args: SelectSubset<T, AtivoFinanceiroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AtivoFinanceiro.
     * @param {AtivoFinanceiroUpsertArgs} args - Arguments to update or create a AtivoFinanceiro.
     * @example
     * // Update or create a AtivoFinanceiro
     * const ativoFinanceiro = await prisma.ativoFinanceiro.upsert({
     *   create: {
     *     // ... data to create a AtivoFinanceiro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtivoFinanceiro we want to update
     *   }
     * })
     */
    upsert<T extends AtivoFinanceiroUpsertArgs>(args: SelectSubset<T, AtivoFinanceiroUpsertArgs<ExtArgs>>): Prisma__AtivoFinanceiroClient<$Result.GetResult<Prisma.$AtivoFinanceiroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AtivoFinanceiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFinanceiroCountArgs} args - Arguments to filter AtivoFinanceiros to count.
     * @example
     * // Count the number of AtivoFinanceiros
     * const count = await prisma.ativoFinanceiro.count({
     *   where: {
     *     // ... the filter for the AtivoFinanceiros we want to count
     *   }
     * })
    **/
    count<T extends AtivoFinanceiroCountArgs>(
      args?: Subset<T, AtivoFinanceiroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtivoFinanceiroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtivoFinanceiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFinanceiroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtivoFinanceiroAggregateArgs>(args: Subset<T, AtivoFinanceiroAggregateArgs>): Prisma.PrismaPromise<GetAtivoFinanceiroAggregateType<T>>

    /**
     * Group by AtivoFinanceiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFinanceiroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtivoFinanceiroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtivoFinanceiroGroupByArgs['orderBy'] }
        : { orderBy?: AtivoFinanceiroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtivoFinanceiroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtivoFinanceiroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AtivoFinanceiro model
   */
  readonly fields: AtivoFinanceiroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AtivoFinanceiro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtivoFinanceiroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AtivoFinanceiro model
   */
  interface AtivoFinanceiroFieldRefs {
    readonly id: FieldRef<"AtivoFinanceiro", 'String'>
    readonly nome: FieldRef<"AtivoFinanceiro", 'String'>
    readonly valorAtual: FieldRef<"AtivoFinanceiro", 'Decimal'>
    readonly clienteId: FieldRef<"AtivoFinanceiro", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AtivoFinanceiro findUnique
   */
  export type AtivoFinanceiroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtivoFinanceiro
     */
    select?: AtivoFinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtivoFinanceiro
     */
    omit?: AtivoFinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoFinanceiroInclude<ExtArgs> | null
    /**
     * Filter, which AtivoFinanceiro to fetch.
     */
    where: AtivoFinanceiroWhereUniqueInput
  }

  /**
   * AtivoFinanceiro findUniqueOrThrow
   */
  export type AtivoFinanceiroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtivoFinanceiro
     */
    select?: AtivoFinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtivoFinanceiro
     */
    omit?: AtivoFinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoFinanceiroInclude<ExtArgs> | null
    /**
     * Filter, which AtivoFinanceiro to fetch.
     */
    where: AtivoFinanceiroWhereUniqueInput
  }

  /**
   * AtivoFinanceiro findFirst
   */
  export type AtivoFinanceiroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtivoFinanceiro
     */
    select?: AtivoFinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtivoFinanceiro
     */
    omit?: AtivoFinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoFinanceiroInclude<ExtArgs> | null
    /**
     * Filter, which AtivoFinanceiro to fetch.
     */
    where?: AtivoFinanceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtivoFinanceiros to fetch.
     */
    orderBy?: AtivoFinanceiroOrderByWithRelationInput | AtivoFinanceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtivoFinanceiros.
     */
    cursor?: AtivoFinanceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtivoFinanceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtivoFinanceiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtivoFinanceiros.
     */
    distinct?: AtivoFinanceiroScalarFieldEnum | AtivoFinanceiroScalarFieldEnum[]
  }

  /**
   * AtivoFinanceiro findFirstOrThrow
   */
  export type AtivoFinanceiroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtivoFinanceiro
     */
    select?: AtivoFinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtivoFinanceiro
     */
    omit?: AtivoFinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoFinanceiroInclude<ExtArgs> | null
    /**
     * Filter, which AtivoFinanceiro to fetch.
     */
    where?: AtivoFinanceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtivoFinanceiros to fetch.
     */
    orderBy?: AtivoFinanceiroOrderByWithRelationInput | AtivoFinanceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtivoFinanceiros.
     */
    cursor?: AtivoFinanceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtivoFinanceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtivoFinanceiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtivoFinanceiros.
     */
    distinct?: AtivoFinanceiroScalarFieldEnum | AtivoFinanceiroScalarFieldEnum[]
  }

  /**
   * AtivoFinanceiro findMany
   */
  export type AtivoFinanceiroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtivoFinanceiro
     */
    select?: AtivoFinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtivoFinanceiro
     */
    omit?: AtivoFinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoFinanceiroInclude<ExtArgs> | null
    /**
     * Filter, which AtivoFinanceiros to fetch.
     */
    where?: AtivoFinanceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtivoFinanceiros to fetch.
     */
    orderBy?: AtivoFinanceiroOrderByWithRelationInput | AtivoFinanceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AtivoFinanceiros.
     */
    cursor?: AtivoFinanceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtivoFinanceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtivoFinanceiros.
     */
    skip?: number
    distinct?: AtivoFinanceiroScalarFieldEnum | AtivoFinanceiroScalarFieldEnum[]
  }

  /**
   * AtivoFinanceiro create
   */
  export type AtivoFinanceiroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtivoFinanceiro
     */
    select?: AtivoFinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtivoFinanceiro
     */
    omit?: AtivoFinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoFinanceiroInclude<ExtArgs> | null
    /**
     * The data needed to create a AtivoFinanceiro.
     */
    data: XOR<AtivoFinanceiroCreateInput, AtivoFinanceiroUncheckedCreateInput>
  }

  /**
   * AtivoFinanceiro createMany
   */
  export type AtivoFinanceiroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AtivoFinanceiros.
     */
    data: AtivoFinanceiroCreateManyInput | AtivoFinanceiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtivoFinanceiro update
   */
  export type AtivoFinanceiroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtivoFinanceiro
     */
    select?: AtivoFinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtivoFinanceiro
     */
    omit?: AtivoFinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoFinanceiroInclude<ExtArgs> | null
    /**
     * The data needed to update a AtivoFinanceiro.
     */
    data: XOR<AtivoFinanceiroUpdateInput, AtivoFinanceiroUncheckedUpdateInput>
    /**
     * Choose, which AtivoFinanceiro to update.
     */
    where: AtivoFinanceiroWhereUniqueInput
  }

  /**
   * AtivoFinanceiro updateMany
   */
  export type AtivoFinanceiroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AtivoFinanceiros.
     */
    data: XOR<AtivoFinanceiroUpdateManyMutationInput, AtivoFinanceiroUncheckedUpdateManyInput>
    /**
     * Filter which AtivoFinanceiros to update
     */
    where?: AtivoFinanceiroWhereInput
    /**
     * Limit how many AtivoFinanceiros to update.
     */
    limit?: number
  }

  /**
   * AtivoFinanceiro upsert
   */
  export type AtivoFinanceiroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtivoFinanceiro
     */
    select?: AtivoFinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtivoFinanceiro
     */
    omit?: AtivoFinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoFinanceiroInclude<ExtArgs> | null
    /**
     * The filter to search for the AtivoFinanceiro to update in case it exists.
     */
    where: AtivoFinanceiroWhereUniqueInput
    /**
     * In case the AtivoFinanceiro found by the `where` argument doesn't exist, create a new AtivoFinanceiro with this data.
     */
    create: XOR<AtivoFinanceiroCreateInput, AtivoFinanceiroUncheckedCreateInput>
    /**
     * In case the AtivoFinanceiro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtivoFinanceiroUpdateInput, AtivoFinanceiroUncheckedUpdateInput>
  }

  /**
   * AtivoFinanceiro delete
   */
  export type AtivoFinanceiroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtivoFinanceiro
     */
    select?: AtivoFinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtivoFinanceiro
     */
    omit?: AtivoFinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoFinanceiroInclude<ExtArgs> | null
    /**
     * Filter which AtivoFinanceiro to delete.
     */
    where: AtivoFinanceiroWhereUniqueInput
  }

  /**
   * AtivoFinanceiro deleteMany
   */
  export type AtivoFinanceiroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtivoFinanceiros to delete
     */
    where?: AtivoFinanceiroWhereInput
    /**
     * Limit how many AtivoFinanceiros to delete.
     */
    limit?: number
  }

  /**
   * AtivoFinanceiro without action
   */
  export type AtivoFinanceiroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtivoFinanceiro
     */
    select?: AtivoFinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtivoFinanceiro
     */
    omit?: AtivoFinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoFinanceiroInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    status: 'status'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const AtivoFinanceiroScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    valorAtual: 'valorAtual',
    clienteId: 'clienteId'
  };

  export type AtivoFinanceiroScalarFieldEnum = (typeof AtivoFinanceiroScalarFieldEnum)[keyof typeof AtivoFinanceiroScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const ClienteOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email'
  };

  export type ClienteOrderByRelevanceFieldEnum = (typeof ClienteOrderByRelevanceFieldEnum)[keyof typeof ClienteOrderByRelevanceFieldEnum]


  export const AtivoFinanceiroOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    clienteId: 'clienteId'
  };

  export type AtivoFinanceiroOrderByRelevanceFieldEnum = (typeof AtivoFinanceiroOrderByRelevanceFieldEnum)[keyof typeof AtivoFinanceiroOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    status?: EnumStatusFilter<"Cliente"> | $Enums.Status
    ativos?: AtivoFinanceiroListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    status?: SortOrder
    ativos?: AtivoFinanceiroOrderByRelationAggregateInput
    _relevance?: ClienteOrderByRelevanceInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    status?: EnumStatusFilter<"Cliente"> | $Enums.Status
    ativos?: AtivoFinanceiroListRelationFilter
  }, "id" | "email">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    status?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    status?: EnumStatusWithAggregatesFilter<"Cliente"> | $Enums.Status
  }

  export type AtivoFinanceiroWhereInput = {
    AND?: AtivoFinanceiroWhereInput | AtivoFinanceiroWhereInput[]
    OR?: AtivoFinanceiroWhereInput[]
    NOT?: AtivoFinanceiroWhereInput | AtivoFinanceiroWhereInput[]
    id?: StringFilter<"AtivoFinanceiro"> | string
    nome?: StringFilter<"AtivoFinanceiro"> | string
    valorAtual?: DecimalFilter<"AtivoFinanceiro"> | Decimal | DecimalJsLike | number | string
    clienteId?: StringFilter<"AtivoFinanceiro"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type AtivoFinanceiroOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    valorAtual?: SortOrder
    clienteId?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    _relevance?: AtivoFinanceiroOrderByRelevanceInput
  }

  export type AtivoFinanceiroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: AtivoFinanceiroWhereInput | AtivoFinanceiroWhereInput[]
    OR?: AtivoFinanceiroWhereInput[]
    NOT?: AtivoFinanceiroWhereInput | AtivoFinanceiroWhereInput[]
    valorAtual?: DecimalFilter<"AtivoFinanceiro"> | Decimal | DecimalJsLike | number | string
    clienteId?: StringFilter<"AtivoFinanceiro"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id" | "nome">

  export type AtivoFinanceiroOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    valorAtual?: SortOrder
    clienteId?: SortOrder
    _count?: AtivoFinanceiroCountOrderByAggregateInput
    _avg?: AtivoFinanceiroAvgOrderByAggregateInput
    _max?: AtivoFinanceiroMaxOrderByAggregateInput
    _min?: AtivoFinanceiroMinOrderByAggregateInput
    _sum?: AtivoFinanceiroSumOrderByAggregateInput
  }

  export type AtivoFinanceiroScalarWhereWithAggregatesInput = {
    AND?: AtivoFinanceiroScalarWhereWithAggregatesInput | AtivoFinanceiroScalarWhereWithAggregatesInput[]
    OR?: AtivoFinanceiroScalarWhereWithAggregatesInput[]
    NOT?: AtivoFinanceiroScalarWhereWithAggregatesInput | AtivoFinanceiroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AtivoFinanceiro"> | string
    nome?: StringWithAggregatesFilter<"AtivoFinanceiro"> | string
    valorAtual?: DecimalWithAggregatesFilter<"AtivoFinanceiro"> | Decimal | DecimalJsLike | number | string
    clienteId?: StringWithAggregatesFilter<"AtivoFinanceiro"> | string
  }

  export type ClienteCreateInput = {
    id?: string
    nome: string
    email: string
    status?: $Enums.Status
    ativos?: AtivoFinanceiroCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    status?: $Enums.Status
    ativos?: AtivoFinanceiroUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    ativos?: AtivoFinanceiroUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    ativos?: AtivoFinanceiroUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    nome: string
    email: string
    status?: $Enums.Status
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AtivoFinanceiroCreateInput = {
    id?: string
    nome: string
    valorAtual: Decimal | DecimalJsLike | number | string
    cliente: ClienteCreateNestedOneWithoutAtivosInput
  }

  export type AtivoFinanceiroUncheckedCreateInput = {
    id?: string
    nome: string
    valorAtual: Decimal | DecimalJsLike | number | string
    clienteId: string
  }

  export type AtivoFinanceiroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cliente?: ClienteUpdateOneRequiredWithoutAtivosNestedInput
  }

  export type AtivoFinanceiroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clienteId?: StringFieldUpdateOperationsInput | string
  }

  export type AtivoFinanceiroCreateManyInput = {
    id?: string
    nome: string
    valorAtual: Decimal | DecimalJsLike | number | string
    clienteId: string
  }

  export type AtivoFinanceiroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AtivoFinanceiroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clienteId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type AtivoFinanceiroListRelationFilter = {
    every?: AtivoFinanceiroWhereInput
    some?: AtivoFinanceiroWhereInput
    none?: AtivoFinanceiroWhereInput
  }

  export type AtivoFinanceiroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteOrderByRelevanceInput = {
    fields: ClienteOrderByRelevanceFieldEnum | ClienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type AtivoFinanceiroOrderByRelevanceInput = {
    fields: AtivoFinanceiroOrderByRelevanceFieldEnum | AtivoFinanceiroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AtivoFinanceiroCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    valorAtual?: SortOrder
    clienteId?: SortOrder
  }

  export type AtivoFinanceiroAvgOrderByAggregateInput = {
    valorAtual?: SortOrder
  }

  export type AtivoFinanceiroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    valorAtual?: SortOrder
    clienteId?: SortOrder
  }

  export type AtivoFinanceiroMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    valorAtual?: SortOrder
    clienteId?: SortOrder
  }

  export type AtivoFinanceiroSumOrderByAggregateInput = {
    valorAtual?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type AtivoFinanceiroCreateNestedManyWithoutClienteInput = {
    create?: XOR<AtivoFinanceiroCreateWithoutClienteInput, AtivoFinanceiroUncheckedCreateWithoutClienteInput> | AtivoFinanceiroCreateWithoutClienteInput[] | AtivoFinanceiroUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AtivoFinanceiroCreateOrConnectWithoutClienteInput | AtivoFinanceiroCreateOrConnectWithoutClienteInput[]
    createMany?: AtivoFinanceiroCreateManyClienteInputEnvelope
    connect?: AtivoFinanceiroWhereUniqueInput | AtivoFinanceiroWhereUniqueInput[]
  }

  export type AtivoFinanceiroUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<AtivoFinanceiroCreateWithoutClienteInput, AtivoFinanceiroUncheckedCreateWithoutClienteInput> | AtivoFinanceiroCreateWithoutClienteInput[] | AtivoFinanceiroUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AtivoFinanceiroCreateOrConnectWithoutClienteInput | AtivoFinanceiroCreateOrConnectWithoutClienteInput[]
    createMany?: AtivoFinanceiroCreateManyClienteInputEnvelope
    connect?: AtivoFinanceiroWhereUniqueInput | AtivoFinanceiroWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type AtivoFinanceiroUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AtivoFinanceiroCreateWithoutClienteInput, AtivoFinanceiroUncheckedCreateWithoutClienteInput> | AtivoFinanceiroCreateWithoutClienteInput[] | AtivoFinanceiroUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AtivoFinanceiroCreateOrConnectWithoutClienteInput | AtivoFinanceiroCreateOrConnectWithoutClienteInput[]
    upsert?: AtivoFinanceiroUpsertWithWhereUniqueWithoutClienteInput | AtivoFinanceiroUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AtivoFinanceiroCreateManyClienteInputEnvelope
    set?: AtivoFinanceiroWhereUniqueInput | AtivoFinanceiroWhereUniqueInput[]
    disconnect?: AtivoFinanceiroWhereUniqueInput | AtivoFinanceiroWhereUniqueInput[]
    delete?: AtivoFinanceiroWhereUniqueInput | AtivoFinanceiroWhereUniqueInput[]
    connect?: AtivoFinanceiroWhereUniqueInput | AtivoFinanceiroWhereUniqueInput[]
    update?: AtivoFinanceiroUpdateWithWhereUniqueWithoutClienteInput | AtivoFinanceiroUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AtivoFinanceiroUpdateManyWithWhereWithoutClienteInput | AtivoFinanceiroUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AtivoFinanceiroScalarWhereInput | AtivoFinanceiroScalarWhereInput[]
  }

  export type AtivoFinanceiroUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AtivoFinanceiroCreateWithoutClienteInput, AtivoFinanceiroUncheckedCreateWithoutClienteInput> | AtivoFinanceiroCreateWithoutClienteInput[] | AtivoFinanceiroUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AtivoFinanceiroCreateOrConnectWithoutClienteInput | AtivoFinanceiroCreateOrConnectWithoutClienteInput[]
    upsert?: AtivoFinanceiroUpsertWithWhereUniqueWithoutClienteInput | AtivoFinanceiroUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AtivoFinanceiroCreateManyClienteInputEnvelope
    set?: AtivoFinanceiroWhereUniqueInput | AtivoFinanceiroWhereUniqueInput[]
    disconnect?: AtivoFinanceiroWhereUniqueInput | AtivoFinanceiroWhereUniqueInput[]
    delete?: AtivoFinanceiroWhereUniqueInput | AtivoFinanceiroWhereUniqueInput[]
    connect?: AtivoFinanceiroWhereUniqueInput | AtivoFinanceiroWhereUniqueInput[]
    update?: AtivoFinanceiroUpdateWithWhereUniqueWithoutClienteInput | AtivoFinanceiroUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AtivoFinanceiroUpdateManyWithWhereWithoutClienteInput | AtivoFinanceiroUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AtivoFinanceiroScalarWhereInput | AtivoFinanceiroScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutAtivosInput = {
    create?: XOR<ClienteCreateWithoutAtivosInput, ClienteUncheckedCreateWithoutAtivosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAtivosInput
    connect?: ClienteWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ClienteUpdateOneRequiredWithoutAtivosNestedInput = {
    create?: XOR<ClienteCreateWithoutAtivosInput, ClienteUncheckedCreateWithoutAtivosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAtivosInput
    upsert?: ClienteUpsertWithoutAtivosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutAtivosInput, ClienteUpdateWithoutAtivosInput>, ClienteUncheckedUpdateWithoutAtivosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type AtivoFinanceiroCreateWithoutClienteInput = {
    id?: string
    nome: string
    valorAtual: Decimal | DecimalJsLike | number | string
  }

  export type AtivoFinanceiroUncheckedCreateWithoutClienteInput = {
    id?: string
    nome: string
    valorAtual: Decimal | DecimalJsLike | number | string
  }

  export type AtivoFinanceiroCreateOrConnectWithoutClienteInput = {
    where: AtivoFinanceiroWhereUniqueInput
    create: XOR<AtivoFinanceiroCreateWithoutClienteInput, AtivoFinanceiroUncheckedCreateWithoutClienteInput>
  }

  export type AtivoFinanceiroCreateManyClienteInputEnvelope = {
    data: AtivoFinanceiroCreateManyClienteInput | AtivoFinanceiroCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type AtivoFinanceiroUpsertWithWhereUniqueWithoutClienteInput = {
    where: AtivoFinanceiroWhereUniqueInput
    update: XOR<AtivoFinanceiroUpdateWithoutClienteInput, AtivoFinanceiroUncheckedUpdateWithoutClienteInput>
    create: XOR<AtivoFinanceiroCreateWithoutClienteInput, AtivoFinanceiroUncheckedCreateWithoutClienteInput>
  }

  export type AtivoFinanceiroUpdateWithWhereUniqueWithoutClienteInput = {
    where: AtivoFinanceiroWhereUniqueInput
    data: XOR<AtivoFinanceiroUpdateWithoutClienteInput, AtivoFinanceiroUncheckedUpdateWithoutClienteInput>
  }

  export type AtivoFinanceiroUpdateManyWithWhereWithoutClienteInput = {
    where: AtivoFinanceiroScalarWhereInput
    data: XOR<AtivoFinanceiroUpdateManyMutationInput, AtivoFinanceiroUncheckedUpdateManyWithoutClienteInput>
  }

  export type AtivoFinanceiroScalarWhereInput = {
    AND?: AtivoFinanceiroScalarWhereInput | AtivoFinanceiroScalarWhereInput[]
    OR?: AtivoFinanceiroScalarWhereInput[]
    NOT?: AtivoFinanceiroScalarWhereInput | AtivoFinanceiroScalarWhereInput[]
    id?: StringFilter<"AtivoFinanceiro"> | string
    nome?: StringFilter<"AtivoFinanceiro"> | string
    valorAtual?: DecimalFilter<"AtivoFinanceiro"> | Decimal | DecimalJsLike | number | string
    clienteId?: StringFilter<"AtivoFinanceiro"> | string
  }

  export type ClienteCreateWithoutAtivosInput = {
    id?: string
    nome: string
    email: string
    status?: $Enums.Status
  }

  export type ClienteUncheckedCreateWithoutAtivosInput = {
    id?: string
    nome: string
    email: string
    status?: $Enums.Status
  }

  export type ClienteCreateOrConnectWithoutAtivosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutAtivosInput, ClienteUncheckedCreateWithoutAtivosInput>
  }

  export type ClienteUpsertWithoutAtivosInput = {
    update: XOR<ClienteUpdateWithoutAtivosInput, ClienteUncheckedUpdateWithoutAtivosInput>
    create: XOR<ClienteCreateWithoutAtivosInput, ClienteUncheckedCreateWithoutAtivosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutAtivosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutAtivosInput, ClienteUncheckedUpdateWithoutAtivosInput>
  }

  export type ClienteUpdateWithoutAtivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ClienteUncheckedUpdateWithoutAtivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AtivoFinanceiroCreateManyClienteInput = {
    id?: string
    nome: string
    valorAtual: Decimal | DecimalJsLike | number | string
  }

  export type AtivoFinanceiroUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AtivoFinanceiroUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AtivoFinanceiroUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    valorAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}