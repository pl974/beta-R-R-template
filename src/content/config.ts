// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Schéma pour la collection de services
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    icon: z.string(),
    order: z.number().optional(),
    seo: z
      .object({
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
      })
      .optional(),
  }),
});

// Schéma pour les collections de villes (standards et premium)
const villesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    seo: z
      .object({
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
        profession: z.string().optional(),
      })
      .optional(),
  }),
});

// Schéma pour la collection de blog
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    featuredImage: z.string(),
    author: z.string(),
    excerpt: z.string(),
    seo: z
      .object({
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
      })
      .optional(),
  }),
});

// Schéma pour les sections de la page d'accueil
const homepageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Schémas spécifiques selon la section
    backgroundImage: z.string().optional(),
    buttonText: z.string().optional(),
    buttonUrl: z.string().optional(),
    overlay: z.string().optional(),
    image: z.string().optional(),
    keyPoints: z
      .array(
        z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
        })
      )
      .optional(),
    plans: z
      .array(
        z.object({
          title: z.string(),
          icon: z.string(),
          price: z.string(),
          subtitle: z.string(),
          recommended: z.boolean().optional(),
          features: z.array(z.string()),
        })
      )
      .optional(),
    steps: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
          stepNumber: z.number(),
        })
      )
      .optional(),
    phoneNumber: z.string().optional(),
    questions: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
    testimonials: z
      .array(
        z.object({
          name: z.string(),
          photo: z.string().optional(),
          rating: z.number(),
          comment: z.string(),
          date: z.string(),
          city: z.string(),
          service: z.string(),
        })
      )
      .optional(),
    seo: z
      .object({
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
        city: z.string().optional(),
        profession: z.string().optional(),
      })
      .optional(),
  }),
});

// Schéma pour la page À propos
const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    seoTitle: z.string(),
    seoDescription: z.string(),
    bannerImage: z.string(),
    bannerTitle: z.string(),
    bannerDescription: z.string(),
    history: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
      timeline: z.array(z.object({
        year: z.string(),
        description: z.string()
      }))
    }),
    values: z.object({
      title: z.string(),
      description: z.string(),
      items: z.array(z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string()
      }))
    }),
    team: z.object({
      title: z.string(),
      description: z.string(),
      members: z.array(z.object({
        name: z.string(),
        position: z.string(),
        photo: z.string(),
        linkedin: z.string().optional(),
        twitter: z.string().optional(),
        email: z.string().optional()
      }))
    }),
    stats: z.object({
      title: z.string(),
      description: z.string(),
      items: z.array(z.object({
        value: z.string(),
        label: z.string()
      }))
    }),
    partners: z.object({
      title: z.string(),
      description: z.string(),
      logos: z.array(z.object({
        name: z.string(),
        image: z.string()
      }))
    }),
    cta: z.object({
      title: z.string(),
      description: z.string(),
      buttonText1: z.string(),
      buttonUrl1: z.string(),
      buttonText2: z.string(),
      buttonUrl2: z.string()
    })
  })
});

// Schéma pour la navigation
const navigationCollection = defineCollection({
  type: 'content',
  schema: z.object({
    logo: z.string(),
    logoText: z.string(),
    phone: z.string(),
    menuItems: z.array(
      z.object({
        title: z.string(),
        url: z.string(),
        hasDropdown: z.boolean().optional().default(false),
        isButton: z.boolean().optional().default(false),
        dropdownItems: z
          .array(
            z.object({
              title: z.string(),
              url: z.string(),
              description: z.string().optional(),
              icon: z.string().optional(),
            })
          )
          .optional(),
      })
    ),
    ctaButton: z.object({
      text: z.string(),
      url: z.string(),
    }),
  }),
});

// Exporter les collections
export const collections = {
  services: servicesCollection,
  villes: villesCollection,
  premium: villesCollection,
  blog: blogCollection,
  homepage: homepageCollection,
  about: aboutCollection,
  navigation: navigationCollection,
};