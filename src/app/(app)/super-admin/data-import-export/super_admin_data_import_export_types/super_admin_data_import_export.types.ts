export const IMPORT_EXPORT_ENTITIES = [
  'Students',
  'Parents',
  'Teachers',
  'Staff',
  'Classes',
  'Subjects',
  'Fees',
  'Books',
  'Inventory'
] as const;

export type ImportExportEntityType = typeof IMPORT_EXPORT_ENTITIES[number];
