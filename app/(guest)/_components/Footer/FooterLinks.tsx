import { items } from "./data"
import { IItemType, ILinkType } from "./types"

const FooterLinks = () => {
  return (
    <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3">
        {items.map(({title, links}: IItemType, index: number) => (
          <ul key={index} className='border-t py-8 block lg:border-none'>
            <p className="block mb-1 text-base font-semibold">
              {title}
            </p>
            {links.map(({label, href}: ILinkType) => (
              <li key={label} className='py-1 text-balance lg:w-9/12 w-full'>
                <a
                  href={href}
                  className="block text-muted-foreground hover:text-accent-foreground text-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
  )
}

export default FooterLinks