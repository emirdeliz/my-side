import { Story } from '@storybook/react';
import { render } from '@test';
import { ModalTemplateSimple, ModalTemplateTitleAndSubTitle } from '@stories';
import { ModalTemplate, ModalTemplateProps } from '..';

const renderModalTemplate = async (
  modalTemplateNode: Story<ModalTemplateProps>,
  props?: ModalTemplateProps
) => {
  const ModalTemplate = modalTemplateNode;
  const { baseElement } = render(
    <ModalTemplate
      {...(modalTemplateNode.args as ModalTemplateProps)}
      {...props}
    />
  );
  return baseElement;
};

describe('ModalTemplate component test', () => {
  it('Have ModalTemplate', async () => {
    const props = {
      title: '',
      subTitle: '',
      allowButton: false,
      labelButton: '',
      children: 'Hello world!',
      onClickButton: () => {},
    };
    const { container: modalTemplateNode } = render(
      <ModalTemplate {...props} />
    );
    expect(typeof modalTemplateNode).toEqual(
      typeof (<ModalTemplate {...props} />)
    );
  });

  it('Have ModalTemplate input', async () => {
    const modalTemplateNode = await renderModalTemplate(ModalTemplateSimple);
    const input = modalTemplateNode.querySelector('input') as HTMLInputElement;
    const label = modalTemplateNode.querySelector(
      `[for='${input.id}']`
    ) as HTMLLabelElement;

    expect(input).toBeInTheDocument();
    expect(input.value).toEqual('peter');

    expect(label).toBeInTheDocument();
    expect(label.innerHTML).toEqual('Entre com o nome');
  });

  it('Have ModalTemplate textarea', async () => {
    const modalTemplateNode = await renderModalTemplate(
      ModalTemplateTitleAndSubTitle
    );
    const span = modalTemplateNode.querySelectorAll('span');
    expect(span.length).toEqual(3);
    expect(span[0].innerHTML).toEqual('Title');
    expect(span[1].innerHTML).toEqual('SubTitle');
  });
});
