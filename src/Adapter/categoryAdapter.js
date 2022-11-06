export const createAdaptedCategoryFromFirestore = (doc) => {
    const data = doc.data()
    
    const CategoryAdapted = {
        id: doc.id,
        label: data.label,
        img: data.img,
        order: data.order,
        slug: data.slug,
        alt: data.alt,
    }


    return CategoryAdapted
}