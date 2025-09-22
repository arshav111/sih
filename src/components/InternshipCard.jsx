import { useState } from 'react'
import { MapPinIcon, BuildingOfficeIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export default function InternshipCard({ title, organization, location, matchedSkills = [], reason }) {
  const [open, setOpen] = useState(false)
  return (
    <article className="rounded-card bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <div className="mt-1 flex items-center gap-3 text-sm text-slate-600">
        <span className="inline-flex items-center gap-1">
          <BuildingOfficeIcon className="h-4 w-4" aria-hidden="true" />
          {organization}
        </span>
        <span className="inline-flex items-center gap-1">
          <MapPinIcon className="h-4 w-4" aria-hidden="true" />
          {location}
        </span>
      </div>
      {matchedSkills?.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Matched skills">
          {matchedSkills.map((s) => (
            <li key={s} className="rounded-full bg-primary-50 px-2 py-1 text-xs text-primary-700 ring-1 ring-primary-200">
              {s}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-3">
        <button
          type="button"
          className={clsx(
            'inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm ring-1',
            open
              ? 'bg-primary-600 text-white ring-primary-600'
              : 'bg-white text-primary-700 ring-primary-200 hover:bg-primary-50'
          )}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="why-recommended"
        >
          <InformationCircleIcon className="h-4 w-4" aria-hidden="true" />
          <span>Why Recommended?</span>
        </button>
        {open && (
          <p id="why-recommended" className="mt-2 text-sm text-slate-700">
            {reason}
          </p>
        )}
      </div>
    </article>
  )
}