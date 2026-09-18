// Transport Manager Authorization & Access Rules

/**
 * Validates if the user has the Transport Manager role.
 */
export const checkTransportManagerAccess = (role: string) => {
  return role === 'TRANSPORT_MANAGER' || role === 'ADMIN' || role === 'SUPER_ADMIN';
};

/**
 * EXPLICIT CONSTRAINT: Separate Driver/Conductor login is NOT mandatory.
 * They are managed as entities within the Transport Manager's dashboard.
 */
export const canDriverLogin = () => {
  return false; 
};

export const canConductorLogin = () => {
  return false;
};
