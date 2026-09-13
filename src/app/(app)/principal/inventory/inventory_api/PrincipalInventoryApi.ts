import { PrincipalAsset, PrincipalInventoryIssue, PrincipalInventoryStats } from '../inventory_types/PrincipalInventory.types';
import { PRINCIPAL_MOCK_INVENTORY_STATS, PRINCIPAL_MOCK_ASSETS, PRINCIPAL_MOCK_INVENTORY_ISSUES } from '../inventory_constants/PrincipalInventoryConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalInventoryStats = async (): Promise<PrincipalInventoryStats> => {
  await delay(MOCK_DELAY);
  return { ...PRINCIPAL_MOCK_INVENTORY_STATS };
};

export const fetchPrincipalAssets = async (): Promise<PrincipalAsset[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_ASSETS];
};

export const fetchPrincipalInventoryIssues = async (): Promise<PrincipalInventoryIssue[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_INVENTORY_ISSUES];
};

export const resolveInventoryIssue = async (issueId: string, resolution: string): Promise<boolean> => {
  await delay(600);
  return true;
};
