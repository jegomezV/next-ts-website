import * as React from "react"
const ArrowSvg= (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 1920 1920"
    {...props}
  >
    <path fillRule="evenodd" d="M175 .024V1920l1570.845-959.927z" />
  </svg>
)
export default ArrowSvg
