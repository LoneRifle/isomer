import { composeRenderProps } from "react-aria-components"
import { BiRightArrowAlt } from "react-icons/bi"

import type { SiderailProps } from "~/interfaces"
import { tv } from "~/lib/tv"
import { focusVisibleHighlight } from "~/utils/rac"
import { Link } from "../Link"
import { useSiderailContext } from "./SiderailContext"

const createSiderailParentLabelStyles = tv({
  slots: {
    container: "border-b border-b-base-divider-subtle px-3 py-3.5",
    label:
      "group prose-headline-lg-semibold flex w-full flex-row justify-between gap-2 hover:text-brand-interaction",
    icon: "-mr-2 h-6 w-6 shrink-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100",
  },
})
const compoundStyles = createSiderailParentLabelStyles()

const parentLinkStyle = tv({
  extend: focusVisibleHighlight,
})

type SiderailLabelProps = Pick<SiderailProps, "parentTitle" | "parentUrl">

export const SiderailParentLabel = ({
  parentTitle,
  parentUrl,
}: SiderailLabelProps) => {
  const { LinkComponent } = useSiderailContext()

  return (
    <li className={compoundStyles.container()}>
      <p className={compoundStyles.label()}>
        <Link
          href={parentUrl}
          LinkComponent={LinkComponent}
          className={composeRenderProps("", (className, renderProps) =>
            parentLinkStyle({
              className,
              ...renderProps,
            }),
          )}
        >
          {parentTitle}
        </Link>
        <Link
          aria-hidden
          tabIndex={-1}
          href={parentUrl}
          LinkComponent={LinkComponent}
          aria-label={`Go to ${parentTitle} parent page`}
        >
          <BiRightArrowAlt aria-hidden className={compoundStyles.icon()} />
        </Link>
      </p>
    </li>
  )
}
