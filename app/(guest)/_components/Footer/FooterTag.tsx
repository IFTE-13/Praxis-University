import Link from 'next/link';
import React from 'react'

const FooterTag = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="sticky bottom-0 z-20">
      <div className="flex justify-center items-center py-3 bg-card-foreground text-sm gap-3">
        <p className="text-accent transition-colors">All rights reseved by <Link href={"/"} className='hover:text-muted-foreground'>Praxis University</Link> @ {year} </p>
      </div>
    </footer>
  )
}

export default FooterTag