import { InputLabel, FormHelperText } from '@mui/material';
import styled from 'styled-components';

const FileInput = ({ formik }) => {
  return (
    <InputLabel sx={{ mb: '47px' }}>
      <input
        hidden
        max-size={2000}
        accept=" .jpg, .jpeg"
        multiple
        id="photo"
        name="photo"
        onChange={event => {
          formik.setFieldTouched('photo', true);
          if (event.currentTarget.files[0].size > 50000000) {
            formik.setFieldError(
              'photo',
              'The photo size must not be greater than 5 Mb.'
            );
            return;
          }

          formik.setFieldValue('photo', event.currentTarget.files[0]);
        }}
        type="file"
      />
      <div style={{ display: 'flex' }}>
        <UploadBtn>Upload</UploadBtn>
        <Input>{formik.values.photo.name || 'Upload your photo'}</Input>
      </div>

      <FormHelperText
        error={formik.touched.photo && Boolean(formik.errors.photo)}
      >
        {formik.touched.photo && formik.errors.photo}
      </FormHelperText>
    </InputLabel>
  );
};

const UploadBtn = styled.div`
  min-height: 54px;
  min-width: 83px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 4px 0px 0px 4px;
`;

const Input = styled.span`
  padding-left: 16px;
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.23);
  border-top: 1px solid rgba(0, 0, 0, 0.23);
  border-right: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 0px 4px 4px 0px;
`;

export default FileInput;
