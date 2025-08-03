import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Heart, UserCheck, Calendar, MapPin, Mail, Phone, IdCard, GraduationCap, Building } from "lucide-react";

interface FormData {
  nama: string;
  kelasRuang: string;
  jurusan: string;
  nik: string;
  tempat: string;
  tglLahir: string;
  alamat: string;
  email: string;
  nisn: string;
  nomorHp: string;
}

export default function HealthExaminationForm() {
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    kelasRuang: "",
    jurusan: "",
    nik: "",
    tempat: "",
    tglLahir: "",
    alamat: "",
    email: "",
    nisn: "",
    nomorHp: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      console.log("Form submitted:", formData);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      nama: "",
      kelasRuang: "",
      jurusan: "",
      nik: "",
      tempat: "",
      tglLahir: "",
      alamat: "",
      email: "",
      nisn: "",
      nomorHp: "",
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <UserCheck className="w-8 h-8 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl text-emerald-800">Pendaftaran Berhasil!</CardTitle>
            <CardDescription className="text-emerald-600">
              Data Anda telah berhasil didaftarkan untuk Pemeriksaan Kesehatan Gratis
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-gray-600 mb-6">
              Tim medis akan menghubungi Anda sesuai jadwal yang telah ditentukan.
            </p>
            <Button onClick={resetForm} className="w-full">
              Daftar Peserta Lain
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-emerald-600" />
            </div>
            <Heart className="w-8 h-8 text-emerald-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-2">
            Pemeriksaan Kesehatan Gratis
          </h1>
          <p className="text-emerald-600 text-lg">
            Formulir Pendataan Peserta PKG
          </p>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Silakan lengkapi data diri Anda dengan benar untuk mendapatkan layanan pemeriksaan kesehatan gratis
          </p>
        </div>

        {/* Form */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
              <IdCard className="w-5 h-5 text-emerald-600" />
              Data Pribadi Peserta
            </CardTitle>
            <CardDescription>
              Pastikan semua informasi yang diisi sudah benar dan sesuai dengan dokumen resmi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Nama, Kelas/Ruang */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nama" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Nama Lengkap *
                  </Label>
                  <Input
                    id="nama"
                    name="nama"
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    value={formData.nama}
                    onChange={handleInputChange}
                    required
                    className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="kelasRuang" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Building className="w-4 h-4 text-emerald-600" />
                    Kelas/Ruang *
                  </Label>
                  <Input
                    id="kelasRuang"
                    name="kelasRuang"
                    type="text"
                    placeholder="Contoh: XII IPA 1"
                    value={formData.kelasRuang}
                    onChange={handleInputChange}
                    required
                    className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                  />
                </div>
              </div>

              {/* Row 2: Jurusan, NIK */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="jurusan" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-600" />
                    Jurusan *
                  </Label>
                  <Input
                    id="jurusan"
                    name="jurusan"
                    type="text"
                    placeholder="Contoh: IPA, IPS, Teknik"
                    value={formData.jurusan}
                    onChange={handleInputChange}
                    required
                    className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nik" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <IdCard className="w-4 h-4 text-emerald-600" />
                    NIK *
                  </Label>
                  <Input
                    id="nik"
                    name="nik"
                    type="text"
                    placeholder="16 digit NIK"
                    value={formData.nik}
                    onChange={handleInputChange}
                    required
                    maxLength={16}
                    pattern="[0-9]{16}"
                    className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                  />
                </div>
              </div>

              {/* Row 3: Tempat Lahir, Tanggal Lahir */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="tempat" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    Tempat Lahir *
                  </Label>
                  <Input
                    id="tempat"
                    name="tempat"
                    type="text"
                    placeholder="Kota tempat lahir"
                    value={formData.tempat}
                    onChange={handleInputChange}
                    required
                    className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tglLahir" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    Tanggal Lahir *
                  </Label>
                  <Input
                    id="tglLahir"
                    name="tglLahir"
                    type="date"
                    value={formData.tglLahir}
                    onChange={handleInputChange}
                    required
                    className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                  />
                </div>
              </div>

              {/* Row 4: Alamat */}
              <div className="space-y-2">
                <Label htmlFor="alamat" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Alamat Lengkap *
                </Label>
                <Input
                  id="alamat"
                  name="alamat"
                  type="text"
                  placeholder="Alamat lengkap tempat tinggal"
                  value={formData.alamat}
                  onChange={handleInputChange}
                  required
                  className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                />
              </div>

              {/* Row 5: Email, NISN */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="contoh@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nisn" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <IdCard className="w-4 h-4 text-emerald-600" />
                    NISN *
                  </Label>
                  <Input
                    id="nisn"
                    name="nisn"
                    type="text"
                    placeholder="10 digit NISN"
                    value={formData.nisn}
                    onChange={handleInputChange}
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                  />
                </div>
              </div>

              {/* Row 6: Nomor HP */}
              <div className="space-y-2">
                <Label htmlFor="nomorHp" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  Nomor HP *
                </Label>
                <Input
                  id="nomorHp"
                  name="nomorHp"
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={formData.nomorHp}
                  onChange={handleInputChange}
                  required
                  className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Mendaftarkan...
                    </>
                  ) : (
                    <>
                      <UserCheck className="w-5 h-5" />
                      Daftar Pemeriksaan Kesehatan
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            * Semua field wajib diisi • Data Anda akan dijaga kerahasiaannya
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Untuk informasi lebih lanjut, hubungi panitia penyelenggara
          </p>
        </div>
      </div>
    </div>
  );
}
