import { width, height, totalSize } from "./dimensions";
// import { isTablet } from "../Utils/orientation";

export const spacing: number[] = [
  0, 1, 2, 4, 8, 12, 16, 24, 32, 48, 64, 72, 80, 88,
];
export const HorizontalSpacing: number[] = [
  width(0),
  width(1),
  width(2),
  width(3),
  width(4),
  width(6),
  width(8),
  width(10),
  width(12),
  width(14),
  width(16),
  width(24),
  width(32),
  width(48),
  width(64),
  width(72),
  width(80),
  width(88),
];

export const VerticalSpacing: number[] = [
  height(0),
  height(1),
  height(2),
  height(3),
  height(4),
  height(6),
  height(8),
  height(10),
  height(12),
  height(14),
  height(16),
  height(24),
  height(28),
  height(32),
  height(48),
  height(64),
  height(72),
  height(80),
  height(88),
];

const mobileFontSize: number[] = [
  totalSize(1.1), //10px in figma
  totalSize(1.2), //12px in figma
  totalSize(1.5), // 14px in figma
  totalSize(1.7), // 16px in figma
  totalSize(1.9), // 18px in figma
  totalSize(2.15), //20px in figma
  totalSize(2.58), //24px in figma
  totalSize(3.07), //30px in figma
  totalSize(3.3), //32px in figma
  totalSize(3.7),
];

const tabletFontSize: number[] = [
  totalSize(0.85), //10px in figma
  totalSize(1.01), //12px in figma
  totalSize(1.21), // 14px in figma
  totalSize(1.3), // 16px in figma
  totalSize(1.4), // 18px in figma
  totalSize(1.6), //20px in figma
  totalSize(1.9), //24px in figma
  totalSize(2.4), //30px in figma
  totalSize(2.6), //32px in figma
  totalSize(3.9),
];

export const fontSize = true ? tabletFontSize : mobileFontSize;
