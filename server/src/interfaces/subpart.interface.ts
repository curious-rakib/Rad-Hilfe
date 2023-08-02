interface SubPart {
  name: string;
  Price: number;
  depreciationRate?: DepreciationRate;
  category: string;
}

interface DepreciationRate {
  // Define properties for depreciationRate here if needed
}

export { SubPart };
