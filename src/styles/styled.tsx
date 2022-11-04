import styled, { AnyStyledComponent } from 'styled-components';

interface IStyledComponent {
  component: AnyStyledComponent;
  componentProps: object;
  styleComponent: string;
}

const StyledComponent = ({
  component,
  componentProps,
  styleComponent,
}: IStyledComponent) => {
  const Children = styled(component)`
    ${styleComponent}
  `;

  return <Children {...componentProps} />;
};
