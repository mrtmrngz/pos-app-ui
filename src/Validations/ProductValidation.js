import * as yup from 'yup'

export const productValidation = (categories) => yup.object().shape({
    title: yup.string().required("Product Name field is required."),
    imageUrl: yup.string().required("Product Image Url field is required."),
    price: yup.number()
        .positive("Please enter a positive value")
        .required("Product price field is required."),
    categoryId: yup.string()
        .oneOf(categories.map(category => category.key), "Please select a valid category")
        .required("Category field is required.")
})