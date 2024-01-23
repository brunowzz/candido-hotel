import { defineField } from "sanity";

const booking = {
  name: "booking",
  title: "Reserva do Hotel",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "Usuário",
      type: "reference",
      to: [{ type: "user" }],
    }),
    defineField({
      name: "hotelRoom",
      title: "Nome do Quarto do Hotel",
      type: "reference",
      to: [{ type: "hotelRoom" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "checkInDate",
      title: "Data de entrada no quarto",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "checkOutDate",
      title: "Data de saída",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "numberOfDays",
      title: "Quantidade de dias",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "discount",
      title: "Desconto",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "adultos",
      title: "Quantidade de adultos",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "children",
      title: "Quantidade de crianças",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "totalPrice",
      title: "Preço total",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
};

export default booking;
