import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUpSchema } from '../../schemas/index';
import Maestro from '/src/assets/AfcoProduction.png';
import { db } from '../../firebase';  // Import Firestore instance
import { collection, addDoc, Timestamp } from 'firebase/firestore';  // Import Firestore functions

const designOptions = [
  { value: '', label: 'Pilih Status Desain' },
  { value: 'ada', label: 'Ada Desain' },
  { value: 'tidak_ada', label: 'Tidak Ada Desain' },
];

const workStatus = [
  { value: '', label: 'Pilih Jenis Pekerjaan' },
  { value: 'Booth', label: 'Booth' },
  { value: 'Pameran', label: 'Pameran' },
  { value: 'Neon Box', label: 'Neon Box' },
  { value: 'Backdrop', label: 'Backdrop' },
  { value: 'Interior Design', label: 'Interior Design' },
  { value: 'Billboard', label: 'Billboard' },
  { value: 'Acrylic Logo', label: 'Acrylic Logo' },
  { value: 'Produk Custom', label: 'Produk Custom' },
  { value: 'Wall Branding', label: 'Wall Branding' },
  { value: 'Lainnya', label: 'Lainnya' },
];

const OrderForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    navigate('/');
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        nama: '',
        company: '',
        size: '',
        designStatus: '',
        workStatus: ''
      },
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        setLoading(true);  // Set loading to true

        // Build message for WhatsApp
        const message =
          `Halo, saya ingin menanyakan ketersediaan untuk pekerjaan berikut:\n\n` +
          `Nama: ${values.nama}\n` +
          `Perusahaan: ${values.company}\n` +
          `Ukuran: ${values.size} m²\n` +
          `Jenis Pekerjaan: ${workStatus.find(option => option.value === values.workStatus)?.label || ''}\n` +
          `Status Desain: ${designOptions.find(option => option.value === values.designStatus)?.label || ''}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/6281222200233?text=${encodedMessage}`;

        try {
          // Save form data to Firestore
          await addDoc(collection(db, 'orderRequests'), {
            nama: values.nama,
            company: values.company,
            size: values.size,
            workStatus: workStatus.find(option => option.value === values.workStatus)?.label || '',
            designStatus: designOptions.find(option => option.value === values.designStatus)?.label || '',
            timestamp: Timestamp.fromDate(new Date()) // Add timestamp for sorting
          });

          // Redirect to WhatsApp after successful Firestore save
          window.location.href = whatsappUrl;

          // Reset form after submission
          action.resetForm();
        } catch (error) {
          console.error('Error adding document: ', error);
        } finally {
          setLoading(false);  // Set loading to false when done
        }
      },
    });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl">
        <div className="relative flex items-stretch">
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-4 right-7 text-4xl text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
          <div className="w-full lg:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-800">Welcome!</h1>
            <p className="text-gray-600 mt-2">Silahkan Masukan Sesuai Kebutuhan</p>
            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <div>
                <label htmlFor="workStatus" className="block text-sm font-semibold text-gray-600">
                  Jenis Pekerjaan
                </label>
                <select
                  name="workStatus"
                  id="workStatus"
                  value={values.workStatus}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                >
                  {workStatus.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.workStatus && touched.workStatus && (
                  <p className="text-red-500 text-sm mt-1">{errors.workStatus}</p>
                )}
              </div>

              <div>
                <label htmlFor="nama" className="block text-sm font-semibold text-gray-600">
                  Nama
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="nama"
                  id="nama"
                  placeholder="Nama"
                  value={values.nama}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                />
                {errors.nama && touched.nama && (
                  <p className="text-red-500 text-sm mt-1">{errors.nama}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-600">
                  Nama Perusahaan
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="company"
                  id="company"
                  placeholder="Nama Perusahaan"
                  value={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                />
                {errors.company && touched.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                )}
              </div>

              <div>
                <label htmlFor="size" className="block text-sm font-semibold text-gray-600">
                  Ukuran
                </label>
                <input
                  type="number"
                  autoComplete="off"
                  name="size"
                  id="size"
                  placeholder="dalam m²"
                  value={values.size}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                />
                {errors.size && touched.size && (
                  <p className="text-red-500 text-sm mt-1">{errors.size}</p>
                )}
              </div>

              <div>
                <label htmlFor="designStatus" className="block text-sm font-semibold text-gray-600">
                  Sudah ada Desain?
                </label>
                <select
                  name="designStatus"
                  id="designStatus"
                  value={values.designStatus}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                >
                  {designOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.designStatus && touched.designStatus && (
                  <p className="text-red-500 text-sm mt-1">{errors.designStatus}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
              >
                Tanya Ketersediaan
              </button>

              {loading && (
                <div className="flex justify-center mt-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-500"></div>
                </div>
              )}
            </form>
          </div>
          <div className="hidden lg:block lg:w-1/2 bg-indigo-100 justify-center items-center">
            <div className="flex flex-col justify-center h-full">
              <img
                src={Maestro}
                alt="Images"
                className="w-3/4 h-auto object-cover rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
