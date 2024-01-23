import { defineField } from "sanity";

const user = {
  name: "user",
  title: "Usuário",
  type: "document",
  fields: [
    defineField({
      name: "isAdmin",
      title: "Administrador",
      type: "boolean",
      initialValue: false,
      description: "Verifique se o usuário é administrador",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Nome completo",
      type: "string",
      description: "Nome do usuário",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Foto de perfil",
      type: "url",
    }),
    defineField({
      name: "password",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "about",
      title: "Sobre",
      type: "text",
      description: "Breve descricão do usuário",
    }),
  ],
};

export default user;
