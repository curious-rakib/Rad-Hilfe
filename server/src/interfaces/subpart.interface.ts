interface Subpart {
  name: string;
  Price: number;
  depreciationRate?: DepreciationRate;
  category: string;
}

interface DepreciationRate {
  unpavedRoute: number;
  pavedRoute: number;
}

export { Subpart };
