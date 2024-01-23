import { defineField } from "sanity";

const review = {
  name: "review",
  title: "Avaliações",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "Usuário",
      type: "reference",
      to: [{ type: "user" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hotelRoom",
      title: "Quarto do Hotel",
      type: "reference",
      to: [{ type: "hotelRoom" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reviewText",
      title: "Review",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "userRating",
      title: "Avaliação do usuário",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Deve ter de 1 a 5 estrelas."),
    }),
  ],
};

export default review;
