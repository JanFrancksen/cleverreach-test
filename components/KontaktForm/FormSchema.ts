import * as z from 'zod';

export const schema = z.object({
  verarbeitungsGegenstand: z.string().min(1, { message: 'Pflichtfeld' }),
  verarbeitungsArtUndZweck: z.string().min(2, { message: 'Pflichtfeld' }),
  personenstammdaten: z.boolean().optional(),
  kommunikationsdaten: z.boolean().optional(),
  vertragsstammdaten: z.boolean().optional(),
  protokolldaten: z.boolean().optional(),
  sonstigeDaten: z.boolean().optional(),
  kundenUndInteressierte: z.boolean().optional(),
  mitarbeiterUndLieferanten: z.boolean().optional(),
  sonstigeBetroffene: z.boolean().optional(),
  firstName: z.string().min(2, { message: 'Pflichtfeld' }),
  lastName: z.string().min(2, { message: 'Pflichtfeld' }),
  funktion: z.string().min(2, { message: 'Pflichtfeld' }),
  ort: z.string().min(2, { message: 'Pflichtfeld' }),
  datum: z.string(),
});

const newSchema = z.object({
  formData: schema,
  signatureData: z.string(),
});

export type FormValues = z.infer<typeof schema>;

export type FormValuesNew = z.infer<typeof newSchema>;
