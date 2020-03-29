import * as Colors from 'common/colors'
import { parseColorHexToRgbaString } from 'common/utils/colors'

const spacingUnit = 16

const Theme = {
  palette: {
    ...Colors,
  },
  gradients: {
    primaryColorLight: `linear-gradient(to left, ${Colors.primary[4]}, ${
      Colors.primary[3]
    })`,
  },
  spacing: {
    size1: `${spacingUnit * 0.25}px`, // 4px
    size2: `${spacingUnit * 0.5}px`, // 8px
    size3: `${spacingUnit * 0.75}px`, // 12px
    size4: `${spacingUnit * 1.0}px`, // 16px
    size5: `${spacingUnit * 1.5}px`, // 24px
    size6: `${spacingUnit * 2.0}px`, // 32px
    size7: `${spacingUnit * 3.0}px`, // 48px
    size8: `${spacingUnit * 4.0}px`, // 64px
    size9: `${spacingUnit * 6.0}px`, // 96px
    size10: `${spacingUnit * 8.0}px`, // 128px
    size11: `${spacingUnit * 12.0}px`, // 192px
    size12: `${spacingUnit * 16.0}px`, // 256px
    size13: `${spacingUnit * 24.0}px`, // 384px
    size14: `${spacingUnit * 32.0}px`, // 512px
    size15: `${spacingUnit * 40.0}px`, // 640px
    size16: `${spacingUnit * 48.0}px`, // 768px
  },
  fontSizing: {
    size1: `0.75rem`, // 12px
    size2: `0.875rem`, // 14px
    size3: `1rem`, // 16px par default
    size4: `1.125rem`, // 18px
    size5: `1.25rem`, // 20px
    size6: `1.5rem`, // 24px
    size7: `1.875rem`, // 30px
    size8: `2.25rem`, // 36px
    size9: `3rem`, // 48px
    size10: `3.75rem`, // 60px
    size11: `4.5rem`, // 72px
  },
  UIColors: {
    overlayBackgroundColor: parseColorHexToRgbaString(Colors.blue[3], 0.3),
  },
  timing: {
    fadeAnimation: {
      string: '0.25s',
      ms: 250,
    },
  },
}

export default Theme
