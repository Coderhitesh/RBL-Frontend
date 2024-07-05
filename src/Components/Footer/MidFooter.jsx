import React from 'react'
import './midFooter.css'

function MidFooter() {
  return (
    <section className=' w-full border-t text-sm border-b p-2 bg-[#222222] text-white'>
      <ul className='flex items-center gap-4 midfooterul'>
        <li className='mid-footer-li'>Important Documents</li>
        <li className='mid-footer-li'>Account Aggregator</li>
        <li className='mid-footer-li'>Terms & Conditions</li>
        <li className='mid-footer-li'>BCSBI Member</li>
        <li className='mid-footer-li'>Banking Ombudsman</li>
        <li className='mid-footer-li'>Customer Knowledge Center</li>
      </ul>
    </section>
  )
}

export default MidFooter
