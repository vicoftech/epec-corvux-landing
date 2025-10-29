import type { JSX } from "@emotion/react"

interface Props {
  className?: string
}

export const Component1 = ({ className }: Props): JSX.Element => {
  return (
    <div className={`w-[420px] h-[500px] ${className}`}>
      <svg width="420" height="500" viewBox="0 0 420 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_91_2979)">
          <path
            d="M9.58926 366.301C3.73055 359.623 0.499985 351.047 0.499985 342.169L0.499985 36.6169C0.499985 16.3939 16.9163 0 37.1679 0L276.47 0C287.034 0 297.085 4.55028 304.048 12.485L410.41 133.699C416.27 140.377 419.5 148.953 419.5 157.831L419.5 463.384C419.5 483.606 403.083 500 382.832 500L143.53 500C132.966 500 122.915 495.45 115.952 487.515L9.58926 366.301Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_91_2979">
            <rect width="419" height="500" fill="white" transform="matrix(-1 0 0 1 419.5 0)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
