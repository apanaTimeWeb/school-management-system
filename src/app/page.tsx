import { redirect } from 'next/navigation';

export default function Home() {
  // Redirecting the root path to the newly built Super Admin Dashboard
  redirect('/super-admin/dashboard');
}
