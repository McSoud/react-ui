import { SVGProps } from "react";

export default function SvgMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="21"
      height="16"
      fill="black"
      {...props}
      viewBox="0 0 21 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.2729 4L10.2729 9L2.27295 4V2L10.2729 7L18.2729 2M18.2729 0H2.27295C1.16295 0 0.272949 0.89 0.272949 2V14C0.272949 14.5304 0.483663 15.0391 0.858736 15.4142C1.23381 15.7893 1.74252 16 2.27295 16H18.2729C18.8034 16 19.3121 15.7893 19.6872 15.4142C20.0622 15.0391 20.2729 14.5304 20.2729 14V2C20.2729 0.89 19.3729 0 18.2729 0Z" />
    </svg>
  );
}
