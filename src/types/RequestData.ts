interface MethodProperties {
  Documents: { DocumentNumber: string | number; }[];
}

export interface RequestData {
  apiKey: string;
  modelName: string;
  calledMethod: string;
  methodProperties: MethodProperties;
}
