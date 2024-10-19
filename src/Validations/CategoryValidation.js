import * as yup from 'yup'

export const categoryValidation = yup.object().shape({
    title: yup.string().required("Category Name field is required."),
    imageUrl: yup.string().required("Category Image Url field is required.")
})