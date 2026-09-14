import type { UserProfileData, ProfileResponse } from '../hr_my_profile_types/AdminHrMyProfileTypes';
import { MOCK_USER_PROFILE } from '../hr_my_profile_constants/AdminHrMyProfileConstants';

let currentProfile = { ...MOCK_USER_PROFILE };

export async function fetchMyProfile(): Promise<ProfileResponse<UserProfileData>> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return { success: true, data: currentProfile };
}

export async function updateMyProfile(updatedData: UserProfileData): Promise<ProfileResponse<UserProfileData>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  currentProfile = { ...updatedData };
  return { success: true, data: currentProfile };
}
