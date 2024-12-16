import React, { useCallback, useState } from 'react';
import { Button } from '@itgenio/gkit/button';
import { Checkbox } from '@itgenio/gkit/checkbox';
import { Modal } from '@itgenio/gkit/modal';
import { MultiSelect, MultiSelectOption } from '@itgenio/gkit/multiSelect';
import { Select, SelectOption } from '@itgenio/gkit/select';
import { getMultiSelectOptions } from '../../multiSelects';
import { defaultSelectOptions } from '../../selects';

export const ModalExampleDefault = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(o => !o)}>Open</Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header>
          <Modal.Title title="Complex" />
        </Modal.Header>

        <Modal.Body>
          <Modal.Text>Какой-то длинный текст</Modal.Text>
        </Modal.Body>

        <Modal.Footer className="modal-footer-flex" idQa="modal-footer">
          <Button type="secondary">Ok</Button>

          <Button type="danger">Not OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export const ModalExampleIgnoreClickOverlay = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(o => !o)}>Open</Button>

      <Modal open={open} onClose={() => setOpen(false)} ignoreOverlayClick>
        <Modal.Header>
          <Modal.Title title="Complex" />
        </Modal.Header>

        <Modal.Body>
          <Modal.Text>Какой-то длинный текст</Modal.Text>
        </Modal.Body>

        <Modal.Footer className="modal-footer-flex" idQa="modal-footer">
          <Button type="secondary">Ok</Button>

          <Button type="danger">Not OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalExampleDefaultAsBlock = () => {
  return (
    <Modal asBlock>
      <Modal.Header>
        <Modal.Title title="Complex" />
      </Modal.Header>

      <Modal.Body>
        <Modal.Text>Какой-то длинный текст</Modal.Text>
      </Modal.Body>
    </Modal>
  );
};

export const ModalExampleAsBlockWithFooter = () => {
  return (
    <Modal asBlock idQa="custom-modal-id-qa">
      <Modal.Header idQa="modal-header">
        <Modal.Title title="Modal with footer" idQa="modal-title" />
      </Modal.Header>

      <Modal.Footer className="modal-footer-flex" idQa="modal-footer">
        <Button type="secondary">Ok</Button>

        <Button type="danger">Not OK</Button>
      </Modal.Footer>
    </Modal>
  );
};

export const ModalExampleAsBlockFullScreen = () => {
  return (
    <Modal asBlock fullScreen>
      <Modal.Header>
        <Modal.Title title="Modal as block fullscreen" idQa="modal-title" />
      </Modal.Header>

      <Modal.Footer className="modal-footer-flex" idQa="modal-footer">
        <Button type="secondary">Ok</Button>

        <Button type="danger">Not OK</Button>
      </Modal.Footer>
    </Modal>
  );
};

export const ModalExampleDefaultFullScreen = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(o => !o)}>Open</Button>
      <Modal className="modal-with-long-body-example" open={open} onClose={() => setOpen(false)} fullScreen>
        <Modal.Header>
          <Modal.Title title="Complex" />
        </Modal.Header>

        <Modal.Body>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20rem' }}>
            {['Какой-то', 'длинный', 'текст', 'со', 'скролом'].map((text, index) => (
              <Modal.Text key={index}>{text}</Modal.Text>
            ))}
          </div>
        </Modal.Body>

        <Modal.Footer className="modal-footer-flex" idQa="modal-footer">
          <Button type="secondary">Ok</Button>

          <Button type="danger">Not OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalExampleDefaultWideScreen = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(o => !o)}>Open</Button>
      <Modal className="modal-with-long-body-example" open={open} onClose={() => setOpen(false)} wideScreen>
        <Modal.Header>
          <Modal.Title title="Complex" />
        </Modal.Header>

        <Modal.Body>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20rem' }}>
            {['Какой-то', 'длинный', 'текст', 'со', 'скролом'].map((text, index) => (
              <Modal.Text key={index}>{text}</Modal.Text>
            ))}
          </div>
        </Modal.Body>

        <Modal.Footer className="modal-footer-flex" idQa="modal-footer">
          <Button type="secondary">Ok</Button>

          <Button type="danger">Not OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalExampleWithSelect = () => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState<SelectOption['value'] | undefined>(undefined);
  const [values, setValues] = useState<MultiSelectOption<{ someData: string }>['value'][]>([]);
  const [withSearch, setWithSearch] = useState(false);

  const onCheckboxChange = useCallback(() => setWithSearch(prevState => !prevState), []);

  const searchProps = withSearch ? { active: true, props: { placeholder: 'search' } } : undefined;

  return (
    <div>
      <Button onClick={() => setOpen(o => !o)}>Open</Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header>
          <Modal.Title title="Complex" />
        </Modal.Header>

        <Modal.Body>
          <Checkbox checked={withSearch} onChange={onCheckboxChange}>
            With search in select/multiSelect
          </Checkbox>
          <Select
            value={value}
            options={defaultSelectOptions}
            onChange={setValue}
            search={searchProps}
            placeholder="Select value"
          />
          <MultiSelect
            hasSelectAllOption
            inputText="Select value"
            options={getMultiSelectOptions()}
            values={values}
            selectAllOptionLabel="All Selected"
            onChange={setValues}
            search={searchProps}
            size="large"
          />
        </Modal.Body>

        <Modal.Footer className="modal-footer-flex" idQa="modal-footer">
          <Button type="secondary">Ok</Button>

          <Button type="danger">Not OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
