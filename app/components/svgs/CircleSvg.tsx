import * as React from "react"
const CircleSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={16} />
  </svg>
)
export default CircleSvg
