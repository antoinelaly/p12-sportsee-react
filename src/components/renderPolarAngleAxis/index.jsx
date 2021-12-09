import React from 'react';
import { Text, } from 'recharts';

function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 8}
        x={x + (x - cx) / 80}
      >
        {payload.value}
      </Text>
    );
  }

  export default renderPolarAngleAxis;