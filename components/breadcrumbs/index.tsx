import Link from "next/link"
import HomeFilledSVG from '@/icons/home-filled.svg'

type Props = {
  crumbs: {
    label: string,
    url?: string
  }[]
}

export default function Breadcrumbs(props: Props) {
  const { crumbs } = props

  return (
    <div className="bg-white shadow-lg mb-4 text-gray-500">
      <nav className="px-4 py-2 inline-flex items-center whitespace-nowrap overflow-x-auto max-w-full no-scrollbar">
        <Link href="/">
          <HomeFilledSVG className="fill-current h-4 w-4" />
        </Link>

        {crumbs.map((crumb, key) => crumb.url ? (
          <Link key={key} href={crumb.url} className="border-r pr-2 mr-2">
            {crumb.label}
          </Link>
        ) : (
          <span aria-current="page">
            {crumb.label}
          </span>
        ))}
      </nav>
    </div>
  )
}
