import type { EmployeeAsset } from "../hr_assets_types/HrAssetsTypes";

export const MOCK_ASSETS: EmployeeAsset[] = [
  { 
    id: "ast-1", employeeId: "EMP-001", employeeName: "Amit Sharma", department: "Science",
    assetName: "Dell Latitude 5420", category: "Laptop", assetIdNumber: "DL-LT-8890",
    issueDate: "2024-01-15", expectedReturnDate: "2027-01-15", status: "Assigned", notes: "Brand new condition."
  },
  { 
    id: "ast-2", employeeId: "EMP-002", employeeName: "Neha Gupta", department: "Administration",
    assetName: "Master Key Ring A", category: "Keys", assetIdNumber: "MK-001",
    issueDate: "2024-02-01", expectedReturnDate: "2024-12-31", status: "Assigned", notes: "Contains 5 keys."
  },
  { 
    id: "ast-3", employeeId: "EMP-003", employeeName: "Rahul Verma", department: "Sports",
    assetName: "Sports Tracksuit Kit", category: "Uniform", assetIdNumber: "UNI-SP-102",
    issueDate: "2023-08-10", expectedReturnDate: "2024-08-10", actualReturnDate: "2024-08-12", status: "Returned", notes: "Normal wear and tear."
  },
  { 
    id: "ast-4", employeeId: "EMP-004", employeeName: "Sunita Rao", department: "Library",
    assetName: "Barcode Scanner Handheld", category: "Equipment", assetIdNumber: "BCS-5509",
    issueDate: "2023-05-20", expectedReturnDate: "2025-05-20", status: "Damaged", notes: "Laser not working, sent for repair."
  },
  { 
    id: "ast-5", employeeId: "EMP-005", employeeName: "Vikas Singh", department: "Security",
    assetName: "RFID Access Card", category: "ID Card", assetIdNumber: "ID-9099",
    issueDate: "2022-01-10", expectedReturnDate: "2025-01-10", status: "Lost", notes: "Reported lost on 15 Oct 2024. Blocked."
  }
];

