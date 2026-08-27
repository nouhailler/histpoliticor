export interface ElectionResultSeries {
  id: string;
  label: string;
  color: string;
}

export interface DepartmentElectionResult {
  name: string;
  registered: number;
  voters: number;
  expressed: number;
  blankInvalid: number;
  values: Record<string, number>;
}

export interface ElectionTerritorialResult {
  roundLabel: string;
  roundDate: string;
  coverage: string;
  registered: number;
  voters: number;
  expressed: number;
  blankInvalid: number;
  series: ElectionResultSeries[];
  nationalValues: Record<string, number>;
  departments: Record<string, DepartmentElectionResult>;
  sourceIds: string[];
}

export type ElectionTerritorialResults = Record<string, ElectionTerritorialResult>;

let resultsPromise: Promise<ElectionTerritorialResults> | undefined;

export function loadElectionTerritorialResults() {
  resultsPromise ??= import("./electionTerritorialResults.generated.json")
    .then((module) => module.default as ElectionTerritorialResults);
  return resultsPromise;
}
