'use client';

import { useState } from 'react'
import ProductType, { AddonType, AddonsType, AddonOptionType } from '@/wp/product/types'
import SelectAddon from '@/app/buy/[slug]/price/[altSlug]/SelectAddon'

type Props = {
  product: ProductType
}

export default function AddToCart(props: Props) {
  const { product } = props

  const addons = Object.values(product.addons)

  const [selectedAddons, setSelectedAddons] = useState<{
    [type: string]: AddonOptionType
  }>(() => {
    return addons.reduce((result, addon) => ({
      ...result,
      [addon.type]: addon.options[0]
    }), {})
  });

  const handleChangeOption = (addon: AddonType, option: AddonOptionType) => {
    setSelectedAddons(prev => ({
      ...prev,
      [addon.type]: option
    }))
  };

  if (product.stockStatus === 'outofstock') {
    return (
      <div className="bg-white sticky bottom-16 p-4 pt-0">
        <p className="bg-red-100 text-red-600 px-4 py-3 rounded-3xl text-center">
          محصول ناموجود است
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white sticky bottom-16 p-4 pt-0">
      <div>
        {addons.length > 0 && (
          <div>
            {addons.map((addon, key) => (
              <div key={key} className=" ">
                <SelectAddon
                  addon={addon}
                  onChange={(option: AddonOptionType) => handleChangeOption(addon, option)}
                  selected={selectedAddons[addon.type]}
                />
              </div>
            ))}
          </div>
        )}
        <button className="bg-violet-500 block text-white px-4 py-3 rounded-3xl w-full">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  )
}
