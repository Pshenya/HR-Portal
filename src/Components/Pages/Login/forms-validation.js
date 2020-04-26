import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(6, 'ERROR')
        .max(100, "EROOR")
        .required("Required"),
    email: Yup.string()
        .email("* Этот адрес эл. почты недействителен")
        .max(100, "* Это поле должно быть менее 100 символов")
        .required("* Это обязательное поле"),
    password: Yup.string()
        .min(8, "* Пароль должен быть не менее 8 символов")
        .required("* Это обязательное поле"),
    // confirmPassword: Yup.string()
    //     .oneOf([Yup.ref('password'), null], "* Пароли должны совпадать")
    //     .required("* Это обязательное поле"),
});

export default validationSchema;
