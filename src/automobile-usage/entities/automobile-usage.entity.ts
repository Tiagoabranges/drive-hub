// src/automobile-usage/entities/automobile-usage.entity.ts

export class AutomobileUsage {
  id: number;
  startDate: Date;
  endDate: Date;
  driverId: number; // Renomeado para driverId
  automobileId: number; // Renomeado para automobileId
  usageReason: string; // Renomeado para usageReason
}
