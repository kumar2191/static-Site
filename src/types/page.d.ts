import { NextPage } from 'next'
import { ReactElement } from 'react'
import type { ReactElement } from 'react'
import SecondaryLayout from '../components/layouts/SecondaryLayout'
import HomeLayout from '../components/layouts/HomeLayout'

export type PageWithSecondaryLayoutType = NextPage & {
  layout: typeof SecondaryLayout
}
export type PageWithHomeLayoutType = NextPage & {
  layout: typeof HomeLayout
}

export type PageWithLayoutType =
  | PageWithSecondaryLayoutType
  | PageWithHomeLayoutType
export type LayoutProps = ({
  children,
}: {
  children: ReactElement
}) => ReactElement

export default PageWithLayoutType

// eslint-disable-next-line @typescript-eslint/ban-types
// export type Page = NextPage<P> & {
//   // You can disable whichever you don't need
//   getLayout?: (page: ReactElement) => ReactNode

//   layout?: ComponentType
// }
