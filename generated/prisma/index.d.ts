
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
 * Model winner
 * 
 */
export type winner = $Result.DefaultSelection<Prisma.$winnerPayload>
/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model buyer
 * 
 */
export type buyer = $Result.DefaultSelection<Prisma.$buyerPayload>
/**
 * Model enquiry
 * 
 */
export type enquiry = $Result.DefaultSelection<Prisma.$enquiryPayload>
/**
 * Model lottery
 * 
 */
export type lottery = $Result.DefaultSelection<Prisma.$lotteryPayload>
/**
 * Model ticket
 * 
 */
export type ticket = $Result.DefaultSelection<Prisma.$ticketPayload>
/**
 * Model ticketpackage
 * 
 */
export type ticketpackage = $Result.DefaultSelection<Prisma.$ticketpackagePayload>
/**
 * Model QRCode
 * 
 */
export type QRCode = $Result.DefaultSelection<Prisma.$QRCodePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const admin_role: {
  admin: 'admin',
  sub_admin: 'sub_admin'
};

export type admin_role = (typeof admin_role)[keyof typeof admin_role]


export const buyer_transaction_status: {
  not_verified: 'not_verified',
  verified: 'verified',
  failed: 'failed',
  success: 'success',
  refunded: 'refunded',
  rejected: 'rejected'
};

export type buyer_transaction_status = (typeof buyer_transaction_status)[keyof typeof buyer_transaction_status]

}

export type admin_role = $Enums.admin_role

export const admin_role: typeof $Enums.admin_role

export type buyer_transaction_status = $Enums.buyer_transaction_status

export const buyer_transaction_status: typeof $Enums.buyer_transaction_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Winners
 * const winners = await prisma.winner.findMany()
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
   * // Fetch zero or more Winners
   * const winners = await prisma.winner.findMany()
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
   * `prisma.winner`: Exposes CRUD operations for the **winner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Winners
    * const winners = await prisma.winner.findMany()
    * ```
    */
  get winner(): Prisma.winnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buyer`: Exposes CRUD operations for the **buyer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buyers
    * const buyers = await prisma.buyer.findMany()
    * ```
    */
  get buyer(): Prisma.buyerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enquiry`: Exposes CRUD operations for the **enquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enquiries
    * const enquiries = await prisma.enquiry.findMany()
    * ```
    */
  get enquiry(): Prisma.enquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lottery`: Exposes CRUD operations for the **lottery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lotteries
    * const lotteries = await prisma.lottery.findMany()
    * ```
    */
  get lottery(): Prisma.lotteryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.ticketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketpackage`: Exposes CRUD operations for the **ticketpackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ticketpackages
    * const ticketpackages = await prisma.ticketpackage.findMany()
    * ```
    */
  get ticketpackage(): Prisma.ticketpackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qRCode`: Exposes CRUD operations for the **QRCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QRCodes
    * const qRCodes = await prisma.qRCode.findMany()
    * ```
    */
  get qRCode(): Prisma.QRCodeDelegate<ExtArgs, ClientOptions>;
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
    winner: 'winner',
    admin: 'admin',
    buyer: 'buyer',
    enquiry: 'enquiry',
    lottery: 'lottery',
    ticket: 'ticket',
    ticketpackage: 'ticketpackage',
    QRCode: 'QRCode'
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
      modelProps: "winner" | "admin" | "buyer" | "enquiry" | "lottery" | "ticket" | "ticketpackage" | "qRCode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      winner: {
        payload: Prisma.$winnerPayload<ExtArgs>
        fields: Prisma.winnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.winnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$winnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.winnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$winnerPayload>
          }
          findFirst: {
            args: Prisma.winnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$winnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.winnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$winnerPayload>
          }
          findMany: {
            args: Prisma.winnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$winnerPayload>[]
          }
          create: {
            args: Prisma.winnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$winnerPayload>
          }
          createMany: {
            args: Prisma.winnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.winnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$winnerPayload>
          }
          update: {
            args: Prisma.winnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$winnerPayload>
          }
          deleteMany: {
            args: Prisma.winnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.winnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.winnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$winnerPayload>
          }
          aggregate: {
            args: Prisma.WinnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWinner>
          }
          groupBy: {
            args: Prisma.winnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WinnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.winnerCountArgs<ExtArgs>
            result: $Utils.Optional<WinnerCountAggregateOutputType> | number
          }
        }
      }
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      buyer: {
        payload: Prisma.$buyerPayload<ExtArgs>
        fields: Prisma.buyerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.buyerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.buyerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload>
          }
          findFirst: {
            args: Prisma.buyerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.buyerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload>
          }
          findMany: {
            args: Prisma.buyerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload>[]
          }
          create: {
            args: Prisma.buyerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload>
          }
          createMany: {
            args: Prisma.buyerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.buyerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload>
          }
          update: {
            args: Prisma.buyerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload>
          }
          deleteMany: {
            args: Prisma.buyerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.buyerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.buyerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload>
          }
          aggregate: {
            args: Prisma.BuyerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuyer>
          }
          groupBy: {
            args: Prisma.buyerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuyerGroupByOutputType>[]
          }
          count: {
            args: Prisma.buyerCountArgs<ExtArgs>
            result: $Utils.Optional<BuyerCountAggregateOutputType> | number
          }
        }
      }
      enquiry: {
        payload: Prisma.$enquiryPayload<ExtArgs>
        fields: Prisma.enquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>
          }
          findFirst: {
            args: Prisma.enquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>
          }
          findMany: {
            args: Prisma.enquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>[]
          }
          create: {
            args: Prisma.enquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>
          }
          createMany: {
            args: Prisma.enquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.enquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>
          }
          update: {
            args: Prisma.enquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>
          }
          deleteMany: {
            args: Prisma.enquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.enquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>
          }
          aggregate: {
            args: Prisma.EnquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnquiry>
          }
          groupBy: {
            args: Prisma.enquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.enquiryCountArgs<ExtArgs>
            result: $Utils.Optional<EnquiryCountAggregateOutputType> | number
          }
        }
      }
      lottery: {
        payload: Prisma.$lotteryPayload<ExtArgs>
        fields: Prisma.lotteryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lotteryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotteryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lotteryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotteryPayload>
          }
          findFirst: {
            args: Prisma.lotteryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotteryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lotteryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotteryPayload>
          }
          findMany: {
            args: Prisma.lotteryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotteryPayload>[]
          }
          create: {
            args: Prisma.lotteryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotteryPayload>
          }
          createMany: {
            args: Prisma.lotteryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.lotteryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotteryPayload>
          }
          update: {
            args: Prisma.lotteryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotteryPayload>
          }
          deleteMany: {
            args: Prisma.lotteryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lotteryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.lotteryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lotteryPayload>
          }
          aggregate: {
            args: Prisma.LotteryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLottery>
          }
          groupBy: {
            args: Prisma.lotteryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LotteryGroupByOutputType>[]
          }
          count: {
            args: Prisma.lotteryCountArgs<ExtArgs>
            result: $Utils.Optional<LotteryCountAggregateOutputType> | number
          }
        }
      }
      ticket: {
        payload: Prisma.$ticketPayload<ExtArgs>
        fields: Prisma.ticketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          findFirst: {
            args: Prisma.ticketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          findMany: {
            args: Prisma.ticketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>[]
          }
          create: {
            args: Prisma.ticketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          createMany: {
            args: Prisma.ticketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ticketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          update: {
            args: Prisma.ticketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          deleteMany: {
            args: Prisma.ticketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.ticketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      ticketpackage: {
        payload: Prisma.$ticketpackagePayload<ExtArgs>
        fields: Prisma.ticketpackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticketpackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketpackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticketpackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketpackagePayload>
          }
          findFirst: {
            args: Prisma.ticketpackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketpackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticketpackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketpackagePayload>
          }
          findMany: {
            args: Prisma.ticketpackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketpackagePayload>[]
          }
          create: {
            args: Prisma.ticketpackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketpackagePayload>
          }
          createMany: {
            args: Prisma.ticketpackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ticketpackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketpackagePayload>
          }
          update: {
            args: Prisma.ticketpackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketpackagePayload>
          }
          deleteMany: {
            args: Prisma.ticketpackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticketpackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticketpackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketpackagePayload>
          }
          aggregate: {
            args: Prisma.TicketpackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketpackage>
          }
          groupBy: {
            args: Prisma.ticketpackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketpackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticketpackageCountArgs<ExtArgs>
            result: $Utils.Optional<TicketpackageCountAggregateOutputType> | number
          }
        }
      }
      QRCode: {
        payload: Prisma.$QRCodePayload<ExtArgs>
        fields: Prisma.QRCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QRCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QRCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          findFirst: {
            args: Prisma.QRCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QRCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          findMany: {
            args: Prisma.QRCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>[]
          }
          create: {
            args: Prisma.QRCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          createMany: {
            args: Prisma.QRCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QRCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          update: {
            args: Prisma.QRCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          deleteMany: {
            args: Prisma.QRCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QRCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QRCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          aggregate: {
            args: Prisma.QRCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQRCode>
          }
          groupBy: {
            args: Prisma.QRCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<QRCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QRCodeCountArgs<ExtArgs>
            result: $Utils.Optional<QRCodeCountAggregateOutputType> | number
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
    winner?: winnerOmit
    admin?: adminOmit
    buyer?: buyerOmit
    enquiry?: enquiryOmit
    lottery?: lotteryOmit
    ticket?: ticketOmit
    ticketpackage?: ticketpackageOmit
    qRCode?: QRCodeOmit
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
   * Count Type BuyerCountOutputType
   */

  export type BuyerCountOutputType = {
    ticket: number
  }

  export type BuyerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | BuyerCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * BuyerCountOutputType without action
   */
  export type BuyerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerCountOutputType
     */
    select?: BuyerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BuyerCountOutputType without action
   */
  export type BuyerCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
  }


  /**
   * Count Type LotteryCountOutputType
   */

  export type LotteryCountOutputType = {
    buyer: number
    ticket: number
    winner: number
  }

  export type LotteryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | LotteryCountOutputTypeCountBuyerArgs
    ticket?: boolean | LotteryCountOutputTypeCountTicketArgs
    winner?: boolean | LotteryCountOutputTypeCountWinnerArgs
  }

  // Custom InputTypes
  /**
   * LotteryCountOutputType without action
   */
  export type LotteryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryCountOutputType
     */
    select?: LotteryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LotteryCountOutputType without action
   */
  export type LotteryCountOutputTypeCountBuyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: buyerWhereInput
  }

  /**
   * LotteryCountOutputType without action
   */
  export type LotteryCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
  }

  /**
   * LotteryCountOutputType without action
   */
  export type LotteryCountOutputTypeCountWinnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: winnerWhereInput
  }


  /**
   * Count Type TicketpackageCountOutputType
   */

  export type TicketpackageCountOutputType = {
    buyer: number
    ticket: number
  }

  export type TicketpackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | TicketpackageCountOutputTypeCountBuyerArgs
    ticket?: boolean | TicketpackageCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * TicketpackageCountOutputType without action
   */
  export type TicketpackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketpackageCountOutputType
     */
    select?: TicketpackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketpackageCountOutputType without action
   */
  export type TicketpackageCountOutputTypeCountBuyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: buyerWhereInput
  }

  /**
   * TicketpackageCountOutputType without action
   */
  export type TicketpackageCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model winner
   */

  export type AggregateWinner = {
    _count: WinnerCountAggregateOutputType | null
    _avg: WinnerAvgAggregateOutputType | null
    _sum: WinnerSumAggregateOutputType | null
    _min: WinnerMinAggregateOutputType | null
    _max: WinnerMaxAggregateOutputType | null
  }

  export type WinnerAvgAggregateOutputType = {
    id: number | null
    lottery_id: number | null
  }

  export type WinnerSumAggregateOutputType = {
    id: number | null
    lottery_id: number | null
  }

  export type WinnerMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    state: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ticket_number: string | null
    prize_amount: string | null
    winner_rank: string | null
    lottery_id: number | null
    claimed: boolean | null
  }

  export type WinnerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    state: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ticket_number: string | null
    prize_amount: string | null
    winner_rank: string | null
    lottery_id: number | null
    claimed: boolean | null
  }

  export type WinnerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    state: number
    createdAt: number
    updatedAt: number
    ticket_number: number
    prize_amount: number
    winner_rank: number
    lottery_id: number
    claimed: number
    _all: number
  }


  export type WinnerAvgAggregateInputType = {
    id?: true
    lottery_id?: true
  }

  export type WinnerSumAggregateInputType = {
    id?: true
    lottery_id?: true
  }

  export type WinnerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    state?: true
    createdAt?: true
    updatedAt?: true
    ticket_number?: true
    prize_amount?: true
    winner_rank?: true
    lottery_id?: true
    claimed?: true
  }

  export type WinnerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    state?: true
    createdAt?: true
    updatedAt?: true
    ticket_number?: true
    prize_amount?: true
    winner_rank?: true
    lottery_id?: true
    claimed?: true
  }

  export type WinnerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    state?: true
    createdAt?: true
    updatedAt?: true
    ticket_number?: true
    prize_amount?: true
    winner_rank?: true
    lottery_id?: true
    claimed?: true
    _all?: true
  }

  export type WinnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which winner to aggregate.
     */
    where?: winnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of winners to fetch.
     */
    orderBy?: winnerOrderByWithRelationInput | winnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: winnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned winners
    **/
    _count?: true | WinnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WinnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WinnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WinnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WinnerMaxAggregateInputType
  }

  export type GetWinnerAggregateType<T extends WinnerAggregateArgs> = {
        [P in keyof T & keyof AggregateWinner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWinner[P]>
      : GetScalarType<T[P], AggregateWinner[P]>
  }




  export type winnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: winnerWhereInput
    orderBy?: winnerOrderByWithAggregationInput | winnerOrderByWithAggregationInput[]
    by: WinnerScalarFieldEnum[] | WinnerScalarFieldEnum
    having?: winnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WinnerCountAggregateInputType | true
    _avg?: WinnerAvgAggregateInputType
    _sum?: WinnerSumAggregateInputType
    _min?: WinnerMinAggregateInputType
    _max?: WinnerMaxAggregateInputType
  }

  export type WinnerGroupByOutputType = {
    id: number
    name: string
    phone: string
    email: string
    state: string
    createdAt: Date
    updatedAt: Date
    ticket_number: string
    prize_amount: string
    winner_rank: string | null
    lottery_id: number
    claimed: boolean
    _count: WinnerCountAggregateOutputType | null
    _avg: WinnerAvgAggregateOutputType | null
    _sum: WinnerSumAggregateOutputType | null
    _min: WinnerMinAggregateOutputType | null
    _max: WinnerMaxAggregateOutputType | null
  }

  type GetWinnerGroupByPayload<T extends winnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WinnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WinnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WinnerGroupByOutputType[P]>
            : GetScalarType<T[P], WinnerGroupByOutputType[P]>
        }
      >
    >


  export type winnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket_number?: boolean
    prize_amount?: boolean
    winner_rank?: boolean
    lottery_id?: boolean
    claimed?: boolean
    lottery?: boolean | lotteryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>



  export type winnerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket_number?: boolean
    prize_amount?: boolean
    winner_rank?: boolean
    lottery_id?: boolean
    claimed?: boolean
  }

  export type winnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "state" | "createdAt" | "updatedAt" | "ticket_number" | "prize_amount" | "winner_rank" | "lottery_id" | "claimed", ExtArgs["result"]["winner"]>
  export type winnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lottery?: boolean | lotteryDefaultArgs<ExtArgs>
  }

  export type $winnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "winner"
    objects: {
      lottery: Prisma.$lotteryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      email: string
      state: string
      createdAt: Date
      updatedAt: Date
      ticket_number: string
      prize_amount: string
      winner_rank: string | null
      lottery_id: number
      claimed: boolean
    }, ExtArgs["result"]["winner"]>
    composites: {}
  }

  type winnerGetPayload<S extends boolean | null | undefined | winnerDefaultArgs> = $Result.GetResult<Prisma.$winnerPayload, S>

  type winnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<winnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WinnerCountAggregateInputType | true
    }

  export interface winnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['winner'], meta: { name: 'winner' } }
    /**
     * Find zero or one Winner that matches the filter.
     * @param {winnerFindUniqueArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends winnerFindUniqueArgs>(args: SelectSubset<T, winnerFindUniqueArgs<ExtArgs>>): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Winner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {winnerFindUniqueOrThrowArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends winnerFindUniqueOrThrowArgs>(args: SelectSubset<T, winnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Winner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {winnerFindFirstArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends winnerFindFirstArgs>(args?: SelectSubset<T, winnerFindFirstArgs<ExtArgs>>): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Winner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {winnerFindFirstOrThrowArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends winnerFindFirstOrThrowArgs>(args?: SelectSubset<T, winnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Winners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {winnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Winners
     * const winners = await prisma.winner.findMany()
     * 
     * // Get first 10 Winners
     * const winners = await prisma.winner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const winnerWithIdOnly = await prisma.winner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends winnerFindManyArgs>(args?: SelectSubset<T, winnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Winner.
     * @param {winnerCreateArgs} args - Arguments to create a Winner.
     * @example
     * // Create one Winner
     * const Winner = await prisma.winner.create({
     *   data: {
     *     // ... data to create a Winner
     *   }
     * })
     * 
     */
    create<T extends winnerCreateArgs>(args: SelectSubset<T, winnerCreateArgs<ExtArgs>>): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Winners.
     * @param {winnerCreateManyArgs} args - Arguments to create many Winners.
     * @example
     * // Create many Winners
     * const winner = await prisma.winner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends winnerCreateManyArgs>(args?: SelectSubset<T, winnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Winner.
     * @param {winnerDeleteArgs} args - Arguments to delete one Winner.
     * @example
     * // Delete one Winner
     * const Winner = await prisma.winner.delete({
     *   where: {
     *     // ... filter to delete one Winner
     *   }
     * })
     * 
     */
    delete<T extends winnerDeleteArgs>(args: SelectSubset<T, winnerDeleteArgs<ExtArgs>>): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Winner.
     * @param {winnerUpdateArgs} args - Arguments to update one Winner.
     * @example
     * // Update one Winner
     * const winner = await prisma.winner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends winnerUpdateArgs>(args: SelectSubset<T, winnerUpdateArgs<ExtArgs>>): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Winners.
     * @param {winnerDeleteManyArgs} args - Arguments to filter Winners to delete.
     * @example
     * // Delete a few Winners
     * const { count } = await prisma.winner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends winnerDeleteManyArgs>(args?: SelectSubset<T, winnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Winners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {winnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Winners
     * const winner = await prisma.winner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends winnerUpdateManyArgs>(args: SelectSubset<T, winnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Winner.
     * @param {winnerUpsertArgs} args - Arguments to update or create a Winner.
     * @example
     * // Update or create a Winner
     * const winner = await prisma.winner.upsert({
     *   create: {
     *     // ... data to create a Winner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Winner we want to update
     *   }
     * })
     */
    upsert<T extends winnerUpsertArgs>(args: SelectSubset<T, winnerUpsertArgs<ExtArgs>>): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Winners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {winnerCountArgs} args - Arguments to filter Winners to count.
     * @example
     * // Count the number of Winners
     * const count = await prisma.winner.count({
     *   where: {
     *     // ... the filter for the Winners we want to count
     *   }
     * })
    **/
    count<T extends winnerCountArgs>(
      args?: Subset<T, winnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WinnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Winner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WinnerAggregateArgs>(args: Subset<T, WinnerAggregateArgs>): Prisma.PrismaPromise<GetWinnerAggregateType<T>>

    /**
     * Group by Winner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {winnerGroupByArgs} args - Group by arguments.
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
      T extends winnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: winnerGroupByArgs['orderBy'] }
        : { orderBy?: winnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, winnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWinnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the winner model
   */
  readonly fields: winnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for winner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__winnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lottery<T extends lotteryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lotteryDefaultArgs<ExtArgs>>): Prisma__lotteryClient<$Result.GetResult<Prisma.$lotteryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the winner model
   */
  interface winnerFieldRefs {
    readonly id: FieldRef<"winner", 'Int'>
    readonly name: FieldRef<"winner", 'String'>
    readonly phone: FieldRef<"winner", 'String'>
    readonly email: FieldRef<"winner", 'String'>
    readonly state: FieldRef<"winner", 'String'>
    readonly createdAt: FieldRef<"winner", 'DateTime'>
    readonly updatedAt: FieldRef<"winner", 'DateTime'>
    readonly ticket_number: FieldRef<"winner", 'String'>
    readonly prize_amount: FieldRef<"winner", 'String'>
    readonly winner_rank: FieldRef<"winner", 'String'>
    readonly lottery_id: FieldRef<"winner", 'Int'>
    readonly claimed: FieldRef<"winner", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * winner findUnique
   */
  export type winnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the winner
     */
    omit?: winnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: winnerInclude<ExtArgs> | null
    /**
     * Filter, which winner to fetch.
     */
    where: winnerWhereUniqueInput
  }

  /**
   * winner findUniqueOrThrow
   */
  export type winnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the winner
     */
    omit?: winnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: winnerInclude<ExtArgs> | null
    /**
     * Filter, which winner to fetch.
     */
    where: winnerWhereUniqueInput
  }

  /**
   * winner findFirst
   */
  export type winnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the winner
     */
    omit?: winnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: winnerInclude<ExtArgs> | null
    /**
     * Filter, which winner to fetch.
     */
    where?: winnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of winners to fetch.
     */
    orderBy?: winnerOrderByWithRelationInput | winnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for winners.
     */
    cursor?: winnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * winner findFirstOrThrow
   */
  export type winnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the winner
     */
    omit?: winnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: winnerInclude<ExtArgs> | null
    /**
     * Filter, which winner to fetch.
     */
    where?: winnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of winners to fetch.
     */
    orderBy?: winnerOrderByWithRelationInput | winnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for winners.
     */
    cursor?: winnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * winner findMany
   */
  export type winnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the winner
     */
    omit?: winnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: winnerInclude<ExtArgs> | null
    /**
     * Filter, which winners to fetch.
     */
    where?: winnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of winners to fetch.
     */
    orderBy?: winnerOrderByWithRelationInput | winnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing winners.
     */
    cursor?: winnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` winners.
     */
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * winner create
   */
  export type winnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the winner
     */
    omit?: winnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: winnerInclude<ExtArgs> | null
    /**
     * The data needed to create a winner.
     */
    data: XOR<winnerCreateInput, winnerUncheckedCreateInput>
  }

  /**
   * winner createMany
   */
  export type winnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many winners.
     */
    data: winnerCreateManyInput | winnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * winner update
   */
  export type winnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the winner
     */
    omit?: winnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: winnerInclude<ExtArgs> | null
    /**
     * The data needed to update a winner.
     */
    data: XOR<winnerUpdateInput, winnerUncheckedUpdateInput>
    /**
     * Choose, which winner to update.
     */
    where: winnerWhereUniqueInput
  }

  /**
   * winner updateMany
   */
  export type winnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update winners.
     */
    data: XOR<winnerUpdateManyMutationInput, winnerUncheckedUpdateManyInput>
    /**
     * Filter which winners to update
     */
    where?: winnerWhereInput
    /**
     * Limit how many winners to update.
     */
    limit?: number
  }

  /**
   * winner upsert
   */
  export type winnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the winner
     */
    omit?: winnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: winnerInclude<ExtArgs> | null
    /**
     * The filter to search for the winner to update in case it exists.
     */
    where: winnerWhereUniqueInput
    /**
     * In case the winner found by the `where` argument doesn't exist, create a new winner with this data.
     */
    create: XOR<winnerCreateInput, winnerUncheckedCreateInput>
    /**
     * In case the winner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<winnerUpdateInput, winnerUncheckedUpdateInput>
  }

  /**
   * winner delete
   */
  export type winnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the winner
     */
    omit?: winnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: winnerInclude<ExtArgs> | null
    /**
     * Filter which winner to delete.
     */
    where: winnerWhereUniqueInput
  }

  /**
   * winner deleteMany
   */
  export type winnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which winners to delete
     */
    where?: winnerWhereInput
    /**
     * Limit how many winners to delete.
     */
    limit?: number
  }

  /**
   * winner without action
   */
  export type winnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the winner
     */
    omit?: winnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: winnerInclude<ExtArgs> | null
  }


  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.admin_role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.admin_role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.admin_role
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>



  export type adminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.admin_role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly name: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly role: FieldRef<"admin", 'admin_role'>
    readonly createdAt: FieldRef<"admin", 'DateTime'>
    readonly updatedAt: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model buyer
   */

  export type AggregateBuyer = {
    _count: BuyerCountAggregateOutputType | null
    _avg: BuyerAvgAggregateOutputType | null
    _sum: BuyerSumAggregateOutputType | null
    _min: BuyerMinAggregateOutputType | null
    _max: BuyerMaxAggregateOutputType | null
  }

  export type BuyerAvgAggregateOutputType = {
    id: number | null
    lottery_id: number | null
    ticket_package_id: number | null
  }

  export type BuyerSumAggregateOutputType = {
    id: number | null
    lottery_id: number | null
    ticket_package_id: number | null
  }

  export type BuyerMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    state: string | null
    lottery_id: number | null
    ticket_package_id: number | null
    transaction_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    transaction_status: $Enums.buyer_transaction_status | null
    is_read: boolean | null
  }

  export type BuyerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    state: string | null
    lottery_id: number | null
    ticket_package_id: number | null
    transaction_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    transaction_status: $Enums.buyer_transaction_status | null
    is_read: boolean | null
  }

  export type BuyerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    state: number
    lottery_id: number
    ticket_package_id: number
    transaction_id: number
    createdAt: number
    updatedAt: number
    transaction_status: number
    is_read: number
    _all: number
  }


  export type BuyerAvgAggregateInputType = {
    id?: true
    lottery_id?: true
    ticket_package_id?: true
  }

  export type BuyerSumAggregateInputType = {
    id?: true
    lottery_id?: true
    ticket_package_id?: true
  }

  export type BuyerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    state?: true
    lottery_id?: true
    ticket_package_id?: true
    transaction_id?: true
    createdAt?: true
    updatedAt?: true
    transaction_status?: true
    is_read?: true
  }

  export type BuyerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    state?: true
    lottery_id?: true
    ticket_package_id?: true
    transaction_id?: true
    createdAt?: true
    updatedAt?: true
    transaction_status?: true
    is_read?: true
  }

  export type BuyerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    state?: true
    lottery_id?: true
    ticket_package_id?: true
    transaction_id?: true
    createdAt?: true
    updatedAt?: true
    transaction_status?: true
    is_read?: true
    _all?: true
  }

  export type BuyerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which buyer to aggregate.
     */
    where?: buyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buyers to fetch.
     */
    orderBy?: buyerOrderByWithRelationInput | buyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: buyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned buyers
    **/
    _count?: true | BuyerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuyerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuyerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuyerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuyerMaxAggregateInputType
  }

  export type GetBuyerAggregateType<T extends BuyerAggregateArgs> = {
        [P in keyof T & keyof AggregateBuyer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuyer[P]>
      : GetScalarType<T[P], AggregateBuyer[P]>
  }




  export type buyerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: buyerWhereInput
    orderBy?: buyerOrderByWithAggregationInput | buyerOrderByWithAggregationInput[]
    by: BuyerScalarFieldEnum[] | BuyerScalarFieldEnum
    having?: buyerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuyerCountAggregateInputType | true
    _avg?: BuyerAvgAggregateInputType
    _sum?: BuyerSumAggregateInputType
    _min?: BuyerMinAggregateInputType
    _max?: BuyerMaxAggregateInputType
  }

  export type BuyerGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    state: string
    lottery_id: number | null
    ticket_package_id: number | null
    transaction_id: string | null
    createdAt: Date
    updatedAt: Date
    transaction_status: $Enums.buyer_transaction_status
    is_read: boolean
    _count: BuyerCountAggregateOutputType | null
    _avg: BuyerAvgAggregateOutputType | null
    _sum: BuyerSumAggregateOutputType | null
    _min: BuyerMinAggregateOutputType | null
    _max: BuyerMaxAggregateOutputType | null
  }

  type GetBuyerGroupByPayload<T extends buyerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuyerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuyerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuyerGroupByOutputType[P]>
            : GetScalarType<T[P], BuyerGroupByOutputType[P]>
        }
      >
    >


  export type buyerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    state?: boolean
    lottery_id?: boolean
    ticket_package_id?: boolean
    transaction_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaction_status?: boolean
    is_read?: boolean
    lottery?: boolean | buyer$lotteryArgs<ExtArgs>
    ticketpackage?: boolean | buyer$ticketpackageArgs<ExtArgs>
    ticket?: boolean | buyer$ticketArgs<ExtArgs>
    _count?: boolean | BuyerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buyer"]>



  export type buyerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    state?: boolean
    lottery_id?: boolean
    ticket_package_id?: boolean
    transaction_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaction_status?: boolean
    is_read?: boolean
  }

  export type buyerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "state" | "lottery_id" | "ticket_package_id" | "transaction_id" | "createdAt" | "updatedAt" | "transaction_status" | "is_read", ExtArgs["result"]["buyer"]>
  export type buyerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lottery?: boolean | buyer$lotteryArgs<ExtArgs>
    ticketpackage?: boolean | buyer$ticketpackageArgs<ExtArgs>
    ticket?: boolean | buyer$ticketArgs<ExtArgs>
    _count?: boolean | BuyerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $buyerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "buyer"
    objects: {
      lottery: Prisma.$lotteryPayload<ExtArgs> | null
      ticketpackage: Prisma.$ticketpackagePayload<ExtArgs> | null
      ticket: Prisma.$ticketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      state: string
      lottery_id: number | null
      ticket_package_id: number | null
      transaction_id: string | null
      createdAt: Date
      updatedAt: Date
      transaction_status: $Enums.buyer_transaction_status
      is_read: boolean
    }, ExtArgs["result"]["buyer"]>
    composites: {}
  }

  type buyerGetPayload<S extends boolean | null | undefined | buyerDefaultArgs> = $Result.GetResult<Prisma.$buyerPayload, S>

  type buyerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<buyerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuyerCountAggregateInputType | true
    }

  export interface buyerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['buyer'], meta: { name: 'buyer' } }
    /**
     * Find zero or one Buyer that matches the filter.
     * @param {buyerFindUniqueArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends buyerFindUniqueArgs>(args: SelectSubset<T, buyerFindUniqueArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Buyer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {buyerFindUniqueOrThrowArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends buyerFindUniqueOrThrowArgs>(args: SelectSubset<T, buyerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buyer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buyerFindFirstArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends buyerFindFirstArgs>(args?: SelectSubset<T, buyerFindFirstArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buyer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buyerFindFirstOrThrowArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends buyerFindFirstOrThrowArgs>(args?: SelectSubset<T, buyerFindFirstOrThrowArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buyers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buyerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buyers
     * const buyers = await prisma.buyer.findMany()
     * 
     * // Get first 10 Buyers
     * const buyers = await prisma.buyer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buyerWithIdOnly = await prisma.buyer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends buyerFindManyArgs>(args?: SelectSubset<T, buyerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Buyer.
     * @param {buyerCreateArgs} args - Arguments to create a Buyer.
     * @example
     * // Create one Buyer
     * const Buyer = await prisma.buyer.create({
     *   data: {
     *     // ... data to create a Buyer
     *   }
     * })
     * 
     */
    create<T extends buyerCreateArgs>(args: SelectSubset<T, buyerCreateArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buyers.
     * @param {buyerCreateManyArgs} args - Arguments to create many Buyers.
     * @example
     * // Create many Buyers
     * const buyer = await prisma.buyer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends buyerCreateManyArgs>(args?: SelectSubset<T, buyerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Buyer.
     * @param {buyerDeleteArgs} args - Arguments to delete one Buyer.
     * @example
     * // Delete one Buyer
     * const Buyer = await prisma.buyer.delete({
     *   where: {
     *     // ... filter to delete one Buyer
     *   }
     * })
     * 
     */
    delete<T extends buyerDeleteArgs>(args: SelectSubset<T, buyerDeleteArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Buyer.
     * @param {buyerUpdateArgs} args - Arguments to update one Buyer.
     * @example
     * // Update one Buyer
     * const buyer = await prisma.buyer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends buyerUpdateArgs>(args: SelectSubset<T, buyerUpdateArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buyers.
     * @param {buyerDeleteManyArgs} args - Arguments to filter Buyers to delete.
     * @example
     * // Delete a few Buyers
     * const { count } = await prisma.buyer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends buyerDeleteManyArgs>(args?: SelectSubset<T, buyerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buyerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buyers
     * const buyer = await prisma.buyer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends buyerUpdateManyArgs>(args: SelectSubset<T, buyerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Buyer.
     * @param {buyerUpsertArgs} args - Arguments to update or create a Buyer.
     * @example
     * // Update or create a Buyer
     * const buyer = await prisma.buyer.upsert({
     *   create: {
     *     // ... data to create a Buyer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Buyer we want to update
     *   }
     * })
     */
    upsert<T extends buyerUpsertArgs>(args: SelectSubset<T, buyerUpsertArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buyerCountArgs} args - Arguments to filter Buyers to count.
     * @example
     * // Count the number of Buyers
     * const count = await prisma.buyer.count({
     *   where: {
     *     // ... the filter for the Buyers we want to count
     *   }
     * })
    **/
    count<T extends buyerCountArgs>(
      args?: Subset<T, buyerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuyerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Buyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BuyerAggregateArgs>(args: Subset<T, BuyerAggregateArgs>): Prisma.PrismaPromise<GetBuyerAggregateType<T>>

    /**
     * Group by Buyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buyerGroupByArgs} args - Group by arguments.
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
      T extends buyerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: buyerGroupByArgs['orderBy'] }
        : { orderBy?: buyerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, buyerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuyerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the buyer model
   */
  readonly fields: buyerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for buyer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__buyerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lottery<T extends buyer$lotteryArgs<ExtArgs> = {}>(args?: Subset<T, buyer$lotteryArgs<ExtArgs>>): Prisma__lotteryClient<$Result.GetResult<Prisma.$lotteryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ticketpackage<T extends buyer$ticketpackageArgs<ExtArgs> = {}>(args?: Subset<T, buyer$ticketpackageArgs<ExtArgs>>): Prisma__ticketpackageClient<$Result.GetResult<Prisma.$ticketpackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ticket<T extends buyer$ticketArgs<ExtArgs> = {}>(args?: Subset<T, buyer$ticketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the buyer model
   */
  interface buyerFieldRefs {
    readonly id: FieldRef<"buyer", 'Int'>
    readonly name: FieldRef<"buyer", 'String'>
    readonly email: FieldRef<"buyer", 'String'>
    readonly phone: FieldRef<"buyer", 'String'>
    readonly state: FieldRef<"buyer", 'String'>
    readonly lottery_id: FieldRef<"buyer", 'Int'>
    readonly ticket_package_id: FieldRef<"buyer", 'Int'>
    readonly transaction_id: FieldRef<"buyer", 'String'>
    readonly createdAt: FieldRef<"buyer", 'DateTime'>
    readonly updatedAt: FieldRef<"buyer", 'DateTime'>
    readonly transaction_status: FieldRef<"buyer", 'buyer_transaction_status'>
    readonly is_read: FieldRef<"buyer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * buyer findUnique
   */
  export type buyerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buyerInclude<ExtArgs> | null
    /**
     * Filter, which buyer to fetch.
     */
    where: buyerWhereUniqueInput
  }

  /**
   * buyer findUniqueOrThrow
   */
  export type buyerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buyerInclude<ExtArgs> | null
    /**
     * Filter, which buyer to fetch.
     */
    where: buyerWhereUniqueInput
  }

  /**
   * buyer findFirst
   */
  export type buyerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buyerInclude<ExtArgs> | null
    /**
     * Filter, which buyer to fetch.
     */
    where?: buyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buyers to fetch.
     */
    orderBy?: buyerOrderByWithRelationInput | buyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buyers.
     */
    cursor?: buyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buyers.
     */
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }

  /**
   * buyer findFirstOrThrow
   */
  export type buyerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buyerInclude<ExtArgs> | null
    /**
     * Filter, which buyer to fetch.
     */
    where?: buyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buyers to fetch.
     */
    orderBy?: buyerOrderByWithRelationInput | buyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buyers.
     */
    cursor?: buyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buyers.
     */
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }

  /**
   * buyer findMany
   */
  export type buyerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buyerInclude<ExtArgs> | null
    /**
     * Filter, which buyers to fetch.
     */
    where?: buyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buyers to fetch.
     */
    orderBy?: buyerOrderByWithRelationInput | buyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing buyers.
     */
    cursor?: buyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buyers.
     */
    skip?: number
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }

  /**
   * buyer create
   */
  export type buyerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buyerInclude<ExtArgs> | null
    /**
     * The data needed to create a buyer.
     */
    data: XOR<buyerCreateInput, buyerUncheckedCreateInput>
  }

  /**
   * buyer createMany
   */
  export type buyerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many buyers.
     */
    data: buyerCreateManyInput | buyerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * buyer update
   */
  export type buyerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buyerInclude<ExtArgs> | null
    /**
     * The data needed to update a buyer.
     */
    data: XOR<buyerUpdateInput, buyerUncheckedUpdateInput>
    /**
     * Choose, which buyer to update.
     */
    where: buyerWhereUniqueInput
  }

  /**
   * buyer updateMany
   */
  export type buyerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update buyers.
     */
    data: XOR<buyerUpdateManyMutationInput, buyerUncheckedUpdateManyInput>
    /**
     * Filter which buyers to update
     */
    where?: buyerWhereInput
    /**
     * Limit how many buyers to update.
     */
    limit?: number
  }

  /**
   * buyer upsert
   */
  export type buyerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buyerInclude<ExtArgs> | null
    /**
     * The filter to search for the buyer to update in case it exists.
     */
    where: buyerWhereUniqueInput
    /**
     * In case the buyer found by the `where` argument doesn't exist, create a new buyer with this data.
     */
    create: XOR<buyerCreateInput, buyerUncheckedCreateInput>
    /**
     * In case the buyer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<buyerUpdateInput, buyerUncheckedUpdateInput>
  }

  /**
   * buyer delete
   */
  export type buyerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buyerInclude<ExtArgs> | null
    /**
     * Filter which buyer to delete.
     */
    where: buyerWhereUniqueInput
  }

  /**
   * buyer deleteMany
   */
  export type buyerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which buyers to delete
     */
    where?: buyerWhereInput
    /**
     * Limit how many buyers to delete.
     */
    limit?: number
  }

  /**
   * buyer.lottery
   */
  export type buyer$lotteryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery
     */
    select?: lotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lottery
     */
    omit?: lotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotteryInclude<ExtArgs> | null
    where?: lotteryWhereInput
  }

  /**
   * buyer.ticketpackage
   */
  export type buyer$ticketpackageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticketpackage
     */
    select?: ticketpackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticketpackage
     */
    omit?: ticketpackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketpackageInclude<ExtArgs> | null
    where?: ticketpackageWhereInput
  }

  /**
   * buyer.ticket
   */
  export type buyer$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    cursor?: ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * buyer without action
   */
  export type buyerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buyerInclude<ExtArgs> | null
  }


  /**
   * Model enquiry
   */

  export type AggregateEnquiry = {
    _count: EnquiryCountAggregateOutputType | null
    _avg: EnquiryAvgAggregateOutputType | null
    _sum: EnquirySumAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  export type EnquiryAvgAggregateOutputType = {
    id: number | null
  }

  export type EnquirySumAggregateOutputType = {
    id: number | null
  }

  export type EnquiryMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnquiryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnquiryCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    subject: number
    message: number
    isRead: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnquiryAvgAggregateInputType = {
    id?: true
  }

  export type EnquirySumAggregateInputType = {
    id?: true
  }

  export type EnquiryMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnquiryMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnquiryCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enquiry to aggregate.
     */
    where?: enquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enquiries to fetch.
     */
    orderBy?: enquiryOrderByWithRelationInput | enquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enquiries
    **/
    _count?: true | EnquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnquiryMaxAggregateInputType
  }

  export type GetEnquiryAggregateType<T extends EnquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateEnquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnquiry[P]>
      : GetScalarType<T[P], AggregateEnquiry[P]>
  }




  export type enquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enquiryWhereInput
    orderBy?: enquiryOrderByWithAggregationInput | enquiryOrderByWithAggregationInput[]
    by: EnquiryScalarFieldEnum[] | EnquiryScalarFieldEnum
    having?: enquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnquiryCountAggregateInputType | true
    _avg?: EnquiryAvgAggregateInputType
    _sum?: EnquirySumAggregateInputType
    _min?: EnquiryMinAggregateInputType
    _max?: EnquiryMaxAggregateInputType
  }

  export type EnquiryGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    subject: string
    message: string
    isRead: boolean
    createdAt: Date
    updatedAt: Date
    _count: EnquiryCountAggregateOutputType | null
    _avg: EnquiryAvgAggregateOutputType | null
    _sum: EnquirySumAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  type GetEnquiryGroupByPayload<T extends enquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
            : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
        }
      >
    >


  export type enquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["enquiry"]>



  export type enquirySelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type enquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "subject" | "message" | "isRead" | "createdAt" | "updatedAt", ExtArgs["result"]["enquiry"]>

  export type $enquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      subject: string
      message: string
      isRead: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["enquiry"]>
    composites: {}
  }

  type enquiryGetPayload<S extends boolean | null | undefined | enquiryDefaultArgs> = $Result.GetResult<Prisma.$enquiryPayload, S>

  type enquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnquiryCountAggregateInputType | true
    }

  export interface enquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enquiry'], meta: { name: 'enquiry' } }
    /**
     * Find zero or one Enquiry that matches the filter.
     * @param {enquiryFindUniqueArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enquiryFindUniqueArgs>(args: SelectSubset<T, enquiryFindUniqueArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enquiryFindUniqueOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, enquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enquiryFindFirstArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enquiryFindFirstArgs>(args?: SelectSubset<T, enquiryFindFirstArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enquiryFindFirstOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, enquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enquiries
     * const enquiries = await prisma.enquiry.findMany()
     * 
     * // Get first 10 Enquiries
     * const enquiries = await prisma.enquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends enquiryFindManyArgs>(args?: SelectSubset<T, enquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enquiry.
     * @param {enquiryCreateArgs} args - Arguments to create a Enquiry.
     * @example
     * // Create one Enquiry
     * const Enquiry = await prisma.enquiry.create({
     *   data: {
     *     // ... data to create a Enquiry
     *   }
     * })
     * 
     */
    create<T extends enquiryCreateArgs>(args: SelectSubset<T, enquiryCreateArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enquiries.
     * @param {enquiryCreateManyArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enquiryCreateManyArgs>(args?: SelectSubset<T, enquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enquiry.
     * @param {enquiryDeleteArgs} args - Arguments to delete one Enquiry.
     * @example
     * // Delete one Enquiry
     * const Enquiry = await prisma.enquiry.delete({
     *   where: {
     *     // ... filter to delete one Enquiry
     *   }
     * })
     * 
     */
    delete<T extends enquiryDeleteArgs>(args: SelectSubset<T, enquiryDeleteArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enquiry.
     * @param {enquiryUpdateArgs} args - Arguments to update one Enquiry.
     * @example
     * // Update one Enquiry
     * const enquiry = await prisma.enquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enquiryUpdateArgs>(args: SelectSubset<T, enquiryUpdateArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enquiries.
     * @param {enquiryDeleteManyArgs} args - Arguments to filter Enquiries to delete.
     * @example
     * // Delete a few Enquiries
     * const { count } = await prisma.enquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enquiryDeleteManyArgs>(args?: SelectSubset<T, enquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enquiryUpdateManyArgs>(args: SelectSubset<T, enquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enquiry.
     * @param {enquiryUpsertArgs} args - Arguments to update or create a Enquiry.
     * @example
     * // Update or create a Enquiry
     * const enquiry = await prisma.enquiry.upsert({
     *   create: {
     *     // ... data to create a Enquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enquiry we want to update
     *   }
     * })
     */
    upsert<T extends enquiryUpsertArgs>(args: SelectSubset<T, enquiryUpsertArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enquiryCountArgs} args - Arguments to filter Enquiries to count.
     * @example
     * // Count the number of Enquiries
     * const count = await prisma.enquiry.count({
     *   where: {
     *     // ... the filter for the Enquiries we want to count
     *   }
     * })
    **/
    count<T extends enquiryCountArgs>(
      args?: Subset<T, enquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnquiryAggregateArgs>(args: Subset<T, EnquiryAggregateArgs>): Prisma.PrismaPromise<GetEnquiryAggregateType<T>>

    /**
     * Group by Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enquiryGroupByArgs} args - Group by arguments.
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
      T extends enquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enquiryGroupByArgs['orderBy'] }
        : { orderBy?: enquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, enquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enquiry model
   */
  readonly fields: enquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the enquiry model
   */
  interface enquiryFieldRefs {
    readonly id: FieldRef<"enquiry", 'Int'>
    readonly name: FieldRef<"enquiry", 'String'>
    readonly email: FieldRef<"enquiry", 'String'>
    readonly phone: FieldRef<"enquiry", 'String'>
    readonly subject: FieldRef<"enquiry", 'String'>
    readonly message: FieldRef<"enquiry", 'String'>
    readonly isRead: FieldRef<"enquiry", 'Boolean'>
    readonly createdAt: FieldRef<"enquiry", 'DateTime'>
    readonly updatedAt: FieldRef<"enquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * enquiry findUnique
   */
  export type enquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * Filter, which enquiry to fetch.
     */
    where: enquiryWhereUniqueInput
  }

  /**
   * enquiry findUniqueOrThrow
   */
  export type enquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * Filter, which enquiry to fetch.
     */
    where: enquiryWhereUniqueInput
  }

  /**
   * enquiry findFirst
   */
  export type enquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * Filter, which enquiry to fetch.
     */
    where?: enquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enquiries to fetch.
     */
    orderBy?: enquiryOrderByWithRelationInput | enquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enquiries.
     */
    cursor?: enquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * enquiry findFirstOrThrow
   */
  export type enquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * Filter, which enquiry to fetch.
     */
    where?: enquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enquiries to fetch.
     */
    orderBy?: enquiryOrderByWithRelationInput | enquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enquiries.
     */
    cursor?: enquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * enquiry findMany
   */
  export type enquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * Filter, which enquiries to fetch.
     */
    where?: enquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enquiries to fetch.
     */
    orderBy?: enquiryOrderByWithRelationInput | enquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enquiries.
     */
    cursor?: enquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enquiries.
     */
    skip?: number
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * enquiry create
   */
  export type enquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * The data needed to create a enquiry.
     */
    data: XOR<enquiryCreateInput, enquiryUncheckedCreateInput>
  }

  /**
   * enquiry createMany
   */
  export type enquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enquiries.
     */
    data: enquiryCreateManyInput | enquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enquiry update
   */
  export type enquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * The data needed to update a enquiry.
     */
    data: XOR<enquiryUpdateInput, enquiryUncheckedUpdateInput>
    /**
     * Choose, which enquiry to update.
     */
    where: enquiryWhereUniqueInput
  }

  /**
   * enquiry updateMany
   */
  export type enquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enquiries.
     */
    data: XOR<enquiryUpdateManyMutationInput, enquiryUncheckedUpdateManyInput>
    /**
     * Filter which enquiries to update
     */
    where?: enquiryWhereInput
    /**
     * Limit how many enquiries to update.
     */
    limit?: number
  }

  /**
   * enquiry upsert
   */
  export type enquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * The filter to search for the enquiry to update in case it exists.
     */
    where: enquiryWhereUniqueInput
    /**
     * In case the enquiry found by the `where` argument doesn't exist, create a new enquiry with this data.
     */
    create: XOR<enquiryCreateInput, enquiryUncheckedCreateInput>
    /**
     * In case the enquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enquiryUpdateInput, enquiryUncheckedUpdateInput>
  }

  /**
   * enquiry delete
   */
  export type enquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * Filter which enquiry to delete.
     */
    where: enquiryWhereUniqueInput
  }

  /**
   * enquiry deleteMany
   */
  export type enquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enquiries to delete
     */
    where?: enquiryWhereInput
    /**
     * Limit how many enquiries to delete.
     */
    limit?: number
  }

  /**
   * enquiry without action
   */
  export type enquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
  }


  /**
   * Model lottery
   */

  export type AggregateLottery = {
    _count: LotteryCountAggregateOutputType | null
    _avg: LotteryAvgAggregateOutputType | null
    _sum: LotterySumAggregateOutputType | null
    _min: LotteryMinAggregateOutputType | null
    _max: LotteryMaxAggregateOutputType | null
  }

  export type LotteryAvgAggregateOutputType = {
    id: number | null
  }

  export type LotterySumAggregateOutputType = {
    id: number | null
  }

  export type LotteryMinAggregateOutputType = {
    id: number | null
    name: string | null
    result_time: string | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    result_date: string | null
  }

  export type LotteryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    result_time: string | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    result_date: string | null
  }

  export type LotteryCountAggregateOutputType = {
    id: number
    name: number
    result_time: number
    is_active: number
    createdAt: number
    updatedAt: number
    result_date: number
    _all: number
  }


  export type LotteryAvgAggregateInputType = {
    id?: true
  }

  export type LotterySumAggregateInputType = {
    id?: true
  }

  export type LotteryMinAggregateInputType = {
    id?: true
    name?: true
    result_time?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
    result_date?: true
  }

  export type LotteryMaxAggregateInputType = {
    id?: true
    name?: true
    result_time?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
    result_date?: true
  }

  export type LotteryCountAggregateInputType = {
    id?: true
    name?: true
    result_time?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
    result_date?: true
    _all?: true
  }

  export type LotteryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lottery to aggregate.
     */
    where?: lotteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lotteries to fetch.
     */
    orderBy?: lotteryOrderByWithRelationInput | lotteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lotteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lotteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lotteries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lotteries
    **/
    _count?: true | LotteryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LotteryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LotterySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LotteryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LotteryMaxAggregateInputType
  }

  export type GetLotteryAggregateType<T extends LotteryAggregateArgs> = {
        [P in keyof T & keyof AggregateLottery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLottery[P]>
      : GetScalarType<T[P], AggregateLottery[P]>
  }




  export type lotteryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lotteryWhereInput
    orderBy?: lotteryOrderByWithAggregationInput | lotteryOrderByWithAggregationInput[]
    by: LotteryScalarFieldEnum[] | LotteryScalarFieldEnum
    having?: lotteryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LotteryCountAggregateInputType | true
    _avg?: LotteryAvgAggregateInputType
    _sum?: LotterySumAggregateInputType
    _min?: LotteryMinAggregateInputType
    _max?: LotteryMaxAggregateInputType
  }

  export type LotteryGroupByOutputType = {
    id: number
    name: string
    result_time: string
    is_active: boolean
    createdAt: Date
    updatedAt: Date
    result_date: string
    _count: LotteryCountAggregateOutputType | null
    _avg: LotteryAvgAggregateOutputType | null
    _sum: LotterySumAggregateOutputType | null
    _min: LotteryMinAggregateOutputType | null
    _max: LotteryMaxAggregateOutputType | null
  }

  type GetLotteryGroupByPayload<T extends lotteryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LotteryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LotteryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LotteryGroupByOutputType[P]>
            : GetScalarType<T[P], LotteryGroupByOutputType[P]>
        }
      >
    >


  export type lotterySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    result_time?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    result_date?: boolean
    buyer?: boolean | lottery$buyerArgs<ExtArgs>
    ticket?: boolean | lottery$ticketArgs<ExtArgs>
    winner?: boolean | lottery$winnerArgs<ExtArgs>
    _count?: boolean | LotteryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lottery"]>



  export type lotterySelectScalar = {
    id?: boolean
    name?: boolean
    result_time?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    result_date?: boolean
  }

  export type lotteryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "result_time" | "is_active" | "createdAt" | "updatedAt" | "result_date", ExtArgs["result"]["lottery"]>
  export type lotteryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | lottery$buyerArgs<ExtArgs>
    ticket?: boolean | lottery$ticketArgs<ExtArgs>
    winner?: boolean | lottery$winnerArgs<ExtArgs>
    _count?: boolean | LotteryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $lotteryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lottery"
    objects: {
      buyer: Prisma.$buyerPayload<ExtArgs>[]
      ticket: Prisma.$ticketPayload<ExtArgs>[]
      winner: Prisma.$winnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      result_time: string
      is_active: boolean
      createdAt: Date
      updatedAt: Date
      result_date: string
    }, ExtArgs["result"]["lottery"]>
    composites: {}
  }

  type lotteryGetPayload<S extends boolean | null | undefined | lotteryDefaultArgs> = $Result.GetResult<Prisma.$lotteryPayload, S>

  type lotteryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lotteryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LotteryCountAggregateInputType | true
    }

  export interface lotteryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lottery'], meta: { name: 'lottery' } }
    /**
     * Find zero or one Lottery that matches the filter.
     * @param {lotteryFindUniqueArgs} args - Arguments to find a Lottery
     * @example
     * // Get one Lottery
     * const lottery = await prisma.lottery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lotteryFindUniqueArgs>(args: SelectSubset<T, lotteryFindUniqueArgs<ExtArgs>>): Prisma__lotteryClient<$Result.GetResult<Prisma.$lotteryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lottery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lotteryFindUniqueOrThrowArgs} args - Arguments to find a Lottery
     * @example
     * // Get one Lottery
     * const lottery = await prisma.lottery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lotteryFindUniqueOrThrowArgs>(args: SelectSubset<T, lotteryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lotteryClient<$Result.GetResult<Prisma.$lotteryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lottery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lotteryFindFirstArgs} args - Arguments to find a Lottery
     * @example
     * // Get one Lottery
     * const lottery = await prisma.lottery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lotteryFindFirstArgs>(args?: SelectSubset<T, lotteryFindFirstArgs<ExtArgs>>): Prisma__lotteryClient<$Result.GetResult<Prisma.$lotteryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lottery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lotteryFindFirstOrThrowArgs} args - Arguments to find a Lottery
     * @example
     * // Get one Lottery
     * const lottery = await prisma.lottery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lotteryFindFirstOrThrowArgs>(args?: SelectSubset<T, lotteryFindFirstOrThrowArgs<ExtArgs>>): Prisma__lotteryClient<$Result.GetResult<Prisma.$lotteryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lotteries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lotteryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lotteries
     * const lotteries = await prisma.lottery.findMany()
     * 
     * // Get first 10 Lotteries
     * const lotteries = await prisma.lottery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lotteryWithIdOnly = await prisma.lottery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lotteryFindManyArgs>(args?: SelectSubset<T, lotteryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lotteryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lottery.
     * @param {lotteryCreateArgs} args - Arguments to create a Lottery.
     * @example
     * // Create one Lottery
     * const Lottery = await prisma.lottery.create({
     *   data: {
     *     // ... data to create a Lottery
     *   }
     * })
     * 
     */
    create<T extends lotteryCreateArgs>(args: SelectSubset<T, lotteryCreateArgs<ExtArgs>>): Prisma__lotteryClient<$Result.GetResult<Prisma.$lotteryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lotteries.
     * @param {lotteryCreateManyArgs} args - Arguments to create many Lotteries.
     * @example
     * // Create many Lotteries
     * const lottery = await prisma.lottery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lotteryCreateManyArgs>(args?: SelectSubset<T, lotteryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lottery.
     * @param {lotteryDeleteArgs} args - Arguments to delete one Lottery.
     * @example
     * // Delete one Lottery
     * const Lottery = await prisma.lottery.delete({
     *   where: {
     *     // ... filter to delete one Lottery
     *   }
     * })
     * 
     */
    delete<T extends lotteryDeleteArgs>(args: SelectSubset<T, lotteryDeleteArgs<ExtArgs>>): Prisma__lotteryClient<$Result.GetResult<Prisma.$lotteryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lottery.
     * @param {lotteryUpdateArgs} args - Arguments to update one Lottery.
     * @example
     * // Update one Lottery
     * const lottery = await prisma.lottery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lotteryUpdateArgs>(args: SelectSubset<T, lotteryUpdateArgs<ExtArgs>>): Prisma__lotteryClient<$Result.GetResult<Prisma.$lotteryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lotteries.
     * @param {lotteryDeleteManyArgs} args - Arguments to filter Lotteries to delete.
     * @example
     * // Delete a few Lotteries
     * const { count } = await prisma.lottery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lotteryDeleteManyArgs>(args?: SelectSubset<T, lotteryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lotteries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lotteryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lotteries
     * const lottery = await prisma.lottery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lotteryUpdateManyArgs>(args: SelectSubset<T, lotteryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lottery.
     * @param {lotteryUpsertArgs} args - Arguments to update or create a Lottery.
     * @example
     * // Update or create a Lottery
     * const lottery = await prisma.lottery.upsert({
     *   create: {
     *     // ... data to create a Lottery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lottery we want to update
     *   }
     * })
     */
    upsert<T extends lotteryUpsertArgs>(args: SelectSubset<T, lotteryUpsertArgs<ExtArgs>>): Prisma__lotteryClient<$Result.GetResult<Prisma.$lotteryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lotteries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lotteryCountArgs} args - Arguments to filter Lotteries to count.
     * @example
     * // Count the number of Lotteries
     * const count = await prisma.lottery.count({
     *   where: {
     *     // ... the filter for the Lotteries we want to count
     *   }
     * })
    **/
    count<T extends lotteryCountArgs>(
      args?: Subset<T, lotteryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LotteryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lottery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LotteryAggregateArgs>(args: Subset<T, LotteryAggregateArgs>): Prisma.PrismaPromise<GetLotteryAggregateType<T>>

    /**
     * Group by Lottery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lotteryGroupByArgs} args - Group by arguments.
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
      T extends lotteryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lotteryGroupByArgs['orderBy'] }
        : { orderBy?: lotteryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lotteryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLotteryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lottery model
   */
  readonly fields: lotteryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lottery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lotteryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyer<T extends lottery$buyerArgs<ExtArgs> = {}>(args?: Subset<T, lottery$buyerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticket<T extends lottery$ticketArgs<ExtArgs> = {}>(args?: Subset<T, lottery$ticketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    winner<T extends lottery$winnerArgs<ExtArgs> = {}>(args?: Subset<T, lottery$winnerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the lottery model
   */
  interface lotteryFieldRefs {
    readonly id: FieldRef<"lottery", 'Int'>
    readonly name: FieldRef<"lottery", 'String'>
    readonly result_time: FieldRef<"lottery", 'String'>
    readonly is_active: FieldRef<"lottery", 'Boolean'>
    readonly createdAt: FieldRef<"lottery", 'DateTime'>
    readonly updatedAt: FieldRef<"lottery", 'DateTime'>
    readonly result_date: FieldRef<"lottery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * lottery findUnique
   */
  export type lotteryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery
     */
    select?: lotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lottery
     */
    omit?: lotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotteryInclude<ExtArgs> | null
    /**
     * Filter, which lottery to fetch.
     */
    where: lotteryWhereUniqueInput
  }

  /**
   * lottery findUniqueOrThrow
   */
  export type lotteryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery
     */
    select?: lotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lottery
     */
    omit?: lotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotteryInclude<ExtArgs> | null
    /**
     * Filter, which lottery to fetch.
     */
    where: lotteryWhereUniqueInput
  }

  /**
   * lottery findFirst
   */
  export type lotteryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery
     */
    select?: lotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lottery
     */
    omit?: lotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotteryInclude<ExtArgs> | null
    /**
     * Filter, which lottery to fetch.
     */
    where?: lotteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lotteries to fetch.
     */
    orderBy?: lotteryOrderByWithRelationInput | lotteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lotteries.
     */
    cursor?: lotteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lotteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lotteries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lotteries.
     */
    distinct?: LotteryScalarFieldEnum | LotteryScalarFieldEnum[]
  }

  /**
   * lottery findFirstOrThrow
   */
  export type lotteryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery
     */
    select?: lotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lottery
     */
    omit?: lotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotteryInclude<ExtArgs> | null
    /**
     * Filter, which lottery to fetch.
     */
    where?: lotteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lotteries to fetch.
     */
    orderBy?: lotteryOrderByWithRelationInput | lotteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lotteries.
     */
    cursor?: lotteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lotteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lotteries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lotteries.
     */
    distinct?: LotteryScalarFieldEnum | LotteryScalarFieldEnum[]
  }

  /**
   * lottery findMany
   */
  export type lotteryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery
     */
    select?: lotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lottery
     */
    omit?: lotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotteryInclude<ExtArgs> | null
    /**
     * Filter, which lotteries to fetch.
     */
    where?: lotteryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lotteries to fetch.
     */
    orderBy?: lotteryOrderByWithRelationInput | lotteryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lotteries.
     */
    cursor?: lotteryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lotteries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lotteries.
     */
    skip?: number
    distinct?: LotteryScalarFieldEnum | LotteryScalarFieldEnum[]
  }

  /**
   * lottery create
   */
  export type lotteryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery
     */
    select?: lotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lottery
     */
    omit?: lotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotteryInclude<ExtArgs> | null
    /**
     * The data needed to create a lottery.
     */
    data: XOR<lotteryCreateInput, lotteryUncheckedCreateInput>
  }

  /**
   * lottery createMany
   */
  export type lotteryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lotteries.
     */
    data: lotteryCreateManyInput | lotteryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lottery update
   */
  export type lotteryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery
     */
    select?: lotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lottery
     */
    omit?: lotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotteryInclude<ExtArgs> | null
    /**
     * The data needed to update a lottery.
     */
    data: XOR<lotteryUpdateInput, lotteryUncheckedUpdateInput>
    /**
     * Choose, which lottery to update.
     */
    where: lotteryWhereUniqueInput
  }

  /**
   * lottery updateMany
   */
  export type lotteryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lotteries.
     */
    data: XOR<lotteryUpdateManyMutationInput, lotteryUncheckedUpdateManyInput>
    /**
     * Filter which lotteries to update
     */
    where?: lotteryWhereInput
    /**
     * Limit how many lotteries to update.
     */
    limit?: number
  }

  /**
   * lottery upsert
   */
  export type lotteryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery
     */
    select?: lotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lottery
     */
    omit?: lotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotteryInclude<ExtArgs> | null
    /**
     * The filter to search for the lottery to update in case it exists.
     */
    where: lotteryWhereUniqueInput
    /**
     * In case the lottery found by the `where` argument doesn't exist, create a new lottery with this data.
     */
    create: XOR<lotteryCreateInput, lotteryUncheckedCreateInput>
    /**
     * In case the lottery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lotteryUpdateInput, lotteryUncheckedUpdateInput>
  }

  /**
   * lottery delete
   */
  export type lotteryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery
     */
    select?: lotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lottery
     */
    omit?: lotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotteryInclude<ExtArgs> | null
    /**
     * Filter which lottery to delete.
     */
    where: lotteryWhereUniqueInput
  }

  /**
   * lottery deleteMany
   */
  export type lotteryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lotteries to delete
     */
    where?: lotteryWhereInput
    /**
     * Limit how many lotteries to delete.
     */
    limit?: number
  }

  /**
   * lottery.buyer
   */
  export type lottery$buyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buyerInclude<ExtArgs> | null
    where?: buyerWhereInput
    orderBy?: buyerOrderByWithRelationInput | buyerOrderByWithRelationInput[]
    cursor?: buyerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }

  /**
   * lottery.ticket
   */
  export type lottery$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    cursor?: ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * lottery.winner
   */
  export type lottery$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the winner
     */
    omit?: winnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: winnerInclude<ExtArgs> | null
    where?: winnerWhereInput
    orderBy?: winnerOrderByWithRelationInput | winnerOrderByWithRelationInput[]
    cursor?: winnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * lottery without action
   */
  export type lotteryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery
     */
    select?: lotterySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lottery
     */
    omit?: lotteryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lotteryInclude<ExtArgs> | null
  }


  /**
   * Model ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    lottery_id: number | null
    ticket_package_id: number | null
    buyer_id: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    lottery_id: number | null
    ticket_package_id: number | null
    buyer_id: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    lottery_id: number | null
    ticket_package_id: number | null
    ticket_number: string | null
    createdAt: Date | null
    updatedAt: Date | null
    transaction_id: string | null
    buyer_id: number | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    lottery_id: number | null
    ticket_package_id: number | null
    ticket_number: string | null
    createdAt: Date | null
    updatedAt: Date | null
    transaction_id: string | null
    buyer_id: number | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    lottery_id: number
    ticket_package_id: number
    ticket_number: number
    createdAt: number
    updatedAt: number
    transaction_id: number
    buyer_id: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    lottery_id?: true
    ticket_package_id?: true
    buyer_id?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    lottery_id?: true
    ticket_package_id?: true
    buyer_id?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    lottery_id?: true
    ticket_package_id?: true
    ticket_number?: true
    createdAt?: true
    updatedAt?: true
    transaction_id?: true
    buyer_id?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    lottery_id?: true
    ticket_package_id?: true
    ticket_number?: true
    createdAt?: true
    updatedAt?: true
    transaction_id?: true
    buyer_id?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    lottery_id?: true
    ticket_package_id?: true
    ticket_number?: true
    createdAt?: true
    updatedAt?: true
    transaction_id?: true
    buyer_id?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket to aggregate.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type ticketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithAggregationInput | ticketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: ticketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    lottery_id: number
    ticket_package_id: number
    ticket_number: string
    createdAt: Date
    updatedAt: Date
    transaction_id: string
    buyer_id: number
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends ticketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type ticketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lottery_id?: boolean
    ticket_package_id?: boolean
    ticket_number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaction_id?: boolean
    buyer_id?: boolean
    buyer?: boolean | buyerDefaultArgs<ExtArgs>
    lottery?: boolean | lotteryDefaultArgs<ExtArgs>
    ticketpackage?: boolean | ticketpackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>



  export type ticketSelectScalar = {
    id?: boolean
    lottery_id?: boolean
    ticket_package_id?: boolean
    ticket_number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaction_id?: boolean
    buyer_id?: boolean
  }

  export type ticketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lottery_id" | "ticket_package_id" | "ticket_number" | "createdAt" | "updatedAt" | "transaction_id" | "buyer_id", ExtArgs["result"]["ticket"]>
  export type ticketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | buyerDefaultArgs<ExtArgs>
    lottery?: boolean | lotteryDefaultArgs<ExtArgs>
    ticketpackage?: boolean | ticketpackageDefaultArgs<ExtArgs>
  }

  export type $ticketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket"
    objects: {
      buyer: Prisma.$buyerPayload<ExtArgs>
      lottery: Prisma.$lotteryPayload<ExtArgs>
      ticketpackage: Prisma.$ticketpackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lottery_id: number
      ticket_package_id: number
      ticket_number: string
      createdAt: Date
      updatedAt: Date
      transaction_id: string
      buyer_id: number
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type ticketGetPayload<S extends boolean | null | undefined | ticketDefaultArgs> = $Result.GetResult<Prisma.$ticketPayload, S>

  type ticketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ticketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface ticketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket'], meta: { name: 'ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {ticketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticketFindUniqueArgs>(args: SelectSubset<T, ticketFindUniqueArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticketFindUniqueOrThrowArgs>(args: SelectSubset<T, ticketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticketFindFirstArgs>(args?: SelectSubset<T, ticketFindFirstArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticketFindFirstOrThrowArgs>(args?: SelectSubset<T, ticketFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ticketFindManyArgs>(args?: SelectSubset<T, ticketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {ticketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends ticketCreateArgs>(args: SelectSubset<T, ticketCreateArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {ticketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticketCreateManyArgs>(args?: SelectSubset<T, ticketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {ticketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends ticketDeleteArgs>(args: SelectSubset<T, ticketDeleteArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {ticketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticketUpdateArgs>(args: SelectSubset<T, ticketUpdateArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {ticketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticketDeleteManyArgs>(args?: SelectSubset<T, ticketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticketUpdateManyArgs>(args: SelectSubset<T, ticketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {ticketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends ticketUpsertArgs>(args: SelectSubset<T, ticketUpsertArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends ticketCountArgs>(
      args?: Subset<T, ticketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketGroupByArgs} args - Group by arguments.
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
      T extends ticketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketGroupByArgs['orderBy'] }
        : { orderBy?: ticketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ticketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket model
   */
  readonly fields: ticketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyer<T extends buyerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, buyerDefaultArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lottery<T extends lotteryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lotteryDefaultArgs<ExtArgs>>): Prisma__lotteryClient<$Result.GetResult<Prisma.$lotteryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticketpackage<T extends ticketpackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ticketpackageDefaultArgs<ExtArgs>>): Prisma__ticketpackageClient<$Result.GetResult<Prisma.$ticketpackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ticket model
   */
  interface ticketFieldRefs {
    readonly id: FieldRef<"ticket", 'Int'>
    readonly lottery_id: FieldRef<"ticket", 'Int'>
    readonly ticket_package_id: FieldRef<"ticket", 'Int'>
    readonly ticket_number: FieldRef<"ticket", 'String'>
    readonly createdAt: FieldRef<"ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"ticket", 'DateTime'>
    readonly transaction_id: FieldRef<"ticket", 'String'>
    readonly buyer_id: FieldRef<"ticket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ticket findUnique
   */
  export type ticketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket findUniqueOrThrow
   */
  export type ticketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket findFirst
   */
  export type ticketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket findFirstOrThrow
   */
  export type ticketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket findMany
   */
  export type ticketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket create
   */
  export type ticketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket.
     */
    data: XOR<ticketCreateInput, ticketUncheckedCreateInput>
  }

  /**
   * ticket createMany
   */
  export type ticketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketCreateManyInput | ticketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket update
   */
  export type ticketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket.
     */
    data: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>
    /**
     * Choose, which ticket to update.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket updateMany
   */
  export type ticketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
  }

  /**
   * ticket upsert
   */
  export type ticketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket to update in case it exists.
     */
    where: ticketWhereUniqueInput
    /**
     * In case the ticket found by the `where` argument doesn't exist, create a new ticket with this data.
     */
    create: XOR<ticketCreateInput, ticketUncheckedCreateInput>
    /**
     * In case the ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>
  }

  /**
   * ticket delete
   */
  export type ticketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter which ticket to delete.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket deleteMany
   */
  export type ticketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketWhereInput
    /**
     * Limit how many tickets to delete.
     */
    limit?: number
  }

  /**
   * ticket without action
   */
  export type ticketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
  }


  /**
   * Model ticketpackage
   */

  export type AggregateTicketpackage = {
    _count: TicketpackageCountAggregateOutputType | null
    _avg: TicketpackageAvgAggregateOutputType | null
    _sum: TicketpackageSumAggregateOutputType | null
    _min: TicketpackageMinAggregateOutputType | null
    _max: TicketpackageMaxAggregateOutputType | null
  }

  export type TicketpackageAvgAggregateOutputType = {
    id: number | null
    number_of_tickets: number | null
    paid_tickets: number | null
    free_tickets: number | null
    price: number | null
  }

  export type TicketpackageSumAggregateOutputType = {
    id: number | null
    number_of_tickets: number | null
    paid_tickets: number | null
    free_tickets: number | null
    price: number | null
  }

  export type TicketpackageMinAggregateOutputType = {
    id: number | null
    name: string | null
    number_of_tickets: number | null
    paid_tickets: number | null
    free_tickets: number | null
    price: number | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketpackageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    number_of_tickets: number | null
    paid_tickets: number | null
    free_tickets: number | null
    price: number | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketpackageCountAggregateOutputType = {
    id: number
    name: number
    number_of_tickets: number
    paid_tickets: number
    free_tickets: number
    price: number
    is_active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketpackageAvgAggregateInputType = {
    id?: true
    number_of_tickets?: true
    paid_tickets?: true
    free_tickets?: true
    price?: true
  }

  export type TicketpackageSumAggregateInputType = {
    id?: true
    number_of_tickets?: true
    paid_tickets?: true
    free_tickets?: true
    price?: true
  }

  export type TicketpackageMinAggregateInputType = {
    id?: true
    name?: true
    number_of_tickets?: true
    paid_tickets?: true
    free_tickets?: true
    price?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketpackageMaxAggregateInputType = {
    id?: true
    name?: true
    number_of_tickets?: true
    paid_tickets?: true
    free_tickets?: true
    price?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketpackageCountAggregateInputType = {
    id?: true
    name?: true
    number_of_tickets?: true
    paid_tickets?: true
    free_tickets?: true
    price?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketpackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticketpackage to aggregate.
     */
    where?: ticketpackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticketpackages to fetch.
     */
    orderBy?: ticketpackageOrderByWithRelationInput | ticketpackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticketpackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticketpackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticketpackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ticketpackages
    **/
    _count?: true | TicketpackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketpackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketpackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketpackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketpackageMaxAggregateInputType
  }

  export type GetTicketpackageAggregateType<T extends TicketpackageAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketpackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketpackage[P]>
      : GetScalarType<T[P], AggregateTicketpackage[P]>
  }




  export type ticketpackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketpackageWhereInput
    orderBy?: ticketpackageOrderByWithAggregationInput | ticketpackageOrderByWithAggregationInput[]
    by: TicketpackageScalarFieldEnum[] | TicketpackageScalarFieldEnum
    having?: ticketpackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketpackageCountAggregateInputType | true
    _avg?: TicketpackageAvgAggregateInputType
    _sum?: TicketpackageSumAggregateInputType
    _min?: TicketpackageMinAggregateInputType
    _max?: TicketpackageMaxAggregateInputType
  }

  export type TicketpackageGroupByOutputType = {
    id: number
    name: string
    number_of_tickets: number
    paid_tickets: number
    free_tickets: number | null
    price: number
    is_active: boolean
    createdAt: Date
    updatedAt: Date
    _count: TicketpackageCountAggregateOutputType | null
    _avg: TicketpackageAvgAggregateOutputType | null
    _sum: TicketpackageSumAggregateOutputType | null
    _min: TicketpackageMinAggregateOutputType | null
    _max: TicketpackageMaxAggregateOutputType | null
  }

  type GetTicketpackageGroupByPayload<T extends ticketpackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketpackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketpackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketpackageGroupByOutputType[P]>
            : GetScalarType<T[P], TicketpackageGroupByOutputType[P]>
        }
      >
    >


  export type ticketpackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number_of_tickets?: boolean
    paid_tickets?: boolean
    free_tickets?: boolean
    price?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buyer?: boolean | ticketpackage$buyerArgs<ExtArgs>
    ticket?: boolean | ticketpackage$ticketArgs<ExtArgs>
    _count?: boolean | TicketpackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketpackage"]>



  export type ticketpackageSelectScalar = {
    id?: boolean
    name?: boolean
    number_of_tickets?: boolean
    paid_tickets?: boolean
    free_tickets?: boolean
    price?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ticketpackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "number_of_tickets" | "paid_tickets" | "free_tickets" | "price" | "is_active" | "createdAt" | "updatedAt", ExtArgs["result"]["ticketpackage"]>
  export type ticketpackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | ticketpackage$buyerArgs<ExtArgs>
    ticket?: boolean | ticketpackage$ticketArgs<ExtArgs>
    _count?: boolean | TicketpackageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ticketpackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticketpackage"
    objects: {
      buyer: Prisma.$buyerPayload<ExtArgs>[]
      ticket: Prisma.$ticketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      number_of_tickets: number
      paid_tickets: number
      free_tickets: number | null
      price: number
      is_active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticketpackage"]>
    composites: {}
  }

  type ticketpackageGetPayload<S extends boolean | null | undefined | ticketpackageDefaultArgs> = $Result.GetResult<Prisma.$ticketpackagePayload, S>

  type ticketpackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ticketpackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketpackageCountAggregateInputType | true
    }

  export interface ticketpackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticketpackage'], meta: { name: 'ticketpackage' } }
    /**
     * Find zero or one Ticketpackage that matches the filter.
     * @param {ticketpackageFindUniqueArgs} args - Arguments to find a Ticketpackage
     * @example
     * // Get one Ticketpackage
     * const ticketpackage = await prisma.ticketpackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticketpackageFindUniqueArgs>(args: SelectSubset<T, ticketpackageFindUniqueArgs<ExtArgs>>): Prisma__ticketpackageClient<$Result.GetResult<Prisma.$ticketpackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticketpackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticketpackageFindUniqueOrThrowArgs} args - Arguments to find a Ticketpackage
     * @example
     * // Get one Ticketpackage
     * const ticketpackage = await prisma.ticketpackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticketpackageFindUniqueOrThrowArgs>(args: SelectSubset<T, ticketpackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticketpackageClient<$Result.GetResult<Prisma.$ticketpackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticketpackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketpackageFindFirstArgs} args - Arguments to find a Ticketpackage
     * @example
     * // Get one Ticketpackage
     * const ticketpackage = await prisma.ticketpackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticketpackageFindFirstArgs>(args?: SelectSubset<T, ticketpackageFindFirstArgs<ExtArgs>>): Prisma__ticketpackageClient<$Result.GetResult<Prisma.$ticketpackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticketpackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketpackageFindFirstOrThrowArgs} args - Arguments to find a Ticketpackage
     * @example
     * // Get one Ticketpackage
     * const ticketpackage = await prisma.ticketpackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticketpackageFindFirstOrThrowArgs>(args?: SelectSubset<T, ticketpackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticketpackageClient<$Result.GetResult<Prisma.$ticketpackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ticketpackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketpackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ticketpackages
     * const ticketpackages = await prisma.ticketpackage.findMany()
     * 
     * // Get first 10 Ticketpackages
     * const ticketpackages = await prisma.ticketpackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketpackageWithIdOnly = await prisma.ticketpackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ticketpackageFindManyArgs>(args?: SelectSubset<T, ticketpackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketpackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticketpackage.
     * @param {ticketpackageCreateArgs} args - Arguments to create a Ticketpackage.
     * @example
     * // Create one Ticketpackage
     * const Ticketpackage = await prisma.ticketpackage.create({
     *   data: {
     *     // ... data to create a Ticketpackage
     *   }
     * })
     * 
     */
    create<T extends ticketpackageCreateArgs>(args: SelectSubset<T, ticketpackageCreateArgs<ExtArgs>>): Prisma__ticketpackageClient<$Result.GetResult<Prisma.$ticketpackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ticketpackages.
     * @param {ticketpackageCreateManyArgs} args - Arguments to create many Ticketpackages.
     * @example
     * // Create many Ticketpackages
     * const ticketpackage = await prisma.ticketpackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticketpackageCreateManyArgs>(args?: SelectSubset<T, ticketpackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticketpackage.
     * @param {ticketpackageDeleteArgs} args - Arguments to delete one Ticketpackage.
     * @example
     * // Delete one Ticketpackage
     * const Ticketpackage = await prisma.ticketpackage.delete({
     *   where: {
     *     // ... filter to delete one Ticketpackage
     *   }
     * })
     * 
     */
    delete<T extends ticketpackageDeleteArgs>(args: SelectSubset<T, ticketpackageDeleteArgs<ExtArgs>>): Prisma__ticketpackageClient<$Result.GetResult<Prisma.$ticketpackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticketpackage.
     * @param {ticketpackageUpdateArgs} args - Arguments to update one Ticketpackage.
     * @example
     * // Update one Ticketpackage
     * const ticketpackage = await prisma.ticketpackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticketpackageUpdateArgs>(args: SelectSubset<T, ticketpackageUpdateArgs<ExtArgs>>): Prisma__ticketpackageClient<$Result.GetResult<Prisma.$ticketpackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ticketpackages.
     * @param {ticketpackageDeleteManyArgs} args - Arguments to filter Ticketpackages to delete.
     * @example
     * // Delete a few Ticketpackages
     * const { count } = await prisma.ticketpackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticketpackageDeleteManyArgs>(args?: SelectSubset<T, ticketpackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ticketpackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketpackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ticketpackages
     * const ticketpackage = await prisma.ticketpackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticketpackageUpdateManyArgs>(args: SelectSubset<T, ticketpackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticketpackage.
     * @param {ticketpackageUpsertArgs} args - Arguments to update or create a Ticketpackage.
     * @example
     * // Update or create a Ticketpackage
     * const ticketpackage = await prisma.ticketpackage.upsert({
     *   create: {
     *     // ... data to create a Ticketpackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticketpackage we want to update
     *   }
     * })
     */
    upsert<T extends ticketpackageUpsertArgs>(args: SelectSubset<T, ticketpackageUpsertArgs<ExtArgs>>): Prisma__ticketpackageClient<$Result.GetResult<Prisma.$ticketpackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ticketpackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketpackageCountArgs} args - Arguments to filter Ticketpackages to count.
     * @example
     * // Count the number of Ticketpackages
     * const count = await prisma.ticketpackage.count({
     *   where: {
     *     // ... the filter for the Ticketpackages we want to count
     *   }
     * })
    **/
    count<T extends ticketpackageCountArgs>(
      args?: Subset<T, ticketpackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketpackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticketpackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketpackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketpackageAggregateArgs>(args: Subset<T, TicketpackageAggregateArgs>): Prisma.PrismaPromise<GetTicketpackageAggregateType<T>>

    /**
     * Group by Ticketpackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketpackageGroupByArgs} args - Group by arguments.
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
      T extends ticketpackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketpackageGroupByArgs['orderBy'] }
        : { orderBy?: ticketpackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ticketpackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketpackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticketpackage model
   */
  readonly fields: ticketpackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticketpackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketpackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyer<T extends ticketpackage$buyerArgs<ExtArgs> = {}>(args?: Subset<T, ticketpackage$buyerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticket<T extends ticketpackage$ticketArgs<ExtArgs> = {}>(args?: Subset<T, ticketpackage$ticketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ticketpackage model
   */
  interface ticketpackageFieldRefs {
    readonly id: FieldRef<"ticketpackage", 'Int'>
    readonly name: FieldRef<"ticketpackage", 'String'>
    readonly number_of_tickets: FieldRef<"ticketpackage", 'Int'>
    readonly paid_tickets: FieldRef<"ticketpackage", 'Int'>
    readonly free_tickets: FieldRef<"ticketpackage", 'Int'>
    readonly price: FieldRef<"ticketpackage", 'Float'>
    readonly is_active: FieldRef<"ticketpackage", 'Boolean'>
    readonly createdAt: FieldRef<"ticketpackage", 'DateTime'>
    readonly updatedAt: FieldRef<"ticketpackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ticketpackage findUnique
   */
  export type ticketpackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticketpackage
     */
    select?: ticketpackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticketpackage
     */
    omit?: ticketpackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketpackageInclude<ExtArgs> | null
    /**
     * Filter, which ticketpackage to fetch.
     */
    where: ticketpackageWhereUniqueInput
  }

  /**
   * ticketpackage findUniqueOrThrow
   */
  export type ticketpackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticketpackage
     */
    select?: ticketpackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticketpackage
     */
    omit?: ticketpackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketpackageInclude<ExtArgs> | null
    /**
     * Filter, which ticketpackage to fetch.
     */
    where: ticketpackageWhereUniqueInput
  }

  /**
   * ticketpackage findFirst
   */
  export type ticketpackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticketpackage
     */
    select?: ticketpackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticketpackage
     */
    omit?: ticketpackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketpackageInclude<ExtArgs> | null
    /**
     * Filter, which ticketpackage to fetch.
     */
    where?: ticketpackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticketpackages to fetch.
     */
    orderBy?: ticketpackageOrderByWithRelationInput | ticketpackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticketpackages.
     */
    cursor?: ticketpackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticketpackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticketpackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticketpackages.
     */
    distinct?: TicketpackageScalarFieldEnum | TicketpackageScalarFieldEnum[]
  }

  /**
   * ticketpackage findFirstOrThrow
   */
  export type ticketpackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticketpackage
     */
    select?: ticketpackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticketpackage
     */
    omit?: ticketpackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketpackageInclude<ExtArgs> | null
    /**
     * Filter, which ticketpackage to fetch.
     */
    where?: ticketpackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticketpackages to fetch.
     */
    orderBy?: ticketpackageOrderByWithRelationInput | ticketpackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticketpackages.
     */
    cursor?: ticketpackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticketpackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticketpackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticketpackages.
     */
    distinct?: TicketpackageScalarFieldEnum | TicketpackageScalarFieldEnum[]
  }

  /**
   * ticketpackage findMany
   */
  export type ticketpackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticketpackage
     */
    select?: ticketpackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticketpackage
     */
    omit?: ticketpackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketpackageInclude<ExtArgs> | null
    /**
     * Filter, which ticketpackages to fetch.
     */
    where?: ticketpackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticketpackages to fetch.
     */
    orderBy?: ticketpackageOrderByWithRelationInput | ticketpackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ticketpackages.
     */
    cursor?: ticketpackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticketpackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticketpackages.
     */
    skip?: number
    distinct?: TicketpackageScalarFieldEnum | TicketpackageScalarFieldEnum[]
  }

  /**
   * ticketpackage create
   */
  export type ticketpackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticketpackage
     */
    select?: ticketpackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticketpackage
     */
    omit?: ticketpackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketpackageInclude<ExtArgs> | null
    /**
     * The data needed to create a ticketpackage.
     */
    data: XOR<ticketpackageCreateInput, ticketpackageUncheckedCreateInput>
  }

  /**
   * ticketpackage createMany
   */
  export type ticketpackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ticketpackages.
     */
    data: ticketpackageCreateManyInput | ticketpackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticketpackage update
   */
  export type ticketpackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticketpackage
     */
    select?: ticketpackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticketpackage
     */
    omit?: ticketpackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketpackageInclude<ExtArgs> | null
    /**
     * The data needed to update a ticketpackage.
     */
    data: XOR<ticketpackageUpdateInput, ticketpackageUncheckedUpdateInput>
    /**
     * Choose, which ticketpackage to update.
     */
    where: ticketpackageWhereUniqueInput
  }

  /**
   * ticketpackage updateMany
   */
  export type ticketpackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ticketpackages.
     */
    data: XOR<ticketpackageUpdateManyMutationInput, ticketpackageUncheckedUpdateManyInput>
    /**
     * Filter which ticketpackages to update
     */
    where?: ticketpackageWhereInput
    /**
     * Limit how many ticketpackages to update.
     */
    limit?: number
  }

  /**
   * ticketpackage upsert
   */
  export type ticketpackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticketpackage
     */
    select?: ticketpackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticketpackage
     */
    omit?: ticketpackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketpackageInclude<ExtArgs> | null
    /**
     * The filter to search for the ticketpackage to update in case it exists.
     */
    where: ticketpackageWhereUniqueInput
    /**
     * In case the ticketpackage found by the `where` argument doesn't exist, create a new ticketpackage with this data.
     */
    create: XOR<ticketpackageCreateInput, ticketpackageUncheckedCreateInput>
    /**
     * In case the ticketpackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketpackageUpdateInput, ticketpackageUncheckedUpdateInput>
  }

  /**
   * ticketpackage delete
   */
  export type ticketpackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticketpackage
     */
    select?: ticketpackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticketpackage
     */
    omit?: ticketpackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketpackageInclude<ExtArgs> | null
    /**
     * Filter which ticketpackage to delete.
     */
    where: ticketpackageWhereUniqueInput
  }

  /**
   * ticketpackage deleteMany
   */
  export type ticketpackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticketpackages to delete
     */
    where?: ticketpackageWhereInput
    /**
     * Limit how many ticketpackages to delete.
     */
    limit?: number
  }

  /**
   * ticketpackage.buyer
   */
  export type ticketpackage$buyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: buyerInclude<ExtArgs> | null
    where?: buyerWhereInput
    orderBy?: buyerOrderByWithRelationInput | buyerOrderByWithRelationInput[]
    cursor?: buyerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }

  /**
   * ticketpackage.ticket
   */
  export type ticketpackage$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    cursor?: ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticketpackage without action
   */
  export type ticketpackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticketpackage
     */
    select?: ticketpackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticketpackage
     */
    omit?: ticketpackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketpackageInclude<ExtArgs> | null
  }


  /**
   * Model QRCode
   */

  export type AggregateQRCode = {
    _count: QRCodeCountAggregateOutputType | null
    _avg: QRCodeAvgAggregateOutputType | null
    _sum: QRCodeSumAggregateOutputType | null
    _min: QRCodeMinAggregateOutputType | null
    _max: QRCodeMaxAggregateOutputType | null
  }

  export type QRCodeAvgAggregateOutputType = {
    id: number | null
  }

  export type QRCodeSumAggregateOutputType = {
    id: number | null
  }

  export type QRCodeMinAggregateOutputType = {
    id: number | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QRCodeMaxAggregateOutputType = {
    id: number | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QRCodeCountAggregateOutputType = {
    id: number
    phone: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QRCodeAvgAggregateInputType = {
    id?: true
  }

  export type QRCodeSumAggregateInputType = {
    id?: true
  }

  export type QRCodeMinAggregateInputType = {
    id?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QRCodeMaxAggregateInputType = {
    id?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QRCodeCountAggregateInputType = {
    id?: true
    phone?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QRCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRCode to aggregate.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QRCodes
    **/
    _count?: true | QRCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QRCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QRCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QRCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QRCodeMaxAggregateInputType
  }

  export type GetQRCodeAggregateType<T extends QRCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateQRCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQRCode[P]>
      : GetScalarType<T[P], AggregateQRCode[P]>
  }




  export type QRCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QRCodeWhereInput
    orderBy?: QRCodeOrderByWithAggregationInput | QRCodeOrderByWithAggregationInput[]
    by: QRCodeScalarFieldEnum[] | QRCodeScalarFieldEnum
    having?: QRCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QRCodeCountAggregateInputType | true
    _avg?: QRCodeAvgAggregateInputType
    _sum?: QRCodeSumAggregateInputType
    _min?: QRCodeMinAggregateInputType
    _max?: QRCodeMaxAggregateInputType
  }

  export type QRCodeGroupByOutputType = {
    id: number
    phone: string | null
    image: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: QRCodeCountAggregateOutputType | null
    _avg: QRCodeAvgAggregateOutputType | null
    _sum: QRCodeSumAggregateOutputType | null
    _min: QRCodeMinAggregateOutputType | null
    _max: QRCodeMaxAggregateOutputType | null
  }

  type GetQRCodeGroupByPayload<T extends QRCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QRCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QRCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QRCodeGroupByOutputType[P]>
            : GetScalarType<T[P], QRCodeGroupByOutputType[P]>
        }
      >
    >


  export type QRCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["qRCode"]>



  export type QRCodeSelectScalar = {
    id?: boolean
    phone?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QRCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["qRCode"]>

  export type $QRCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QRCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phone: string | null
      image: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["qRCode"]>
    composites: {}
  }

  type QRCodeGetPayload<S extends boolean | null | undefined | QRCodeDefaultArgs> = $Result.GetResult<Prisma.$QRCodePayload, S>

  type QRCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QRCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QRCodeCountAggregateInputType | true
    }

  export interface QRCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QRCode'], meta: { name: 'QRCode' } }
    /**
     * Find zero or one QRCode that matches the filter.
     * @param {QRCodeFindUniqueArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QRCodeFindUniqueArgs>(args: SelectSubset<T, QRCodeFindUniqueArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QRCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QRCodeFindUniqueOrThrowArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QRCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, QRCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QRCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindFirstArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QRCodeFindFirstArgs>(args?: SelectSubset<T, QRCodeFindFirstArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QRCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindFirstOrThrowArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QRCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, QRCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QRCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QRCodes
     * const qRCodes = await prisma.qRCode.findMany()
     * 
     * // Get first 10 QRCodes
     * const qRCodes = await prisma.qRCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qRCodeWithIdOnly = await prisma.qRCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QRCodeFindManyArgs>(args?: SelectSubset<T, QRCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QRCode.
     * @param {QRCodeCreateArgs} args - Arguments to create a QRCode.
     * @example
     * // Create one QRCode
     * const QRCode = await prisma.qRCode.create({
     *   data: {
     *     // ... data to create a QRCode
     *   }
     * })
     * 
     */
    create<T extends QRCodeCreateArgs>(args: SelectSubset<T, QRCodeCreateArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QRCodes.
     * @param {QRCodeCreateManyArgs} args - Arguments to create many QRCodes.
     * @example
     * // Create many QRCodes
     * const qRCode = await prisma.qRCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QRCodeCreateManyArgs>(args?: SelectSubset<T, QRCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QRCode.
     * @param {QRCodeDeleteArgs} args - Arguments to delete one QRCode.
     * @example
     * // Delete one QRCode
     * const QRCode = await prisma.qRCode.delete({
     *   where: {
     *     // ... filter to delete one QRCode
     *   }
     * })
     * 
     */
    delete<T extends QRCodeDeleteArgs>(args: SelectSubset<T, QRCodeDeleteArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QRCode.
     * @param {QRCodeUpdateArgs} args - Arguments to update one QRCode.
     * @example
     * // Update one QRCode
     * const qRCode = await prisma.qRCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QRCodeUpdateArgs>(args: SelectSubset<T, QRCodeUpdateArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QRCodes.
     * @param {QRCodeDeleteManyArgs} args - Arguments to filter QRCodes to delete.
     * @example
     * // Delete a few QRCodes
     * const { count } = await prisma.qRCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QRCodeDeleteManyArgs>(args?: SelectSubset<T, QRCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QRCodes
     * const qRCode = await prisma.qRCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QRCodeUpdateManyArgs>(args: SelectSubset<T, QRCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QRCode.
     * @param {QRCodeUpsertArgs} args - Arguments to update or create a QRCode.
     * @example
     * // Update or create a QRCode
     * const qRCode = await prisma.qRCode.upsert({
     *   create: {
     *     // ... data to create a QRCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QRCode we want to update
     *   }
     * })
     */
    upsert<T extends QRCodeUpsertArgs>(args: SelectSubset<T, QRCodeUpsertArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeCountArgs} args - Arguments to filter QRCodes to count.
     * @example
     * // Count the number of QRCodes
     * const count = await prisma.qRCode.count({
     *   where: {
     *     // ... the filter for the QRCodes we want to count
     *   }
     * })
    **/
    count<T extends QRCodeCountArgs>(
      args?: Subset<T, QRCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QRCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QRCodeAggregateArgs>(args: Subset<T, QRCodeAggregateArgs>): Prisma.PrismaPromise<GetQRCodeAggregateType<T>>

    /**
     * Group by QRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeGroupByArgs} args - Group by arguments.
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
      T extends QRCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QRCodeGroupByArgs['orderBy'] }
        : { orderBy?: QRCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QRCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQRCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QRCode model
   */
  readonly fields: QRCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QRCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QRCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the QRCode model
   */
  interface QRCodeFieldRefs {
    readonly id: FieldRef<"QRCode", 'Int'>
    readonly phone: FieldRef<"QRCode", 'String'>
    readonly image: FieldRef<"QRCode", 'Json'>
    readonly createdAt: FieldRef<"QRCode", 'DateTime'>
    readonly updatedAt: FieldRef<"QRCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QRCode findUnique
   */
  export type QRCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode findUniqueOrThrow
   */
  export type QRCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode findFirst
   */
  export type QRCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRCodes.
     */
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode findFirstOrThrow
   */
  export type QRCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRCodes.
     */
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode findMany
   */
  export type QRCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Filter, which QRCodes to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode create
   */
  export type QRCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a QRCode.
     */
    data: XOR<QRCodeCreateInput, QRCodeUncheckedCreateInput>
  }

  /**
   * QRCode createMany
   */
  export type QRCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QRCodes.
     */
    data: QRCodeCreateManyInput | QRCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QRCode update
   */
  export type QRCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a QRCode.
     */
    data: XOR<QRCodeUpdateInput, QRCodeUncheckedUpdateInput>
    /**
     * Choose, which QRCode to update.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode updateMany
   */
  export type QRCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QRCodes.
     */
    data: XOR<QRCodeUpdateManyMutationInput, QRCodeUncheckedUpdateManyInput>
    /**
     * Filter which QRCodes to update
     */
    where?: QRCodeWhereInput
    /**
     * Limit how many QRCodes to update.
     */
    limit?: number
  }

  /**
   * QRCode upsert
   */
  export type QRCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the QRCode to update in case it exists.
     */
    where: QRCodeWhereUniqueInput
    /**
     * In case the QRCode found by the `where` argument doesn't exist, create a new QRCode with this data.
     */
    create: XOR<QRCodeCreateInput, QRCodeUncheckedCreateInput>
    /**
     * In case the QRCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QRCodeUpdateInput, QRCodeUncheckedUpdateInput>
  }

  /**
   * QRCode delete
   */
  export type QRCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Filter which QRCode to delete.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode deleteMany
   */
  export type QRCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRCodes to delete
     */
    where?: QRCodeWhereInput
    /**
     * Limit how many QRCodes to delete.
     */
    limit?: number
  }

  /**
   * QRCode without action
   */
  export type QRCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
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


  export const WinnerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    state: 'state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ticket_number: 'ticket_number',
    prize_amount: 'prize_amount',
    winner_rank: 'winner_rank',
    lottery_id: 'lottery_id',
    claimed: 'claimed'
  };

  export type WinnerScalarFieldEnum = (typeof WinnerScalarFieldEnum)[keyof typeof WinnerScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const BuyerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    state: 'state',
    lottery_id: 'lottery_id',
    ticket_package_id: 'ticket_package_id',
    transaction_id: 'transaction_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    transaction_status: 'transaction_status',
    is_read: 'is_read'
  };

  export type BuyerScalarFieldEnum = (typeof BuyerScalarFieldEnum)[keyof typeof BuyerScalarFieldEnum]


  export const EnquiryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    subject: 'subject',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnquiryScalarFieldEnum = (typeof EnquiryScalarFieldEnum)[keyof typeof EnquiryScalarFieldEnum]


  export const LotteryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    result_time: 'result_time',
    is_active: 'is_active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    result_date: 'result_date'
  };

  export type LotteryScalarFieldEnum = (typeof LotteryScalarFieldEnum)[keyof typeof LotteryScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    lottery_id: 'lottery_id',
    ticket_package_id: 'ticket_package_id',
    ticket_number: 'ticket_number',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    transaction_id: 'transaction_id',
    buyer_id: 'buyer_id'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TicketpackageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    number_of_tickets: 'number_of_tickets',
    paid_tickets: 'paid_tickets',
    free_tickets: 'free_tickets',
    price: 'price',
    is_active: 'is_active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketpackageScalarFieldEnum = (typeof TicketpackageScalarFieldEnum)[keyof typeof TicketpackageScalarFieldEnum]


  export const QRCodeScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QRCodeScalarFieldEnum = (typeof QRCodeScalarFieldEnum)[keyof typeof QRCodeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const winnerOrderByRelevanceFieldEnum: {
    name: 'name',
    phone: 'phone',
    email: 'email',
    state: 'state',
    ticket_number: 'ticket_number',
    prize_amount: 'prize_amount',
    winner_rank: 'winner_rank'
  };

  export type winnerOrderByRelevanceFieldEnum = (typeof winnerOrderByRelevanceFieldEnum)[keyof typeof winnerOrderByRelevanceFieldEnum]


  export const adminOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type adminOrderByRelevanceFieldEnum = (typeof adminOrderByRelevanceFieldEnum)[keyof typeof adminOrderByRelevanceFieldEnum]


  export const buyerOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    state: 'state',
    transaction_id: 'transaction_id'
  };

  export type buyerOrderByRelevanceFieldEnum = (typeof buyerOrderByRelevanceFieldEnum)[keyof typeof buyerOrderByRelevanceFieldEnum]


  export const enquiryOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    subject: 'subject',
    message: 'message'
  };

  export type enquiryOrderByRelevanceFieldEnum = (typeof enquiryOrderByRelevanceFieldEnum)[keyof typeof enquiryOrderByRelevanceFieldEnum]


  export const lotteryOrderByRelevanceFieldEnum: {
    name: 'name',
    result_time: 'result_time',
    result_date: 'result_date'
  };

  export type lotteryOrderByRelevanceFieldEnum = (typeof lotteryOrderByRelevanceFieldEnum)[keyof typeof lotteryOrderByRelevanceFieldEnum]


  export const ticketOrderByRelevanceFieldEnum: {
    ticket_number: 'ticket_number',
    transaction_id: 'transaction_id'
  };

  export type ticketOrderByRelevanceFieldEnum = (typeof ticketOrderByRelevanceFieldEnum)[keyof typeof ticketOrderByRelevanceFieldEnum]


  export const ticketpackageOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ticketpackageOrderByRelevanceFieldEnum = (typeof ticketpackageOrderByRelevanceFieldEnum)[keyof typeof ticketpackageOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const QRCodeOrderByRelevanceFieldEnum: {
    phone: 'phone'
  };

  export type QRCodeOrderByRelevanceFieldEnum = (typeof QRCodeOrderByRelevanceFieldEnum)[keyof typeof QRCodeOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'admin_role'
   */
  export type Enumadmin_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'admin_role'>
    


  /**
   * Reference to a field of type 'buyer_transaction_status'
   */
  export type Enumbuyer_transaction_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'buyer_transaction_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type winnerWhereInput = {
    AND?: winnerWhereInput | winnerWhereInput[]
    OR?: winnerWhereInput[]
    NOT?: winnerWhereInput | winnerWhereInput[]
    id?: IntFilter<"winner"> | number
    name?: StringFilter<"winner"> | string
    phone?: StringFilter<"winner"> | string
    email?: StringFilter<"winner"> | string
    state?: StringFilter<"winner"> | string
    createdAt?: DateTimeFilter<"winner"> | Date | string
    updatedAt?: DateTimeFilter<"winner"> | Date | string
    ticket_number?: StringFilter<"winner"> | string
    prize_amount?: StringFilter<"winner"> | string
    winner_rank?: StringNullableFilter<"winner"> | string | null
    lottery_id?: IntFilter<"winner"> | number
    claimed?: BoolFilter<"winner"> | boolean
    lottery?: XOR<LotteryScalarRelationFilter, lotteryWhereInput>
  }

  export type winnerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticket_number?: SortOrder
    prize_amount?: SortOrder
    winner_rank?: SortOrderInput | SortOrder
    lottery_id?: SortOrder
    claimed?: SortOrder
    lottery?: lotteryOrderByWithRelationInput
    _relevance?: winnerOrderByRelevanceInput
  }

  export type winnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: winnerWhereInput | winnerWhereInput[]
    OR?: winnerWhereInput[]
    NOT?: winnerWhereInput | winnerWhereInput[]
    name?: StringFilter<"winner"> | string
    phone?: StringFilter<"winner"> | string
    email?: StringFilter<"winner"> | string
    state?: StringFilter<"winner"> | string
    createdAt?: DateTimeFilter<"winner"> | Date | string
    updatedAt?: DateTimeFilter<"winner"> | Date | string
    ticket_number?: StringFilter<"winner"> | string
    prize_amount?: StringFilter<"winner"> | string
    winner_rank?: StringNullableFilter<"winner"> | string | null
    lottery_id?: IntFilter<"winner"> | number
    claimed?: BoolFilter<"winner"> | boolean
    lottery?: XOR<LotteryScalarRelationFilter, lotteryWhereInput>
  }, "id">

  export type winnerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticket_number?: SortOrder
    prize_amount?: SortOrder
    winner_rank?: SortOrderInput | SortOrder
    lottery_id?: SortOrder
    claimed?: SortOrder
    _count?: winnerCountOrderByAggregateInput
    _avg?: winnerAvgOrderByAggregateInput
    _max?: winnerMaxOrderByAggregateInput
    _min?: winnerMinOrderByAggregateInput
    _sum?: winnerSumOrderByAggregateInput
  }

  export type winnerScalarWhereWithAggregatesInput = {
    AND?: winnerScalarWhereWithAggregatesInput | winnerScalarWhereWithAggregatesInput[]
    OR?: winnerScalarWhereWithAggregatesInput[]
    NOT?: winnerScalarWhereWithAggregatesInput | winnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"winner"> | number
    name?: StringWithAggregatesFilter<"winner"> | string
    phone?: StringWithAggregatesFilter<"winner"> | string
    email?: StringWithAggregatesFilter<"winner"> | string
    state?: StringWithAggregatesFilter<"winner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"winner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"winner"> | Date | string
    ticket_number?: StringWithAggregatesFilter<"winner"> | string
    prize_amount?: StringWithAggregatesFilter<"winner"> | string
    winner_rank?: StringNullableWithAggregatesFilter<"winner"> | string | null
    lottery_id?: IntWithAggregatesFilter<"winner"> | number
    claimed?: BoolWithAggregatesFilter<"winner"> | boolean
  }

  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    name?: StringFilter<"admin"> | string
    email?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    role?: Enumadmin_roleFilter<"admin"> | $Enums.admin_role
    createdAt?: DateTimeFilter<"admin"> | Date | string
    updatedAt?: DateTimeFilter<"admin"> | Date | string
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: adminOrderByRelevanceInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    name?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    role?: Enumadmin_roleFilter<"admin"> | $Enums.admin_role
    createdAt?: DateTimeFilter<"admin"> | Date | string
    updatedAt?: DateTimeFilter<"admin"> | Date | string
  }, "id" | "email">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    name?: StringWithAggregatesFilter<"admin"> | string
    email?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
    role?: Enumadmin_roleWithAggregatesFilter<"admin"> | $Enums.admin_role
    createdAt?: DateTimeWithAggregatesFilter<"admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"admin"> | Date | string
  }

  export type buyerWhereInput = {
    AND?: buyerWhereInput | buyerWhereInput[]
    OR?: buyerWhereInput[]
    NOT?: buyerWhereInput | buyerWhereInput[]
    id?: IntFilter<"buyer"> | number
    name?: StringFilter<"buyer"> | string
    email?: StringFilter<"buyer"> | string
    phone?: StringFilter<"buyer"> | string
    state?: StringFilter<"buyer"> | string
    lottery_id?: IntNullableFilter<"buyer"> | number | null
    ticket_package_id?: IntNullableFilter<"buyer"> | number | null
    transaction_id?: StringNullableFilter<"buyer"> | string | null
    createdAt?: DateTimeFilter<"buyer"> | Date | string
    updatedAt?: DateTimeFilter<"buyer"> | Date | string
    transaction_status?: Enumbuyer_transaction_statusFilter<"buyer"> | $Enums.buyer_transaction_status
    is_read?: BoolFilter<"buyer"> | boolean
    lottery?: XOR<LotteryNullableScalarRelationFilter, lotteryWhereInput> | null
    ticketpackage?: XOR<TicketpackageNullableScalarRelationFilter, ticketpackageWhereInput> | null
    ticket?: TicketListRelationFilter
  }

  export type buyerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    state?: SortOrder
    lottery_id?: SortOrderInput | SortOrder
    ticket_package_id?: SortOrderInput | SortOrder
    transaction_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaction_status?: SortOrder
    is_read?: SortOrder
    lottery?: lotteryOrderByWithRelationInput
    ticketpackage?: ticketpackageOrderByWithRelationInput
    ticket?: ticketOrderByRelationAggregateInput
    _relevance?: buyerOrderByRelevanceInput
  }

  export type buyerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    transaction_id?: string
    AND?: buyerWhereInput | buyerWhereInput[]
    OR?: buyerWhereInput[]
    NOT?: buyerWhereInput | buyerWhereInput[]
    name?: StringFilter<"buyer"> | string
    email?: StringFilter<"buyer"> | string
    phone?: StringFilter<"buyer"> | string
    state?: StringFilter<"buyer"> | string
    lottery_id?: IntNullableFilter<"buyer"> | number | null
    ticket_package_id?: IntNullableFilter<"buyer"> | number | null
    createdAt?: DateTimeFilter<"buyer"> | Date | string
    updatedAt?: DateTimeFilter<"buyer"> | Date | string
    transaction_status?: Enumbuyer_transaction_statusFilter<"buyer"> | $Enums.buyer_transaction_status
    is_read?: BoolFilter<"buyer"> | boolean
    lottery?: XOR<LotteryNullableScalarRelationFilter, lotteryWhereInput> | null
    ticketpackage?: XOR<TicketpackageNullableScalarRelationFilter, ticketpackageWhereInput> | null
    ticket?: TicketListRelationFilter
  }, "id" | "transaction_id">

  export type buyerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    state?: SortOrder
    lottery_id?: SortOrderInput | SortOrder
    ticket_package_id?: SortOrderInput | SortOrder
    transaction_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaction_status?: SortOrder
    is_read?: SortOrder
    _count?: buyerCountOrderByAggregateInput
    _avg?: buyerAvgOrderByAggregateInput
    _max?: buyerMaxOrderByAggregateInput
    _min?: buyerMinOrderByAggregateInput
    _sum?: buyerSumOrderByAggregateInput
  }

  export type buyerScalarWhereWithAggregatesInput = {
    AND?: buyerScalarWhereWithAggregatesInput | buyerScalarWhereWithAggregatesInput[]
    OR?: buyerScalarWhereWithAggregatesInput[]
    NOT?: buyerScalarWhereWithAggregatesInput | buyerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"buyer"> | number
    name?: StringWithAggregatesFilter<"buyer"> | string
    email?: StringWithAggregatesFilter<"buyer"> | string
    phone?: StringWithAggregatesFilter<"buyer"> | string
    state?: StringWithAggregatesFilter<"buyer"> | string
    lottery_id?: IntNullableWithAggregatesFilter<"buyer"> | number | null
    ticket_package_id?: IntNullableWithAggregatesFilter<"buyer"> | number | null
    transaction_id?: StringNullableWithAggregatesFilter<"buyer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"buyer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"buyer"> | Date | string
    transaction_status?: Enumbuyer_transaction_statusWithAggregatesFilter<"buyer"> | $Enums.buyer_transaction_status
    is_read?: BoolWithAggregatesFilter<"buyer"> | boolean
  }

  export type enquiryWhereInput = {
    AND?: enquiryWhereInput | enquiryWhereInput[]
    OR?: enquiryWhereInput[]
    NOT?: enquiryWhereInput | enquiryWhereInput[]
    id?: IntFilter<"enquiry"> | number
    name?: StringFilter<"enquiry"> | string
    email?: StringFilter<"enquiry"> | string
    phone?: StringFilter<"enquiry"> | string
    subject?: StringFilter<"enquiry"> | string
    message?: StringFilter<"enquiry"> | string
    isRead?: BoolFilter<"enquiry"> | boolean
    createdAt?: DateTimeFilter<"enquiry"> | Date | string
    updatedAt?: DateTimeFilter<"enquiry"> | Date | string
  }

  export type enquiryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: enquiryOrderByRelevanceInput
  }

  export type enquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: enquiryWhereInput | enquiryWhereInput[]
    OR?: enquiryWhereInput[]
    NOT?: enquiryWhereInput | enquiryWhereInput[]
    name?: StringFilter<"enquiry"> | string
    email?: StringFilter<"enquiry"> | string
    phone?: StringFilter<"enquiry"> | string
    subject?: StringFilter<"enquiry"> | string
    message?: StringFilter<"enquiry"> | string
    isRead?: BoolFilter<"enquiry"> | boolean
    createdAt?: DateTimeFilter<"enquiry"> | Date | string
    updatedAt?: DateTimeFilter<"enquiry"> | Date | string
  }, "id">

  export type enquiryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: enquiryCountOrderByAggregateInput
    _avg?: enquiryAvgOrderByAggregateInput
    _max?: enquiryMaxOrderByAggregateInput
    _min?: enquiryMinOrderByAggregateInput
    _sum?: enquirySumOrderByAggregateInput
  }

  export type enquiryScalarWhereWithAggregatesInput = {
    AND?: enquiryScalarWhereWithAggregatesInput | enquiryScalarWhereWithAggregatesInput[]
    OR?: enquiryScalarWhereWithAggregatesInput[]
    NOT?: enquiryScalarWhereWithAggregatesInput | enquiryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"enquiry"> | number
    name?: StringWithAggregatesFilter<"enquiry"> | string
    email?: StringWithAggregatesFilter<"enquiry"> | string
    phone?: StringWithAggregatesFilter<"enquiry"> | string
    subject?: StringWithAggregatesFilter<"enquiry"> | string
    message?: StringWithAggregatesFilter<"enquiry"> | string
    isRead?: BoolWithAggregatesFilter<"enquiry"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"enquiry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"enquiry"> | Date | string
  }

  export type lotteryWhereInput = {
    AND?: lotteryWhereInput | lotteryWhereInput[]
    OR?: lotteryWhereInput[]
    NOT?: lotteryWhereInput | lotteryWhereInput[]
    id?: IntFilter<"lottery"> | number
    name?: StringFilter<"lottery"> | string
    result_time?: StringFilter<"lottery"> | string
    is_active?: BoolFilter<"lottery"> | boolean
    createdAt?: DateTimeFilter<"lottery"> | Date | string
    updatedAt?: DateTimeFilter<"lottery"> | Date | string
    result_date?: StringFilter<"lottery"> | string
    buyer?: BuyerListRelationFilter
    ticket?: TicketListRelationFilter
    winner?: WinnerListRelationFilter
  }

  export type lotteryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    result_time?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    result_date?: SortOrder
    buyer?: buyerOrderByRelationAggregateInput
    ticket?: ticketOrderByRelationAggregateInput
    winner?: winnerOrderByRelationAggregateInput
    _relevance?: lotteryOrderByRelevanceInput
  }

  export type lotteryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: lotteryWhereInput | lotteryWhereInput[]
    OR?: lotteryWhereInput[]
    NOT?: lotteryWhereInput | lotteryWhereInput[]
    name?: StringFilter<"lottery"> | string
    result_time?: StringFilter<"lottery"> | string
    is_active?: BoolFilter<"lottery"> | boolean
    createdAt?: DateTimeFilter<"lottery"> | Date | string
    updatedAt?: DateTimeFilter<"lottery"> | Date | string
    result_date?: StringFilter<"lottery"> | string
    buyer?: BuyerListRelationFilter
    ticket?: TicketListRelationFilter
    winner?: WinnerListRelationFilter
  }, "id">

  export type lotteryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    result_time?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    result_date?: SortOrder
    _count?: lotteryCountOrderByAggregateInput
    _avg?: lotteryAvgOrderByAggregateInput
    _max?: lotteryMaxOrderByAggregateInput
    _min?: lotteryMinOrderByAggregateInput
    _sum?: lotterySumOrderByAggregateInput
  }

  export type lotteryScalarWhereWithAggregatesInput = {
    AND?: lotteryScalarWhereWithAggregatesInput | lotteryScalarWhereWithAggregatesInput[]
    OR?: lotteryScalarWhereWithAggregatesInput[]
    NOT?: lotteryScalarWhereWithAggregatesInput | lotteryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"lottery"> | number
    name?: StringWithAggregatesFilter<"lottery"> | string
    result_time?: StringWithAggregatesFilter<"lottery"> | string
    is_active?: BoolWithAggregatesFilter<"lottery"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"lottery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"lottery"> | Date | string
    result_date?: StringWithAggregatesFilter<"lottery"> | string
  }

  export type ticketWhereInput = {
    AND?: ticketWhereInput | ticketWhereInput[]
    OR?: ticketWhereInput[]
    NOT?: ticketWhereInput | ticketWhereInput[]
    id?: IntFilter<"ticket"> | number
    lottery_id?: IntFilter<"ticket"> | number
    ticket_package_id?: IntFilter<"ticket"> | number
    ticket_number?: StringFilter<"ticket"> | string
    createdAt?: DateTimeFilter<"ticket"> | Date | string
    updatedAt?: DateTimeFilter<"ticket"> | Date | string
    transaction_id?: StringFilter<"ticket"> | string
    buyer_id?: IntFilter<"ticket"> | number
    buyer?: XOR<BuyerScalarRelationFilter, buyerWhereInput>
    lottery?: XOR<LotteryScalarRelationFilter, lotteryWhereInput>
    ticketpackage?: XOR<TicketpackageScalarRelationFilter, ticketpackageWhereInput>
  }

  export type ticketOrderByWithRelationInput = {
    id?: SortOrder
    lottery_id?: SortOrder
    ticket_package_id?: SortOrder
    ticket_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaction_id?: SortOrder
    buyer_id?: SortOrder
    buyer?: buyerOrderByWithRelationInput
    lottery?: lotteryOrderByWithRelationInput
    ticketpackage?: ticketpackageOrderByWithRelationInput
    _relevance?: ticketOrderByRelevanceInput
  }

  export type ticketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    lottery_id_ticket_number_transaction_id?: ticketLottery_idTicket_numberTransaction_idCompoundUniqueInput
    AND?: ticketWhereInput | ticketWhereInput[]
    OR?: ticketWhereInput[]
    NOT?: ticketWhereInput | ticketWhereInput[]
    lottery_id?: IntFilter<"ticket"> | number
    ticket_package_id?: IntFilter<"ticket"> | number
    ticket_number?: StringFilter<"ticket"> | string
    createdAt?: DateTimeFilter<"ticket"> | Date | string
    updatedAt?: DateTimeFilter<"ticket"> | Date | string
    transaction_id?: StringFilter<"ticket"> | string
    buyer_id?: IntFilter<"ticket"> | number
    buyer?: XOR<BuyerScalarRelationFilter, buyerWhereInput>
    lottery?: XOR<LotteryScalarRelationFilter, lotteryWhereInput>
    ticketpackage?: XOR<TicketpackageScalarRelationFilter, ticketpackageWhereInput>
  }, "id" | "lottery_id_ticket_number_transaction_id">

  export type ticketOrderByWithAggregationInput = {
    id?: SortOrder
    lottery_id?: SortOrder
    ticket_package_id?: SortOrder
    ticket_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaction_id?: SortOrder
    buyer_id?: SortOrder
    _count?: ticketCountOrderByAggregateInput
    _avg?: ticketAvgOrderByAggregateInput
    _max?: ticketMaxOrderByAggregateInput
    _min?: ticketMinOrderByAggregateInput
    _sum?: ticketSumOrderByAggregateInput
  }

  export type ticketScalarWhereWithAggregatesInput = {
    AND?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[]
    OR?: ticketScalarWhereWithAggregatesInput[]
    NOT?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ticket"> | number
    lottery_id?: IntWithAggregatesFilter<"ticket"> | number
    ticket_package_id?: IntWithAggregatesFilter<"ticket"> | number
    ticket_number?: StringWithAggregatesFilter<"ticket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ticket"> | Date | string
    transaction_id?: StringWithAggregatesFilter<"ticket"> | string
    buyer_id?: IntWithAggregatesFilter<"ticket"> | number
  }

  export type ticketpackageWhereInput = {
    AND?: ticketpackageWhereInput | ticketpackageWhereInput[]
    OR?: ticketpackageWhereInput[]
    NOT?: ticketpackageWhereInput | ticketpackageWhereInput[]
    id?: IntFilter<"ticketpackage"> | number
    name?: StringFilter<"ticketpackage"> | string
    number_of_tickets?: IntFilter<"ticketpackage"> | number
    paid_tickets?: IntFilter<"ticketpackage"> | number
    free_tickets?: IntNullableFilter<"ticketpackage"> | number | null
    price?: FloatFilter<"ticketpackage"> | number
    is_active?: BoolFilter<"ticketpackage"> | boolean
    createdAt?: DateTimeFilter<"ticketpackage"> | Date | string
    updatedAt?: DateTimeFilter<"ticketpackage"> | Date | string
    buyer?: BuyerListRelationFilter
    ticket?: TicketListRelationFilter
  }

  export type ticketpackageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    number_of_tickets?: SortOrder
    paid_tickets?: SortOrder
    free_tickets?: SortOrderInput | SortOrder
    price?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    buyer?: buyerOrderByRelationAggregateInput
    ticket?: ticketOrderByRelationAggregateInput
    _relevance?: ticketpackageOrderByRelevanceInput
  }

  export type ticketpackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ticketpackageWhereInput | ticketpackageWhereInput[]
    OR?: ticketpackageWhereInput[]
    NOT?: ticketpackageWhereInput | ticketpackageWhereInput[]
    name?: StringFilter<"ticketpackage"> | string
    number_of_tickets?: IntFilter<"ticketpackage"> | number
    paid_tickets?: IntFilter<"ticketpackage"> | number
    free_tickets?: IntNullableFilter<"ticketpackage"> | number | null
    price?: FloatFilter<"ticketpackage"> | number
    is_active?: BoolFilter<"ticketpackage"> | boolean
    createdAt?: DateTimeFilter<"ticketpackage"> | Date | string
    updatedAt?: DateTimeFilter<"ticketpackage"> | Date | string
    buyer?: BuyerListRelationFilter
    ticket?: TicketListRelationFilter
  }, "id">

  export type ticketpackageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    number_of_tickets?: SortOrder
    paid_tickets?: SortOrder
    free_tickets?: SortOrderInput | SortOrder
    price?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ticketpackageCountOrderByAggregateInput
    _avg?: ticketpackageAvgOrderByAggregateInput
    _max?: ticketpackageMaxOrderByAggregateInput
    _min?: ticketpackageMinOrderByAggregateInput
    _sum?: ticketpackageSumOrderByAggregateInput
  }

  export type ticketpackageScalarWhereWithAggregatesInput = {
    AND?: ticketpackageScalarWhereWithAggregatesInput | ticketpackageScalarWhereWithAggregatesInput[]
    OR?: ticketpackageScalarWhereWithAggregatesInput[]
    NOT?: ticketpackageScalarWhereWithAggregatesInput | ticketpackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ticketpackage"> | number
    name?: StringWithAggregatesFilter<"ticketpackage"> | string
    number_of_tickets?: IntWithAggregatesFilter<"ticketpackage"> | number
    paid_tickets?: IntWithAggregatesFilter<"ticketpackage"> | number
    free_tickets?: IntNullableWithAggregatesFilter<"ticketpackage"> | number | null
    price?: FloatWithAggregatesFilter<"ticketpackage"> | number
    is_active?: BoolWithAggregatesFilter<"ticketpackage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ticketpackage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ticketpackage"> | Date | string
  }

  export type QRCodeWhereInput = {
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    id?: IntFilter<"QRCode"> | number
    phone?: StringNullableFilter<"QRCode"> | string | null
    image?: JsonNullableFilter<"QRCode">
    createdAt?: DateTimeFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeFilter<"QRCode"> | Date | string
  }

  export type QRCodeOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: QRCodeOrderByRelevanceInput
  }

  export type QRCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    phone?: StringNullableFilter<"QRCode"> | string | null
    image?: JsonNullableFilter<"QRCode">
    createdAt?: DateTimeFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeFilter<"QRCode"> | Date | string
  }, "id">

  export type QRCodeOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QRCodeCountOrderByAggregateInput
    _avg?: QRCodeAvgOrderByAggregateInput
    _max?: QRCodeMaxOrderByAggregateInput
    _min?: QRCodeMinOrderByAggregateInput
    _sum?: QRCodeSumOrderByAggregateInput
  }

  export type QRCodeScalarWhereWithAggregatesInput = {
    AND?: QRCodeScalarWhereWithAggregatesInput | QRCodeScalarWhereWithAggregatesInput[]
    OR?: QRCodeScalarWhereWithAggregatesInput[]
    NOT?: QRCodeScalarWhereWithAggregatesInput | QRCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QRCode"> | number
    phone?: StringNullableWithAggregatesFilter<"QRCode"> | string | null
    image?: JsonNullableWithAggregatesFilter<"QRCode">
    createdAt?: DateTimeWithAggregatesFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QRCode"> | Date | string
  }

  export type winnerCreateInput = {
    name: string
    phone: string
    email: string
    state: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket_number: string
    prize_amount: string
    winner_rank?: string | null
    claimed?: boolean
    lottery: lotteryCreateNestedOneWithoutWinnerInput
  }

  export type winnerUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    email: string
    state: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket_number: string
    prize_amount: string
    winner_rank?: string | null
    lottery_id: number
    claimed?: boolean
  }

  export type winnerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_number?: StringFieldUpdateOperationsInput | string
    prize_amount?: StringFieldUpdateOperationsInput | string
    winner_rank?: NullableStringFieldUpdateOperationsInput | string | null
    claimed?: BoolFieldUpdateOperationsInput | boolean
    lottery?: lotteryUpdateOneRequiredWithoutWinnerNestedInput
  }

  export type winnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_number?: StringFieldUpdateOperationsInput | string
    prize_amount?: StringFieldUpdateOperationsInput | string
    winner_rank?: NullableStringFieldUpdateOperationsInput | string | null
    lottery_id?: IntFieldUpdateOperationsInput | number
    claimed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type winnerCreateManyInput = {
    id?: number
    name: string
    phone: string
    email: string
    state: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket_number: string
    prize_amount: string
    winner_rank?: string | null
    lottery_id: number
    claimed?: boolean
  }

  export type winnerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_number?: StringFieldUpdateOperationsInput | string
    prize_amount?: StringFieldUpdateOperationsInput | string
    winner_rank?: NullableStringFieldUpdateOperationsInput | string | null
    claimed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type winnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_number?: StringFieldUpdateOperationsInput | string
    prize_amount?: StringFieldUpdateOperationsInput | string
    winner_rank?: NullableStringFieldUpdateOperationsInput | string | null
    lottery_id?: IntFieldUpdateOperationsInput | number
    claimed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type adminCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.admin_role
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type adminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.admin_role
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type adminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumadmin_roleFieldUpdateOperationsInput | $Enums.admin_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumadmin_roleFieldUpdateOperationsInput | $Enums.admin_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.admin_role
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type adminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumadmin_roleFieldUpdateOperationsInput | $Enums.admin_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumadmin_roleFieldUpdateOperationsInput | $Enums.admin_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type buyerCreateInput = {
    name: string
    email: string
    phone: string
    state: string
    transaction_id?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_status?: $Enums.buyer_transaction_status
    is_read?: boolean
    lottery?: lotteryCreateNestedOneWithoutBuyerInput
    ticketpackage?: ticketpackageCreateNestedOneWithoutBuyerInput
    ticket?: ticketCreateNestedManyWithoutBuyerInput
  }

  export type buyerUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    state: string
    lottery_id?: number | null
    ticket_package_id?: number | null
    transaction_id?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_status?: $Enums.buyer_transaction_status
    is_read?: boolean
    ticket?: ticketUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type buyerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_status?: Enumbuyer_transaction_statusFieldUpdateOperationsInput | $Enums.buyer_transaction_status
    is_read?: BoolFieldUpdateOperationsInput | boolean
    lottery?: lotteryUpdateOneWithoutBuyerNestedInput
    ticketpackage?: ticketpackageUpdateOneWithoutBuyerNestedInput
    ticket?: ticketUpdateManyWithoutBuyerNestedInput
  }

  export type buyerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lottery_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_package_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_status?: Enumbuyer_transaction_statusFieldUpdateOperationsInput | $Enums.buyer_transaction_status
    is_read?: BoolFieldUpdateOperationsInput | boolean
    ticket?: ticketUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type buyerCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    state: string
    lottery_id?: number | null
    ticket_package_id?: number | null
    transaction_id?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_status?: $Enums.buyer_transaction_status
    is_read?: boolean
  }

  export type buyerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_status?: Enumbuyer_transaction_statusFieldUpdateOperationsInput | $Enums.buyer_transaction_status
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type buyerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lottery_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_package_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_status?: Enumbuyer_transaction_statusFieldUpdateOperationsInput | $Enums.buyer_transaction_status
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type enquiryCreateInput = {
    name: string
    email: string
    phone: string
    subject: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type enquiryUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    subject: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type enquiryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enquiryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enquiryCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    subject: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type enquiryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enquiryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lotteryCreateInput = {
    name: string
    result_time: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    result_date: string
    buyer?: buyerCreateNestedManyWithoutLotteryInput
    ticket?: ticketCreateNestedManyWithoutLotteryInput
    winner?: winnerCreateNestedManyWithoutLotteryInput
  }

  export type lotteryUncheckedCreateInput = {
    id?: number
    name: string
    result_time: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    result_date: string
    buyer?: buyerUncheckedCreateNestedManyWithoutLotteryInput
    ticket?: ticketUncheckedCreateNestedManyWithoutLotteryInput
    winner?: winnerUncheckedCreateNestedManyWithoutLotteryInput
  }

  export type lotteryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    result_time?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result_date?: StringFieldUpdateOperationsInput | string
    buyer?: buyerUpdateManyWithoutLotteryNestedInput
    ticket?: ticketUpdateManyWithoutLotteryNestedInput
    winner?: winnerUpdateManyWithoutLotteryNestedInput
  }

  export type lotteryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    result_time?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result_date?: StringFieldUpdateOperationsInput | string
    buyer?: buyerUncheckedUpdateManyWithoutLotteryNestedInput
    ticket?: ticketUncheckedUpdateManyWithoutLotteryNestedInput
    winner?: winnerUncheckedUpdateManyWithoutLotteryNestedInput
  }

  export type lotteryCreateManyInput = {
    id?: number
    name: string
    result_time: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    result_date: string
  }

  export type lotteryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    result_time?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result_date?: StringFieldUpdateOperationsInput | string
  }

  export type lotteryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    result_time?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result_date?: StringFieldUpdateOperationsInput | string
  }

  export type ticketCreateInput = {
    ticket_number: string
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_id: string
    buyer: buyerCreateNestedOneWithoutTicketInput
    lottery: lotteryCreateNestedOneWithoutTicketInput
    ticketpackage: ticketpackageCreateNestedOneWithoutTicketInput
  }

  export type ticketUncheckedCreateInput = {
    id?: number
    lottery_id: number
    ticket_package_id: number
    ticket_number: string
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_id: string
    buyer_id: number
  }

  export type ticketUpdateInput = {
    ticket_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    buyer?: buyerUpdateOneRequiredWithoutTicketNestedInput
    lottery?: lotteryUpdateOneRequiredWithoutTicketNestedInput
    ticketpackage?: ticketpackageUpdateOneRequiredWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lottery_id?: IntFieldUpdateOperationsInput | number
    ticket_package_id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    buyer_id?: IntFieldUpdateOperationsInput | number
  }

  export type ticketCreateManyInput = {
    id?: number
    lottery_id: number
    ticket_package_id: number
    ticket_number: string
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_id: string
    buyer_id: number
  }

  export type ticketUpdateManyMutationInput = {
    ticket_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type ticketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lottery_id?: IntFieldUpdateOperationsInput | number
    ticket_package_id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    buyer_id?: IntFieldUpdateOperationsInput | number
  }

  export type ticketpackageCreateInput = {
    name: string
    number_of_tickets: number
    paid_tickets: number
    free_tickets?: number | null
    price: number
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    buyer?: buyerCreateNestedManyWithoutTicketpackageInput
    ticket?: ticketCreateNestedManyWithoutTicketpackageInput
  }

  export type ticketpackageUncheckedCreateInput = {
    id?: number
    name: string
    number_of_tickets: number
    paid_tickets: number
    free_tickets?: number | null
    price: number
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    buyer?: buyerUncheckedCreateNestedManyWithoutTicketpackageInput
    ticket?: ticketUncheckedCreateNestedManyWithoutTicketpackageInput
  }

  export type ticketpackageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    number_of_tickets?: IntFieldUpdateOperationsInput | number
    paid_tickets?: IntFieldUpdateOperationsInput | number
    free_tickets?: NullableIntFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: buyerUpdateManyWithoutTicketpackageNestedInput
    ticket?: ticketUpdateManyWithoutTicketpackageNestedInput
  }

  export type ticketpackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number_of_tickets?: IntFieldUpdateOperationsInput | number
    paid_tickets?: IntFieldUpdateOperationsInput | number
    free_tickets?: NullableIntFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: buyerUncheckedUpdateManyWithoutTicketpackageNestedInput
    ticket?: ticketUncheckedUpdateManyWithoutTicketpackageNestedInput
  }

  export type ticketpackageCreateManyInput = {
    id?: number
    name: string
    number_of_tickets: number
    paid_tickets: number
    free_tickets?: number | null
    price: number
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ticketpackageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    number_of_tickets?: IntFieldUpdateOperationsInput | number
    paid_tickets?: IntFieldUpdateOperationsInput | number
    free_tickets?: NullableIntFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticketpackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number_of_tickets?: IntFieldUpdateOperationsInput | number
    paid_tickets?: IntFieldUpdateOperationsInput | number
    free_tickets?: NullableIntFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRCodeCreateInput = {
    phone?: string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type QRCodeUncheckedCreateInput = {
    id?: number
    phone?: string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type QRCodeUpdateInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRCodeCreateManyInput = {
    id?: number
    phone?: string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type QRCodeUpdateManyMutationInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LotteryScalarRelationFilter = {
    is?: lotteryWhereInput
    isNot?: lotteryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type winnerOrderByRelevanceInput = {
    fields: winnerOrderByRelevanceFieldEnum | winnerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type winnerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticket_number?: SortOrder
    prize_amount?: SortOrder
    winner_rank?: SortOrder
    lottery_id?: SortOrder
    claimed?: SortOrder
  }

  export type winnerAvgOrderByAggregateInput = {
    id?: SortOrder
    lottery_id?: SortOrder
  }

  export type winnerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticket_number?: SortOrder
    prize_amount?: SortOrder
    winner_rank?: SortOrder
    lottery_id?: SortOrder
    claimed?: SortOrder
  }

  export type winnerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticket_number?: SortOrder
    prize_amount?: SortOrder
    winner_rank?: SortOrder
    lottery_id?: SortOrder
    claimed?: SortOrder
  }

  export type winnerSumOrderByAggregateInput = {
    id?: SortOrder
    lottery_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Enumadmin_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.admin_role | Enumadmin_roleFieldRefInput<$PrismaModel>
    in?: $Enums.admin_role[]
    notIn?: $Enums.admin_role[]
    not?: NestedEnumadmin_roleFilter<$PrismaModel> | $Enums.admin_role
  }

  export type adminOrderByRelevanceInput = {
    fields: adminOrderByRelevanceFieldEnum | adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumadmin_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.admin_role | Enumadmin_roleFieldRefInput<$PrismaModel>
    in?: $Enums.admin_role[]
    notIn?: $Enums.admin_role[]
    not?: NestedEnumadmin_roleWithAggregatesFilter<$PrismaModel> | $Enums.admin_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumadmin_roleFilter<$PrismaModel>
    _max?: NestedEnumadmin_roleFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Enumbuyer_transaction_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.buyer_transaction_status | Enumbuyer_transaction_statusFieldRefInput<$PrismaModel>
    in?: $Enums.buyer_transaction_status[]
    notIn?: $Enums.buyer_transaction_status[]
    not?: NestedEnumbuyer_transaction_statusFilter<$PrismaModel> | $Enums.buyer_transaction_status
  }

  export type LotteryNullableScalarRelationFilter = {
    is?: lotteryWhereInput | null
    isNot?: lotteryWhereInput | null
  }

  export type TicketpackageNullableScalarRelationFilter = {
    is?: ticketpackageWhereInput | null
    isNot?: ticketpackageWhereInput | null
  }

  export type TicketListRelationFilter = {
    every?: ticketWhereInput
    some?: ticketWhereInput
    none?: ticketWhereInput
  }

  export type ticketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type buyerOrderByRelevanceInput = {
    fields: buyerOrderByRelevanceFieldEnum | buyerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type buyerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    state?: SortOrder
    lottery_id?: SortOrder
    ticket_package_id?: SortOrder
    transaction_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaction_status?: SortOrder
    is_read?: SortOrder
  }

  export type buyerAvgOrderByAggregateInput = {
    id?: SortOrder
    lottery_id?: SortOrder
    ticket_package_id?: SortOrder
  }

  export type buyerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    state?: SortOrder
    lottery_id?: SortOrder
    ticket_package_id?: SortOrder
    transaction_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaction_status?: SortOrder
    is_read?: SortOrder
  }

  export type buyerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    state?: SortOrder
    lottery_id?: SortOrder
    ticket_package_id?: SortOrder
    transaction_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaction_status?: SortOrder
    is_read?: SortOrder
  }

  export type buyerSumOrderByAggregateInput = {
    id?: SortOrder
    lottery_id?: SortOrder
    ticket_package_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumbuyer_transaction_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.buyer_transaction_status | Enumbuyer_transaction_statusFieldRefInput<$PrismaModel>
    in?: $Enums.buyer_transaction_status[]
    notIn?: $Enums.buyer_transaction_status[]
    not?: NestedEnumbuyer_transaction_statusWithAggregatesFilter<$PrismaModel> | $Enums.buyer_transaction_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbuyer_transaction_statusFilter<$PrismaModel>
    _max?: NestedEnumbuyer_transaction_statusFilter<$PrismaModel>
  }

  export type enquiryOrderByRelevanceInput = {
    fields: enquiryOrderByRelevanceFieldEnum | enquiryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type enquiryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type enquiryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type enquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type enquiryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type enquirySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BuyerListRelationFilter = {
    every?: buyerWhereInput
    some?: buyerWhereInput
    none?: buyerWhereInput
  }

  export type WinnerListRelationFilter = {
    every?: winnerWhereInput
    some?: winnerWhereInput
    none?: winnerWhereInput
  }

  export type buyerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type winnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lotteryOrderByRelevanceInput = {
    fields: lotteryOrderByRelevanceFieldEnum | lotteryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type lotteryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    result_time?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    result_date?: SortOrder
  }

  export type lotteryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type lotteryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    result_time?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    result_date?: SortOrder
  }

  export type lotteryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    result_time?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    result_date?: SortOrder
  }

  export type lotterySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BuyerScalarRelationFilter = {
    is?: buyerWhereInput
    isNot?: buyerWhereInput
  }

  export type TicketpackageScalarRelationFilter = {
    is?: ticketpackageWhereInput
    isNot?: ticketpackageWhereInput
  }

  export type ticketOrderByRelevanceInput = {
    fields: ticketOrderByRelevanceFieldEnum | ticketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ticketLottery_idTicket_numberTransaction_idCompoundUniqueInput = {
    lottery_id: number
    ticket_number: string
    transaction_id: string
  }

  export type ticketCountOrderByAggregateInput = {
    id?: SortOrder
    lottery_id?: SortOrder
    ticket_package_id?: SortOrder
    ticket_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaction_id?: SortOrder
    buyer_id?: SortOrder
  }

  export type ticketAvgOrderByAggregateInput = {
    id?: SortOrder
    lottery_id?: SortOrder
    ticket_package_id?: SortOrder
    buyer_id?: SortOrder
  }

  export type ticketMaxOrderByAggregateInput = {
    id?: SortOrder
    lottery_id?: SortOrder
    ticket_package_id?: SortOrder
    ticket_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaction_id?: SortOrder
    buyer_id?: SortOrder
  }

  export type ticketMinOrderByAggregateInput = {
    id?: SortOrder
    lottery_id?: SortOrder
    ticket_package_id?: SortOrder
    ticket_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaction_id?: SortOrder
    buyer_id?: SortOrder
  }

  export type ticketSumOrderByAggregateInput = {
    id?: SortOrder
    lottery_id?: SortOrder
    ticket_package_id?: SortOrder
    buyer_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ticketpackageOrderByRelevanceInput = {
    fields: ticketpackageOrderByRelevanceFieldEnum | ticketpackageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ticketpackageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number_of_tickets?: SortOrder
    paid_tickets?: SortOrder
    free_tickets?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ticketpackageAvgOrderByAggregateInput = {
    id?: SortOrder
    number_of_tickets?: SortOrder
    paid_tickets?: SortOrder
    free_tickets?: SortOrder
    price?: SortOrder
  }

  export type ticketpackageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number_of_tickets?: SortOrder
    paid_tickets?: SortOrder
    free_tickets?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ticketpackageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number_of_tickets?: SortOrder
    paid_tickets?: SortOrder
    free_tickets?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ticketpackageSumOrderByAggregateInput = {
    id?: SortOrder
    number_of_tickets?: SortOrder
    paid_tickets?: SortOrder
    free_tickets?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type QRCodeOrderByRelevanceInput = {
    fields: QRCodeOrderByRelevanceFieldEnum | QRCodeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QRCodeCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QRCodeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QRCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QRCodeMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QRCodeSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type lotteryCreateNestedOneWithoutWinnerInput = {
    create?: XOR<lotteryCreateWithoutWinnerInput, lotteryUncheckedCreateWithoutWinnerInput>
    connectOrCreate?: lotteryCreateOrConnectWithoutWinnerInput
    connect?: lotteryWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type lotteryUpdateOneRequiredWithoutWinnerNestedInput = {
    create?: XOR<lotteryCreateWithoutWinnerInput, lotteryUncheckedCreateWithoutWinnerInput>
    connectOrCreate?: lotteryCreateOrConnectWithoutWinnerInput
    upsert?: lotteryUpsertWithoutWinnerInput
    connect?: lotteryWhereUniqueInput
    update?: XOR<XOR<lotteryUpdateToOneWithWhereWithoutWinnerInput, lotteryUpdateWithoutWinnerInput>, lotteryUncheckedUpdateWithoutWinnerInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumadmin_roleFieldUpdateOperationsInput = {
    set?: $Enums.admin_role
  }

  export type lotteryCreateNestedOneWithoutBuyerInput = {
    create?: XOR<lotteryCreateWithoutBuyerInput, lotteryUncheckedCreateWithoutBuyerInput>
    connectOrCreate?: lotteryCreateOrConnectWithoutBuyerInput
    connect?: lotteryWhereUniqueInput
  }

  export type ticketpackageCreateNestedOneWithoutBuyerInput = {
    create?: XOR<ticketpackageCreateWithoutBuyerInput, ticketpackageUncheckedCreateWithoutBuyerInput>
    connectOrCreate?: ticketpackageCreateOrConnectWithoutBuyerInput
    connect?: ticketpackageWhereUniqueInput
  }

  export type ticketCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ticketCreateWithoutBuyerInput, ticketUncheckedCreateWithoutBuyerInput> | ticketCreateWithoutBuyerInput[] | ticketUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutBuyerInput | ticketCreateOrConnectWithoutBuyerInput[]
    createMany?: ticketCreateManyBuyerInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type ticketUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ticketCreateWithoutBuyerInput, ticketUncheckedCreateWithoutBuyerInput> | ticketCreateWithoutBuyerInput[] | ticketUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutBuyerInput | ticketCreateOrConnectWithoutBuyerInput[]
    createMany?: ticketCreateManyBuyerInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type Enumbuyer_transaction_statusFieldUpdateOperationsInput = {
    set?: $Enums.buyer_transaction_status
  }

  export type lotteryUpdateOneWithoutBuyerNestedInput = {
    create?: XOR<lotteryCreateWithoutBuyerInput, lotteryUncheckedCreateWithoutBuyerInput>
    connectOrCreate?: lotteryCreateOrConnectWithoutBuyerInput
    upsert?: lotteryUpsertWithoutBuyerInput
    disconnect?: lotteryWhereInput | boolean
    delete?: lotteryWhereInput | boolean
    connect?: lotteryWhereUniqueInput
    update?: XOR<XOR<lotteryUpdateToOneWithWhereWithoutBuyerInput, lotteryUpdateWithoutBuyerInput>, lotteryUncheckedUpdateWithoutBuyerInput>
  }

  export type ticketpackageUpdateOneWithoutBuyerNestedInput = {
    create?: XOR<ticketpackageCreateWithoutBuyerInput, ticketpackageUncheckedCreateWithoutBuyerInput>
    connectOrCreate?: ticketpackageCreateOrConnectWithoutBuyerInput
    upsert?: ticketpackageUpsertWithoutBuyerInput
    disconnect?: ticketpackageWhereInput | boolean
    delete?: ticketpackageWhereInput | boolean
    connect?: ticketpackageWhereUniqueInput
    update?: XOR<XOR<ticketpackageUpdateToOneWithWhereWithoutBuyerInput, ticketpackageUpdateWithoutBuyerInput>, ticketpackageUncheckedUpdateWithoutBuyerInput>
  }

  export type ticketUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ticketCreateWithoutBuyerInput, ticketUncheckedCreateWithoutBuyerInput> | ticketCreateWithoutBuyerInput[] | ticketUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutBuyerInput | ticketCreateOrConnectWithoutBuyerInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutBuyerInput | ticketUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ticketCreateManyBuyerInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutBuyerInput | ticketUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutBuyerInput | ticketUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ticketUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ticketCreateWithoutBuyerInput, ticketUncheckedCreateWithoutBuyerInput> | ticketCreateWithoutBuyerInput[] | ticketUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutBuyerInput | ticketCreateOrConnectWithoutBuyerInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutBuyerInput | ticketUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ticketCreateManyBuyerInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutBuyerInput | ticketUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutBuyerInput | ticketUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type buyerCreateNestedManyWithoutLotteryInput = {
    create?: XOR<buyerCreateWithoutLotteryInput, buyerUncheckedCreateWithoutLotteryInput> | buyerCreateWithoutLotteryInput[] | buyerUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: buyerCreateOrConnectWithoutLotteryInput | buyerCreateOrConnectWithoutLotteryInput[]
    createMany?: buyerCreateManyLotteryInputEnvelope
    connect?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
  }

  export type ticketCreateNestedManyWithoutLotteryInput = {
    create?: XOR<ticketCreateWithoutLotteryInput, ticketUncheckedCreateWithoutLotteryInput> | ticketCreateWithoutLotteryInput[] | ticketUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutLotteryInput | ticketCreateOrConnectWithoutLotteryInput[]
    createMany?: ticketCreateManyLotteryInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type winnerCreateNestedManyWithoutLotteryInput = {
    create?: XOR<winnerCreateWithoutLotteryInput, winnerUncheckedCreateWithoutLotteryInput> | winnerCreateWithoutLotteryInput[] | winnerUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: winnerCreateOrConnectWithoutLotteryInput | winnerCreateOrConnectWithoutLotteryInput[]
    createMany?: winnerCreateManyLotteryInputEnvelope
    connect?: winnerWhereUniqueInput | winnerWhereUniqueInput[]
  }

  export type buyerUncheckedCreateNestedManyWithoutLotteryInput = {
    create?: XOR<buyerCreateWithoutLotteryInput, buyerUncheckedCreateWithoutLotteryInput> | buyerCreateWithoutLotteryInput[] | buyerUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: buyerCreateOrConnectWithoutLotteryInput | buyerCreateOrConnectWithoutLotteryInput[]
    createMany?: buyerCreateManyLotteryInputEnvelope
    connect?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
  }

  export type ticketUncheckedCreateNestedManyWithoutLotteryInput = {
    create?: XOR<ticketCreateWithoutLotteryInput, ticketUncheckedCreateWithoutLotteryInput> | ticketCreateWithoutLotteryInput[] | ticketUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutLotteryInput | ticketCreateOrConnectWithoutLotteryInput[]
    createMany?: ticketCreateManyLotteryInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type winnerUncheckedCreateNestedManyWithoutLotteryInput = {
    create?: XOR<winnerCreateWithoutLotteryInput, winnerUncheckedCreateWithoutLotteryInput> | winnerCreateWithoutLotteryInput[] | winnerUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: winnerCreateOrConnectWithoutLotteryInput | winnerCreateOrConnectWithoutLotteryInput[]
    createMany?: winnerCreateManyLotteryInputEnvelope
    connect?: winnerWhereUniqueInput | winnerWhereUniqueInput[]
  }

  export type buyerUpdateManyWithoutLotteryNestedInput = {
    create?: XOR<buyerCreateWithoutLotteryInput, buyerUncheckedCreateWithoutLotteryInput> | buyerCreateWithoutLotteryInput[] | buyerUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: buyerCreateOrConnectWithoutLotteryInput | buyerCreateOrConnectWithoutLotteryInput[]
    upsert?: buyerUpsertWithWhereUniqueWithoutLotteryInput | buyerUpsertWithWhereUniqueWithoutLotteryInput[]
    createMany?: buyerCreateManyLotteryInputEnvelope
    set?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    disconnect?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    delete?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    connect?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    update?: buyerUpdateWithWhereUniqueWithoutLotteryInput | buyerUpdateWithWhereUniqueWithoutLotteryInput[]
    updateMany?: buyerUpdateManyWithWhereWithoutLotteryInput | buyerUpdateManyWithWhereWithoutLotteryInput[]
    deleteMany?: buyerScalarWhereInput | buyerScalarWhereInput[]
  }

  export type ticketUpdateManyWithoutLotteryNestedInput = {
    create?: XOR<ticketCreateWithoutLotteryInput, ticketUncheckedCreateWithoutLotteryInput> | ticketCreateWithoutLotteryInput[] | ticketUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutLotteryInput | ticketCreateOrConnectWithoutLotteryInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutLotteryInput | ticketUpsertWithWhereUniqueWithoutLotteryInput[]
    createMany?: ticketCreateManyLotteryInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutLotteryInput | ticketUpdateWithWhereUniqueWithoutLotteryInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutLotteryInput | ticketUpdateManyWithWhereWithoutLotteryInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type winnerUpdateManyWithoutLotteryNestedInput = {
    create?: XOR<winnerCreateWithoutLotteryInput, winnerUncheckedCreateWithoutLotteryInput> | winnerCreateWithoutLotteryInput[] | winnerUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: winnerCreateOrConnectWithoutLotteryInput | winnerCreateOrConnectWithoutLotteryInput[]
    upsert?: winnerUpsertWithWhereUniqueWithoutLotteryInput | winnerUpsertWithWhereUniqueWithoutLotteryInput[]
    createMany?: winnerCreateManyLotteryInputEnvelope
    set?: winnerWhereUniqueInput | winnerWhereUniqueInput[]
    disconnect?: winnerWhereUniqueInput | winnerWhereUniqueInput[]
    delete?: winnerWhereUniqueInput | winnerWhereUniqueInput[]
    connect?: winnerWhereUniqueInput | winnerWhereUniqueInput[]
    update?: winnerUpdateWithWhereUniqueWithoutLotteryInput | winnerUpdateWithWhereUniqueWithoutLotteryInput[]
    updateMany?: winnerUpdateManyWithWhereWithoutLotteryInput | winnerUpdateManyWithWhereWithoutLotteryInput[]
    deleteMany?: winnerScalarWhereInput | winnerScalarWhereInput[]
  }

  export type buyerUncheckedUpdateManyWithoutLotteryNestedInput = {
    create?: XOR<buyerCreateWithoutLotteryInput, buyerUncheckedCreateWithoutLotteryInput> | buyerCreateWithoutLotteryInput[] | buyerUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: buyerCreateOrConnectWithoutLotteryInput | buyerCreateOrConnectWithoutLotteryInput[]
    upsert?: buyerUpsertWithWhereUniqueWithoutLotteryInput | buyerUpsertWithWhereUniqueWithoutLotteryInput[]
    createMany?: buyerCreateManyLotteryInputEnvelope
    set?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    disconnect?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    delete?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    connect?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    update?: buyerUpdateWithWhereUniqueWithoutLotteryInput | buyerUpdateWithWhereUniqueWithoutLotteryInput[]
    updateMany?: buyerUpdateManyWithWhereWithoutLotteryInput | buyerUpdateManyWithWhereWithoutLotteryInput[]
    deleteMany?: buyerScalarWhereInput | buyerScalarWhereInput[]
  }

  export type ticketUncheckedUpdateManyWithoutLotteryNestedInput = {
    create?: XOR<ticketCreateWithoutLotteryInput, ticketUncheckedCreateWithoutLotteryInput> | ticketCreateWithoutLotteryInput[] | ticketUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutLotteryInput | ticketCreateOrConnectWithoutLotteryInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutLotteryInput | ticketUpsertWithWhereUniqueWithoutLotteryInput[]
    createMany?: ticketCreateManyLotteryInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutLotteryInput | ticketUpdateWithWhereUniqueWithoutLotteryInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutLotteryInput | ticketUpdateManyWithWhereWithoutLotteryInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type winnerUncheckedUpdateManyWithoutLotteryNestedInput = {
    create?: XOR<winnerCreateWithoutLotteryInput, winnerUncheckedCreateWithoutLotteryInput> | winnerCreateWithoutLotteryInput[] | winnerUncheckedCreateWithoutLotteryInput[]
    connectOrCreate?: winnerCreateOrConnectWithoutLotteryInput | winnerCreateOrConnectWithoutLotteryInput[]
    upsert?: winnerUpsertWithWhereUniqueWithoutLotteryInput | winnerUpsertWithWhereUniqueWithoutLotteryInput[]
    createMany?: winnerCreateManyLotteryInputEnvelope
    set?: winnerWhereUniqueInput | winnerWhereUniqueInput[]
    disconnect?: winnerWhereUniqueInput | winnerWhereUniqueInput[]
    delete?: winnerWhereUniqueInput | winnerWhereUniqueInput[]
    connect?: winnerWhereUniqueInput | winnerWhereUniqueInput[]
    update?: winnerUpdateWithWhereUniqueWithoutLotteryInput | winnerUpdateWithWhereUniqueWithoutLotteryInput[]
    updateMany?: winnerUpdateManyWithWhereWithoutLotteryInput | winnerUpdateManyWithWhereWithoutLotteryInput[]
    deleteMany?: winnerScalarWhereInput | winnerScalarWhereInput[]
  }

  export type buyerCreateNestedOneWithoutTicketInput = {
    create?: XOR<buyerCreateWithoutTicketInput, buyerUncheckedCreateWithoutTicketInput>
    connectOrCreate?: buyerCreateOrConnectWithoutTicketInput
    connect?: buyerWhereUniqueInput
  }

  export type lotteryCreateNestedOneWithoutTicketInput = {
    create?: XOR<lotteryCreateWithoutTicketInput, lotteryUncheckedCreateWithoutTicketInput>
    connectOrCreate?: lotteryCreateOrConnectWithoutTicketInput
    connect?: lotteryWhereUniqueInput
  }

  export type ticketpackageCreateNestedOneWithoutTicketInput = {
    create?: XOR<ticketpackageCreateWithoutTicketInput, ticketpackageUncheckedCreateWithoutTicketInput>
    connectOrCreate?: ticketpackageCreateOrConnectWithoutTicketInput
    connect?: ticketpackageWhereUniqueInput
  }

  export type buyerUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<buyerCreateWithoutTicketInput, buyerUncheckedCreateWithoutTicketInput>
    connectOrCreate?: buyerCreateOrConnectWithoutTicketInput
    upsert?: buyerUpsertWithoutTicketInput
    connect?: buyerWhereUniqueInput
    update?: XOR<XOR<buyerUpdateToOneWithWhereWithoutTicketInput, buyerUpdateWithoutTicketInput>, buyerUncheckedUpdateWithoutTicketInput>
  }

  export type lotteryUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<lotteryCreateWithoutTicketInput, lotteryUncheckedCreateWithoutTicketInput>
    connectOrCreate?: lotteryCreateOrConnectWithoutTicketInput
    upsert?: lotteryUpsertWithoutTicketInput
    connect?: lotteryWhereUniqueInput
    update?: XOR<XOR<lotteryUpdateToOneWithWhereWithoutTicketInput, lotteryUpdateWithoutTicketInput>, lotteryUncheckedUpdateWithoutTicketInput>
  }

  export type ticketpackageUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<ticketpackageCreateWithoutTicketInput, ticketpackageUncheckedCreateWithoutTicketInput>
    connectOrCreate?: ticketpackageCreateOrConnectWithoutTicketInput
    upsert?: ticketpackageUpsertWithoutTicketInput
    connect?: ticketpackageWhereUniqueInput
    update?: XOR<XOR<ticketpackageUpdateToOneWithWhereWithoutTicketInput, ticketpackageUpdateWithoutTicketInput>, ticketpackageUncheckedUpdateWithoutTicketInput>
  }

  export type buyerCreateNestedManyWithoutTicketpackageInput = {
    create?: XOR<buyerCreateWithoutTicketpackageInput, buyerUncheckedCreateWithoutTicketpackageInput> | buyerCreateWithoutTicketpackageInput[] | buyerUncheckedCreateWithoutTicketpackageInput[]
    connectOrCreate?: buyerCreateOrConnectWithoutTicketpackageInput | buyerCreateOrConnectWithoutTicketpackageInput[]
    createMany?: buyerCreateManyTicketpackageInputEnvelope
    connect?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
  }

  export type ticketCreateNestedManyWithoutTicketpackageInput = {
    create?: XOR<ticketCreateWithoutTicketpackageInput, ticketUncheckedCreateWithoutTicketpackageInput> | ticketCreateWithoutTicketpackageInput[] | ticketUncheckedCreateWithoutTicketpackageInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutTicketpackageInput | ticketCreateOrConnectWithoutTicketpackageInput[]
    createMany?: ticketCreateManyTicketpackageInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type buyerUncheckedCreateNestedManyWithoutTicketpackageInput = {
    create?: XOR<buyerCreateWithoutTicketpackageInput, buyerUncheckedCreateWithoutTicketpackageInput> | buyerCreateWithoutTicketpackageInput[] | buyerUncheckedCreateWithoutTicketpackageInput[]
    connectOrCreate?: buyerCreateOrConnectWithoutTicketpackageInput | buyerCreateOrConnectWithoutTicketpackageInput[]
    createMany?: buyerCreateManyTicketpackageInputEnvelope
    connect?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
  }

  export type ticketUncheckedCreateNestedManyWithoutTicketpackageInput = {
    create?: XOR<ticketCreateWithoutTicketpackageInput, ticketUncheckedCreateWithoutTicketpackageInput> | ticketCreateWithoutTicketpackageInput[] | ticketUncheckedCreateWithoutTicketpackageInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutTicketpackageInput | ticketCreateOrConnectWithoutTicketpackageInput[]
    createMany?: ticketCreateManyTicketpackageInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type buyerUpdateManyWithoutTicketpackageNestedInput = {
    create?: XOR<buyerCreateWithoutTicketpackageInput, buyerUncheckedCreateWithoutTicketpackageInput> | buyerCreateWithoutTicketpackageInput[] | buyerUncheckedCreateWithoutTicketpackageInput[]
    connectOrCreate?: buyerCreateOrConnectWithoutTicketpackageInput | buyerCreateOrConnectWithoutTicketpackageInput[]
    upsert?: buyerUpsertWithWhereUniqueWithoutTicketpackageInput | buyerUpsertWithWhereUniqueWithoutTicketpackageInput[]
    createMany?: buyerCreateManyTicketpackageInputEnvelope
    set?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    disconnect?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    delete?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    connect?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    update?: buyerUpdateWithWhereUniqueWithoutTicketpackageInput | buyerUpdateWithWhereUniqueWithoutTicketpackageInput[]
    updateMany?: buyerUpdateManyWithWhereWithoutTicketpackageInput | buyerUpdateManyWithWhereWithoutTicketpackageInput[]
    deleteMany?: buyerScalarWhereInput | buyerScalarWhereInput[]
  }

  export type ticketUpdateManyWithoutTicketpackageNestedInput = {
    create?: XOR<ticketCreateWithoutTicketpackageInput, ticketUncheckedCreateWithoutTicketpackageInput> | ticketCreateWithoutTicketpackageInput[] | ticketUncheckedCreateWithoutTicketpackageInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutTicketpackageInput | ticketCreateOrConnectWithoutTicketpackageInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutTicketpackageInput | ticketUpsertWithWhereUniqueWithoutTicketpackageInput[]
    createMany?: ticketCreateManyTicketpackageInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutTicketpackageInput | ticketUpdateWithWhereUniqueWithoutTicketpackageInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutTicketpackageInput | ticketUpdateManyWithWhereWithoutTicketpackageInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type buyerUncheckedUpdateManyWithoutTicketpackageNestedInput = {
    create?: XOR<buyerCreateWithoutTicketpackageInput, buyerUncheckedCreateWithoutTicketpackageInput> | buyerCreateWithoutTicketpackageInput[] | buyerUncheckedCreateWithoutTicketpackageInput[]
    connectOrCreate?: buyerCreateOrConnectWithoutTicketpackageInput | buyerCreateOrConnectWithoutTicketpackageInput[]
    upsert?: buyerUpsertWithWhereUniqueWithoutTicketpackageInput | buyerUpsertWithWhereUniqueWithoutTicketpackageInput[]
    createMany?: buyerCreateManyTicketpackageInputEnvelope
    set?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    disconnect?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    delete?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    connect?: buyerWhereUniqueInput | buyerWhereUniqueInput[]
    update?: buyerUpdateWithWhereUniqueWithoutTicketpackageInput | buyerUpdateWithWhereUniqueWithoutTicketpackageInput[]
    updateMany?: buyerUpdateManyWithWhereWithoutTicketpackageInput | buyerUpdateManyWithWhereWithoutTicketpackageInput[]
    deleteMany?: buyerScalarWhereInput | buyerScalarWhereInput[]
  }

  export type ticketUncheckedUpdateManyWithoutTicketpackageNestedInput = {
    create?: XOR<ticketCreateWithoutTicketpackageInput, ticketUncheckedCreateWithoutTicketpackageInput> | ticketCreateWithoutTicketpackageInput[] | ticketUncheckedCreateWithoutTicketpackageInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutTicketpackageInput | ticketCreateOrConnectWithoutTicketpackageInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutTicketpackageInput | ticketUpsertWithWhereUniqueWithoutTicketpackageInput[]
    createMany?: ticketCreateManyTicketpackageInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutTicketpackageInput | ticketUpdateWithWhereUniqueWithoutTicketpackageInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutTicketpackageInput | ticketUpdateManyWithWhereWithoutTicketpackageInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumadmin_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.admin_role | Enumadmin_roleFieldRefInput<$PrismaModel>
    in?: $Enums.admin_role[]
    notIn?: $Enums.admin_role[]
    not?: NestedEnumadmin_roleFilter<$PrismaModel> | $Enums.admin_role
  }

  export type NestedEnumadmin_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.admin_role | Enumadmin_roleFieldRefInput<$PrismaModel>
    in?: $Enums.admin_role[]
    notIn?: $Enums.admin_role[]
    not?: NestedEnumadmin_roleWithAggregatesFilter<$PrismaModel> | $Enums.admin_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumadmin_roleFilter<$PrismaModel>
    _max?: NestedEnumadmin_roleFilter<$PrismaModel>
  }

  export type NestedEnumbuyer_transaction_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.buyer_transaction_status | Enumbuyer_transaction_statusFieldRefInput<$PrismaModel>
    in?: $Enums.buyer_transaction_status[]
    notIn?: $Enums.buyer_transaction_status[]
    not?: NestedEnumbuyer_transaction_statusFilter<$PrismaModel> | $Enums.buyer_transaction_status
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumbuyer_transaction_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.buyer_transaction_status | Enumbuyer_transaction_statusFieldRefInput<$PrismaModel>
    in?: $Enums.buyer_transaction_status[]
    notIn?: $Enums.buyer_transaction_status[]
    not?: NestedEnumbuyer_transaction_statusWithAggregatesFilter<$PrismaModel> | $Enums.buyer_transaction_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbuyer_transaction_statusFilter<$PrismaModel>
    _max?: NestedEnumbuyer_transaction_statusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type lotteryCreateWithoutWinnerInput = {
    name: string
    result_time: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    result_date: string
    buyer?: buyerCreateNestedManyWithoutLotteryInput
    ticket?: ticketCreateNestedManyWithoutLotteryInput
  }

  export type lotteryUncheckedCreateWithoutWinnerInput = {
    id?: number
    name: string
    result_time: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    result_date: string
    buyer?: buyerUncheckedCreateNestedManyWithoutLotteryInput
    ticket?: ticketUncheckedCreateNestedManyWithoutLotteryInput
  }

  export type lotteryCreateOrConnectWithoutWinnerInput = {
    where: lotteryWhereUniqueInput
    create: XOR<lotteryCreateWithoutWinnerInput, lotteryUncheckedCreateWithoutWinnerInput>
  }

  export type lotteryUpsertWithoutWinnerInput = {
    update: XOR<lotteryUpdateWithoutWinnerInput, lotteryUncheckedUpdateWithoutWinnerInput>
    create: XOR<lotteryCreateWithoutWinnerInput, lotteryUncheckedCreateWithoutWinnerInput>
    where?: lotteryWhereInput
  }

  export type lotteryUpdateToOneWithWhereWithoutWinnerInput = {
    where?: lotteryWhereInput
    data: XOR<lotteryUpdateWithoutWinnerInput, lotteryUncheckedUpdateWithoutWinnerInput>
  }

  export type lotteryUpdateWithoutWinnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    result_time?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result_date?: StringFieldUpdateOperationsInput | string
    buyer?: buyerUpdateManyWithoutLotteryNestedInput
    ticket?: ticketUpdateManyWithoutLotteryNestedInput
  }

  export type lotteryUncheckedUpdateWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    result_time?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result_date?: StringFieldUpdateOperationsInput | string
    buyer?: buyerUncheckedUpdateManyWithoutLotteryNestedInput
    ticket?: ticketUncheckedUpdateManyWithoutLotteryNestedInput
  }

  export type lotteryCreateWithoutBuyerInput = {
    name: string
    result_time: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    result_date: string
    ticket?: ticketCreateNestedManyWithoutLotteryInput
    winner?: winnerCreateNestedManyWithoutLotteryInput
  }

  export type lotteryUncheckedCreateWithoutBuyerInput = {
    id?: number
    name: string
    result_time: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    result_date: string
    ticket?: ticketUncheckedCreateNestedManyWithoutLotteryInput
    winner?: winnerUncheckedCreateNestedManyWithoutLotteryInput
  }

  export type lotteryCreateOrConnectWithoutBuyerInput = {
    where: lotteryWhereUniqueInput
    create: XOR<lotteryCreateWithoutBuyerInput, lotteryUncheckedCreateWithoutBuyerInput>
  }

  export type ticketpackageCreateWithoutBuyerInput = {
    name: string
    number_of_tickets: number
    paid_tickets: number
    free_tickets?: number | null
    price: number
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    ticket?: ticketCreateNestedManyWithoutTicketpackageInput
  }

  export type ticketpackageUncheckedCreateWithoutBuyerInput = {
    id?: number
    name: string
    number_of_tickets: number
    paid_tickets: number
    free_tickets?: number | null
    price: number
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    ticket?: ticketUncheckedCreateNestedManyWithoutTicketpackageInput
  }

  export type ticketpackageCreateOrConnectWithoutBuyerInput = {
    where: ticketpackageWhereUniqueInput
    create: XOR<ticketpackageCreateWithoutBuyerInput, ticketpackageUncheckedCreateWithoutBuyerInput>
  }

  export type ticketCreateWithoutBuyerInput = {
    ticket_number: string
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_id: string
    lottery: lotteryCreateNestedOneWithoutTicketInput
    ticketpackage: ticketpackageCreateNestedOneWithoutTicketInput
  }

  export type ticketUncheckedCreateWithoutBuyerInput = {
    id?: number
    lottery_id: number
    ticket_package_id: number
    ticket_number: string
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_id: string
  }

  export type ticketCreateOrConnectWithoutBuyerInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutBuyerInput, ticketUncheckedCreateWithoutBuyerInput>
  }

  export type ticketCreateManyBuyerInputEnvelope = {
    data: ticketCreateManyBuyerInput | ticketCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type lotteryUpsertWithoutBuyerInput = {
    update: XOR<lotteryUpdateWithoutBuyerInput, lotteryUncheckedUpdateWithoutBuyerInput>
    create: XOR<lotteryCreateWithoutBuyerInput, lotteryUncheckedCreateWithoutBuyerInput>
    where?: lotteryWhereInput
  }

  export type lotteryUpdateToOneWithWhereWithoutBuyerInput = {
    where?: lotteryWhereInput
    data: XOR<lotteryUpdateWithoutBuyerInput, lotteryUncheckedUpdateWithoutBuyerInput>
  }

  export type lotteryUpdateWithoutBuyerInput = {
    name?: StringFieldUpdateOperationsInput | string
    result_time?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result_date?: StringFieldUpdateOperationsInput | string
    ticket?: ticketUpdateManyWithoutLotteryNestedInput
    winner?: winnerUpdateManyWithoutLotteryNestedInput
  }

  export type lotteryUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    result_time?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result_date?: StringFieldUpdateOperationsInput | string
    ticket?: ticketUncheckedUpdateManyWithoutLotteryNestedInput
    winner?: winnerUncheckedUpdateManyWithoutLotteryNestedInput
  }

  export type ticketpackageUpsertWithoutBuyerInput = {
    update: XOR<ticketpackageUpdateWithoutBuyerInput, ticketpackageUncheckedUpdateWithoutBuyerInput>
    create: XOR<ticketpackageCreateWithoutBuyerInput, ticketpackageUncheckedCreateWithoutBuyerInput>
    where?: ticketpackageWhereInput
  }

  export type ticketpackageUpdateToOneWithWhereWithoutBuyerInput = {
    where?: ticketpackageWhereInput
    data: XOR<ticketpackageUpdateWithoutBuyerInput, ticketpackageUncheckedUpdateWithoutBuyerInput>
  }

  export type ticketpackageUpdateWithoutBuyerInput = {
    name?: StringFieldUpdateOperationsInput | string
    number_of_tickets?: IntFieldUpdateOperationsInput | number
    paid_tickets?: IntFieldUpdateOperationsInput | number
    free_tickets?: NullableIntFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: ticketUpdateManyWithoutTicketpackageNestedInput
  }

  export type ticketpackageUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number_of_tickets?: IntFieldUpdateOperationsInput | number
    paid_tickets?: IntFieldUpdateOperationsInput | number
    free_tickets?: NullableIntFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: ticketUncheckedUpdateManyWithoutTicketpackageNestedInput
  }

  export type ticketUpsertWithWhereUniqueWithoutBuyerInput = {
    where: ticketWhereUniqueInput
    update: XOR<ticketUpdateWithoutBuyerInput, ticketUncheckedUpdateWithoutBuyerInput>
    create: XOR<ticketCreateWithoutBuyerInput, ticketUncheckedCreateWithoutBuyerInput>
  }

  export type ticketUpdateWithWhereUniqueWithoutBuyerInput = {
    where: ticketWhereUniqueInput
    data: XOR<ticketUpdateWithoutBuyerInput, ticketUncheckedUpdateWithoutBuyerInput>
  }

  export type ticketUpdateManyWithWhereWithoutBuyerInput = {
    where: ticketScalarWhereInput
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutBuyerInput>
  }

  export type ticketScalarWhereInput = {
    AND?: ticketScalarWhereInput | ticketScalarWhereInput[]
    OR?: ticketScalarWhereInput[]
    NOT?: ticketScalarWhereInput | ticketScalarWhereInput[]
    id?: IntFilter<"ticket"> | number
    lottery_id?: IntFilter<"ticket"> | number
    ticket_package_id?: IntFilter<"ticket"> | number
    ticket_number?: StringFilter<"ticket"> | string
    createdAt?: DateTimeFilter<"ticket"> | Date | string
    updatedAt?: DateTimeFilter<"ticket"> | Date | string
    transaction_id?: StringFilter<"ticket"> | string
    buyer_id?: IntFilter<"ticket"> | number
  }

  export type buyerCreateWithoutLotteryInput = {
    name: string
    email: string
    phone: string
    state: string
    transaction_id?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_status?: $Enums.buyer_transaction_status
    is_read?: boolean
    ticketpackage?: ticketpackageCreateNestedOneWithoutBuyerInput
    ticket?: ticketCreateNestedManyWithoutBuyerInput
  }

  export type buyerUncheckedCreateWithoutLotteryInput = {
    id?: number
    name: string
    email: string
    phone: string
    state: string
    ticket_package_id?: number | null
    transaction_id?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_status?: $Enums.buyer_transaction_status
    is_read?: boolean
    ticket?: ticketUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type buyerCreateOrConnectWithoutLotteryInput = {
    where: buyerWhereUniqueInput
    create: XOR<buyerCreateWithoutLotteryInput, buyerUncheckedCreateWithoutLotteryInput>
  }

  export type buyerCreateManyLotteryInputEnvelope = {
    data: buyerCreateManyLotteryInput | buyerCreateManyLotteryInput[]
    skipDuplicates?: boolean
  }

  export type ticketCreateWithoutLotteryInput = {
    ticket_number: string
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_id: string
    buyer: buyerCreateNestedOneWithoutTicketInput
    ticketpackage: ticketpackageCreateNestedOneWithoutTicketInput
  }

  export type ticketUncheckedCreateWithoutLotteryInput = {
    id?: number
    ticket_package_id: number
    ticket_number: string
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_id: string
    buyer_id: number
  }

  export type ticketCreateOrConnectWithoutLotteryInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutLotteryInput, ticketUncheckedCreateWithoutLotteryInput>
  }

  export type ticketCreateManyLotteryInputEnvelope = {
    data: ticketCreateManyLotteryInput | ticketCreateManyLotteryInput[]
    skipDuplicates?: boolean
  }

  export type winnerCreateWithoutLotteryInput = {
    name: string
    phone: string
    email: string
    state: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket_number: string
    prize_amount: string
    winner_rank?: string | null
    claimed?: boolean
  }

  export type winnerUncheckedCreateWithoutLotteryInput = {
    id?: number
    name: string
    phone: string
    email: string
    state: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket_number: string
    prize_amount: string
    winner_rank?: string | null
    claimed?: boolean
  }

  export type winnerCreateOrConnectWithoutLotteryInput = {
    where: winnerWhereUniqueInput
    create: XOR<winnerCreateWithoutLotteryInput, winnerUncheckedCreateWithoutLotteryInput>
  }

  export type winnerCreateManyLotteryInputEnvelope = {
    data: winnerCreateManyLotteryInput | winnerCreateManyLotteryInput[]
    skipDuplicates?: boolean
  }

  export type buyerUpsertWithWhereUniqueWithoutLotteryInput = {
    where: buyerWhereUniqueInput
    update: XOR<buyerUpdateWithoutLotteryInput, buyerUncheckedUpdateWithoutLotteryInput>
    create: XOR<buyerCreateWithoutLotteryInput, buyerUncheckedCreateWithoutLotteryInput>
  }

  export type buyerUpdateWithWhereUniqueWithoutLotteryInput = {
    where: buyerWhereUniqueInput
    data: XOR<buyerUpdateWithoutLotteryInput, buyerUncheckedUpdateWithoutLotteryInput>
  }

  export type buyerUpdateManyWithWhereWithoutLotteryInput = {
    where: buyerScalarWhereInput
    data: XOR<buyerUpdateManyMutationInput, buyerUncheckedUpdateManyWithoutLotteryInput>
  }

  export type buyerScalarWhereInput = {
    AND?: buyerScalarWhereInput | buyerScalarWhereInput[]
    OR?: buyerScalarWhereInput[]
    NOT?: buyerScalarWhereInput | buyerScalarWhereInput[]
    id?: IntFilter<"buyer"> | number
    name?: StringFilter<"buyer"> | string
    email?: StringFilter<"buyer"> | string
    phone?: StringFilter<"buyer"> | string
    state?: StringFilter<"buyer"> | string
    lottery_id?: IntNullableFilter<"buyer"> | number | null
    ticket_package_id?: IntNullableFilter<"buyer"> | number | null
    transaction_id?: StringNullableFilter<"buyer"> | string | null
    createdAt?: DateTimeFilter<"buyer"> | Date | string
    updatedAt?: DateTimeFilter<"buyer"> | Date | string
    transaction_status?: Enumbuyer_transaction_statusFilter<"buyer"> | $Enums.buyer_transaction_status
    is_read?: BoolFilter<"buyer"> | boolean
  }

  export type ticketUpsertWithWhereUniqueWithoutLotteryInput = {
    where: ticketWhereUniqueInput
    update: XOR<ticketUpdateWithoutLotteryInput, ticketUncheckedUpdateWithoutLotteryInput>
    create: XOR<ticketCreateWithoutLotteryInput, ticketUncheckedCreateWithoutLotteryInput>
  }

  export type ticketUpdateWithWhereUniqueWithoutLotteryInput = {
    where: ticketWhereUniqueInput
    data: XOR<ticketUpdateWithoutLotteryInput, ticketUncheckedUpdateWithoutLotteryInput>
  }

  export type ticketUpdateManyWithWhereWithoutLotteryInput = {
    where: ticketScalarWhereInput
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutLotteryInput>
  }

  export type winnerUpsertWithWhereUniqueWithoutLotteryInput = {
    where: winnerWhereUniqueInput
    update: XOR<winnerUpdateWithoutLotteryInput, winnerUncheckedUpdateWithoutLotteryInput>
    create: XOR<winnerCreateWithoutLotteryInput, winnerUncheckedCreateWithoutLotteryInput>
  }

  export type winnerUpdateWithWhereUniqueWithoutLotteryInput = {
    where: winnerWhereUniqueInput
    data: XOR<winnerUpdateWithoutLotteryInput, winnerUncheckedUpdateWithoutLotteryInput>
  }

  export type winnerUpdateManyWithWhereWithoutLotteryInput = {
    where: winnerScalarWhereInput
    data: XOR<winnerUpdateManyMutationInput, winnerUncheckedUpdateManyWithoutLotteryInput>
  }

  export type winnerScalarWhereInput = {
    AND?: winnerScalarWhereInput | winnerScalarWhereInput[]
    OR?: winnerScalarWhereInput[]
    NOT?: winnerScalarWhereInput | winnerScalarWhereInput[]
    id?: IntFilter<"winner"> | number
    name?: StringFilter<"winner"> | string
    phone?: StringFilter<"winner"> | string
    email?: StringFilter<"winner"> | string
    state?: StringFilter<"winner"> | string
    createdAt?: DateTimeFilter<"winner"> | Date | string
    updatedAt?: DateTimeFilter<"winner"> | Date | string
    ticket_number?: StringFilter<"winner"> | string
    prize_amount?: StringFilter<"winner"> | string
    winner_rank?: StringNullableFilter<"winner"> | string | null
    lottery_id?: IntFilter<"winner"> | number
    claimed?: BoolFilter<"winner"> | boolean
  }

  export type buyerCreateWithoutTicketInput = {
    name: string
    email: string
    phone: string
    state: string
    transaction_id?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_status?: $Enums.buyer_transaction_status
    is_read?: boolean
    lottery?: lotteryCreateNestedOneWithoutBuyerInput
    ticketpackage?: ticketpackageCreateNestedOneWithoutBuyerInput
  }

  export type buyerUncheckedCreateWithoutTicketInput = {
    id?: number
    name: string
    email: string
    phone: string
    state: string
    lottery_id?: number | null
    ticket_package_id?: number | null
    transaction_id?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_status?: $Enums.buyer_transaction_status
    is_read?: boolean
  }

  export type buyerCreateOrConnectWithoutTicketInput = {
    where: buyerWhereUniqueInput
    create: XOR<buyerCreateWithoutTicketInput, buyerUncheckedCreateWithoutTicketInput>
  }

  export type lotteryCreateWithoutTicketInput = {
    name: string
    result_time: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    result_date: string
    buyer?: buyerCreateNestedManyWithoutLotteryInput
    winner?: winnerCreateNestedManyWithoutLotteryInput
  }

  export type lotteryUncheckedCreateWithoutTicketInput = {
    id?: number
    name: string
    result_time: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    result_date: string
    buyer?: buyerUncheckedCreateNestedManyWithoutLotteryInput
    winner?: winnerUncheckedCreateNestedManyWithoutLotteryInput
  }

  export type lotteryCreateOrConnectWithoutTicketInput = {
    where: lotteryWhereUniqueInput
    create: XOR<lotteryCreateWithoutTicketInput, lotteryUncheckedCreateWithoutTicketInput>
  }

  export type ticketpackageCreateWithoutTicketInput = {
    name: string
    number_of_tickets: number
    paid_tickets: number
    free_tickets?: number | null
    price: number
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    buyer?: buyerCreateNestedManyWithoutTicketpackageInput
  }

  export type ticketpackageUncheckedCreateWithoutTicketInput = {
    id?: number
    name: string
    number_of_tickets: number
    paid_tickets: number
    free_tickets?: number | null
    price: number
    is_active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    buyer?: buyerUncheckedCreateNestedManyWithoutTicketpackageInput
  }

  export type ticketpackageCreateOrConnectWithoutTicketInput = {
    where: ticketpackageWhereUniqueInput
    create: XOR<ticketpackageCreateWithoutTicketInput, ticketpackageUncheckedCreateWithoutTicketInput>
  }

  export type buyerUpsertWithoutTicketInput = {
    update: XOR<buyerUpdateWithoutTicketInput, buyerUncheckedUpdateWithoutTicketInput>
    create: XOR<buyerCreateWithoutTicketInput, buyerUncheckedCreateWithoutTicketInput>
    where?: buyerWhereInput
  }

  export type buyerUpdateToOneWithWhereWithoutTicketInput = {
    where?: buyerWhereInput
    data: XOR<buyerUpdateWithoutTicketInput, buyerUncheckedUpdateWithoutTicketInput>
  }

  export type buyerUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_status?: Enumbuyer_transaction_statusFieldUpdateOperationsInput | $Enums.buyer_transaction_status
    is_read?: BoolFieldUpdateOperationsInput | boolean
    lottery?: lotteryUpdateOneWithoutBuyerNestedInput
    ticketpackage?: ticketpackageUpdateOneWithoutBuyerNestedInput
  }

  export type buyerUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lottery_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_package_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_status?: Enumbuyer_transaction_statusFieldUpdateOperationsInput | $Enums.buyer_transaction_status
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type lotteryUpsertWithoutTicketInput = {
    update: XOR<lotteryUpdateWithoutTicketInput, lotteryUncheckedUpdateWithoutTicketInput>
    create: XOR<lotteryCreateWithoutTicketInput, lotteryUncheckedCreateWithoutTicketInput>
    where?: lotteryWhereInput
  }

  export type lotteryUpdateToOneWithWhereWithoutTicketInput = {
    where?: lotteryWhereInput
    data: XOR<lotteryUpdateWithoutTicketInput, lotteryUncheckedUpdateWithoutTicketInput>
  }

  export type lotteryUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    result_time?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result_date?: StringFieldUpdateOperationsInput | string
    buyer?: buyerUpdateManyWithoutLotteryNestedInput
    winner?: winnerUpdateManyWithoutLotteryNestedInput
  }

  export type lotteryUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    result_time?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result_date?: StringFieldUpdateOperationsInput | string
    buyer?: buyerUncheckedUpdateManyWithoutLotteryNestedInput
    winner?: winnerUncheckedUpdateManyWithoutLotteryNestedInput
  }

  export type ticketpackageUpsertWithoutTicketInput = {
    update: XOR<ticketpackageUpdateWithoutTicketInput, ticketpackageUncheckedUpdateWithoutTicketInput>
    create: XOR<ticketpackageCreateWithoutTicketInput, ticketpackageUncheckedCreateWithoutTicketInput>
    where?: ticketpackageWhereInput
  }

  export type ticketpackageUpdateToOneWithWhereWithoutTicketInput = {
    where?: ticketpackageWhereInput
    data: XOR<ticketpackageUpdateWithoutTicketInput, ticketpackageUncheckedUpdateWithoutTicketInput>
  }

  export type ticketpackageUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    number_of_tickets?: IntFieldUpdateOperationsInput | number
    paid_tickets?: IntFieldUpdateOperationsInput | number
    free_tickets?: NullableIntFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: buyerUpdateManyWithoutTicketpackageNestedInput
  }

  export type ticketpackageUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number_of_tickets?: IntFieldUpdateOperationsInput | number
    paid_tickets?: IntFieldUpdateOperationsInput | number
    free_tickets?: NullableIntFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: buyerUncheckedUpdateManyWithoutTicketpackageNestedInput
  }

  export type buyerCreateWithoutTicketpackageInput = {
    name: string
    email: string
    phone: string
    state: string
    transaction_id?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_status?: $Enums.buyer_transaction_status
    is_read?: boolean
    lottery?: lotteryCreateNestedOneWithoutBuyerInput
    ticket?: ticketCreateNestedManyWithoutBuyerInput
  }

  export type buyerUncheckedCreateWithoutTicketpackageInput = {
    id?: number
    name: string
    email: string
    phone: string
    state: string
    lottery_id?: number | null
    transaction_id?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_status?: $Enums.buyer_transaction_status
    is_read?: boolean
    ticket?: ticketUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type buyerCreateOrConnectWithoutTicketpackageInput = {
    where: buyerWhereUniqueInput
    create: XOR<buyerCreateWithoutTicketpackageInput, buyerUncheckedCreateWithoutTicketpackageInput>
  }

  export type buyerCreateManyTicketpackageInputEnvelope = {
    data: buyerCreateManyTicketpackageInput | buyerCreateManyTicketpackageInput[]
    skipDuplicates?: boolean
  }

  export type ticketCreateWithoutTicketpackageInput = {
    ticket_number: string
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_id: string
    buyer: buyerCreateNestedOneWithoutTicketInput
    lottery: lotteryCreateNestedOneWithoutTicketInput
  }

  export type ticketUncheckedCreateWithoutTicketpackageInput = {
    id?: number
    lottery_id: number
    ticket_number: string
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_id: string
    buyer_id: number
  }

  export type ticketCreateOrConnectWithoutTicketpackageInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutTicketpackageInput, ticketUncheckedCreateWithoutTicketpackageInput>
  }

  export type ticketCreateManyTicketpackageInputEnvelope = {
    data: ticketCreateManyTicketpackageInput | ticketCreateManyTicketpackageInput[]
    skipDuplicates?: boolean
  }

  export type buyerUpsertWithWhereUniqueWithoutTicketpackageInput = {
    where: buyerWhereUniqueInput
    update: XOR<buyerUpdateWithoutTicketpackageInput, buyerUncheckedUpdateWithoutTicketpackageInput>
    create: XOR<buyerCreateWithoutTicketpackageInput, buyerUncheckedCreateWithoutTicketpackageInput>
  }

  export type buyerUpdateWithWhereUniqueWithoutTicketpackageInput = {
    where: buyerWhereUniqueInput
    data: XOR<buyerUpdateWithoutTicketpackageInput, buyerUncheckedUpdateWithoutTicketpackageInput>
  }

  export type buyerUpdateManyWithWhereWithoutTicketpackageInput = {
    where: buyerScalarWhereInput
    data: XOR<buyerUpdateManyMutationInput, buyerUncheckedUpdateManyWithoutTicketpackageInput>
  }

  export type ticketUpsertWithWhereUniqueWithoutTicketpackageInput = {
    where: ticketWhereUniqueInput
    update: XOR<ticketUpdateWithoutTicketpackageInput, ticketUncheckedUpdateWithoutTicketpackageInput>
    create: XOR<ticketCreateWithoutTicketpackageInput, ticketUncheckedCreateWithoutTicketpackageInput>
  }

  export type ticketUpdateWithWhereUniqueWithoutTicketpackageInput = {
    where: ticketWhereUniqueInput
    data: XOR<ticketUpdateWithoutTicketpackageInput, ticketUncheckedUpdateWithoutTicketpackageInput>
  }

  export type ticketUpdateManyWithWhereWithoutTicketpackageInput = {
    where: ticketScalarWhereInput
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutTicketpackageInput>
  }

  export type ticketCreateManyBuyerInput = {
    id?: number
    lottery_id: number
    ticket_package_id: number
    ticket_number: string
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_id: string
  }

  export type ticketUpdateWithoutBuyerInput = {
    ticket_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    lottery?: lotteryUpdateOneRequiredWithoutTicketNestedInput
    ticketpackage?: ticketpackageUpdateOneRequiredWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    lottery_id?: IntFieldUpdateOperationsInput | number
    ticket_package_id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type ticketUncheckedUpdateManyWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    lottery_id?: IntFieldUpdateOperationsInput | number
    ticket_package_id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type buyerCreateManyLotteryInput = {
    id?: number
    name: string
    email: string
    phone: string
    state: string
    ticket_package_id?: number | null
    transaction_id?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_status?: $Enums.buyer_transaction_status
    is_read?: boolean
  }

  export type ticketCreateManyLotteryInput = {
    id?: number
    ticket_package_id: number
    ticket_number: string
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_id: string
    buyer_id: number
  }

  export type winnerCreateManyLotteryInput = {
    id?: number
    name: string
    phone: string
    email: string
    state: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket_number: string
    prize_amount: string
    winner_rank?: string | null
    claimed?: boolean
  }

  export type buyerUpdateWithoutLotteryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_status?: Enumbuyer_transaction_statusFieldUpdateOperationsInput | $Enums.buyer_transaction_status
    is_read?: BoolFieldUpdateOperationsInput | boolean
    ticketpackage?: ticketpackageUpdateOneWithoutBuyerNestedInput
    ticket?: ticketUpdateManyWithoutBuyerNestedInput
  }

  export type buyerUncheckedUpdateWithoutLotteryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    ticket_package_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_status?: Enumbuyer_transaction_statusFieldUpdateOperationsInput | $Enums.buyer_transaction_status
    is_read?: BoolFieldUpdateOperationsInput | boolean
    ticket?: ticketUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type buyerUncheckedUpdateManyWithoutLotteryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    ticket_package_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_status?: Enumbuyer_transaction_statusFieldUpdateOperationsInput | $Enums.buyer_transaction_status
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ticketUpdateWithoutLotteryInput = {
    ticket_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    buyer?: buyerUpdateOneRequiredWithoutTicketNestedInput
    ticketpackage?: ticketpackageUpdateOneRequiredWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateWithoutLotteryInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_package_id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    buyer_id?: IntFieldUpdateOperationsInput | number
  }

  export type ticketUncheckedUpdateManyWithoutLotteryInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_package_id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    buyer_id?: IntFieldUpdateOperationsInput | number
  }

  export type winnerUpdateWithoutLotteryInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_number?: StringFieldUpdateOperationsInput | string
    prize_amount?: StringFieldUpdateOperationsInput | string
    winner_rank?: NullableStringFieldUpdateOperationsInput | string | null
    claimed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type winnerUncheckedUpdateWithoutLotteryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_number?: StringFieldUpdateOperationsInput | string
    prize_amount?: StringFieldUpdateOperationsInput | string
    winner_rank?: NullableStringFieldUpdateOperationsInput | string | null
    claimed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type winnerUncheckedUpdateManyWithoutLotteryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_number?: StringFieldUpdateOperationsInput | string
    prize_amount?: StringFieldUpdateOperationsInput | string
    winner_rank?: NullableStringFieldUpdateOperationsInput | string | null
    claimed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type buyerCreateManyTicketpackageInput = {
    id?: number
    name: string
    email: string
    phone: string
    state: string
    lottery_id?: number | null
    transaction_id?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_status?: $Enums.buyer_transaction_status
    is_read?: boolean
  }

  export type ticketCreateManyTicketpackageInput = {
    id?: number
    lottery_id: number
    ticket_number: string
    createdAt?: Date | string
    updatedAt: Date | string
    transaction_id: string
    buyer_id: number
  }

  export type buyerUpdateWithoutTicketpackageInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_status?: Enumbuyer_transaction_statusFieldUpdateOperationsInput | $Enums.buyer_transaction_status
    is_read?: BoolFieldUpdateOperationsInput | boolean
    lottery?: lotteryUpdateOneWithoutBuyerNestedInput
    ticket?: ticketUpdateManyWithoutBuyerNestedInput
  }

  export type buyerUncheckedUpdateWithoutTicketpackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lottery_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_status?: Enumbuyer_transaction_statusFieldUpdateOperationsInput | $Enums.buyer_transaction_status
    is_read?: BoolFieldUpdateOperationsInput | boolean
    ticket?: ticketUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type buyerUncheckedUpdateManyWithoutTicketpackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lottery_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_status?: Enumbuyer_transaction_statusFieldUpdateOperationsInput | $Enums.buyer_transaction_status
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ticketUpdateWithoutTicketpackageInput = {
    ticket_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    buyer?: buyerUpdateOneRequiredWithoutTicketNestedInput
    lottery?: lotteryUpdateOneRequiredWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateWithoutTicketpackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    lottery_id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    buyer_id?: IntFieldUpdateOperationsInput | number
  }

  export type ticketUncheckedUpdateManyWithoutTicketpackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    lottery_id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    buyer_id?: IntFieldUpdateOperationsInput | number
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