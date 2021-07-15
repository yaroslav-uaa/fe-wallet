import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import HomeTabMobile from '../TableComponents/HomeTabMobile';
import HomeTabLarge from '../TableComponents/HomeTabLarge';

function HomeTab() {
  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.md),
  );

  return <>{isMobile ? <HomeTabMobile /> : <HomeTabLarge />}</>;
}

export default HomeTab;
