import keyBy from 'lodash/keyBy';
import ProductType from './types';
import getProductLink from '@/utils/product/getProductLink';

export default function transform(data: any): ProductType {
  const metadata = keyBy(data.meta_data, 'key')

  const altSlug = metadata._second_slug?.value
  const altName = metadata._second_title?.value
  const link = getProductLink({
    slug: data.slug,
    altSlug
  })
  const addons = getAddons(metadata._product_addons_v5?.value)
  const images = getImages(data.images || []);
  const specs = getSpecs(metadata._specs?.value ?? '', altName, link);
  const reviewUrl = metadata._review_url?.value
  const reviewUrlLabel = metadata._review_url_title?.value

  return {
    addons,
    altName,
    altSlug,
    averageRating: data.average_rating,
    categories: data.categories,
    description: data.description,
    id: data.id,
    images,
    name: data.name,
    permalink: data.permalink,
    price: data.price,
    priceHtml: data.price_html,
    ratingCount: data.rating_count,
    regularPrice: data.regularPrice,
    reviewUrl,
    reviewUrlLabel,
    salePrice: data.salePrice,
    shortDescription: data.short_description,
    slug: data.slug,
    specs,
    stockStatus: data.stock_status,
    tags: data.tags,
  }
}

function getAddons(data: {
  name1?: string,
  name2?: string,
  name3?: string,
  options: Array<{
    label: string,
    price: number,
    type: 'type1' | 'type2' | 'type3'
  }>
}) {
  const names = {
    type1: 'name1',
    type2: 'name2',
    type3: 'name3',
  };

  const groupLabels = {
    type1: 'name1',
    type2: 'رنگ',
    type3: 'گارانتی',
  };

  const addons: {
    [key: string]: {
      label: string,
      name: string,
      options: Array<{
        label: string,
        price: number
      }>,
      type: 'type1' | 'type2' | 'type3'
    }
  } = {};

  data.options
    .filter(opt => opt.label)
    .forEach((option) => {
      if (!addons[option.type]) {
        addons[option.type] = {
          label: data[names[option.type]] || groupLabels[option.type],
          name: names[option.type],
          options: [],
          type: option.type
        };
      }

      addons[option.type].options.push({
        label: option.label,
        price: option.price,
      });
    });

  return addons;
}

function getImages(images: Array<{
  alt: string,
  name: string,
  src: string,
}>) {
  return images.map(image => ({
    alt: image.alt,
    name: image.name,
    src: image.src,
  }));
}

function getSpecs(text: string, altName: string, link: string) {
  return text
    .replaceAll('%productname%', `<span>${altName}</span>`)
    .replaceAll('%productlink%', link)
    .replaceAll('%booltrue%', '<span class="yes">✓</span>')
    .replaceAll('%boolfalse%', '<span class="no">𐄂</span>');
}
