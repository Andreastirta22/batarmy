import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  nama: Yup.string().required('Nama wajib diisi'),
  company: Yup.string().required('Nama Perusahaan wajib diisi'),
  size: Yup.string().required('Ukuran wajib diisi'),
  designStatus: Yup.string().required('Status Desain wajib dipilih'),
  workStatus: Yup.string().required('Jenis Pekerjaan wajib dipilih')
});
