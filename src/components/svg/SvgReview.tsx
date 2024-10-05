import { SVGProps } from "react";

export const SvgReview = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M3 7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.40499 12.675C8.44031 12.4984 8.45796 12.4101 8.49025 12.3278C8.51891 12.2547 8.55608 12.1853 8.60098 12.1209C8.65157 12.0484 8.71523 11.9847 8.84255 11.8574L13 7.69995C13.5523 7.14767 14.4477 7.14767 15 7.69995C15.5523 8.25224 15.5523 9.14767 15 9.69995L10.8426 13.8574C10.7152 13.9847 10.6516 14.0484 10.579 14.099C10.5147 14.1439 10.4452 14.181 10.3721 14.2097C10.2898 14.242 10.2015 14.2596 10.025 14.295L8 14.7L8.40499 12.675Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
