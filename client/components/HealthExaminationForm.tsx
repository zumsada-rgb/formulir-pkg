import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Heart, UserCheck, Calendar, MapPin, Mail, Phone, IdCard, GraduationCap, Building } from "lucide-react";

interface FormData {
  nama: string;
  kelasRuang: string;
  jurusan: string;
  nik: string;
  nisn: string;
  tempatLahir: string;
  tanggalLahir: string;
  email: string;
  nomorHp: string;
  alamat: string;
}

const kelasOptions = [
  { group: "Kelas X", items: ["X-1", "X-2", "X-3", "X-4", "X-5", "X-6"] },
  { group: "Kelas XI", items: ["XI-1", "XI-2", "XI-3", "XI-4", "XI-5", "XI-6"] }
];

const jurusanOptions = ["TKR", "TSM", "DKV", "TKJ", "BISDIG", "DPB"];

const monthNames = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

export default function HealthExaminationForm() {
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    kelasRuang: "",
    jurusan: "",
    nik: "",
    nisn: "",
    tempatLahir: "",
    tanggalLahir: "",
    email: "",
    nomorHp: "",
    alamat: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatTTLPreview = () => {
    if (!formData.tempatLahir && !formData.tanggalLahir) return "";
    
    let preview = formData.tempatLahir || "[Tempat]";
    
    if (formData.tanggalLahir) {
      const date = new Date(formData.tanggalLahir);
      const day = date.getDate().toString().padStart(2, '0');
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      preview += `, ${day} ${month} ${year}`;
    } else {
      preview += ", [DD/MM/YYYY]";
    }
    
    return preview;
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
      nisn: "",
      tempatLahir: "",
      tanggalLahir: "",
      email: "",
      nomorHp: "",
      alamat: "",
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
              {/* Row 1: Nama */}
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

              {/* Row 2: Kelas/Ruang, Jurusan */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="kelasRuang" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Building className="w-4 h-4 text-emerald-600" />
                    Kelas/Ruang *
                  </Label>
                  <Select value={formData.kelasRuang} onValueChange={(value) => handleSelectChange("kelasRuang", value)}>
                    <SelectTrigger className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200">
                      <SelectValue placeholder="Pilih kelas/ruang" />
                    </SelectTrigger>
                    <SelectContent>
                      {kelasOptions.map((group) => (
                        <SelectGroup key={group.group}>
                          <SelectLabel>{group.group}</SelectLabel>
                          {group.items.map((item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jurusan" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-600" />
                    Jurusan *
                  </Label>
                  <Select value={formData.jurusan} onValueChange={(value) => handleSelectChange("jurusan", value)}>
                    <SelectTrigger className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200">
                      <SelectValue placeholder="Pilih jurusan" />
                    </SelectTrigger>
                    <SelectContent>
                      {jurusanOptions.map((jurusan) => (
                        <SelectItem key={jurusan} value={jurusan}>
                          {jurusan}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 3: NIK, NISN */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              {/* Row 4: TTL Group with Preview */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    Tempat Tanggal Lahir (TTL) *
                  </Label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tempatLahir" className="text-sm font-medium text-gray-600">
                      Tempat Lahir *
                    </Label>
                    <Input
                      id="tempatLahir"
                      name="tempatLahir"
                      type="text"
                      placeholder="Kota tempat lahir"
                      value={formData.tempatLahir}
                      onChange={handleInputChange}
                      required
                      className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tanggalLahir" className="text-sm font-medium text-gray-600">
                      Tanggal Lahir (DD/MM/YYYY) *
                    </Label>
                    <div className="relative">
                      <Input
                        id="tanggalLahir"
                        name="tanggalLahir"
                        type="date"
                        value={formData.tanggalLahir}
                        onChange={handleInputChange}
                        required
                        className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200 pr-10"
                      />
                      <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-emerald-500 pointer-events-none z-10" />
                    </div>
                  </div>
                </div>

                {/* Preview - Always visible and below inputs */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-md p-3">
                  <p className="text-sm text-emerald-700 font-medium">Pratinjau TTL:</p>
                  <p className="text-emerald-800 font-semibold">{formatTTLPreview()}</p>
                </div>
              </div>

              {/* Row 5: Email */}
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

              {/* Row 7: Alamat Lengkap */}
              <div className="space-y-2">
                <Label htmlFor="alamat" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Alamat Lengkap *
                </Label>
                <Textarea
                  id="alamat"
                  name="alamat"
                  placeholder="Alamat lengkap tempat tinggal (jalan, RT/RW, kelurahan, kecamatan, kota/kabupaten, provinsi)"
                  value={formData.alamat}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="border-gray-200 focus:border-emerald-300 focus:ring-emerald-200 resize-none"
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
