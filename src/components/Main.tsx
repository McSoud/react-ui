import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    "id"
  > {
  id: NonNullable<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>["id"]
  >;
}

export default function Main({ id, ...props }: Props) {
  return (
    <main
      id={`${id}-content`}
      role="main"
      {...props}
      className={props.className}
    />
  );
}
