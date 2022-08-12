import './style.less';
import React from 'react';

const styles = [
  ['neutral', [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900]],
  ['blue', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]],
  ['green', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]],
  ['purple', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]],
  ['orange', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]],
] as const;

export function Colors() {
  return (
    <div className="colors">
      {styles.map(([name, nums]) => {
        return (
          <div key={name} className="style">
            <p className="text-xl" style={{ textTransform: 'capitalize' }}>
              {name}
            </p>
            <div className="modes">
              <div className="shadow-md">
                {nums.map(n => (
                  <div
                    key={`${name}${n}`}
                    className="color"
                    style={{ backgroundColor: `var(--gkit-color-${name}-${n})` }}
                  >
                    <pre>
                      <code style={{ userSelect: 'all' }} className="text-xs">{`text-${name}-${n}`}</code>
                    </pre>
                  </div>
                ))}
              </div>
              <div className="shadow-md dark-mode">
                {nums.map(n => (
                  <div
                    key={`${name}${n}`}
                    className="color"
                    style={{ backgroundColor: `var(--gkit-color-${name}-${n})` }}
                  >
                    <pre>
                      <code style={{ userSelect: 'all' }} className="text-xs">{`text-${name}-${n}`}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Colors.displayName = 'Colors';
