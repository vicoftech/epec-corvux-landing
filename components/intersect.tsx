import { Component1 } from "./component1"

export const Intersect = (): JSX.Element => {
  return (
    <div className="flex flex-col max-w-[438px] w-[438px] items-start relative">
      <div className="flex flex-col w-[438px] h-[500px] items-center justify-center pt-[2.84e-14px] pb-0 px-[9.66px] relative mix-blend-overlay opacity-60">
        <Component1 className="!relative !w-[419px] !h-[500px] !ml-[-0.16px] !mr-[-0.16px]" />
      </div>
    </div>
  )
}
