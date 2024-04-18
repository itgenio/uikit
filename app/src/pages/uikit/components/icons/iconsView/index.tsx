import './style.less';

import React, { CSSProperties, Fragment, useCallback, useMemo, useState } from 'react';
import { TextField } from '@itgenio/gkit/textField';
import { Tooltip } from '@itgenio/gkit/tooltip';
import { DismissIcon } from '@itgenio/icons/dismissIcon';
import { STEP, Slider } from '../../slider';

const DEFAULT_SIZE = 40;

type Props = { icons: Function[] };

export const IconsView = React.memo(({ icons }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [currentSize, setCurrentSize] = useState(DEFAULT_SIZE);

  const onClickMinus = useCallback(() => setCurrentSize(s => s - STEP), []);
  const onClickPlus = useCallback(() => setCurrentSize(s => s + STEP), []);
  const onChangeInput = useCallback(e => setCurrentSize(e.target.valueAsNumber), []);

  const filteredIcons = useMemo(() => {
    return icons.filter(Icon => new RegExp(searchValue, 'gi').test(Icon.name));
  }, [icons, searchValue]);

  return (
    <div className="icons">
      <div className="sizes">
        <span>Current size: {currentSize}</span>

        <Slider
          onClickMinus={onClickMinus}
          onClickPlus={onClickPlus}
          value={currentSize}
          onChangeInput={onChangeInput}
        />
      </div>

      <TextField
        className="search"
        value={searchValue}
        endAdornment={<DismissIcon onClick={() => setSearchValue('')} />}
        onChange={e => setSearchValue(e.target.value)}
        size="small"
      />

      <div className="board" style={{ '--icon-size': `${currentSize}px` } as CSSProperties}>
        <MemoIcons icons={filteredIcons} />
      </div>
    </div>
  );
});

IconsView.displayName = 'IconsView';

const MemoIcons = React.memo(({ icons }: { icons: Function[] }) => {
  return (
    <Fragment>
      {icons.map(Icon => {
        return (
          <Tooltip key={Icon.name} content={Icon.name}>
            <Icon />
          </Tooltip>
        );
      })}
    </Fragment>
  );
});

MemoIcons.displayName = 'MemoIcons';
