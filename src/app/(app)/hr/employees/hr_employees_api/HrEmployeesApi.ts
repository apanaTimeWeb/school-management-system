import type { EmployeeListResponse, EmployeeDetailResponse, FetchEmployeesParams } from '../hr_employees_types/HrEmployeesTypes';
import { MOCK_EMPLOYEES } from '../hr_employees_constants/HrEmployeesConstants';

export async function fetchEmployees(params?: FetchEmployeesParams): Promise<EmployeeListResponse> {
  await new Promise(resolve => setTimeout(resolve, 600)); // Network delay

  let filtered = [...MOCK_EMPLOYEES];
  
  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(e => 
      e.personal.firstName.toLowerCase().includes(q) || 
      e.personal.lastName.toLowerCase().includes(q) ||
      e.employeeId.toLowerCase().includes(q)
    );
  }

  if (params?.status) {
    filtered = filtered.filter(e => e.status.toLowerCase() === params.status?.toLowerCase());
  }
  
  if (params?.department) {
    filtered = filtered.filter(e => e.joining.department.toLowerCase() === params.department?.toLowerCase());
  }

  return {
    success: true,
    message: "Employees fetched successfully",
    data: filtered,
    meta: {
      total: filtered.length,
      page: params?.page || 1,
      limit: params?.limit || 10
    }
  };
}

export async function fetchEmployeeById(id: string): Promise<EmployeeDetailResponse> {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const employee = MOCK_EMPLOYEES.find(e => e.id === id);
  
  if (!employee) {
    return {
      success: false,
      message: "Employee not found",
      data: null
    };
  }

  return {
    success: true,
    message: "Employee fetched successfully",
    data: employee
  };
}

