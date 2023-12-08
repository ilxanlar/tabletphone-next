'use client';

import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import { AddonOptionType, AddonType } from '@/wp/product/types';

type Props = {
  addon: AddonType,
  onChange: Function,
  selected: {
    label: string
  }
}

export default function SelectAddon(props: Props) {
  const { addon, onChange, selected } = props

  const [visible, setVisible] = useState(false)

  const buttonRef = useRef<HTMLButtonElement>(document.createElement('button'))
  const optionsRef = useRef<HTMLDivElement>(document.createElement('div'))

  useEffect(() => {
    const callback = (event: any) => {
      const target = event.target as Node
      if (!buttonRef.current.contains(target) && !optionsRef.current.contains(target)) {
        setVisible(false)
      }
    };

    window.addEventListener('click', callback)

    return () => {
      window.removeEventListener('click', callback)
    };
  }, []);

  const handleClick = () => {
    setVisible(true)
  }

  const handleClickOption = (option: AddonOptionType) => {
    setVisible(false)
    onChange(option)
  }

  const optionsWrapperClassName = classnames(
    'absolute bottom-0 left-0 right-0',
    'bg-white border border-gray-400 overflow-x-hidden overflow-y-auto pb-2 pt-3 rounded-3xl shadow-xl',
    'overscroll-contain',
    'max-h-[60dvh] min-h-full',
    visible ? 'block' : 'hidden'
  )

  return (
    <div className="bg-purple-50 mb-4 relative rounded-3xl">
      <button className="flex gap-4 items-center justify-between px-4 py-3 rounded-3xl w-full" onClick={handleClick} ref={buttonRef}>
        <span className="max-w-[50%] text-right text-gray-500">{addon.label}: </span>
        <span className="max-w-[50%] font-semibold text-left text-violet-500">{selected.label}</span>
      </button>
      <div className={optionsWrapperClassName} ref={optionsRef}>
        <h4 className="opacity-50 px-6 py-2 text-sm">
          {addon.label} مورد نظر را انتخاب کنید:
        </h4>
        <ul>
          {addon.options.map((option, key) => (
            <li className="cursor-pointer px-6 py-3 transition-colors hover:bg-violet-50" key={key} onClick={() => handleClickOption(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
