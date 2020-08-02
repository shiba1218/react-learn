/** @jsx */
import { jsx, css } from '@emotion/core'; 

const size = {
  mobile: '320px',
  deskTop: '960px',
};

export const device = {
  mobile: `min-width: ${size.mobile}`,
  deskTop: `min-width: ${size.deskTop}`,
};

