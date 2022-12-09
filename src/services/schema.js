import * as yup from "yup";

export const schemaModal = yup.object().shape({
    title: yup.string().required("Campo obrigatório*"),

    status: yup.string().required("Campo obrigatório*"),
  });

export const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "O nome precisa ter pelo menos 3 caracteres.")
      .max(200, "O nome pode ter no máximo 200 caracteres."),

    email: yup
      .string()
      .required("Email obrigatório")
      .email("É necessário fornecer um email válido."),

    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
      .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
      .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caractere especial."
      )
      .min(8, "É necessário uma senha de pelo menos 8 caracteres."),

    passwordConfirmed: yup
      .string()
      .required("Confirme sua senha!")
      .oneOf([yup.ref("password"), null], "As senhas não coincidem"),

    bio: yup.string().required("Bio obrigatória"),

    contact: yup.string().required("Contato obrigatório"),

    course_module: yup.string().required("Módulo obrigatório"),
  });

 export const formSchemaLogin = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("É necessário fornecer um email válido."),

    password: yup.string().required("Senha obrigatória"),
  });

  export const formSchemaEdit = yup.object().shape({
    status: yup
    .string()
  })