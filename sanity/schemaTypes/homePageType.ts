import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),

    // hero
    defineField({
      name: "heroHeading1",
      type: "string",
    }),
    defineField({
      name: "heroHeading2",
      type: "string",
    }),
    defineField({
      name: "heroHeadingList",
      type: "array",
      of: [defineArrayMember({ type: "homePageHeroHeadingListItem" })],
    }),
    defineField({
      name: "heroSubheading",
      type: "text",
    }),
    defineField({
      name: "heroImageDesktop",
      type: "img",
    }),
    defineField({
      name: "heroImageMobile",
      type: "img",
    }),
    defineField({
      name: "companyLogos",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: { type: "companyLogo" } }),
      ],
    }),

    // howItWorks
    defineField({
      name: "howItWorksHeading",
      type: "string",
    }),
    defineField({
      name: "howItWorksSubheading",
      type: "string",
    }),

    // feature 1
    defineField({
      name: "feature1Heading",
      type: "string",
    }),
    defineField({
      name: "feature1HeadingMaxWidth",
      type: "string",
    }),
    defineField({
      name: "feature1Subheading",
      type: "string",
    }),
    defineField({
      name: "feature1SubheadingMaxWidth",
      type: "string",
    }),
    defineField({
      name: "feature1Image",
      type: "img",
    }),

    // feature 2
    defineField({
      name: "feature2Heading",
      type: "string",
    }),
    defineField({
      name: "feature2HeadingMaxWidth",
      type: "string",
    }),
    defineField({
      name: "feature2Subheading",
      type: "string",
    }),
    defineField({
      name: "feature2SubheadingMaxWidth",
      type: "string",
    }),
    defineField({
      name: "feature2Image",
      type: "img",
    }),

    // feature 3
    defineField({
      name: "feature3Heading",
      type: "string",
    }),
    defineField({
      name: "feature3HeadingMaxWidth",
      type: "string",
    }),
    defineField({
      name: "feature3Subheading",
      type: "string",
    }),
    defineField({
      name: "feature3SubheadingMaxWidth",
      type: "string",
    }),
    defineField({
      name: "feature3Image",
      type: "img",
    }),

    // feature 4
    defineField({
      name: "feature4Heading",
      type: "string",
    }),
    defineField({
      name: "feature4HeadingMaxWidth",
      type: "string",
    }),
    defineField({
      name: "feature4Subheading",
      type: "string",
    }),
    defineField({
      name: "feature4SubheadingMaxWidth",
      type: "string",
    }),
    defineField({
      name: "feature4Image",
      type: "img",
    }),

    // workflow
    defineField({
      name: "workflowHeading1",
      type: "string",
    }),
    defineField({
      name: "workflowHeading2",
      type: "string",
    }),

    // homelab
    defineField({
      name: "homelabTitle",
      type: "string",
    }),
    defineField({
      name: "homelabHeading",
      type: "string",
    }),
    defineField({
      name: "homelabSubheading",
      type: "string",
    }),
    defineField({
      name: "homelabImage",
      type: "img",
    }),

    // benefits
    defineField({
      name: "benefitsHeading",
      type: "string",
    }),
    defineField({
      name: "benefitsList",
      type: "array",
      of: [
        defineArrayMember({
          type: "homePageBenefit",
        }),
      ],
    }),
    defineField({
      name: "accoladesList",
      type: "array",
      of: [
        defineArrayMember({
          type: "homePageAccolade",
        }),
      ],
    }),

    // security
    defineField({
      name: "securityHeading",
      type: "string",
    }),
    defineField({
      name: "securitySubheading",
      type: "text",
    }),
    defineField({
      name: "securityImages",
      type: "array",
      of: [
        defineArrayMember({
          type: "img",
        }),
      ],
    }),

    // documentation
    defineField({
      name: "workflowHeading",
      type: "string",
    }),
    defineField({
      name: "workflowSubheading",
      type: "text",
    }),
    defineField({
      name: "workflowImage",
      type: "img",
    }),
    defineField({
      name: "quickstartTitle",
      type: "string",
    }),
    defineField({
      name: "quickstartHeading",
      type: "string",
    }),
    defineField({
      name: "quickstartImage",
      type: "img",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "heroImageDesktop.image",
    },
  },
});

export const homePageHeroHeadingListItemType = defineType({
  name: "homePageHeroHeadingListItem",
  title: "Home Page Hero Heading List Item",
  type: "object",
  fields: [
    defineField({
      name: "color",
      type: "reference",
      to: { type: "colorInput" },
    }),
    defineField({
      name: "text",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
  },
});

export const homePageBenefitType = defineType({
  name: "homePageBenefit",
  title: "Home Page Benefit",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "img",
    }),
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "heading",
      media: "image.image",
    },
  },
});

export const homePageAccoladeType = defineType({
  name: "homePageAccolade",
  title: "Home Page Accolade",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
  },
});

const types = [
  homePageType,
  homePageHeroHeadingListItemType,
  homePageBenefitType,
  homePageAccoladeType,
];

export default types