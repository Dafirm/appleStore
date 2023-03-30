// import { RiMacbookLine } from "react-icons/ri";

// export default {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   icon: RiMacbookLine,
//   fields: [
//     {
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//     },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'name',
//         maxLength: 96,
//       },
//     },
//     {
//       name: 'image',
//       title: 'Image',
//       type: 'image',
//       of: [{type: 'image'}],
//       options: {
//         hotspot: true,
//       },
//       fields: [
//         {
//           name: 'alt',
//           title: 'alt Text',
//           type: 'string',
//         },
//       ],
//     },
//     {
//       name: 'category',
//       title: 'Category',
//       type: 'reference',
//       to: [{type: 'category'}],
//     },
//     {
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'blockContent',
//     },
//   ],
// }

import { defineField, defineType } from "sanity";

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'alt Text',
          type: 'string',
        },
      ],
    }),
  
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
})
