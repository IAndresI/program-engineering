import { SVGProps } from "react";

export const SvgComedy = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M16 0C7.178 0 0 7.178 0 16C0 24.822 7.178 32 16 32C24.822 32 32 24.822 32 16C32 7.178 24.822 0 16 0ZM16 30C8.28 30 2 23.72 2 16C2 8.28 8.28 2 16 2C23.72 2 30 8.28 30 16C30 23.72 23.72 30 16 30ZM19.394 13.749L23.58 15.691C23.716 15.754 23.859 15.784 24 15.784C24.378 15.784 24.739 15.57 24.908 15.205C25.14 14.704 24.923 14.109 24.422 13.877L20.914 12.249L24.262 11.345C24.795 11.2 25.111 10.652 24.967 10.118C24.822 9.58398 24.268 9.27102 23.74 9.41302L19.671 10.514C18.39 10.86 18.14 11.6 18.105 12.01C18.069 12.419 18.19 13.19 19.394 13.749ZM7.09299 15.205C7.26199 15.57 7.62301 15.784 8.00101 15.784C8.14201 15.784 8.28499 15.755 8.42099 15.691L12.607 13.749C13.81 13.19 13.931 12.419 13.897 12.01C13.862 11.6 13.612 10.86 12.331 10.513L8.26199 9.41302C7.73499 9.26702 7.18 9.58298 7.035 10.118C6.891 10.651 7.20699 11.2 7.73999 11.345L11.088 12.249L7.57999 13.877C7.07799 14.109 6.85999 14.704 7.09299 15.205ZM23 17H9C7.897 17 7 17.878 7 18.957C7 19.766 7.43599 20.764 8.03699 21.331C11.163 24.278 13.469 25.984 16 25.984C18.531 25.984 20.837 24.278 23.964 21.331C24.565 20.764 25 19.766 25 18.957C25 17.878 24.103 17 23 17ZM22.592 19.876C19.414 22.871 17.627 23.984 16 23.984C14.373 23.984 12.586 22.871 9.409 19.876C9.21 19.688 9 19.216 9 19L23 18.957C23 19.216 22.79 19.688 22.592 19.876Z"
        fill="#fff"
      />
    </svg>
  );
};
