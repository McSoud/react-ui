import { SVGProps } from "react";

export default function SvgFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="36"
      fill="black"
      {...props}
      viewBox="0 0 18 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.504 6.73483C15.5067 6.53536 14.1597 6.38635 13.3126 6.38635C11.0187 6.38635 10.8697 7.38367 10.8697 8.97941V11.8201H16.6038L16.104 17.7043H10.8697V35.6023H3.69012V17.7043H0L0 11.8201H3.69012V8.18037C3.69012 3.19487 6.03327 0.402344 11.9163 0.402344C13.9603 0.402344 15.4563 0.701545 17.4005 1.10048L16.504 6.73483Z"
      />
    </svg>
  );
}
