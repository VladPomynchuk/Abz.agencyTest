export const checkImage = async (event, formik) => {
  formik.setFieldTouched('photo', true);
  if (event.currentTarget.files[0].size > 5000000) {
    formik.setFieldError(
      'photo',
      'The photo size must not be greater than 5 Mb.'
    );
    return;
  }
  try {
    const { width, height, file } = await getImageDimensions(
      event.currentTarget.files[0]
    );
    if (width < 70 && height < 70) {
      formik.setFieldError('photo', 'Minimum size of photo 70x70px.');
      return;
    }

    formik.setFieldValue('photo', file);
  } catch (e) {
    console.error(e);
  }
};

function getImageDimensions(file) {
  const objectUrl = URL.createObjectURL(file);
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () =>
      resolve({
        width: img.width,
        height: img.height,
        file,
      });
    img.onerror = error => reject(error);
    img.src = objectUrl;
  });
}
