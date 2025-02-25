type ValueType = string | number | boolean;
export type Union<T extends { [key: string]: ValueType } | ReadonlyArray<ValueType>> = T extends ReadonlyArray<ValueType>
  ? T[number]
  : T extends { [key: string]: infer U }
  ? U
  : never;

export const Client = {
  ClientNavigationBar: 'ClientNavigationBar',
  HomeDetailNonRecurring: 'HomeDetailNonRecurring',
  HomeDetailRecurring: 'HomeDetailRecurring',
  ServiceStackGroup: 'ServiceStackGroup',
} as const;

export type Client = Union<typeof Client>;

export type ClientStackParamList = {
  [Client.ClientNavigationBar]: object;
  [Client.HomeDetailNonRecurring]: {
    headerTitle: string;
  };
  [Client.HomeDetailRecurring]: {
    headerTitle: string;
  };
  [Client.ServiceStackGroup]: object;
};
