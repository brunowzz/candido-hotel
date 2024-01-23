import { defineField } from "sanity";

const roomTypes = [
  { title: "Básico", value: "básico" },
  { title: "Luxo", value: "luxo" },
  { title: "Suite", value: "suite" },
];

const hotelRoom = {
  name: "hotelRoom",
  title: "Quarto do Hotel",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome do quarto",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(50).error("Máximo 50 caracteres"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição do quarto",
      type: "text",
      validation: (Rule) =>
        Rule.required().min(100).error("Mínimo 100 caracteres"),
    }),
    defineField({
      name: "price",
      title: "Preço da diária",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "discount",
      title: "Desconto",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "images",
      title: "Fotos do quarto",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "url", title: "Link" },
            { name: "file", type: "file", title: "Arquivo" },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().min(3).error("Preciso de no mínimo 3 imagens."),
    }),
    defineField({
      name: "coverImage",
      title: "Imagem de capa",
      type: "object",
      fields: [
        { name: "url", type: "url", title: "Link" },
        { name: "file", type: "file", title: "Arquivo" },
      ],
      validation: (Rule) =>
        Rule.required().error("Imagem de background é obrigatória."),
    }),
    defineField({
      name: "type",
      title: "Tipo do Quarto",
      type: "string",
      options: {
        list: roomTypes,
      },
      initialValue: "basic",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "specialNote",
      title: "Notas Especiais",
      type: "text",
      initialValue:
        "O horário de check-in é às 12h00 e o horário de check-out é às 11h59. Se você deixar algum item, entre em contato com a recepcionista.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dimension",
      title: "Dimension",
      type: "string",
    }),
    defineField({
      name: "numberOfBeds",
      title: "Quantidade de camas",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "offeredAmenities",
      title: "Comodidades",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Ícone", type: "string" },
            { name: "amenity", title: "Cortesia", type: "string" },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isBooked",
      title: "Está reservado?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "Em destaque",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "review",
      title: "Avaliações",
      type: "array",
      of: [{ type: "review" }],
    }),
  ],
};

export default hotelRoom;
